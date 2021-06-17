import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StaffDetailsTab } from "./staff-details-tab";
import { TableHeader } from '../../../components/TableHeader';
import { TableRow } from '../../../components/TableRow';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    width: 650,
  },
  fullList: {
    width: "auto",
  },
}));

const Column = [
  { name: "Service Provider", hide: false,col_size:"3"},
  { name: "Experience", hide: false,col_size:"1" },
  { name: "Services", hide: false,col_size:"1" },
  { name: "Status", hide: false ,col_size:"1"},
  { name: "Sex", hide: false,col_size:"1" },
  { name: "Availability", hide: false ,col_size:"1"},
  { name: "Email", hide: false,col_size:"2" },
  { name: "Phone", hide: false ,col_size:"2"},
]
const field=[
  {name:"Name",col_size:"3"},
  {experience:"Experience",col_size:"1"},
  {services:"Services",col_size:"1"},
  {status:"status",col_size:"1"},
  {sex:"sex",col_size:"1"},
  {availablity:"availablity",col_size:"1"},
  {email:"email",col_size:"2"},
  {phone:"phone",col_size:"2"},
  {duration:undefined}
]
export function ListActivity01(props) {
  const classes = useStyles();
  const { dataList, toggleDrawer,handleDelete, handleDuplicate, loading } = props;
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  if (loading) {
    return <div></div>;
  }
  return (
    <Accordion square  expanded={expanded} className="w-100 contentArea  elevation-none m-0" style={{background:"#00000000"}}>
      <TableHeader column={Column} listCount={dataList.length} expand={expanded} countLable="staff" toggleList={handleChange} />
      <AccordionDetails className="w-100 p-0">
        <TableRow {...props} row={dataList} drawer={toggleDrawer} handleDuplicate={handleDuplicate} 
        addButton={true} addText="New Staff" field={field}/>
      </AccordionDetails>
    </Accordion>
  );
}


export function StaffDetails() {
  const classes = useStyles();
  return (
    <div className="staff_detail">
      <StaffDetailsTab />
    </div>
  );
}
