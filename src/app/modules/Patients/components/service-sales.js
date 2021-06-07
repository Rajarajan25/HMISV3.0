import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {ServiceContext} from './ServiceContext'
import {Formik} from 'formik'
import Search from "../../../components/Search";
import StaffCommission from "../../../components/StaffCommission";
const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});
const field = {
  staffCommission: "Staff Commission",
  commission:"Commision",
  serviceTax: "Set Service Tax",
  amount: "Amount (र)",
  Percentage : "Percentage (%)",
  Voucher:"Set Voucher/Coupon Sales",
  VoucherAmount:"Amount (र)",
  VoucherPercent:"Percentage (%)"
  }
export function ServiceSales() {
  const classes = useStyles();
  const [service,setservice] =React.useContext(ServiceContext);
  let currentService=service.currentService;
  let Staff=[];
  const {staff,commission}=currentService;
  const [Service, setSerivce] = React.useState(staff);
    let handleSearch = (event) => {
        let search=event.target.value;
        let arr=currentService.staff.filter((e)=>{return e.name.toLowerCase().match(new RegExp(search.toLowerCase(), "g"))});
        setSerivce(arr);
    }
    const initValue = {
      staff: staff,
      commission: commission,
    }
  return (
    <Formik
        initialValues={initValue}
        enableReinitialize
        onSubmit={(values) => {
          currentService.staff=values.staff
          currentService.commission=values.commission;
          setservice({
            type: "EDIT_SERVICE",
            payload: currentService
          });
          }}
      >
        {({      
          values,handleSubmit,
        }) => (

          <form onSubmit={handleSubmit}>
      
    <div className="staff_first staff_third w-100 p-6">
      <div className="form-group border-bottom">
        <label className="d-block staff_title_text mr-auto">Staff</label>
      </div>
      <div className="form-group">
        <div className="d-flex mb-3">
          <div className="d-flex justify-items-center service_search">
            <button type="button" className="service_search_icon">
              <img src="/media/patients/cat_search.svg" alt="" className="" />
            </button>
            {/* <input className="service_search_input" type="text" name="" placeholder="Search" onChange={handleSearch}/> */}
            <Search handleSearch={handleSearch}/>
          </div>
        </div>
        <div className="serve_sec">
        <div className="row">
        {Service.map(val=>{
          return(
            
          
          <div className="col-4 px-1">
          <input type="checkbox" id="pet_box_01" />
              <label className="pat_box staff_sales" for="pet_box_01">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">{val.name}</p>
                    <span className="staff_sales_desc d-block">{val.mobile_number}</span>
                  </div>
                </div>
                <div className="d-flex">
                  <span className="avails chat_bg">
                    <img src={toAbsoluteUrl("/media/patients/avail_chat.svg")} alt="Chat" className="m-0" />
                  </span>
                  <span className="avails phone_bg">
                    <img src={toAbsoluteUrl("/media/patients/avail_phone.svg")} alt="Phone" className="m-0" />
                  </span>
                  <span className="avails video_bg">
                    <img src={toAbsoluteUrl("/media/patients/avail_video.svg")} alt="Video" className="m-0" />
                  </span>
                  <span className="avails visit_bg">
                    <img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="In Person" className="m-0" />
                  </span>
                </div>
              </label>
            </div>
            
            
          )
        })}
        </div>
        </div>
        
      </div>
     <StaffCommission field={field} current={values}></StaffCommission>
    </div>
    <div className="form-group mb-0">
                <div className="d-flex justify-content-end patientButton pos_fix">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </div>
    </form>
        )}
      </Formik>
  );
}


export default function SwitchLabels() {
  
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
      />
    </FormGroup>
  );
}