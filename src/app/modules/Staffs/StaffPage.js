import React from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/Filter";
import Drawer from "@material-ui/core/Drawer";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import {
  ListActivity01,
  ListActivity02,
  ListActivity03,
  ListActivity04,
} from "../Doctors/components/ListActivity";
import { StaffDetailsTab } from "../Doctors/components/staff-details-tab";
import { mutations, queries } from './graphql';
import { gql, useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { graphql } from '@apollo/client/react/hoc';
import { DevConsoleLog } from "../../SiteUtill";
export function StaffDetails(props) {
  return (
    <div className="staff_detail">
      <StaffDetailsTab {...props}/>
    </div>
  );
}

class StaffPage extends React.Component {
  staffList = [
    {
      _id: "1",
      name: "Anand",
      experience_year: "10",
      experience_month: "5",
      gender: "Male",
      status: "Active",
      official_email: "Anand@gmail.com",
      mobile: "789456123",
      avatar_bg_color: "#41BC87",
      avatar: "",
      service: "Acupunture",
      availability: "Chat",
    },
    {
      _id: "2",
      name: "Basheer",
      experience_year: "7",
      experience_month: "5",
      gender: "Male",
      status: "Inactive",
      official_email: "basheer@gmail.com",
      mobile: "9874561230",
      avatar_bg_color: "#B17F22",
      avatar: "",
      service: "Dental",
      availability: "Video",
    },
    {
      _id: "3",
      name: "Maadhuri",
      experience_year: "3",
      experience_month: "5",
      gender: "Female",
      status: "Active",
      official_email: "maadhuri@gmail.com",
      mobile: "8529637410",
      avatar_bg_color: "#2980B9",
      avatar: "/media/users/300_20.jpg",
      service: "Skin Care",
      availability: "Phone",
    },
  ];
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      isDrawerOpen: false,
      currentStaff:{},
      staffList: [],
      loading: false,
    };
  }
  handleCancel = (props) => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  };

  componentDidMount() {
   // console.log(this.props);

  }
  
  componentDidUpdate() {
    this.setState((prvState, props )=> {
      if(JSON.stringify(prvState.staffList) !== JSON.stringify(props.staffList) && !prvState.staffList.length) {
        return {staffList: JSON.parse(JSON.stringify(props.staffList))}
      }
    });
  }
  componentDidCatch() {}

  componentWillUnmount() {}

  toggleDrawer = (open,selectedItem) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    DevConsoleLog("s-item",selectedItem);
    this.setState({ isDrawerOpen: open,currentStaff:selectedItem||false});
  };

  toggleDrawerClose = () => {
    this.setState({ isDrawerOpen: false,currentStaff:false });
  };
  handleChangeDropDown = (selectedVal, id, type) => {
    const currentStaffList = this.state.staffList.map((item) => {
      if (id === item._id) {
        item[type] = selectedVal;
        
      }
      return item;
    });
    this.setState({staffList: currentStaffList});
  }

  handleSave = (updatedValue, type, index) => {
    let updatedItem = this.state.staffList.map((e, i) => {
      if (i === index) {
        e[type] = updatedValue;
      }
      return e;
    });

    this.setState({ staffList: updatedItem });
  };

  render() {
 const { staffList, loading } = this.props;
    return (
      <div className="d-block">
        <div className="d-flex flex-row">
          <Filter></Filter>
        </div>
        <div className="d-flex flex-column mt-1">
          <div className="contentSection collapse show w-100" id="holepageToggle">
            {loading ? <div className="w-100 mh-100 text-center"><span className="ml-3 spinner spinner-lg spinner-primary"></span></div> :
              <ListActivity01 toggleDrawer={this.toggleDrawer} handleChangeDropDown={this.handleChangeDropDown} handleService={this.handleService} dataList={this.state.staffList} handleSave={this.handleSave}></ListActivity01>}
          </div>
        </div>
        <div className="contentAreaouter">
          <div className="add-staff">
            <Link to="#" onClick={this.toggleDrawer(true)}>
              <img
                src={toAbsoluteUrl("/media/patients/add_staff.svg")}
                alt=""
                className="d-block rounded-circle"
              />
            </Link>
          </div>
          <Drawer
            className="patientProfileinfo StaffInfo"
            anchor="right"
            open={this.state.isDrawerOpen}
            onClose={this.toggleDrawer(false)}
          >
            <div className="p-0 overflow-auto">
              <Link
                to="#"
                className="closeDrawer"
                onClick={this.toggleDrawerClose}
              >
                <span className="my-auto font-weight-500">
                  <img
                    src={toAbsoluteUrl("/media/patients/drawer_close.svg")}
                    alt=""
                    className="d-block"
                  />
                </span>
              </Link>
              <StaffDetails data={this.state.currentStaff}/>
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default
  graphql(gql(queries.staff), {
    props: ({ data: { getStaffs, loading } }) => ({
      staffList: getStaffs || [],
      loading: loading
    }),
  })(StaffPage);


//export default StaffPage;
