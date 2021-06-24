import 'date-fns';
import React ,{ Fragment }from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {DatePickersUtil} from '../../Components/DateAndTimePicker'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Dropdown } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {DropdownItemToggler} from "../../../../_metronic/_partials/dropdowns";
import { Modal } from "react-bootstrap";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

import Select, { components } from 'react-select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const countries = [
  {
    value: "NG",
    label: "Nigeria",
    flag: "https://www.countryflags.io/NG/shiny/32.png"
  },
  {
    value: "US",
    label: "United States",
    flag: "https://www.countryflags.io/US/shiny/32.png"
  },
  {
    value: "IL",
    label: "Isreal",
    flag: "https://www.countryflags.io/IL/shiny/32.png"
  },
  {
    value: "RO",
    label: "Romania",
    flag: "https://www.countryflags.io/RO/shiny/32.png"
  },
  {
    value: "DE",
    label: "Germany",
    flag: "https://www.countryflags.io/DE/shiny/32.png"
  },
  {
    value: "BS",
    label: "Bahamas",
    flag: "https://www.countryflags.io/BS/shiny/32.png"
  },
  {
    value: "CN",
    label: "China",
    flag: "https://www.countryflags.io/CN/shiny/32.png"
  },
  {
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  },
  {
    value: "DE",
    label: "Germany",
    flag: "https://www.countryflags.io/DE/shiny/32.png"
  },
  {
    value: "BS",
    label: "Bahamas",
    flag: "https://www.countryflags.io/BS/shiny/32.png"
  },
  {
    value: "CN",
    label: "China",
    flag: "https://www.countryflags.io/CN/shiny/32.png"
  },
  {
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  },
  {
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  },
  {
    value: "DE",
    label: "Germany",
    flag: "https://www.countryflags.io/DE/shiny/32.png"
  },
  {
    value: "BS",
    label: "Bahamas",
    flag: "https://www.countryflags.io/BS/shiny/32.png"
  },
  {
    value: "CN",
    label: "China",
    flag: "https://www.countryflags.io/CN/shiny/32.png"
  },
  {
    value: "SO",
    label: "Somalia",
    flag: "https://www.countryflags.io/SO/shiny/32.png"
  }
];
const Menu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <components.Menu {...props}>
        <div>
          {props.selectProps.fetchingData ? (
            <span className="fetching">Fetching data...</span>
          ) : (
            <div>{props.children}</div>
          )}
    
          <button
            className={"change-data"} aria-describedby={id} variant="contained" onClick={handleClick}>
            Add New
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>The content of the Popover.</Typography>
          </Popover>
        </div>

      </components.Menu>
    </Fragment>
  );
};

