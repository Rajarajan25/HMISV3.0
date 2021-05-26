import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { StaffDetailsTab } from "./staff-details-tab";
import { TableHeader } from '../../../components/TableHeader';
import { TableRow } from '../../../components/TableRow';
const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: "auto",
  },
});

const Column=[{name:"Service Provider",hide:false},
{name:"Experiencer",hide:false},
{name:"Services",hide:false},
{name:"Status",hide:false},
{name:"Sex",hide:false},
{name:"Availability",hide:false},
{name:"Email",hide:false},
{name:"Phone",hide:false},
]

export function ListActivity01(props) {
  const {dataList,toggleDrawer,handleSave,addNew}=props;
  return (
    <div className="contentArea">
      <TableHeader column={Column} listCount={dataList.length} expandVisiable={true} countLable="staff"/>
      <TableRow row={dataList} drawer={toggleDrawer} addButton={true} addText="New Staff" handleSave={handleSave} addNew={addNew}/>
    </div>
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
