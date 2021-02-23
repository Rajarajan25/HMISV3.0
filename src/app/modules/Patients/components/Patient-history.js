import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { PatientInvoice } from "./Patient-invoice";


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

export function PatientHistory() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const styles = {
    BackdropProps: {
      background: 'transparent'
    }
  };
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const toggleDrawerClose = () => {
    setState(false);
  };
  
  return (  
    <div className="history_card w-100">
      <div className="row">
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <Link to="#" onClick={toggleDrawer('right', true)}><img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" /></Link>
              <div className="position-absolute img_mve">
                <Link to="#"><img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" /></Link>
                <Link to="#"><img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" /></Link>
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
                <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" />
                <span>12 km</span>
                <img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" />
                <span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase">
                <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" />
                <span>Shown on Map</span>
              </div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase">
                <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" />
                <span>Send Message</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" />
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
              <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <Link to="#"  onClick={toggleDrawer('right', true)}><img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" /></Link>
              <div className="position-absolute img_mve">
                <img src={toAbsoluteUrl("/media/users/star.svg")} alt="" className="star_icon" />
                <img src={toAbsoluteUrl("/media/users/man.svg")} alt="" className="man_icon" />
              </div>
            </div>
            <div className="mh_70">
              <p className="card-tit text-uppercase">Robert Y.Social</p>
              <div className="card-sss-tit">
                <img src={toAbsoluteUrl("/media/users/location.svg")} alt="" width="5" className="" /><span>12 km</span><img src={toAbsoluteUrl("/media/users/ages.svg")} alt="" width="5" className="" /><span>40y old</span>
              </div>
            </div>
            <div className="d-flex border-top">
              <div className="flex-fill py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Shown on Map</span></div>
              <div className="flex-fill border-left py-4 card-sub-tit text-uppercase"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" height="11" className="" /><span>Send Message</span></div>
            </div>
          </div>
        </div>
      </div>
      <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className="py-5 px-10 overflow-auto">
          <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}><span className="my-auto font-weight-500">X</span></Link>
          <HistoryDetail />
        </div>
      </Drawer>
    </div>
  );
}


export function HistoryDetail() {
  return (
    <div className="hist_detail">
      <div className="d-flex flex-column border-bottom">
        <div className="d-flex mb-4 justify-content-center">
          <img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="mh-100 w130 rounded-circle" />
        </div>
        <div className="d-flex flex-column w-100">
          <div className="d-flex mb-2 justify-content-center">
            <p className="font_weight_bold font-size-18 m-0">Andrea Jemmiah</p>
          </div>
          <div className="d-flex mb-2 font-size-15 font_weight_medium justify-content-center">
            <span className="">ID #14357</span>
          </div>
          <div className="d-flex mb-8 font-size-14 font_weight_medium justify-content-center">
            <span className="">San Fransisco, CA</span>
          </div>
          <div className="d-flex mb-8 justify-content-center">
            <button type="button" className="btn btn-primary">Appointment</button>
            <button type="button" className="btn btn-primary">Cancel</button>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 flex-column mt-8">
        <div className="d-flex color_303030 font-size-14 mb-3 font_weight_bold text-uppercase">
          <span>Summary:</span>       
        </div>
        <div className="d-flex mb-5 w-100 color_707070 font-size-14 font_weight_medium">
          <p>Dentists remove tooth decay, fill cavities, and repair fractured teeth. Dentists diagnose and treat problems with patients’ teeth, gums, and related parts of the mouth. They provide advice and instruction on taking care of the teeth and gums and on diet choices that affect oral health. While a dental check-up every 6 months is recommended by medical experts, you might need to book an appointment</p>
        </div>
        <div className="d-flex color_303030 font-size-14 mb-4 font_weight_bold text-uppercase">
          <span className="mt-1">Reports Checked:</span> 
          <div className="d-flex justify-content-end flex-fill">
            <div className="tab_col my-0">
              <img src={toAbsoluteUrl("/media/patients/email_icon.svg")} alt="msg" className="mai" />
            </div>
            <div className="tab_col my-0">
              <img src={toAbsoluteUrl("/media/patients/print_icon.svg")} alt="print" />
            </div>
          </div>      
        </div>
        <div className="d-flex flex-wrap w-100 font-size-13 color_707070 font_weight_medium rep_check">
          <span>Complete Haemogram</span>
          <span>Thyroid</span>
          <span>Glucose - Fasting Blood</span>
          <span>Urine Routine</span>
          <span>Glycosylated Haemoglobin</span>
          <span>Fever checkup</span>
          <span>Kidney Function</span>
          <span>Full body checkup</span>
          <span>Liver Function</span>
          <span>Eye Itching</span>
          <span>Eye Itching</span>
          <span>Stomach Pain</span>
        </div>
      </div>
    </div>
  );
}