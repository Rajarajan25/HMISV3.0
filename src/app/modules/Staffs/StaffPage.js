import React from "react";
import { Filter } from "../../components/Filter"
import {ListActivity01} from "../Doctors/components/ListActivity";
import { StaffDetailsTab } from "../Doctors/components/staff-details-tab";
import { mutations, queries } from "./graphql";
import { gql } from "@apollo/client";
import * as compose from "lodash.flowright";
import { graphql } from "@apollo/client/react/hoc";
import { DevAlertPopUp, DevConsoleLog } from "../../SiteUtill";
import { RightSideDrawer } from "../../components/RightSideDrawer";
import { AddFab } from "../../components/AddFab";
import { StaffModel } from "../../models/StaffModel";
import { SpinnerLarge } from "../../components/Spinner";
import { DeleteDialog } from "../../components/DeleteDialog";

let newStaff = StaffModel;

class StaffPage extends React.Component {
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
            currentStaff: false,
            currentIndex: -1,
            staffList: [{ name: "Agilan" }],
            isUpdate: true,
            isDragDisabled: false,
            isloading: false,
            searchValue: "",
            showDialog: false,
            dialogContent: false,
            deletedItem: false,
        };
    }

    componentDidMount() {
        //  BookingURL.zoomMeeting();
    }

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
    componentDidCatch() { }
    componentWillUnmount() { }

    toggleDrawer = (open, selectedItem, index) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        index = index === undefined ? -1 : index;
        this.setState({ isDrawerOpen: open, currentStaff: selectedItem || newStaff, currentIndex: index });
    };

    toggleDrawerClose = () => {
        this.setState({ isDrawerOpen: false, currentStaff: false });
    };

    handleChangeDropDown = (selectedVal, id, type, indexes) => {
        DevConsoleLog("type-->", type);
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
    handleChangeServices = (selectedVal, type, id) => {
        let index = 0;
        const currentStaffList = this.state.staffList.map((item, i) => {
            if (id === item.id) {
                item[type] = selectedVal;
                index = i;
            }
            return item;
        });
        this.setState({ staffList: currentStaffList, isloading: true });
        let updateArray = this.state.staffList[index];
        delete updateArray.created_at
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
        let updatedItem = tempPickList[index];
        let items = [...tempPickList];
        let item = { ...updatedItem, ...updatedValue };
        items[index] = item;
        this.setState({ staffList: items, isloading: true });
        let { id, ...updateValue } = updatedValue;
        console.log(updateValue);
        this.props.updateStaff({
            variables: {
                staffID: updatedItem.id,
                staff: { ...updateValue }
            }
        }).then(({ data: { updateStaff } }) => {
            //this.props.refetchStaff();
            item = { ...item, id: updateStaff.id };
            items[index] = item;
            this.setState({ staffList: items, currentStaff: item, isloading: false });
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
        let sfm = { ...StaffModel };
        sfm = { ...sfm, ...value };
        delete sfm.id;

        let newstaff = {};
        this.setState({ isloading: true });
        this.props.addStaff({
            variables: {
                staff: sfm
            }
        }).then(({ data: { addStaff } }) => {
            newstaff = { ...sfm, id: addStaff.id };
            this.setState({
                currentStaff: { ...newstaff },
                staffList: [...this.state.staffList, newstaff],
                isloading: false
            });
        }).catch(error => {
            DevAlertPopUp(error.message);
        });
    }

    checkDuplicate = (value) => {
        let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
        let checkIndex = -1;
        return checkIndex = tempPickItem.findIndex(
            (elm) => elm.name === value
        );
    }
    handleDuplicate = (duplicatedItem) => {
        let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
        let duplicatedIndex = tempPickItem.findIndex(
            (elm) => elm.id === duplicatedItem.id
        );
        let { id, ...duplicateitem } = duplicatedItem;
        console.log(duplicateitem);
        let isDuplicateID = 1;
        let duplicateName = duplicatedItem.name;
        let i = 1;
        while (isDuplicateID !== -1) {
            duplicateName = duplicateName.replace(/[0-9]\s*$/, "") + "" + i;
            isDuplicateID = this.checkDuplicate(duplicateName);
            i++;
        }
        DevConsoleLog(duplicateName);
        duplicatedItem = { ...duplicatedItem, name: duplicateName };
        this.props
            .addStaff({
                variables: {
                    staff: { ...duplicateitem },
                },
            })
            .then(({ data: { addStaff } }) => {
                duplicatedItem = { ...duplicatedItem, id: addStaff.id };
                tempPickItem.splice(duplicatedIndex + 1, 0, duplicatedItem);
                this.setState({ staffList: tempPickItem });
                this.props.refetchStaff();
            })
            .catch((error) => {
                DevAlertPopUp(error.message);
            });
    };
    handleDataSource = (values) => {
        this.setState({ staffList: values });
    };
    handleSearch = (value) => {
        this.setState({ searchValue: value });
    }
    handleSort = (value) => {
        this.setState({ staffList: value });
    }
    dragableDisable = (value) => {
        this.setState({ isDragDisabled: value });
    }
    dialogHide = () => {
        this.setState({
            deletedItem: false,
            showDialog: false,
            isloading: false,
            dialogContent: false
        });
    }
    deletePopUp = (item) => {
        this.setState({
            deletedItem: item,
            showDialog: true,
            dialogContent: {
                title: "Staff Delete",
                message: "Are you sure to permanently delete this staff?",
                loadingMsg: "Staff Deleting...",
                cancelLable: "Cancel",
                okLable: "Delete"
            }
        });

    };

    handleDelete = () => {
        let tempPickItem = JSON.parse(JSON.stringify(this.state.staffList));
        this.props
            .deleteStaff({
                variables: {
                    staffID: this.state.deletedItem.id
                },
            })
            .then(({ data: { deleteStaff } }) => {
                this.setState({ staffList: tempPickItem.filter(el => el.id !== this.state.deletedItem.id) });
                this.dialogHide();
            })
            .catch((error) => {
                DevAlertPopUp(error.message);
            });
    };

    render() {
        const { loading } = this.props;
        const { staffList } = this.state;
        return (
            <div className="d-block">
                <Filter value={staffList}
                    handleDataSource={this.handleDataSource}
                    fields={this.fields}
                    handleSort={this.handleSort}
                    placeholder="Staff Search" />
                <div className="d-flex flex-row-auto w-100 mt-1">
                    <SpinnerLarge loading={loading} />
                    <ListActivity01
                        loading={loading}
                        dataList={staffList}
                        pagename="Staff"
                        isDragDisabled={this.state.isDragDisabled}
                        toggleDrawer={this.toggleDrawer}
                        handleSave={this.handleChangeDropDown}
                        addNew={this.addNewStaff}
                        handleChangeDropDown={this.handleChangeDropDown}
                        handleDataSource={this.handleDataSource}
                        handleDelete={this.deletePopUp}
                        handleDuplicate={this.handleDuplicate}
                        searchValue={this.state.searchValue} />


                </div>
                <AddFab onClick={this.toggleDrawer(true)} />
                <RightSideDrawer
                    isOpen={this.state.isDrawerOpen}
                    toggleDrawer={this.toggleDrawer}>
                    <StaffDetailsTab
                        data={this.state.currentStaff}
                        handleUpdate={this.handleUpdate}
                        isloading={this.state.isloading}
                        index={this.state.currentIndex}
                        handleChangeServices={this.handleChangeServices}
                        addNew={this.addNewStaff} />
                </RightSideDrawer>

                <DeleteDialog
                    show={this.state.showDialog}
                    onHide={this.dialogHide}
                    deleteAction={this.handleDelete}
                    content={this.state.dialogContent}
                    isloading={this.state.isloading} />
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
