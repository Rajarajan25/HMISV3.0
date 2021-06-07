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
import { mutations, queries } from "./graphql";
import { gql, useMutation } from "@apollo/client";
import * as compose from "lodash.flowright";
import { graphql } from "@apollo/client/react/hoc";
import { DevAlertPopUp, DevConsoleLog } from "../../SiteUtill";
import { RightSideDrawer } from "../../components/RightSideDrawer";
import { AddFab } from "../../components/AddFab";

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
  fields = [
    {
      dataField: "name",
      dataType: "string",
    },
    {
      caption: "Email",
      dataField: "official_email",
      dataType: "string",
    },
    {
      caption: "Mobile Number",
      dataField: "mobile",
      dataType: "string",
    },
    {
      caption: "Service",
      dataField: "service",
      dataType: "string",
    },
    {
      caption: "Experience",
      dataField: "experience_year",
      dataType: "number",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      currentStaff: {},
      currentIndex: -1,
      staffList: [],
      isUpdate: true,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    this.setState((prvState, props) => {
      if (
        JSON.stringify(prvState.staffList) !==
          JSON.stringify(props.staffList) &&
        !prvState.staffList.length
      ) {
        return { staffList: JSON.parse(JSON.stringify(props.staffList)) };
      }
    });
  }
  componentDidCatch() {}
  componentWillUnmount() {}
  toggleDrawer = (open, selectedItem, index) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      isDrawerOpen: open,
      currentStaff: selectedItem || false,
      currentIndex: index || 0,
    });
  };
  toggleDrawerClose = () => {
    this.setState({ isDrawerOpen: false, currentStaff: false });
  };
  handleChangeDropDown = (selectedVal, id, type) => {
    let index = 0;
    const currentStaffList = this.state.staffList.map((item, i) => {
      if (id === item.id) {
        item[type] = selectedVal;
        index = i;
      }
      return item;
    });
    this.setState({ staffList: currentStaffList });
    let updateArray = this.state.staffList[index];
    this.props
      .updateStaff({
        variables: {
          staffID: updateArray.id,
          staff: {
            [type]: selectedVal,
          },
        },
      })
      .then(() => {
        //this.props.refetchStaff();
      })
      .catch((error) => {
        DevAlertPopUp(error.message);
      });
  };
  handleUpdate = (updatedValue, index) => {
    let tempPickList = JSON.parse(JSON.stringify(this.state.staffList));
    let items = [...tempPickList];
    let item = { ...updatedValue };
    items[index] = item;
    this.setState({ staffList: items });
    let updatedItem = tempPickList[index];
    delete updatedValue.id;
    this.props
      .updateStaff({
        variables: {
          staffID: updatedItem.id,
          staff: { ...updatedValue },
        },
      })
      .then(({ data: { updateStaff } }) => {
        //this.props.refetchStaff();
        item = { ...item, id: updateStaff.id };
        items[index] = item;
        this.setState({ staffList: items });
      })
      .catch((error) => {
        DevAlertPopUp(error.message);
      });
  };
  handleCancel = (props) => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  };
  handleSaveSingle = (updatedValue, type, index) => {
    let tempPickList = JSON.parse(JSON.stringify(this.state.staffList));
    let updatedItem = tempPickList.map((e, i) => {
      if (i === index) {
        e[type] = updatedValue;
      }
      return e;
    });
    this.setState({ staffList: updatedItem });

    let updateArray = this.state.staffList[index];
    this.props
      .updateStaff({
        variables: {
          staffID: updateArray.id,
          staff: {
            [type]: updatedValue,
          },
        },
      })
      .then(() => {
        //this.props.refetchStaff();
      })
      .catch((error) => {
        DevAlertPopUp(error.message);
      });
  };
  addNewStaff = (value) => {
    let newstaff = { name: value };
    this.props
      .addStaff({
        variables: {
          staff: {
            name: value,
          },
        },
      })
      .then(({ data: { addStaff } }) => {
        newstaff = { ...newstaff, id: addStaff.id };
        this.setState({
          currentStaff: { ...newstaff },
          staffList: [...this.state.staffList, newstaff],
        });
        this.props.refetchStaff();
      })
      .catch((error) => {
        DevAlertPopUp(error.message);
      });
  };
  handleDelete = (deletedItem) => {
    if (window.confirm("Are you sure?")) {
      let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
      let deletedIndex = tempPickItem.findIndex(
        (elm) => elm.id === deletedItem.id
      );
      tempPickItem.splice(deletedIndex, deletedIndex + 1);
      this.props
        .deleteStaff({
          variables: {
            staffID: deletedItem.id,
            staff: { ...deletedItem },
          },
        })
        .then(({ data: { deleteStaff } }) => {
          //this.props.refetchStaff();
          this.setState({ staffList: tempPickItem });
        })
        .catch((error) => {
          DevAlertPopUp(error.message);
        });
    }
  };
  handleDuplicate = (duplicatedItem) => {
    let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
    let duplicatedIndex = tempPickItem.findIndex(
      (elm) => elm.id === duplicatedItem.id
    );
     delete duplicatedItem.id;
    this.props
      .addStaff({
        variables: {
          // staff: { ...duplicatedItem },
          staff:{name:duplicatedItem.name}
        },
      })
      .then(({ data: { addStaff } }) => {
        console.log(addStaff)
        duplicatedItem = { ...duplicatedItem, id: addStaff.id };
        tempPickItem.splice(duplicatedIndex + 1, 0, duplicatedItem);
        this.setState({staffList:tempPickItem});
        this.props.refetchStaff();
      })
      .catch((error) => {
        DevAlertPopUp(error.message);
      });
  };
  handleDataSource = (values) => {
    this.setState({ staffList: values });
  };
  render() {
    const { loading } = this.props;
    const { staffList } = this.state;
    return (
      <div className="d-block">
        <Filter
          value={staffList}
          handleDataSource={this.handleDataSource}
          fields={this.fields}
        />
        <div className="d-flex flex-column mt-1">
          <div className="contentSection collapse show w-100">
            {loading ? (
              <div className="w-100 mh-100 text-center">
                <span className="ml-3 spinner spinner-lg spinner-primary"></span>
              </div>
            ) : (
              <ListActivity01
                toggleDrawer={this.toggleDrawer}
                dataList={staffList}
                handleSave={this.handleSaveSingle}
                addNew={this.addNewStaff}
                handleDelete={this.handleDelete}
                handleDuplicate={this.handleDuplicate}
                handleChangeDropDown={this.handleChangeDropDown}
                pagename="Staff"
              ></ListActivity01>
            )}
          </div>
        </div>
        <AddFab onClick={this.toggleDrawer(true)} />
        <RightSideDrawer
          isOpen={this.state.isDrawerOpen}
          toggleDrawer={this.toggleDrawer}
        >
          <StaffDetailsTab
            data={this.state.currentStaff}
            handleUpdate={this.handleUpdate}
            index={this.state.currentIndex}
          />
        </RightSideDrawer>
      </div>
    );
  }
}

export default compose(
  graphql(gql(queries.staff), {
    props: ({ data: { getStaffs, loading, refetch } }) => ({
      staffList: getStaffs || [],
      loading: loading,
      refetchStaff: refetch,
    }),
  }),
  graphql(gql(mutations.staffUpdate), {
    name: "updateStaff",
    options: () => ({
      variables: {},
    }),
  }),
  graphql(gql(mutations.staffAdd), {
    name: "addStaff",
    options: () => ({
      variables: {},
    }),
  }),
  graphql(gql(mutations.staffRemove), {
    name: "deleteStaff",
    options: () => ({
      variables: {},
    }),
  })
)(StaffPage);

//export default StaffPage;
