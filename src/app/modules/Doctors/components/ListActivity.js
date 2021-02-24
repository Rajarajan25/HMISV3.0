
import React, { useMemo, useLayoutEffect, useEffect,useState } from "react";
import { useFormik } from "formik";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {  useMutation,useQuery, useLazyQuery } from "@apollo/client";
import { ADD_USER,UPDATE_USER,DELETE_USER,
GET_ALL_USER,GET_USER} from "../../../modules/Auth/pages/query/graphql";
import { User } from "realm-web";
import Popup from 'reactjs-popup';
import * as Yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {DoctorContext} from '../DoctorContext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  Button,
  Modal,
  ButtonToolbar,
  Col,
  Container,
  Row,
  Tab, Tabs, Nav,
} from "react-bootstrap";
const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});
const initialValues = {
    title:"",
    username: "",
    email: "",
    mobilenumber:"",
    sex:"",
    location:"",
    address:"",
    submitBttn: '',
    first_name:""
};
export function ListActivity01() {  
  const formik = useFormik({
    initialValues,
    validationSchema:ModalFormSchema,
    onSubmit: (values,index, { setStatus, setSubmitting }) => {
      console.log("Values"+JSON.stringify(values)) 
if(values.submitBttn=='submit')
{
  console.log("ValuesAdded"+JSON.stringify(values))
  const values = [...fields];
  console.log(values)
 AddUser(values[index].value);
alert("FORMIK added"+ JSON.stringify(values[index]))
}
}
  });
 
  const [doctor,setdoctor]= React.useContext(DoctorContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  let currentDoctor= doctor.currentDoctor;
const [addUser] = useMutation(ADD_USER);
  
  const [modalShow, setModalShow] = useState(false);
  const AddUser = async (values) => {
    addUser({
      variables: {
        data: {
          "first_name":values, 
      }
    }
    }) .then(res => {
      console.log(res.data.insertOneUser);
      onStaffAdd(res.data.insertOneUser);
    })
    handleRemove()
  };
  const ModalFormSchema =Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(3,'Must be 3 characters or more')
      .required('Required User Name'),  
  });
  const onStaffAdd = (doctor) => {
    setdoctor({
      type: "ADD_DOCTOR",
      payload: doctor
    });
    console.log(doctor)
  }
  const [fields, setFields] = useState([{ value: null }]);
  const { loading, data, error } = useQuery(
    GET_ALL_USER
  );
  React.useEffect(() => {
    if (loading === false && data) {
      setdoctor({
        type: "SETSTATE_DOCTOR",
        payload: data.users,
      });
    }
  }, [loading, data]);
  if (loading) return <div classname="col"><img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" width="100" /></div>
  if (error) return <div>An error occurred</div>
  if (!data) return <div>No data!</div>;
  console.log("data"+JSON.stringify(data))  ;
  const GetAllUser=async () => {
    data({
     variables: {   query: { },limit:100,sortBy:"FIRST_NAME_DESC"}
   }
      );
  };
  var healthy = [];
  var onfield = [];
  var labass = [];
  var emergency = [];
  console.log(doctor.listDoctor.length)
  if (doctor.listDoctor !== undefined && (doctor.listDoctor.length !== undefined || doctor.listDoctor.length > 1)) {
    doctor.listDoctor.map(value => {
      if (value.first_name !== null) {
       // if (value.category === "Healthy") {
          healthy.push(value);
         
        //}
        // else if (value.category === "OnField") {
        //   onfield.push(value)
        // }
        // else if (value.category === "LabAssist") {
        //   labass.push(value)
        // }
        // else if (value.category === "Emergency") {
        //   emergency.push(value)
        // }
      }
      console.log(JSON.stringify(healthy,null,2))
    });
  }
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value= event.target.value;
    setFields(values);
  }
  function handleRemove() {
    const values = [...fields];
    values.splice(1, 1);
    setFields(values);
  }
  function handleAdd() {
    const values = [...fields];
    values.push({  });
    setFields(values);
    
  }
  function handleSave(index) {
     const values = [...fields];
     console.log(values)
    AddUser(values[index].value);
    alert("FORMIK added"+ JSON.stringify(values[index]))
  }
  return (
    <div className="contentAreaouter">
            <div className="contentArea">
              <div className="topHeadercontent d-flex">
                <div className="toggleLefticon">
                  <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#availabledoctors" className="borderColor11 textColor11">
                    <i className="fa fa-angle-down"></i>
                  </Link >                    
                </div>
                <ul className="list-inline w-100">
                  <li>
                    <span className="headingHighlight customProfileBG11 text-white">Healthy 
                      <Router>
                        <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link >
                        <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link >
                        <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link >
                      </Router>
                    </span>
                    <span className="tasklistCount">5 Doctors</span>
                  </li>
                  <li><span>Assignee</span></li>
                  <li><span>Last seen</span></li>
                  <li className="d-none"><span>Date created</span></li>
                  <li><span>Working Hours</span></li>
                  <li><span>New Patient</span></li>
                  <li><span>Medications</span></li>
                  <li className="d-none"><span>Physician</span></li>
                  <li className="d-none"><span>Insurance</span></li>
                  <li><span>Surgeries</span></li>
                  <li><span>Allergies</span></li>
                  <li><span>Priority</span></li>
                  <li className="d-none"><span>Conditions</span></li>
                  <li><span className="mr-2">Comments</span><span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span></li>
                </ul>   
              </div>
              <div className="innerContent collapse show" id="availabledoctors">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="topMiddlecontent">
                    {healthy.map(value => {
                            return (
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>{value.first_name}</span></Link ></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li className="activeStatuscontent customProfileBG4">May 2020</li>
                        <li className="d-none">Date created</li>
                        <li>
                          <svg id="noun_Calendar_3528893" xmlns="http://www.w3.org/2000/svg" width="17.049" height="17.049" viewBox="0 0 17.049 17.049">
                            <path id="Path_335" data-name="Path 335" d="M20.155,5.947h-.379V5.379a.379.379,0,0,0-.758,0v.568H17.882V5.379a.379.379,0,0,0-.758,0v.568h-7.2V5.379a.379.379,0,0,0-.758,0v.568H8.031V5.379a.379.379,0,0,0-.758,0v.568H6.894A1.9,1.9,0,0,0,5,7.842V20.155a1.9,1.9,0,0,0,1.894,1.894H20.155a1.9,1.9,0,0,0,1.894-1.894V7.842A1.9,1.9,0,0,0,20.155,5.947ZM6.894,6.7h.379v.568a.379.379,0,0,0,.758,0V6.7H9.168v.568a.379.379,0,0,0,.758,0V6.7h7.2v.568a.379.379,0,0,0,.758,0V6.7h1.137v.568a.379.379,0,0,0,.758,0V6.7h.379a1.138,1.138,0,0,1,1.137,1.137V9.168H5.758V7.842A1.138,1.138,0,0,1,6.894,6.7ZM20.155,21.292H6.894a1.138,1.138,0,0,1-1.137-1.137V9.925H21.292v10.23A1.138,1.138,0,0,1,20.155,21.292Zm-6.63-9.851a4.168,4.168,0,1,0,4.168,4.168A4.173,4.173,0,0,0,13.525,11.441Zm0,7.578a3.41,3.41,0,1,1,3.41-3.41A3.414,3.414,0,0,1,13.525,19.018Zm1.786-4.654a.38.38,0,0,1-.006.536l-1.928,1.894c-.009.009-.021.017-.032.027a.24.24,0,0,1-.025.021.452.452,0,0,1-.042.023c-.008,0-.015.009-.025.013a.262.262,0,0,1-.051.015l-.021.006a.464.464,0,0,1-.072.008.3.3,0,0,1-.072-.008l-.021-.006a.213.213,0,0,1-.049-.015l-.025-.013a.293.293,0,0,1-.042-.023.131.131,0,0,1-.025-.021.218.218,0,0,1-.032-.027l-1.1-1.082a.379.379,0,0,1,.53-.542l.837.822,1.663-1.633A.38.38,0,0,1,15.311,14.364Z" transform="translate(-5 -5)" fill="#707070"></path>
                          </svg>
                        </li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="specialInfo bg-danger text-white" data-toggle="modal" data-target="#medicalDetails">PRINIVIL</Link>
                          <Link  to="javascript:void(0)" className="specialInfo bg-primary text-white" data-toggle="modal" data-target="#medicalDetails">PRINIVIL</Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li className="activeStatuscontent customProfileBG12">No</li>
                        <li className="activeStatuscontent customProfileBG13">Yes</li>
                        <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                            )}
                    )}
                    {fields.map((field, idx) => {      
        return (
          <form
          id="kt_login_signin_form"
          className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
          onSubmit={formik.handleSubmit}
        >
          <div key={`${field}-${idx}`}>
            {idx!= 0 &&field!=undefined? <ul className="newTask_1">
                        <li>
                          <Link to="javascript:void(0)" className="userLogoicon">
                            <span className="listprofileIcon customProfileBG4">
                              <i className="fe fe-user-plus"></i> 
                            </span> 
                            <button type="button" className="removeNewtask">X</button>
                            <input
              type="text"
              style={{ border:'none',outline:0}}
              className="newTaskinput"
              placeholder="Doctor name"
              value={field.value || ""}
              onChange={e => handleChange(idx, e)}
              />
                          </Link>                            
                        </li>  
                        <li className="text-right">
                          <span className="ctrlSpan">ctrl + enter to open </span>
                          <Link  to="javascript:void(0)" className="rounddashedCircle mx-1 text-center" data-toggle="modal" data-target="#medicalDetails">
                            <i className="fas fa-edit fa-sm"></i>
                          </Link>
                          <Link  to="javascript:void(0)" className="rounddashedCircle mx-1 text-center" data-toggle="modal" data-target="#medicalDetails">
                            <i className="fa fa-tags fa-sm"></i>
                          </Link>
                          <button type="submit" className="btn btn-primary btn-sm font-sm mx-1 saveNewtask" onClick={() => {
                            handleSave(idx)
                            formik.setFieldValue('submitBttn', 'submit')
                           
                          }}>SAVE</button>
                        </li>
                      </ul>:""}
          </div>
          </form>   
        );
      })}
                    </div>
                    <button type="button" className="customNewtaskBTN" onClick={() => handleAdd()}>+ New Doctor</button>
                  </div>    
                </div>                 
              </div>
            </div>
          </div>
           
  );
}
export function PatientBasicDetails(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const toggleDrawerClose = () => {
    setState(false);
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return(
    <div className="d-flex flex-column patientDetailsoverview">
      <div className="d-flex mt-10 mb-8 justify-content-start patientButton">
      <Button
        type="submit"
        className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-6"    onClick={toggleDrawer('right', true)}>Edit</Button>
        <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          <div className="py-5 px-10 overflow-auto">
            <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}><span className="my-auto font-weight-500">X</span></Link>
            <BookDetail />
          </div>
        </Drawer>
      </div>
    </div>
  );
}
export function BookDetail() {
  const [addUser] = useMutation(ADD_USER);
  const [modalShow, setModalShow] = useState(false);
  const AddUser = async (values) => {
    addUser({
      variables: {
        data: {
          "user_name":values.username, 
          "title":values.title,
          "email":values.email,
          "ShippingAddress":values.address,
          "sex":values.sex,
          "mobile_number":values.mobilenumber,
"country_name":values.location

      }
    }
    });
  };
  const ModalFormSchema =Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .min(3,'Must be 3 characters or more')
      .required('Required User Name'),
      title: Yup.string()
      .required('Required Title'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required Email Address'),
      address: Yup.string()
      .required('Required Address'),
      location: Yup.string()
      .required('Required Location'),
      sex: Yup.string()
      .required('Required Sex'),  
      mobilenumber: Yup.string()
      .required('Required Mobile Number' ),   
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema:ModalFormSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log("Values"+JSON.stringify(values))
if(values.submitBttn=='submit')
{
  console.log("ValuesAdded"+JSON.stringify(values))
  AddUser(values);
alert("ValuesAdded"+JSON.stringify(values,null,2))
}
}   
  });
