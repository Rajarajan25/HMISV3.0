import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

export function ServiceStaff() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_third w-100 p-6">
      <div className="form-group border-bottom d-none">
        <div className="d-flex">
          <label className="d-block staff_title_text">Test Included</label>
          <span className="ml-auto add_on_more">+ Add On More</span>
        </div>
        <div className="inc_bg mb-3">
          <div className="row">
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/scan_test.svg")} alt="" className="d-block" />
                <span className="d-block scan_point">Scan Point</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-test.svg")} alt="" className="d-block" />
                <span className="d-block blood_test">Blood Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/blood-tube.svg")} alt="" className="d-block" />
                <span className="d-block kidney_test">Kidney Test</span>
              </div>
            </div>
            <div className="col-3 px-1">
              <div className="inc_box bg-white">
                <img src={toAbsoluteUrl("/media/patients/swab.svg")} alt="" className="d-block" />
                <span className="d-block corona_test">Corona Test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group border-bottom">
        <label className="d-block staff_title_text mr-auto">Staff</label>
      </div>
      <div className="form-group">
        <div className="d-flex mb-3">
          <div className="d-flex justify-items-center service_search">
            <button type="button" className="service_search_icon">
              <img src="/media/patients/cat_search.svg" alt="" className="" />
            </button>
            <input className="service_search_input" type="text" name="" placeholder="Search" />
          </div>
        </div>
        <div className="serve_sec">
          <div className="row">
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_01" />
              <label className="pat_box staff_sales" for="pet_box_01">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_02" />
              <label className="pat_box staff_sales" for="pet_box_02">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_03" />
              <label className="pat_box staff_sales" for="pet_box_03">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_04" />
              <label className="pat_box staff_sales" for="pet_box_04">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_05" />
              <label className="pat_box staff_sales" for="pet_box_05">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
            <div className="col-4 px-1">
              <input type="checkbox" id="pet_box_06" />
              <label className="pat_box staff_sales" for="pet_box_06">
                <div className="d-flex align-items-center mb-3">
                  <span className="staff_sales_icon my-auto"><img src={toAbsoluteUrl("/media/users/300_20.jpg")} alt="" className="mh-100 d-block rounded-circle" /></span>
                  <div className="my-auto">
                    <p className="staff_sales_name m-0">Gopinath Rajendran</p>
                    <span className="staff_sales_desc d-block">9876543210</span>
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
          </div>
        </div>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex">
          <label class="staff_title_text">staff commission</label>
          <div className="pre_status staff_commission">
              <SwitchLabels />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Commission</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Service tax</label>
        <div className="d-flex row">
          <div className="col-6">
            <label class="form-label d-block">Amount (&#2352;)</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
            <label class="form-label d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Voucher/Coupon Sales</label>
        <div className="d-flex row">
          <div className="col-6">
          <label class="form-label d-block">Amount (&#2352;)</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
          <label class="form-label d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="d-flex justify-content-end patientButton pos_fix">
          <button type="button" className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
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