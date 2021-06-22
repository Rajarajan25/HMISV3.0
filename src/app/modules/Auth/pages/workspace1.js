
import React from 'react';
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WorkSpace1() {
  const classes = useStyles();
  return (
    <div className="workspace position-relative bg_FAFBFC p-7 col bor-20 h-100">
      <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 mx1460 col mb150">
        <Link to="/" className="cancel_clr">Cancel</Link>
      </div>
      <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col h-100 ml-35">

        <div className="space1 mb150">
          <div className="d-flex w-100 loginMaincontent min-heis" >
            <div className="d-flex w-100">
              <Link to="/" className="flex-column-auto logo-tb mb-5">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <div className="ml-10 mt-5 workspace-con">
                <h1>Workspace Name</h1>
                <div className="input-contain">
                  <input type="text" placeholder="Name" name="" className="" />
                </div>
                <div className="space-btn">
                  <button type="submit" className="btn btn-btn-primary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space2 mb150">
          <div className="d-flex w-100 loginMaincontent min-heis" >
            <div className="d-flex w-100">
              <Link to="/" className="flex-column-auto logo-tb mb-5">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <div className="ml-10 mt-5 workspace-con">
                <h1>Choose your Logo and Colour</h1>
                <div className="form-group">
                  <div className="d-flex pb-2">
                    <div className="col-4">
                      <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
                      <label htmlFor="raised-button-file" className="up_avatar">
                          <img src={toAbsoluteUrl("/media/auth-screen/avatar_icon.svg")} alt="" className="mt-3 mb-2" />
                          <span className="d-block">Upload image or browse</span>
                      </label> 
                    </div>
                    <div className="col-8 pr-0">
                      <ColorCode />
                    </div>
                  </div>
                </div>
                <div className="space-btn">
                  <button type="submit" className="btn btn-btn-primary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space3 mb150">
          <div className="d-flex w-100 loginMaincontent min-heis" >
            <div className="d-flex w-100">
              <Link to="/" className="flex-column-auto logo-tb mb-5">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <div className="ml-10 mt-5 workspace-con">
                <h1>Select your business type</h1>
                <div className="serve_sec overflow-service04">
                  <div className="row">
                    <div className="col px-1">
                      <input type="radio" name="busi_type" id="pet_box_01" />
                      <label className="pat_box" for="pet_box_01">
                        <div className="d-block text-center">
                          <div className="service_img d-flex">
                            <img src={toAbsoluteUrl("/media/auth-screen/service_provider.svg")} alt="" className="m-auto align-items-center" />
                          </div>
                          <div className="service_title">
                            <p>Service Provider</p>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="col px-1">
                      <input type="radio" name="busi_type" id="pet_box_02" />
                      <label className="pat_box" for="pet_box_02">
                        <div className="d-block text-center">
                          <div className="service_img d-flex">
                            <img src={toAbsoluteUrl("/media/auth-screen/meetings.svg")} alt="" className="m-auto align-items-center" />
                          </div>
                          <div className="service_title">
                            <p>Meetings</p>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="col px-1">
                      <input type="radio" name="busi_type" id="pet_box_03" />
                      <label className="pat_box" for="pet_box_03">
                        <div className="d-block text-center">
                          <div className="service_img d-flex">
                            <img src={toAbsoluteUrl("/media/auth-screen/events.svg")} alt="" className="m-auto align-items-center" />
                          </div>
                          <div className="service_title">
                            <p>Events</p>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="col px-1">
                      <input type="radio" name="busi_type" id="pet_box_04" />
                      <label className="pat_box" for="pet_box_04">
                        <div className="d-block text-center">
                          <div className="service_img d-flex">
                            <img src={toAbsoluteUrl("/media/auth-screen/classes.svg")} alt="" className="m-auto align-items-center" />
                          </div>
                          <div className="service_title">
                            <p>Classes</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-btn">
                  <button type="submit" className="btn btn-btn-primary">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space4 mb150">
          <div className="d-flex w-100 loginMaincontent min-heis" >
            <div className="d-flex w-100">
              <Link to="/" className="flex-column-auto logo-tb mb-5">
                <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
              </Link>
              <div className="ml-10 mt-5 workspace-con">
                <h1>Yor’re ready for takeoff!</h1>
                <p className="takeoff">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <img alt="Logo" src={toAbsoluteUrl("/media/auth-screen/rocket.svg")} className="rocket" />
                <div className="space-btn">
                  <button type="submit" className="btn btn-btn-primary">Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export function ColorCode() {
  const classes = useStyles();
  return (
    <div className="color_select">
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_01" name="color-code" className=""/>
            <label className="" for="color_01">
              <span style={{backgroundColor: `#41BC87`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_02" name="color-code" className="" />
            <label className="" for="color_02">
              <span style={{backgroundColor: `#1DBC9C`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_03" name="color-code" className="" />
            <label className="" for="color_03">
              <span style={{backgroundColor: `#27AE60`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_04" name="color-code" className="" />
            <label className="" for="color_04">
              <span style={{backgroundColor: `#21D726`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_05" name="color-code" className="" />
            <label className="" for="color_05">
              <span style={{backgroundColor: `#F41D2F`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_06" name="color-code" className="" />
            <label className="" for="color_06">
              <span style={{backgroundColor: `#181D21`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_07" name="color-code" className="" />
            <label className="" for="color_07">
              <span style={{backgroundColor: `#FD575E`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_08" name="color-code" className="" />
            <label className="" for="color_08">
              <span style={{backgroundColor: `#FDB42B`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_09" name="color-code" className="" />
            <label className="" for="color_09">
              <span style={{backgroundColor: `#B17F22`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_10" name="color-code" className="" />
            <label className="" for="color_10">
              <span style={{backgroundColor: `#F34D1D`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_11" name="color-code" className="" />
            <label className="" for="color_11">
              <span style={{backgroundColor: `#FD8624`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_12" name="color-code" className="" />
            <label className="" for="color_12">
              <span style={{backgroundColor: `#2798B7`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
          <input type="radio" id="color_13" name="color-code" className="" />
            <label className="" for="color_13">
              <span style={{backgroundColor: `#2980B9`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
          <input type="radio" id="color_14" name="color-code" className="" />
            <label className="" for="color_14">
              <span style={{backgroundColor: `#3598DC`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
          <input type="radio" id="color_15" name="color-code" className="" />
            <label className="" for="color_15">
              <span style={{backgroundColor: `#528CCB`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
          <input type="radio" id="color_16" name="color-code" className="" />
            <label className="" for="color_16">
              <span style={{backgroundColor: `#0921EC`}}></span>
            </label>
          </div>
          <div class="d-inline-flex color_col p-6">
            <input type="radio" id="color_17" name="color-code" className="" />
            <label className="" for="color_17">
              <span style={{backgroundColor: `#199EC7`}}></span>
            </label>
          </div>
          <div class="d-none color_col p-6">
            <span className="color_add"><i>+</i></span>
          </div>
        </div>
  );
}
