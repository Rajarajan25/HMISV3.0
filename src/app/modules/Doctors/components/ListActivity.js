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
  const {dataList,toggleDrawer, handleChangeDropDown}=props;
  const classes = useStyles();
  //const [staffList, setStaffList] = React.useState(props.dataList);
  const [selectedIndexName, setSelectedIndexName] = React.useState(-1);
  const [selectedIndexMail, setSelectedIndexMail] = React.useState(-1);
  const [selectedIndexMobile, setSelectedIndexMobile] = React.useState(-1);
  const updatedValue = React.useRef("");

  //const handleOnChange = () => setStaffList(props.dataList);
  const handleEdit = (type, index) => {
    if (type === "name") setSelectedIndexName(index);
    if (type === "mail") setSelectedIndexMail(index);
    if (type === "mobile") setSelectedIndexMobile(index);
  };
  const handleSave = (type, index) => {
    props.handleSave(updatedValue.current.value, type, index);
    handleCancel(type);
  };
  const handleCancel = (type) => {
    if (type === "name") setSelectedIndexName(-1);
    if (type === "mail") setSelectedIndexMail(-1);
    if (type === "mobile") setSelectedIndexMobile(-1);
  };

  return (
    <div className="contentArea">
      <TableHeader column={Column} listCount={dataList.length} expandVisiable={true} countLable="staff"/>
      <TableRow row={dataList} drawer={toggleDrawer} addButton={true} addText="New Staff" handleChangeDropDown={handleChangeDropDown} />
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
