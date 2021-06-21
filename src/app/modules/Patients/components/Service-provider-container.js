import React, { useState,useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ServiceContext } from './ServiceContext'
import { ServiceDetailsTab } from "./service-details-tab";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { TableHeader } from '../../../components/TableHeader';
import { TableRow } from '../../../components/TableRow';
import { RightSideDrawer } from "../../../components/RightSideDrawer";
import { ServiceModel } from './models/ServiceModel';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {ServiceSlice} from "./ServiceSlice";
import { GET_SERVICE } from "../graphql/queries";
import { ADD_SERVICE,UPDATE_SERVICE,DELETE_SERVICE } from "../graphql/mutation";
import { useQuery,useMutation } from "@apollo/client";
import { DeleteDialog } from "../../../components/DeleteDialog";

const {actions} = ServiceSlice;

export default function ServiceProviderContainer(props) {
  let newService = ServiceModel;
  const {data,loading}=useQuery(GET_SERVICE);
  const dispatch = useDispatch();
  const { currentState } = useSelector(
    (state) => ({ currentState: state.service }),
    shallowEqual
  );

  const { listService, currentService } = currentState;
  const [addService]=useMutation(ADD_SERVICE);
  const [updateService]=useMutation(UPDATE_SERVICE);
  const [deleteService]=useMutation(DELETE_SERVICE);
  const [state, setState] = React.useState({
    isDrawerOpen: false,
    currentService: false,
    currentIndex: -1,
    isUpdate: true,
    isloading: false,
    searchValue: "",
    newService: "",
    showDialog: false,
    dialogContent: false,
    deletedItem: false,
  });
  useEffect(() => {
    if (loading === false && data ) {
      dispatch(actions.serviceFetched(data.getService));
}
}, [loading]);
  const handleDuplicate = (duplicatedItem) => {
    let duplicate=JSON.parse(JSON.stringify(duplicatedItem));
    let tempPickItem = JSON.parse(JSON.stringify(listService));
    let duplicatedIndex = tempPickItem.findIndex(
      (elm) => elm.id === duplicate.id
    );
    delete duplicate.id;
    let isDuplicateID = 1;
    let duplicateName = duplicate.name;
    let i = 1;
    while (isDuplicateID != -1) {
      duplicateName = duplicateName.replace(/[0-9]\s*$/, "") + "" + i;
      isDuplicateID = checkDuplicate(duplicateName);
      i++;
    }
    duplicate = { ...duplicate, name: duplicateName };
     addService({
      variables: {
        service: duplicate
      }
    })
      .then(res => {

        console.log(res.data.addService);
        dispatch(actions.addService(res.data.addService));
      })


  }
  const checkDuplicate = (value) => {
    let checkIndex = -1;
    return checkIndex = listService.findIndex(
      (elm) => elm.name === value
    );
  }
  const handleDelete = () => {
      let tempPickItem = JSON.parse(JSON.stringify(listService));
      setState({isloading:true});
      deletePopUp();
      deleteService({
        variables: {
          serviceID:state.deletedItem.id
        }
      })
        .then(res => {
  
          console.log(res.data.deleteService);
            dispatch(actions.deleteService({id:res.data.deleteService.id}));
            dialogHide();

        })
    
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
    let updateArray = currentServiceList[index];
    updateService({
      variables: {
        serviceID:updateArray.id,
        service:{
          [type]:selectedVal
        } 
      }
    })
      .then(res => {

        console.log(res.data.updateService);
        dispatch(actions.editService(res.data.updateService));
      })

};
  const handleUpdate = (updatedValue, index) => {
    let tempPickList = JSON.parse(JSON.stringify(listService));
    let updatedItem = tempPickList[index];
    let items = [...tempPickList];
    let item = { ...updatedItem, ...updatedValue };
    console.log("item-->", item);
    items[index] = item;
    delete item.id
updateService({
      variables: {
        serviceID:updatedValue.id,
        service:item
      }
    })
      .then(res => {

        console.log(res.data.updateService);
        dispatch(actions.editService(res.data.updateService));
      })

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
    setState({ isDrawerOpen: open, currentService: selectedItem || newService, currentIndex: index, isUpdate: true,
      isDragDisabled: false,
      isloading: false,
      searchValue: "",
      showDialog: false,
      dialogContent: false,
      deletedItem: false,});
    dispatch(actions.currentService(selectedItem || newService));

  };
  const addNewService = (value) => {
    let sfm = { ...ServiceModel };
    sfm = { ...sfm, ...value };
    // delete sfm.id;

    let newstaff = {};
    addService({
      variables: {
        service: sfm
      }
    })
      .then(res => {

        console.log(res.data.addService);
        dispatch(actions.addService(res.data.addService));
      })
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
  const dialogHide = () => {
    setState({
        deletedItem: false,
        showDialog: false,
        isloading: false,
        dialogContent: false
    });
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
    name: {label: "Name",col_size: "5"},
    service_type:{label: "SERVICE TYPE",col_size: "2"},
    providers: {label: "PROVIDERSE",col_size: "2"},
    price: {label: "PRICE",col_size: "3"},
    duration:{duration:"duration"}
  }

  const handleDataSource = (values) => {
    dispatch(actions.serviceFetched(values));

  }
  const deletePopUp = (item) => {
    setState({
        deletedItem: item,
        showDialog: true,
        isloading:true,
        dialogContent: {
            title: "Service Delete",
            message: "Are you sure to permanently delete this service?",
            loadingMsg: "Service Deleting...",
            cancelLable: "Cancel",
            okLable: "Delete"
        }
    });

};

  const handleChangeStaff =(id)=>{
    let currentList = JSON.parse(JSON.stringify(currentService));

    // currentList.service_relationships.service_staff.staff_id=id;
    // updateService({
    //   variables: {
    //     serviceID:currentList.id,
    //     service:currentList
    //   }
    // })
    //   .then(res => {

    //     console.log(res.data.updateService);
    //     dispatch(actions.editService(res.data.updateService));
    //   })

  }
 
  return (
    <div className="clearfix">
      <RightSideDrawer
        isOpen={state.isDrawerOpen}
        toggleDrawer={toggleDrawer}>
        <ServiceDetailsTab
          handleUpdate={handleUpdate}
          handleChangeStaff={handleChangeStaff}
          currentIndex={state.currentIndex}
        />
      </RightSideDrawer>
      <DeleteDialog 
                    show={state.showDialog}
                    onHide={dialogHide}
                    deleteAction={handleDelete}
                    content={state.dialogContent}
                    isloading={state.isloading} />

      <Accordion square expanded={expanded} className="w-100 contentArea  elevation-none m-0" style={{ background: "#00000000" }}>
        <TableHeader column={Column} listCount={listService.length} expand={expanded} countLable="Service" toggleList={handleChange} />
        <AccordionDetails className="w-100 p-0">

          <TableRow row={listService} drawer={toggleDrawer} addButton={true} addText="New Service" field={field}
            handleDataSource={handleDataSource} handleDuplicate={handleDuplicate} handleDelete={deletePopUp} handleSave={handleChangeDropDown}
            addNew={addNewService} handleChangeDropDown={handleChangeDropDown} service={props.staff} pagename="service"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}



