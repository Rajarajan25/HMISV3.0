import React, { useState, useContext, useEffect } from 'react';
import { StaffContext } from './StaffContext';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  Text: {
    fontSize: 5
  }
}));
const DELETE_STAFF = gql`
  mutation deleteStaff( $id : ID!) {
    deleteStaff( id :$id) {
      id
    }
  }
`;
const GET_STAFF = gql`
{
  getStaffs(limit: 10, offset: 1, status: true) {
    id,
    name,
    description,
    date_of_join,
    mobile_number,
    email_signature,
    clients_served_sametime,
    staff_booking_page,
    display_provider_booking_page,
    login_Allowed,
    email_verification,
    active_status,
    avatar_path,
    more_options{
      security,
      accept_appointments,
      flexible_notifications,
      book_soon_notification_system,
      twoway_google_calendar_sync,
      twoway_office365_calendar_sync,
      specific_color_calendar,
      oneway_apple,
      oneway_mobile,
      oneway_office365,
      oneway_google_sync,
      color_option_enable,
      specific_color_calendar
    },
    services{
      id,
      name
    }
    locations{
      _id,
      id,
			name,
			timings{
        _id,
				work_day_id,
        work_day_name,
        start_time,
        end_time
        breaktime {
          start_time,
          end_time
        }
			}
		}
  } 
} 
  `;
export default function StaffList() {
  const classes = useStyles();
  const [checked, setChecked] = useState([1]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [delete_staff] = useMutation(DELETE_STAFF);
  const { data, loading, error } = useQuery(GET_STAFF);
  const [staff, setstaff] = useContext(StaffContext);
  useEffect(() => {
    if (loading === false && data) {
      setstaff({
        type: "SETSTATE_STAFF",
        payload: data.getStaffs,
      });
    }
  }, [loading, data]);
  const onStaffClick = (id) => {
    let staffnew = staff.listStaff.find(staff => staff.id === id);
    setstaff({
      type: "SET_CURRENT_STAFF",
      payload: staffnew
    });
  }
  let activeStaff = [];
  let inactiveStaff = [];
  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }
  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  staff.listStaff.map(value => {
    if (value !== null) {
      if (value.category==="Healthy") {
        activeStaff.push(value);
      }
      else {
        inactiveStaff.push(value)
      }
    }
  });
  return (
    <>
      <li >
        {activeStaff.map(value => {
          return (
            <div selected={selectedIndex === value.id} onClick={(event) => { onStaffClick(value.id); handleListItemClick(event, value.id) }} key={value.id} button={value.id}>
              <div className="d-flex w-100 px-1 py-2 text-dark hover-white cursor-pointer show-child-on-hover active">
                <div className="flex-1 numberofWorking mr-1">
                  <strong className="minDays text-blue">12</strong>
                  <small><i className="fal fa-clock" /> days</small>
                </div>
                <div className="flex-2 contactlistImage userAvatar">
                  <strong className="bg-pink">TC</strong>
                  <span className="userStatus online" />
                </div>
                <div className="ml-3 flex-3 w-100 userlistNamedetails my-auto">
                  <div className="d-block notifyInfo">
                    <a href="#" className="bg-pink-dim text-pink">Priority</a>
                  </div>
                  <div className="text-truncate text-truncate-md">
                    {value.name}
                    <small className="d-block text-muted text-truncate text-truncate-md">
                      {value.email_signature}
                    </small>
                  </div>
                </div>
                <div className="flex-2  mt-0 my-auto">
                  <div className="d-flex">
                    <div className="mr-2 show-on-hover-parent d-none">
                      <button className="btn btn-danger btn-xs btn-icon rounded-circle shadow-0 waves-effect waves-themed" data-toggle="tooltip" data-template="<div class=&quot;tooltip&quot; role=&quot;tooltip&quot;>
																			<div class=&quot;tooltip-inner bg-danger-500&quot;></div></div>" data-original-title="Delete">
                        <i className="fal fa-trash-alt" />
                      </button>
                    </div>
                    <div className="show-on-hover-parent btn-group dropdown mr-1">
                      <button className="btn btn-default1 rounded-circle btn-icon btn-sm waves-effect waves-themed" data-original-title="More" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fal fa-ellipsis-v fa-2x align-middle" />
                      </button>
                      <div className="dropdown-menu" style={{}}>
                        <a className="dropdown-item" href="#">Select all locations</a>
                        <a className="dropdown-item" href="#">Select all provider</a>
                        <a className="dropdown-item" href="#">Set visible</a>
                        <a className="dropdown-item" href="#">Hide</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                    <div className="flex-2 my-auto align-right d-none">
                      <div className="custom-control custom-checkbox px-0">
                        <input type="checkbox" className="custom-control-input" id="userActiveCheckbox1" />
                        <label className="custom-control-label" htmlFor="userActiveCheckbox1">&nbsp;</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </li>
      <li >
        {inactiveStaff.map(value => {
          return (
            <div selected={selectedIndex === value.id} onClick={(event) => { onStaffClick(value.id); handleListItemClick(event, value.id) }} key={value.id} button={value.id}>
              <div className="d-flex w-100 px-1 py-2 text-dark hover-white cursor-pointer show-child-on-hover active">
                <div className="flex-1 numberofWorking mr-1">
                  <strong className="minDays text-blue">12</strong>
                  <small><i className="fal fa-clock" /> days</small>
                </div>
                <div className="flex-2 contactlistImage userAvatar">
                  <strong className="bg-pink">TC</strong>
                  <span className="userStatus online" />
                </div>
                <div className="ml-3 flex-3 w-100 userlistNamedetails my-auto">
                  <div className="d-block notifyInfo">
                    <a href="#" className="bg-pink-dim text-pink">Priority</a>
                  </div>
                  <div className="text-truncate text-truncate-md">
                    {value.name}
                    <small className="d-block text-muted text-truncate text-truncate-md">
                      {value.email_signature}
                    </small>
                  </div>
                </div>
                <div className="flex-2  mt-0 my-auto">
                  <div className="d-flex">
                    <div className="mr-2 show-on-hover-parent d-none">
                      <button className="btn btn-danger btn-xs btn-icon rounded-circle shadow-0 waves-effect waves-themed" data-toggle="tooltip" data-template="<div class=&quot;tooltip&quot; role=&quot;tooltip&quot;>
																			<div class=&quot;tooltip-inner bg-danger-500&quot;></div></div>" data-original-title="Delete">
                        <i className="fal fa-trash-alt" />
                      </button>
                    </div>
                    <div className="show-on-hover-parent btn-group dropdown mr-1">
                      <button className="btn btn-default1 rounded-circle btn-icon btn-sm waves-effect waves-themed" data-original-title="More" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fal fa-ellipsis-v fa-2x align-middle" />
                      </button>
                      <div className="dropdown-menu" style={{}}>
                        <a className="dropdown-item" href="#">Select all locations</a>
                        <a className="dropdown-item" href="#">Select all provider</a>
                        <a className="dropdown-item" href="#">Set visible</a>
                        <a className="dropdown-item" href="#">Hide</a>
                        <a className="dropdown-item" href="#">Delete</a>
                      </div>
                    </div>
                    <div className="flex-2 my-auto align-right d-none">
                      <div className="custom-control custom-checkbox px-0">
                        <input type="checkbox" className="custom-control-input" id="userActiveCheckbox1" />
                        <label className="custom-control-label" htmlFor="userActiveCheckbox1">&nbsp;</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </li>
    </>
  );
}