console.log("FORMIK"+ JSON.stringify(formik))
  return (
    <form
    id="kt_login_signin_form"
    className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
    onSubmit={formik.handleSubmit}
  >
<div className="d-flex justify-content-center">
<div className="d-flex py-4 px-0 col-10 ">
<div className="w-100" >
<div className="form-row">
  <div className="form-group col">
    <label htmlFor="userName">Name</label>
    <div className="input-group">
      <div className="input-group-prepend">
      <select
name="title"
className="custom-select"
aria-label="usertype"
id="usertype"
value={formik.values.title}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
style={{ display: 'block' }}
>
<option  value="" label="Select" />
<option  value="Dr" label="Dr" />
<option value="St" label="St" />
<option value="Mr" label="Mr" />
<option value="Miss" label="Miss" />
<option value="Mrs" label="Mrs" />
</select>  
      </div>
      <input
          placeholder="User Name"
          type="text"
          className={`form-control py-5 px-6 ${getInputClasses(
            "username"
          )}`}
          name="username"
          {...formik.getFieldProps("username")}
        />
       
      <input
        type="text"
        aria-label="Degree"
        className="form-control"
        placeholder="Degree"
        id="degree"
      />
    </div>
    {formik.touched.title && formik.errors.title ? (
          <div className="fv-plugins-message-container">
            <div  style={{ color: 'red' }} className="fv-help-block">{formik.errors.title}</div>
          </div>
        ) : null}
    {formik.touched.username && formik.errors.username ? (
          <div className="fv-plugins-message-container">
            <div  style={{ color: 'red' }} className="fv-help-block">{formik.errors.username}</div>
          </div>
        ) : null}
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputEmail4">Official Email</label>
    <input
          placeholder="Official Email"
          type="email"
          className={`form-control py-5 px-6 ${getInputClasses(
            "email"
          )}`}
          name="email"
          {...formik.getFieldProps("email")}
        />
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputEmail4">Personal Email</label>
    <input
    placeholder="Personal Email"
      type="email"
      className={`form-control py-5 px-6 ${getInputClasses(
        "email"
      )}`}
      name="email"
      {...formik.getFieldProps("email")}
    />
  </div>
  {formik.touched.email && formik.errors.email ? (
          <div className="fv-plugins-message-container">
            <div style={{ color: 'red' }} className="fv-help-block">{formik.errors.email}</div>
          </div>
        ) : null}
</div>
<div className="form-row">
   <div className="form-group col-md-6">
    <label htmlFor="mobilenumber">Mobile</label>
    <input
          placeholder="Enter your number"
          type="text"
          className={`form-control py-5 px-6 ${getInputClasses(
            "mobilenumber"
          )}`}
          name="mobilenumber"
          {...formik.getFieldProps("mobilenumber")}
        />
  </div> 
   <div className="form-group col-md-6">
    <label htmlFor="mobilenumber">Alternative number</label>
    <input
          placeholder="Enter your number"
          type="tel"
          className={`form-control py-5 px-6 ${getInputClasses(
            "mobilenumber"
          )}`}
          name="mobilenumber"
          {...formik.getFieldProps("mobilenumber")}
        />
  </div> 
  {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
          <div className="fv-plugins-message-container">
            <div  style={{ color: 'red' }} className="fv-help-block">{formik.errors.mobilenumber}</div>
          </div>
        ) : null}
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="dob">Date of birth</label>
    <div
      className="input-group date"
      id="datepicker-only-init"
      data-target-input="nearest"
    >
      <input
        type="text"
        className="form-control datetimepicker-input"
        data-target="#datepicker-only-init"
      />
      <div
        className="input-group-append"
        data-target="#datepicker-only-init"
        data-toggle="datetimepicker"
      >
        <div className="input-group-text rounded-0">
          <i className="fa fa-calendar" />
        </div>
      </div>
    </div>
  </div>
  <div className="form-group col-md-3">
    <label htmlFor="sex">Sex</label>
    <select
