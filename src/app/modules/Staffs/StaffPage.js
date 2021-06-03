import React from "react";
import { Link } from "react-router-dom";
import { Filter } from "../../components/Filter"
import {
  ListActivity01,
  ListActivity02,
  ListActivity03,
  ListActivity04,
} from "../Doctors/components/ListActivity";
import { StaffDetailsTab } from "../Doctors/components/staff-details-tab";
import { mutations, queries } from './graphql';
import { gql, useMutation } from '@apollo/client';
import * as compose from 'lodash.flowright';
import { graphql } from '@apollo/client/react/hoc';
import { DevAlertPopUp, DevConsoleLog } from "../../SiteUtill";
import { RightSideDrawer } from "../../components/RightSideDrawer";
import { AddFab } from "../../components/AddFab";
import { StaffModel } from "../../models/StaffModel";
import { SpinnerLarge } from "../../components/Spinner";

let newStaff = StaffModel;

class StaffPage extends React.Component {
  fields = [
    {
      dataField: 'name',
      dataType: 'string'
    }, {
      caption: 'Email',
      dataField: 'official_email',
      dataType: 'string',
    },
    {
      caption: 'Mobile Number',
      dataField: 'mobile',
      dataType: 'string',
    },
    {
      caption: 'Service',
      dataField: 'service',
      dataType: 'string',
    },
    {
      caption: 'Experience',
      dataField: 'experience_year',
      dataType: 'number',
    },
  ];
  
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      currentStaff: false,
      currentIndex: -1,
      staffList: [],
      isUpdate: true,
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    this.setState((prvState, props) => {
      if (JSON.stringify(prvState.staffList) !== JSON.stringify(props.staffList) && !prvState.staffList.length) {
        return { staffList: JSON.parse(JSON.stringify(props.staffList)) }
      }
    });
  }
  componentDidCatch() { }
  componentWillUnmount() { }

  toggleDrawer = (open, selectedItem, index) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    index=index===undefined?-1:index;
    this.setState({ isDrawerOpen: open, currentStaff: selectedItem || newStaff, currentIndex: index});
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
    this.props.updateStaff({
      variables: {
        staffID: updateArray.id,
        staff: {
          [type]: selectedVal,
        }
      }
    }).then(() => {
      //this.props.refetchStaff();
    })
      .catch(error => {
        DevAlertPopUp(error.message);
      });
  }

  handleUpdate = (updatedValue, index) => {
    let tempPickList = JSON.parse(JSON.stringify(this.state.staffList));
    let updatedItem = tempPickList[index];
    let items = [...tempPickList];
    let item = { ...updatedItem, ...updatedValue };
    console.log("item-->", item);
    items[index] = item;
    this.setState({ staffList: items });
    delete updatedValue.id;
    this.props.updateStaff({
      variables: {
        staffID: updatedItem.id,
        staff: { ...updatedValue }
      }
    }).then(({ data: { updateStaff } }) => {
      //this.props.refetchStaff();
      item = { ...item, id: updateStaff.id };
      items[index] = item;
      this.setState({ staffList: items,currentStaff:item});
    }).catch(error => {
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
    this.props.updateStaff({
      variables: {
        staffID: updateArray.id,
        staff: {
          [type]: updatedValue,
        }
      }
    }).then(() => {
      //this.props.refetchStaff();
    })
      .catch(error => {
        DevAlertPopUp(error.message);
      });
  };

  addNewStaff = (value) => {
    let sfm = StaffModel;
    sfm.name = value;
    delete sfm.id;
    let newstaff = { name: value };
    this.props.addStaff({
      variables: {
        staff: sfm
      }
    }).then(({ data: { addStaff } }) => {
      newstaff = { ...newstaff, id: addStaff.id };
      this.setState({
        currentStaff: { ...newstaff },
        staffList: [...this.state.staffList, newstaff]
      });
      this.props.refetchStaff();
    })
      .catch(error => {
        DevAlertPopUp(error.message);
      });
  }

  handleDataSource = (values) => {
    this.setState({ staffList: values });
  }

  render() {
    const { loading } = this.props;
    const { staffList } = this.state;
    return (
      <div className="d-block">
        <Filter value={staffList} handleDataSource={this.handleDataSource} fields={this.fields} />
        <div className="d-flex flex-column mt-1">
          <div className="contentSection collapse show w-100">
            <SpinnerLarge loading={loading} />
            <ListActivity01
              loading={loading}
              dataList={staffList}
              pagename="Staff"
              toggleDrawer={this.toggleDrawer}
              handleSave={this.handleSaveSingle}
              addNew={this.addNewStaff}
              handleChangeDropDown={this.handleChangeDropDown}
              handleDataSource={this.handleDataSource}
            />
          </div>
        </div>
        <AddFab onClick={this.toggleDrawer(true)} />
        <RightSideDrawer
          isOpen={this.state.isDrawerOpen}
          toggleDrawer={this.toggleDrawer}>
          <StaffDetailsTab
            data={this.state.currentStaff}
            handleUpdate={this.handleUpdate}
            addNew={this.props.addStaff}
            update={this.props.updateStaff}
            index={this.state.currentIndex} />
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
      refetchStaff: refetch
    })
  }), graphql(gql(mutations.staffUpdate), {
    name: 'updateStaff',
    options: () => ({
      variables: {}
    })
  }), graphql(gql(mutations.staffAdd), {
    name: 'addStaff',
    options: () => ({
      variables: {}
    })
  })
)(StaffPage);

//export default StaffPage;
