import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ServiceContext } from './ServiceContext'
import { ServiceDetailsTab } from "./service-details-tab";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { TableHeader } from '../../../components/TableHeader';
import { TableRow } from '../../../components/TableRow';
import { RightSideDrawer } from "../../../components/RightSideDrawer";
import { ServiceModel } from '../../../models/ServiceModel';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ServiceSlice} from "./ServiceSlice";
const {actions} = ServiceSlice;
export default function ServiceProviderContainer() {
  let newService = ServiceModel;
  const dispatch = useDispatch();
  const { currentState } = useSelector(
    (state) => ({ currentState: state.service }),
    shallowEqual
  );

  const { listService, currentService } = currentState;
  const [state, setState] = React.useState({
    isDrawerOpen: false,
    currentService: false,
    currentIndex: -1,
    isUpdate: true,
    isloading: false,
    searchValue: "",
    newService: ""
  });

  const handleDuplicate = (duplicatedItem) => {
    let tempPickItem = JSON.parse(JSON.stringify(listService));
    let duplicatedIndex = tempPickItem.findIndex(
      (elm) => elm.id === duplicatedItem.id
    );
    //delete duplicatedItem.id;
    let isDuplicateID = 1;
    let duplicateName = duplicatedItem.name;
    let i = 1;
    while (isDuplicateID != -1) {
      duplicateName = duplicateName.replace(/[0-9]\s*$/, "") + "" + i;
      isDuplicateID = checkDuplicate(duplicateName);
      i++;
    }
    duplicatedItem = { ...duplicatedItem, name: duplicateName };
    dispatch(actions.addService(duplicatedItem));


  }
  const checkDuplicate = (value) => {
    let checkIndex = -1;
    return checkIndex = listService.findIndex(
      (elm) => elm.name === value
    );
  }
  const handleDelete = (deletedItem) => {
    if (window.confirm("Are you sure?")) {
      let tempPickItem = JSON.parse(JSON.stringify(listService));
      dispatch(actions.deleteService({id:deletedItem.id}));
    }
  };
  const handleChangeDropDown = (selectedVal, id, type,indexs) => {
    let index = 0;
    let tempPickList = JSON.parse(JSON.stringify(listService));
    const currentServiceList = tempPickList.map((item, i) => {
        if (id === item.id) {
            item[type] = selectedVal;
            index = i;
        }
        return item;
    });
    // this.setState({ staffList: currentStaffList });
    // let updateArray = this.state.staffList[index];
    // this.props
    //     .updateStaff({
    //         variables: {
    //             staffID: updateArray.id,
    //             staff: {
    //                 [type]: selectedVal,
    //             },
    //         },
    //     })
    //     .then(() => {
    //         //this.props.refetchStaff();
    //     })
    //     .catch((error) => {
    //         DevAlertPopUp(error.message);
    //     });
    dispatch(actions.serviceFetched(currentServiceList));

};
  const handleUpdate = (updatedValue, index) => {
    let tempPickList = JSON.parse(JSON.stringify(listService));
    let updatedItem = tempPickList[index];
    let items = [...tempPickList];
    let item = { ...updatedItem, ...updatedValue };
    console.log("item-->", item);
    items[index] = item;
    dispatch(actions.editService(item));


    // this.setState({ staffList: items, isloading: true });
    //delete updatedValue.id;

  };

  const handleCancel = (props) => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  };
  const handleSaveSingle = (updatedValue, type, index) => {
    let tempPickList = JSON.parse(JSON.stringify(listService));
    let updatedItem = tempPickList.map((e, i) => {
      if (i === index) {
        e[type] = updatedValue;
      }
      return e;
    });
    //this.setState({ ser: updatedItem });

    // let updateArray = this.state.staffList[index];
    dispatch(actions.serviceFetched(currentService));

  };


  const toggleDrawer = (open, selectedItem, index) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    index = index === undefined ? -1 : index;
    setState({ isDrawerOpen: open, currentService: selectedItem || newService, currentIndex: index });
    dispatch(actions.currentService(selectedItem || newService));

  };
  const addNewService = (value) => {
    let sfm = { ...ServiceModel };
    sfm = { ...sfm, ...value };
    // delete sfm.id;

    let newstaff = {};
    dispatch(actions.addService(sfm));

    //  this.setState({ isloading: true });
    // this.props.addStaff({
    //     variables: {
    //         staff: sfm
    //     }
    // }).then(({ data: { addStaff } }) => {
    //     newstaff = { ...sfm, id: addStaff.id };
    //     this.setState({
    //         currentStaff: { ...newstaff },
    //         staffList: [...this.state.staffList, newstaff],
    //         isloading: false
    //     });
    // }).catch(error => {
    //     DevAlertPopUp(error.message);
    // });
  }


  const [expanded, setExpanded] = React.useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  const Column = [
    { name: "ENT", hide: false, col_size: "5" },
    { name: "SERVICE TYPE", hide: false, col_size: "2" },
    { name: "PROVIDERS", hide: false, col_size: "2" },
    { name: "PRICE", hide: false, col_size: "3" },

  ]
  const field = {
    name: "Name",
    service_type: "Experience",
    providers: "Services",
    price: "status",
    duration: "duration"
  }
  const handleDataSource = (values) => {
    dispatch(actions.serviceFetched(values));

  }
 
  return (
    <div className="clearfix">
      <RightSideDrawer
        isOpen={state.isDrawerOpen}
        toggleDrawer={toggleDrawer}>
        <ServiceDetailsTab
          handleUpdate={handleUpdate}
          currentIndex={state.currentIndex}
        />
      </RightSideDrawer>

      <Accordion square expanded={expanded} className="w-100 contentArea  elevation-none m-0" style={{ background: "#00000000" }}>
        <TableHeader column={Column} listCount={listService.length} expand={expanded} countLable="listService" toggleList={handleChange} />
        <AccordionDetails className="w-100 p-0">

          <TableRow row={listService} drawer={toggleDrawer} addButton={true} addText="New Service" field={field}
            handleDataSource={handleDataSource} handleDuplicate={handleDuplicate} handleDelete={handleDelete} handleSave={handleChangeDropDown}
            addNew={addNewService} handleChangeDropDown={handleChangeDropDown}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}