name="sex"
className="custom-select"
aria-label="usertype"
id="usertype"
value={formik.values.sex}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
style={{ display: 'block' }}
>
<option  value="" label="Select" />
<option  value="Male" label="Male" />
<option value="Female" label="Female" />
</select>
{formik.touched.sex && formik.errors.sex ? (
          <div className="fv-plugins-message-container">
            <div style={{ color: 'red' }} className="fv-help-block">{formik.errors.sex}</div>
          </div>
        ) : null}
    
  </div>
  <div className="form-group col-md-3">
    <label htmlFor="dob">Blood Group</label>
    <input
      type="text"
      className="form-control"
      placeholder="Blood group"
      id="bloodGroup"
      name="bloodGroup"
     
    />
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="email">Location</label>
    <select
name="location"
className="custom-select"
aria-label="usertype"
id="usertype"
value={formik.values.location}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
style={{ display: 'block' }}
>
<option  value="" label="Select" />
<option  value="KK Nagar" label="KK Nagar, Chennai" />
<option value="Adayar" label="Adayar, Chennai" />
<option value="Velachery" label="Velachery, Chennai" />
<option value="Vadapalani" label="Vadapalani, Chennai" />
</select>

{formik.touched.location && formik.errors.location ? (
          <div className="fv-plugins-message-container">
            <div style={{ color: 'red' }} className="fv-help-block">{formik.errors.location}</div>
          </div>
        ) : null} 
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="email">Speciality</label>
    <select className="form-control" >
      <option>General Medicine</option>
      <option>General Surgery</option>
      <option>Cardiologist</option>
      <option>Neuro Specialist</option>
      <option>Skin Specialist</option>
      <option>Diabetologist</option>
      <option>ENT Specialist</option>
    </select>
  </div>
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress">Address</label>
    <input
          placeholder="Enter your Address"
          type="tel"
          className={`form-control py-5 px-6 ${getInputClasses(
            "address"
          )}`}
          name="address"
          {...formik.getFieldProps("address")}
        />
  
  </div>
  <div className="form-group col-md-6">
    <label htmlFor="inputAddress2">Address 2</label>
    <input
          placeholder="Enter your Address"
          type="tel"
          className={`form-control py-5 px-6 ${getInputClasses(
            "address"
          )}`}
          name="address"
          {...formik.getFieldProps("address")}
        />
  </div>
  {formik.touched.address && formik.errors.address ? (
          <div className="fv-plugins-message-container">
            <div style={{ color: 'red' }} className="fv-help-block">{formik.errors.address}</div>
          </div>
        ) : null} 
