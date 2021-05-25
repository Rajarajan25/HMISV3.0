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
export function StaffDetails() {
  return (
    <div className="staff_detail">
      <StaffDetailsTab />
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
    this.state = {
      isDrawerOpen: false,
      staffList: this.staffList,
      defaultStaffList: JSON.parse(JSON.stringify(this.staffList)),
    };
  }
  handleCancel = (props) => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  };

  componentDidMount() {}
  componentDidUpdate() {}
  componentDidCatch() {}

  componentWillUnmount() {}

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ isDrawerOpen: open });
  };

  toggleDrawerClose = () => {
    this.setState({ isDrawerOpen: false });
  };
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
    return (
      <div className="d-block">
        <div className="d-flex flex-row">
          <Filter></Filter>
        </div>
        <div className="d-flex flex-column mt-1">
          <div
            className="contentSection collapse show w-100"
            id="holepageToggle"
          >
            <ListActivity01
              toggleDrawer={this.toggleDrawer}
              dataList={this.state.staffList}
              handleSave={this.handleSave}
            ></ListActivity01>
            {/* <ListActivity02 toggleDrawer={this.toggleDrawer}></ListActivity02>
            <ListActivity03 toggleDrawer={this.toggleDrawer}></ListActivity03>
            <ListActivity04 toggleDrawer={this.toggleDrawer}></ListActivity04> */}
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
              <StaffDetails />
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default StaffPage;
