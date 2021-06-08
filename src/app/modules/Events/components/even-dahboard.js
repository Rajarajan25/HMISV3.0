import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  avatartwo: {
    margin: 10,
    width: 30,
    height: 30,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  edit: {
    width: 12,
    height: 12,
  },
  copy: {
    width: 12,
    height: 12,
  },
  delete: {
    width: 12,
    height: 12,
  },
});

// check box-end

export function Swithces() {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange("checkedA")}
              value="checkedA"
            />
          }
        />
      </FormGroup>
    </div>
  );
}

export function EventDashboard() {
  const classes = useStyles();
  return (
    <div className="clearfix event-selector">
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_01" />
          <label className="event_box" for="event_box_01">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                    <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#1EBCD4` }}
                    >
                      <img
                        src={toAbsoluteUrl("/media/events/heart.svg")}
                        alt="#"
                      />
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                           </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <span>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  </span>
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>                      
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_02" />
          <label className="event_box" for="event_box_02">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                  <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#1C6AFC` }}
                    >                      
                      AK
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <span>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  </span>
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>                      
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_03" />
          <label className="event_box" for="event_box_03">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                  <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#0d716a` }}
                    >
                      S
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span> 
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>                      
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_04" />
          <label className="event_box" for="event_box_04">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                  <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#fff` }}
                    >                     
                      <img  src={toAbsoluteUrl("/media/events/user-ss-one.png")} alt="#" />
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <span>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  </span>
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>        
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_05" />
          <label className="event_box" for="event_box_05">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                  <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#00b794` }}
                    >      
                      <img src={toAbsoluteUrl("/media/events/home.svg")} alt="#" />
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <span>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  </span>
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>                      
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_06" />
          <label className="event_box" for="event_box_06">
            <div className="card event-table-pro selected" id="selceded">
              <div className="event-table-provider">
                <div className="event-table">
                  <Button className="events-ag-color">ENT</Button>
                  <Swithces />
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                </div>
                <div className="event-content">
                  <div className="avather-image">
                    <span
                      className="listprofileIcon-event"
                      style={{ backgroundColor: `#fff` }}
                    >
                      <img src={toAbsoluteUrl("/media/events/user-ss-one.png")} alt="#" />
                    </span>
                  </div>
                  <div className="avather-content">
                    <h6>Event</h6>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying…
                    </p>
                  </div>
                  <div className="avather-icon-edit">
                    <ul>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/edit.svg")}
                            className={classes.edit}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/copy.svg")}
                            className={classes.copy}
                          />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                          <img
                            alt="icons"
                            src={toAbsoluteUrl("/media/events/delete.svg")}
                            className={classes.delete}
                          />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="provider-content" id="cr">
                <div className="porvider">
                  <p>Provider : </p>
                  <span>
                  <img
                    alt="Remy Sharp"
                    src={toAbsoluteUrl("/media/events/usertwo.png")}
                    className={classes.avatartwo}
                  />
                  </span>
                  <a href="#">AnandaKumar</a>
                </div>
                <div className="duration">
                  <p>
                    <span>
                    Duration :
                    </span>
                    <a href="#" className="p-link">
                      30 Minis
                    </a>
                  </p>
                  <a href="#" className="p-link">                    
                    <span>                      
                      <img
                        src={toAbsoluteUrl("/media/events/link.svg")}
                        alt="#"
                      />
                    </span>
                    CopyLink
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
