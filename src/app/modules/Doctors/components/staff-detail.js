import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});


export function StaffDetail() {
  const classes = useStyles();
  return (
    <div className="w-100">
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Name</label>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <input placeholder="First Name" type="text" className={`form-control`} name="firstname"/>
            </div>
            <div className="col-6">
              <input placeholder="Last Name" type="text" className={`form-control`} name="lastname"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Description</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <textarea placeholder="Description" type="text" className={`form-control`} name="description"> </textarea>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
            <div className="col-6">
            <label class="form-label d-block">Phone number</label>
              <input placeholder="9876543210" type="text" className={`form-control`} name="firstname"/>
            </div>
            <div className="col-6">
            <label class="form-label d-block">Email ID</label>
              <input placeholder="Sagayaraj@lookman.in" type="text" className={`form-control`} name="lastname"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Employment</label>
          </div>
          <div className="d-flex">
            <div className="col-6">
              <input placeholder="11/09/21" type="text" className={`form-control`} name="firstname"/>
            </div>
            <div className="col-6">
              <input placeholder="End Date" type="text" className={`form-control`} name="lastname"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Experience</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <input placeholder="2 Years 10 Months 7 Days" type="text" className={`form-control`} name="lastname"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex">
            <div className="col-3">
              <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
              <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" className={classes.button}>
                  <img src={toAbsoluteUrl("/media/patients/avail_visit.svg")} alt="" className="mt-0" />
                  <span>Upload Avatar</span>
                </Button>
              </label> 
            </div>
            <div className="col-9">
              <div className="color_select p-2">
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_01" name="color-code" className="" />
                  <label className="" for="color_01">
                    <span style={{backgroundColor: `#41BC87`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_02" name="color-code" className="" />
                  <label className="" for="color_02">
                    <span style={{backgroundColor: `#1DBC9C`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_03" name="color-code" className="" />
                  <label className="" for="color_03">
                    <span style={{backgroundColor: `#27AE60`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_04" name="color-code" className="" />
                  <label className="" for="color_04">
                    <span style={{backgroundColor: `#21D726`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_05" name="color-code" className="" />
                  <label className="" for="color_05">
                    <span style={{backgroundColor: `#F41D2F`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_06" name="color-code" className="" />
                  <label className="" for="color_06">
                    <span style={{backgroundColor: `#181D21`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_07" name="color-code" className="" />
                  <label className="" for="color_07">
                    <span style={{backgroundColor: `#FD575E`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_08" name="color-code" className="" />
                  <label className="" for="color_08">
                    <span style={{backgroundColor: `#FDB42B`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_09" name="color-code" className="" />
                  <label className="" for="color_09">
                    <span style={{backgroundColor: `#B17F22`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_10" name="color-code" className="" />
                  <label className="" for="color_10">
                    <span style={{backgroundColor: `#F34D1D`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_11" name="color-code" className="" />
                  <label className="" for="color_11">
                    <span style={{backgroundColor: `#FD8624`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_12" name="color-code" className="" />
                  <label className="" for="color_12">
                    <span style={{backgroundColor: `#2798B7`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_13" name="color-code" className="" />
                  <label className="" for="color_13">
                    <span style={{backgroundColor: `#2980B9`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_14" name="color-code" className="" />
                  <label className="" for="color_14">
                    <span style={{backgroundColor: `#3598DC`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_15" name="color-code" className="" />
                  <label className="" for="color_15">
                    <span style={{backgroundColor: `#528CCB`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_16" name="color-code" className="" />
                  <label className="" for="color_16">
                    <span style={{backgroundColor: `#0921EC`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <input type="radio" id="color_17" name="color-code" className="" />
                  <label className="" for="color_17">
                    <span style={{backgroundColor: `#199EC7`}}></span>
                  </label>
                </div>
                <div class="d-inline-flex color_col p-3">
                  <span className="color_add"><i>+</i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label border-bottom d-block">Preferred Gender</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <div className="pre_gender">

              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label border-bottom d-block">Status</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <div className="pre_status">
                
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label d-block">Staff booking page Link</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <input placeholder="https://www.lookman.in/" type="text" className={`form-control`} name="lastname"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-12">
            <label class="form-label border-bottom d-block">Sync with</label>
          </div>
          <div className="d-flex">
            <div className="col-12">
              <div className="pre_social">

              </div>
            </div>
          </div>
        </div>
      </div>
  );
}