import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function StaffService() {
  const classes = useStyles();
  return (
    <div className="staff_first staff_third w-100 p-6">
      <div className="form-group border-bottom">
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
      <div className="form-group">
        <div className="d-flex">
          <label className="d-block staff_title_text">Services</label>
        </div>
        <div className="serve_sec">
          <div className="row">
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_01" />
              <label className="pat_box" for="pet_box_01">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(28,183,148, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_01.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_02" />
              <label className="pat_box" for="pet_box_02">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `#FEEFF6`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_02.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_03" />
              <label className="pat_box" for="pet_box_03">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(28,88,251, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_03.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_04" />
              <label className="pat_box" for="pet_box_04">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(13,113,106, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_04.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_05" />
              <label className="pat_box" for="pet_box_05">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(84,67,172, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_05.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_06" />
              <label className="pat_box" for="pet_box_06">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(29,168,255, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_06.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_07" />
              <label className="pat_box" for="pet_box_07">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(215,116,29, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_07.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
            <div className="col-3 px-1">
              <input type="checkbox" id="pet_box_08" />
              <label className="pat_box" for="pet_box_08">
                <div className="d-flex serve_act">
                  <span>Active</span>
                  <span className="ml-auto">100</span>
                </div>
                <div className="d-block text-center">
                  <div className="service_img d-flex" style={{backgroundColor: `rgba(230,46,46, 0.1)`}}>
                    <img src={toAbsoluteUrl("/media/patients/service_icon_08.svg")} alt="" className="m-auto align-items-center" />
                  </div>
                  <div className="service_title">
                    <p>Pet Services</p>
                    <p><span>Duration:</span><span>30 Mins</span></p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group border-bottom">
        <div className="d-flex">
          <label class="staff_title_text">staff commission</label>
          <div className="pre_status">
              <SwitchLabels />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Service Commission</label>
        <div className="d-flex row">
          <div className="col-6">
          <label class="form-label d-block">Amount ()</label>
            <input placeholder="100" type="text" className={`form-control`} name=""/>
          </div>
          <div className="col-6">
          <label class="form-label d-block">Percentage (%)</label>
            <input placeholder="10%" type="text" className={`form-control`} name=""/>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label class="d-block staff_title_text pb-2">Set Product Commission</label>
        <div className="d-flex row">
          <div className="col-6">
          <label class="form-label d-block">Amount ()</label>
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