export function ServiceDetail() {
  const classes = useStyles();
  return (
    <div className="staff_first w-100 p-4">
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service Name</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
          <input placeholder="Spa" type="text" className={`form-control`} name="firstname"/>
          </div>
        </div>
      </div>
      <Select components={{ Menu }} openModal={()=>{}} options={countries}/>
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
        <div className="col-12">
          <label class="form-label d-block">Category</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <Dropdown drop="down" alignCenter className="dropdown h-100">
                <Dropdown.Toggle as={DropdownItemToggler} id="kt_quick_actions_search_toggle" className="h-100">
                  <input placeholder="Category" type="text" className={`form-control`} name=""/>
                </Dropdown.Toggle>
                <Dropdown.Menu  className="dropdown-menu p-0 mt-1 dropdown-menu-md drop_nav">
                  <ProviderDropdownMenu />
                </Dropdown.Menu>
            </Dropdown>
          
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex">
          <div className="col-3">
            <input accept="image/*" className={classes.input} style={{ display: 'none' }} id="raised-button-file" multiple type="file"/>
            <label htmlFor="raised-button-file" className="up_avatar">
              <Button variant="raised" component="span" className={classes.button}>
                <img src={toAbsoluteUrl("/media/patients/avatar_icon.svg")} alt="" className="d-block mb-2" />
                <span className="d-block">Upload icon Or image</span>
              </Button>
            </label> 
          </div>
          <div className="col-9 pr-0">
            <div className="color_select">
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_01" name="color-code" className=""/>
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
          <label class="form-label d-block">Preferred Gender</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_gender d-flex">
              <div className="gender_col">
                <input type="radio" id="gender_01" name="gender_img" className=""  />
                <label className="avatar_col" for="gender_01">
                  <span className="gen_img male"><img src={toAbsoluteUrl("/media/patients/male_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Male</span>
                </label>
              </div>
              <div className="gender_col">
                <input type="radio" id="gender_02" name="gender_img" className="" />
                <label className="avatar_col" for="gender_02">
                  <span className="gen_img female"><img src={toAbsoluteUrl("/media/patients/female_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Female</span>
                </label>
              </div>
              <div className="gender_col">
                <input type="radio" id="gender_03" name="gender_img" className="" />
                <label className="avatar_col" for="gender_03">
                  <span className="gen_img both"><img src={toAbsoluteUrl("/media/patients/both_icon.svg")} alt="" className="d-inline-flex" /></span>
                  <span className="d-flex justify-content-center">Both</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service Type</label>
        </div>
        <div className="col-12">
          <div className="d-flex event-range">
            <div className="event-radio">
              <input type="radio" id="service_type_01" name="service_type" className="" />
              <label className="eprice" for="service_type_01">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Public</span>
              </label>
            </div>
            <div className="event-radio">
              <input type="radio" id="service_type_02" name="service_type" className=""/>
              <label className="eprice" for="service_type_02">
                  <span className="circle-border"></span>
                  <span className="chk_txt">Private</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <div className="col-12">
          <div className="d-flex">
            <label class="form-label d-block">Recurring Service</label>
            <div className="pre_status staff_commission">
                <SwitchLabels />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <div className="d-flex">
            <label class="form-label d-block">Limit booking</label>
            <div className="pre_status staff_commission">
                <SwitchLabels />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="col-12">
          <label class="form-label d-block">Service URL</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <a href="https://www.lookman.in/" className="booking_link" target="blank">
            https://www.lookman.in/
            </a>
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

export function ProviderDropdownMenu() {
  return <>
      {/*begin::Navigation*/}
        <ul className="navi navi-hover">
           <li className="navi-item">
              <div className="service_search position-relative">
                 <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                 <input type="text" placeholder="Search" className="form-control" />
              </div>
              <PopEvent />
           </li>
           <li className="navi-item">
              <div className="dropdown-menu-search-main">
                 <div className="service_select">
                    <div class="d-flex justify-content-left py-1">
                       <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(230, 81, 27,0.1)`}}>
                          <span className="ProviderName" style={{color: `rgba(230, 81, 27,1)`}}>Gopinath</span> 
                       </span>
                    </div>
                    <div class="d-flex justify-content-left py-1">
                       <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(10, 49, 232,0.1)`}}>
                          <span className="ProviderName" style={{color: `rgba(10, 49, 232,1)`}}>Mani</span> 
                       </span>
                    </div>
                    <div class="d-flex justify-content-left py-1">
                       <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(29, 188, 156,0.1)`}}>
                          <span className="ProviderName" style={{color: `rgba(29, 188, 156,1)`}}>Sankar</span> 
                       </span>
                    </div>
                    <div class="d-flex justify-content-left py-1">
                       <span className="specialInfo text-white position-relative" style={{backgroundColor: `rgba(234, 128, 252,0.1)`}}>
                          <span className="ProviderName" style={{color: `rgba(234, 128, 252,1)`}}>Kavinesh</span> 
                       </span>
                    </div>
                 </div>
              </div>
           </li>
        </ul>
     {/*end::Navigation*/}
  </>
}

export class PopEvent extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-end patientButton add_timing" >
          <span type="button" className="btn btn-primary m-0" onClick={this.handleShow}>+ Add New</span>
        </div>

        <Modal
          className="timemodal"
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            Add New
          </Modal.Body>
        </Modal>

      </>
    );
  }
}

