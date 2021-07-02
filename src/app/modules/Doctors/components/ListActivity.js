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
import PropTypes from 'prop-types';

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

const field={
  name:{lable:"Name",col_size:"3"},
  experience:{lable:"Experience",col_size:"1"},
  services:{lable:"providers",col_size:"1"},
  status:{lable:"status",col_size:"1"},
  sex:{lable:"sex",col_size:"1"},
  availablity:{lable:"availablity",col_size:"1"},
  email:{lable:"email",col_size:"2"},
  phone:{lable:"phone",col_size:"2"},
}
export function ListActivity01(props) {
  const classes = useStyles();
  const { dataList, toggleDrawer,handleDelete, handleDuplicate, loading,handleChangeServices} = props;
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
        addButton={true} addText="New Staff" field={field} pagename="staff" handleChangeServices={handleChangeServices}/>

      </AccordionDetails>
    </Accordion>
  );
}

ListActivity01.propType={
    dataList:PropTypes.array.isRequired,
    toggleDrawer:PropTypes.func.isRequired,
    handleDelete:PropTypes.func,
    handleDuplicate:PropTypes.func.isRequired,
    loading:PropTypes.bool.isRequired,
    handleChangeServices:PropTypes.isRequired
}

