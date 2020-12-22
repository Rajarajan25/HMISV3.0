import React,{useContext,useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Row from 'react-bootstrap/Row';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import {UserContext} from './UserContext'
import gql from "graphql-tag";

const ADD_STAFF = gql`
  mutation addUser($UserInfo: UserInput!) {
    addUser(UserInfo: $UserInfo) {
      id
      name
      
      email
    }
  }
`;

  
  const GET_STAFF = gql`
{
  
  getStaffs(limit: 10, offset: 1, status: true) {
    id,
    name,
    description,
    mobile_number,
    email_signature,
    clients_served_sametime,
    staff_booking_page,
    display_provider_booking_page,
    login_Allowed,
    email_verification,
    active_status,
    locations{
			name,
			timings{
				work_day_id,
				work_day_name
			}
		}
  }

  
} 
  `;


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
 
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  textArea:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  margin: {
    margin: theme.spacing(1),
    'backgroundColor':'grey',
    'border-radius': '0px',
    'min-height':'15px','height':'25px',
    'width':'25px',
},
buttonadd :{
    margin: theme.spacing(3),
    'backgroundColor':'blue',
}
}));
const items={  name: '', mobile: '', email: '', title: '' };


const DialogTitle = withStyles(styles)((props) => {

    
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function AddUser() {
  const classes = useStyles();
  
    const [user, setUser] = useContext(UserContext);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    let currentUser = user.currentUser;
  const [open, setOpen] = React.useState(false);
  const { data, loading, error } = useQuery(GET_STAFF);
  const [addUser] = useMutation(ADD_STAFF)
  
  const [state, setState] = React.useState(1);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//   const onStaffClick = (id) => {
//     let staffnew = staff.listStaff.find(staff => staff.id === id);
//     setstaff({
//       type: "SET_CURRENT_STAFF",
//       payload: staffnew
//     });
//   }

  const onStaffAdd = (staff) => {
    
    setUser({
      type: "ADD_USER",
      payload: staff
    });
  }

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }
  const handleChange = (values) => {
   
    let add_User=addUser({variables: { UserInfo: {name:values.name, email: values.email,
      password:values.password,type:values.type} }})
      .then(res => {
        console.log(res.data.addUser);
        onStaffAdd(res.data.addUser);
   })
    console.log(add_User);
    const json = JSON.stringify(addUser.Promise);  
     console.log(json);
    setOpen(false);
  };
 

  return (
    <div>
    
      {/* <Fab size="small" color="secondary" aria-label="Add" className={classes.margin} onClick={handleClickOpen}> */}
       <div className="btn-group dropdown">
       <button className="btn btn-info rounded-circle btn-icon waves-effect waves-themed" type="button"><i className="fal fa-plus" /></button>

                      <div className="dropdown-menu" style={{}}>
                        <a className="dropdown-item"> Add a new location</a>
                        <a className="dropdown-item" onClick={handleClickOpen} >Add a new User</a>
                      </div>
                    </div>
      {/* </Fab> */}

     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add New User
        </DialogTitle>
        
        
        <DialogContent dividers>
        
    <Formik
      initialValues={{id:'',name:'', email: '', password: '' , type:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleChange(values)
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          
          
          <Form>
         <Form.Group as={Row}>
              <TextField
          label="Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="name"
          className={classes.textField}
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
        />
         </Form.Group>
            </Form>  
          {errors.name && touched.name && errors.name}

          <Form>
         <Form.Group as={Row}>
              <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="email"
          className={classes.textField}
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
        />
         </Form.Group>
            </Form>  
          {errors.email && touched.email && errors.email}

          <Form>
         <Form.Group as={Row}>
              <TextField
          label="Password"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="password"
          className={classes.textField}
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
        />
         </Form.Group>
            </Form>  
            {errors.password && touched.password && errors.password}

            <Form>
         <Form.Group as={Row}>
              <Select
          label="User_Type"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="type"
          className={classes.textField}
          onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobile_number}
        >
          <option value="Super-Admin">Super Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                        </Select>
         </Form.Group>
            </Form>  
          
         
          
        
          
         
       


          <button type="submit" disabled={isSubmitting}  className="btn btn-primary mr-2">
            Add Staff
          </button>
          <Button color="default" onClick={handleClose} variant="contained">Cancel</Button>
        </form>
      )}
    </Formik>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