</div>
<div className="form-row">
  <div className="form-group col-md-6">
    <label htmlFor="inputCity">City</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="form-group col-md-4">
    <label htmlFor="inputState">State</label>
    <select id="inputState" className="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="form-group col-md-2">
    <label htmlFor="inputZip">Zipcode</label>
    <input
      type="text"
      className="form-control"
      id="inputZip"
      placeholder="Zipcode"
    />
  </div>
</div>
<div className="row">
  <div className="col">
    <div className="form-group">
      <label htmlFor="userName">Comments</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
       
        defaultValue={''}
      />
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
  </div>
</div>
<div className="row">
  <div className="col">
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" /> I accept the
    terms and Conditions.
  </label>
    </div>
  </div>
</div>
<div className="row">
    <Button variant="secondary" onClick={()=>setModalShow(false)}>
      Close
    </Button>
    <Button
        type="submit"

        className="btn btn-primary sign-btn ml-15 h-77 font-weight-500 mt-6"   onClick={() => {
         formik.handleSubmit()
          formik.setFieldValue('submitBttn', 'submit')
       }}
      >
      Save
  </Button>
</div>
</div>
</div>
</div>
</form>
  );
}
export  default function ListActivity02() {   
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="contentAreaouter">   
                   
            <div className="contentArea">
              <div className="topHeadercontent d-flex">
                <div className="toggleLefticon">
                  <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#onFielddoctors" className="borderColor2 textColor2">
                    <i className="fa fa-angle-down"></i> 
                  </Link>                           
                </div>
                <ul className="list-inline w-100">
                  <li>
                    <span className="headingHighlight customProfileBG2 text-white">On-Field Doctors 
                      <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                      <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                      <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
                    </span>
                    <span className="tasklistCount">5 Doctors</span>
                  </li>
                </ul>
              </div>
              <div className="innerContent collapse show" id="onFielddoctors">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="topMiddlecontent">
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span>  <span>Anandkumar1 </span> 
                        <li>  
                <PatientBasicDetails/>
                        </li>
                       </Link></li>
                        <li>
                               <span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>
                        May 2020
                   </li>
                        <li className="d-none">Date created</li>
                        <li> Yes </li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>No</li>
                        <li>Yes</li>
                        <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                        <li className="d-none">Conditions</li>
                        <li>
                          <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                        </li>
                      </ul>
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>Sep 2020</li>
                        <li className="d-none">Date created</li>
                        <li>Yes</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto rounded-circle " data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>Yes</li>
                        <li>Yes</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                      <ul>
                        <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>Aug 2020</li>
                        <li className="d-none">Date created</li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>No</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                      <ul>
                        <li><Link to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                        <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                        <li>July 2020</li>
                        <li className="d-none">Date created</li>
                        <li>No</li>
                        <li>
                          <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                        </li>
                        <li className="d-none">Physician</li>
                        <li className="d-none">Insurance</li>
                        <li>Yes</li>
                        <li>No</li>
                        <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                        <li className="d-none">Conditions</li>
                        <li><i className="far fa-comments fa-sm"></i></li>
                      </ul>
                    </div>
                  </div>    
                </div>                 
              </div>
            </div>
 
           
          </div>
         
  );
}

