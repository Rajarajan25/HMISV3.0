import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Card from "react-bootstrap/Card";
import CloseIcon from "@material-ui/icons/Close";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
import Menu from "@material-ui/core/Menu";
import { styled, alpha } from "@material-ui/core/styles";


const useStyles = makeStyles({
  avatar: {
    margin: 5,
  },
  avatartwo: {
    margin: 7,
    width: 30,
    height: 30,
  },
  bigAvatar: {
    margin: 5,
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

// menubutton
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 100,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiList-root": {
      padding: "4px 0",
    },
    "& .MuiListItem-root": {
      ...theme.typography.body1,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));

// check box-end

export function Swithces() {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="swich-btn">
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

export function ColorDropdownMenu() {
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="ul-list-dropmenu">
        <li>
          <img alt="icons" src={toAbsoluteUrl("/media/events/edit.svg")} />
          <span>Edit</span>
        </li>
        <li>
          <img alt="icons" src={toAbsoluteUrl("/media/events/copy.svg")} />
          <span>Copy</span>
        </li>
        <li>
          <img alt="icons" src={toAbsoluteUrl("/media/events/delete.svg")} />
          <span>Delete</span>
        </li>
      </ul>
      {/*end::Navigation*/}
    </>
  );
}

export function Bottomeventselector() {
  return ( 
  <div>
    <div className="drawer-icons-bottom-content">
      <div className="drawer-close-icon">
        <span className="close-icon">
          <CloseIcon />
        </span>
        <span className="even-number-of-count">1 Event Selected</span>
      </div>
      <span className="v-br"></span>
      <div className="drawer-icons-bottom">
        <ul className="ul-event-selected-menu">
          <li>
            <span>
              <img
                alt="icons"
                src={toAbsoluteUrl("/media/events/copy-event.svg")}
              />
            </span>
          </li>
          <li>
            <span>
              <img
                alt="icons"
                src={toAbsoluteUrl("/media/events/calendar.svg")}
              />
            </span>
          </li>
          <li>
            <span>
              <img
                alt="icons"
                src={toAbsoluteUrl("/media/events/event-delete.svg")}
              />
            </span>{" "}
          </li>
        </ul>
      </div>
    </div>
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
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span    style={{ backgroundColor: `#c5f0c0`,border:`1px solid #1b850f`,color:`#166e0c`}} > viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-profile-content">
                    <div className="card-lable">
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
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_03" />
          <label className="event_box" for="event_box_03">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span style={{ backgroundColor: `#fdebeb`,border:`1px solid #e02525`,color:`#ce1e1e`}} > viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                    <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#1D58FF` }}
                      >
                        AK
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>
        

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_04" />
          <label className="event_box" for="event_box_04">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span style={{ backgroundColor: `#fff`,border:`1px solid #f9d66f`,color:`#f8cf57`}}> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#0D716A` }}
                      >
                        S
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_05" />
          <label className="event_box" for="event_box_05">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span > viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `` }}
                      >
                        <img
                          src={toAbsoluteUrl("/media/events/user-ss-one.png")}
                          alt="#"
                          style={{ width: `100%` }}
                        />
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_06" />
          <label className="event_box" for="event_box_06">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span style={{ backgroundColor: `#fdebeb`,border:`1px solid #e02525`,color:`#ce1e1e`}}> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#00B794` }}
                      >
                        <img
                          src={toAbsoluteUrl("/media/events/home.svg")}
                          alt="#"
                        />
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_07" />
          <label className="event_box" for="event_box_07">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `` }}
                      >
                        <img
                          src={toAbsoluteUrl("/media/events/user-ss-one.png")}
                          alt="#"
                          style={{ width: `100%` }}
                        />
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_08" />
          <label className="event_box" for="event_box_08">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span  style={{ backgroundColor: `#c5f0c0`,border:`1px solid #1b850f`,color:`#166e0c`}}> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#1D58FF` }}
                      >
                        AK
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_09" />
          <label className="event_box" for="event_box_09">
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `` }}
                      >
                        <img
                          src={toAbsoluteUrl("/media/events/user-ss-one.png")}
                          alt="#"
                        />
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-4">
          <input type="checkbox" id="event_box_010" />
          <label className="event_box" for="event_box_010">
            {/* <Link to="#" onClick={toggleDrawer('bottom', true)}>Anand</Link> */}
            <Card className="event-card">
              <Card.Body>
                <div className="event-provider">
                  <div className="card-swich-button">
                    <span style={{ backgroundColor: `#fff`,border:`1px solid #f9d66f`,color:`#f8cf57`}}> viral meningitis</span>
                    <Swithces />
                    <Dropdown
                      drop="down"
                      alignCenter
                      className="dropdown h-100 dropmenu-item-list"
                    >
                      <Dropdown.Toggle
                        as={DropdownItemToggler}
                        id="kt_quick_actions_search_toggle"
                        className="h-100 dropmenu-item-list-content "
                      >
                        <MoreVertIcon />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu p-0 mt-2 dropdown-menu-md drop_nav">
                        <ColorDropdownMenu />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="card-profile-content">
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#5443AC` }}
                      >
                        JP
                      </span>
                    </div>
                    <div className="card-summary">
                      <span>Event</span>
                      <span>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-user-details">
                  <ListGroup horizontal as="ul">
                    <ListGroup.Item as="li">
                      <span> Provider:</span>
                      <span>
                        <img
                          alt="Remy Sharp"
                          src={toAbsoluteUrl("/media/events/usertwo.png")}
                          className={classes.avatartwo}
                        />
                      </span>
                      <span className="pro-name">AnandaKumar</span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span className="duration-content-d"> Duration : </span>{" "}
                      <span> 30 Minis </span>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <span>
                        <img
                          src={toAbsoluteUrl("/media/events/link.svg")}
                          alt="#"
                        />
                      </span>
                      <span className="copylink">CopyLink</span>
                    </ListGroup.Item>
                  </ListGroup>
                  {/* <TemporaryDrawer /> */}
                </div>
              </Card.Body>
            </Card>
          </label>
        </div>
      </div>
      <Bottomeventselector />
    </div>
  );
}
