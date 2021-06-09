import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Dropdown } from "react-bootstrap";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { ServiceContext } from './ServiceContext'
import { ServiceDetailsTab } from "./service-details-tab";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Formik, Field } from 'formik';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { TableHeader } from '../../../components/TableHeader';
import { TableRow } from '../../../components/TableRow';
import { RightSideDrawer } from "../../../components/RightSideDrawer";
import {ServiceModel} from '../../../models/ServiceModel';
const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

const initialValues={
  id:"4",
  name:"",
  cost:"",
  service_type:"",
  duration:{duration_minutes:"",buffer_before_min:"",buffer_after_min:"",pricetype:"",price:"",date_range:""},
  payments:{retail_price:"",special_price:"",staff_name:"",duration_minutes:"",price_type:"",service_pricing_by_staff:[{
    staff_id:"",price_type:"",retail_price:"",special_price:"",duration_minutes:"",duration_hours:""
  }]},
  timings:{availablity:[{
    availability_type:"",
    sessions:[{
      name:"",servicebreaktime:[{start_time:"",end_time:""}]      
    }]
  }]}

  }





export default function ServiceProviderContainer() {
  const [service, setservice] = React.useContext(ServiceContext);
  let newService = ServiceModel;
  let currentService=service.currentService;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let services = service.listService;
  const [fields, setFields] = useState();

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(services);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    //service.listService=items;
    setservice({
      type: "SETSTATE_SERVICE",
      payload: items
    });
  }
  const classes = useStyles();
  const [state, setState] = React.useState({
    
      isDrawerOpen: false,
      currentService: false,
      currentIndex: -1,
      isUpdate: true,
      isloading: false,
      searchValue:"",
      newService:""
  
  });

  function handleAdd(type) {
    const values = [];
    values.push({ "type": type })
    setFields(values);

  }
  function handleRemove() {
    const values = [...fields];
    values.splice(0, 1);
    setFields(values);
  }
  const onServiceclick = (_id) => {

    let staffnew = service.listService.find(staff => staff._id === _id);
    setservice({
      type: "SET_CURRENT_SERVICE",
      payload: staffnew
    });
  }

  const handleDuplicate =(duplicatedItem)=>{
    //let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
        let duplicatedIndex = service.listService.findIndex(
            (elm) => elm.id === duplicatedItem.id
        );
        delete duplicatedItem.id;
        let isDuplicateID=1;
        let duplicateName=duplicatedItem.name;
        let i=1; 
        while(isDuplicateID !=-1){
          duplicateName=duplicateName.replace(/[0-9]\s*$/, "")+""+i;
          isDuplicateID=checkDuplicate(duplicateName);
          i++;
        }
        duplicatedItem={ ...duplicatedItem, name: duplicateName };
        setservice({
          type: "ADD_SERVICE",
          payload: duplicatedItem
        });

  }
  const checkDuplicate =(value)=>{
    let checkIndex=-1;
    return checkIndex = service.listService.findIndex(
      (elm) => elm.name === value
    );
  }
  const handleDelete = (deletedItem) => {
    if (window.confirm("Are you sure?")) {
        let tempPickItem = JSON.parse(JSON.stringify(services));
        setservice({
          type:"DEL_SERVICE",
          payload:deletedItem
        })
    }
};
const handleUpdate = (updatedValue, index) => {
  let tempPickList = JSON.parse(JSON.stringify(services));
  let updatedItem = tempPickList[index];
  let items = [...tempPickList];
  let item = { ...updatedItem, ...updatedValue };
  console.log("item-->", item);
  items[index] = item;
  setservice({
    type:"EDIT_SERVICE",
    payload:item
  })
  setservice({
    type:"SET_CURRENT_SERVICE",
    payload:item
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
  let tempPickList = JSON.parse(JSON.stringify(services));
  let updatedItem = tempPickList.map((e, i) => {
      if (i === index) {
          e[type] = updatedValue;
      }
      return e;
  });
  //this.setState({ ser: updatedItem });

 // let updateArray = this.state.staffList[index];
 setservice({
   type:"SETSTATE_SERVICE",
   payload:updatedItem
 })
};

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }
  const toggleDrawer = (open, selectedItem, index) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    index = index === undefined ? -1 : index;
    setState({ isDrawerOpen: open, currentService: selectedItem || newService, currentIndex: index });
};
  const toggleDrawerClose = () => {
    setState({ isDrawerOpen: false, currentStaff: false });
  };
  const AddService = (values) => {
    setservice({
      type: "ADD_SERVICE",
      payload: values
    });
    handleRemove();
  }
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  const Column = [
    { name: "ENT", hide: false,col_size:"5"},
    { name: "SERVICE TYPE", hide: false,col_size:"2" },
    { name: "PROVIDERS", hide: false,col_size:"2" },
    { name: "PRICE", hide: false ,col_size:"3"},
    
  ]
  const field={
    Name:"Name",
    service_type:"Experience",
    providers:"Services",
    price:"status",
    duration:"duration"
  }
  const handleDataSource =(values)=>{
    setservice({
      type:"SETSTATE_SERVICE",
      payload:values
    })
  }
  return (
    <div className="clearfix">
      <RightSideDrawer
                    isOpen={state.isDrawerOpen}
                    toggleDrawer={toggleDrawer}>
                    <ServiceDetailsTab
                        currentService={state.currentService}
                        handleUpdate={handleUpdate}
                        currentIndex={state.currentIndex}
                        />
                </RightSideDrawer>
      
      <Accordion square  expanded={expanded} className="w-100 contentArea  elevation-none m-0" style={{background:"#00000000"}}>
      <TableHeader column={Column} listCount={services.length} expand={expanded} countLable="services" toggleList={handleChange} />
      <AccordionDetails className="w-100 p-0">
        
        <TableRow  row={services} drawer={toggleDrawer}  addButton={true} addText="New Service" field={field} 
        handleDataSource={handleDataSource} handleDuplicate={handleDuplicate} handleDelete={handleDelete} handleSave={handleSaveSingle}
        />
      </AccordionDetails>
    </Accordion>
    </div>
  );
}