export function ListActivity03() {  

  return (
    
    <div className="contentAreaouter">
          <div className="contentArea">
            <div className="topHeadercontent d-flex">
              <div className="toggleLefticon">
                <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#labAssitentcontent" className="borderColor3 textColor3">
                  <i className="fa fa-angle-down"></i> 
                </Link>                    
              </div>
              <ul className="list-inline w-100">
                <li>
                  <span className="headingHighlight customProfileBG3 text-white">Lab Assistant 
                    <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                    <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                    <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
                  </span>
                  <span className="tasklistCount">3 Lab Assistant</span>
                </li>
              </ul>
            </div>
            <div className="innerContent collapse show" id="labAssitentcontent">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="topMiddlecontent">
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anandkumar</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>May 2020</li>
                      <li className="d-none">Date created</li>
                      <li>Yes</li>
                      <li>
                        <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>No</li>
                      <li>Yes</li>
                      <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                      <li className="d-none">Conditions</li>
                      <li>
                        <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                      </li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>Sep 2020</li>
                      <li className="d-none">Date created</li>
                      <li>Yes</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>Yes</li>
                      <li>Yes</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>Aug 2020</li>
                      <li className="d-none">Date created</li>
                      <li>No</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>No</li>
                      <li>No</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                    <ul>
                      <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                      <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                      <li>July 2020</li>
                      <li className="d-none">Date created</li>
                      <li>No</li>
                      <li>
                        <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                      </li>
                      <li className="d-none">Physician</li>
                      <li className="d-none">Insurance</li>
                      <li>Yes</li>
                      <li>No</li>
                      <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                      <li className="d-none">Conditions</li>
                      <li><i className="far fa-comments fa-sm"></i></li>
                    </ul>
                  </div>
                </div>    
              </div>                 
            </div>
          </div>
        </div>
  );
}
export function ListActivity04() {  
  return (
    <div className="contentAreaouter">
      <div className="contentArea">
        <div className="topHeadercontent d-flex">
          <div className="toggleLefticon">
            <Link  to="javascript:void(0)" data-toggle="collapse" data-target="#emergencyDepartment" className="borderColor9 textColor9">
              <i className="fa fa-angle-down"></i> 
            </Link>                    
          </div>
          <ul className="list-inline w-100">
            <li>
              <span className="headingHighlight customProfileBG9 text-white">Emergency Department 
                <Link  to="javascript:void(0)" className="ml-3"><i className="fa fa-pen"></i></Link>
                <Link  to="javascript:void(0)"><i className="fa fa-check-square"></i></Link>
                <Link  to="javascript:void(0)"><i className="fa fa-ellipsis-h"></i></Link>
              </span>
              <span className="tasklistCount">12 Emergency</span>
            </li>
          </ul>
        </div>
        <div className="innerContent collapse show" id="emergencyDepartment">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="topMiddlecontent">
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG1">AK</span> <span>Anandkumar</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>May 2020</li>
                  <li className="d-none">Date created</li>
                  <li>Yes</li>
                  <li>
                    <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>No</li>
                  <li>Yes</li>
                  <li><span className="rounddashedCircle"><i className="fa fa-flag text-danger fa-sm"></i></span></li>
                  <li className="d-none">Conditions</li>
                  <li>
                    <Link  to="javascript:void(0)" className="rounddashedCircle" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-comments fa-sm"></i></Link>
                  </li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon" data-toggle="modal" data-target="#commonModalright"><span className="listprofileIcon customProfileBG2">SK</span> <span>Sivakumar</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>Sep 2020</li>
                  <li className="d-none">Date created</li>
                  <li>Yes</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>Yes</li>
                  <li>Yes</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG3">SB</span> <span>Sureshbabu</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>Aug 2020</li>
                  <li className="d-none">Date created</li>
                  <li>No</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>No</li>
                  <li>No</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
                <ul>
                  <li><Link  to="javascript:void(0)" className="userLogoicon"><span className="listprofileIcon customProfileBG4">PB</span> <span>Prabaker</span></Link></li>
                  <li><span className="rounddashedCircle"><i className="fa fa-user fa-sm"></i></span></li>
                  <li>July 2020</li>
                  <li className="d-none">Date created</li>
                  <li>No</li>
                  <li>
                    <Link  to="javascript:void(0)" className="m-auto" data-toggle="modal" data-target="#medicalDetails"><i className="far fa-file-alt fa-sm"></i></Link>
                  </li>
                  <li className="d-none">Physician</li>
                  <li className="d-none">Insurance</li>
                  <li>Yes</li>
                  <li>No</li>
                  <li><i className="fa fa-flag text-danger fa-sm"></i></li>
                  <li className="d-none">Conditions</li>
                  <li><i className="far fa-comments fa-sm"></i></li>
                </ul>
              </div>
            </div>    
          </div>                 
        </div>
      </div>
    </div>

  );
}