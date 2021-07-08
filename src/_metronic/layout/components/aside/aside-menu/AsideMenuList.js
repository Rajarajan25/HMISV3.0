/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import {DatePickersKeyboardUtil} from "../../../../../app/components/DateAndTimePicker"
import {
  DropdownItemToggler,
  DropdownMenu4,
} from "../../../../_partials/dropdowns";


import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export function AsideMenuList({ layoutProps, menuList = [], title = "" }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <div className="pt-2">
      <div className="d-flex position-relative customSearch">
        <span className="my-auto">HMIS</span>
        <div className="menuquickIconset d-flex ml-auto my-auto">
          <Dropdown drop="down" alignRight>
            <Dropdown.Toggle
              as={DropdownItemToggler}
              id="kt_quick_actions_search_toggle"
            >
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip id="quick-search-tooltip" className="tool_bg">
                    Quick search
                  </Tooltip>
                }
              >
                <a href="#" className="h-40px w-40px flex-shrink-0">
                  <span className="svg-icon svg-icon-sm">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Custom/Settings.svg"
                      )}
                    />
                  </span>
                </a>
              </OverlayTrigger>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md">
              <DropdownMenu4 />
            </Dropdown.Menu>
          </Dropdown>
          <a href="#" className="mx-3  flex-shrink-0">
            <span className="svg-icon svg-icon-sm searchIcon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Custom/Search.svg")} />
            </span>
          </a>
        </div>

        {/* begin::Form */}
        <div className="searchInput d-none">
          <form>
            <div className="d-flex">
              <div className="input-icon h-40px w-100">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid h-40px"
                  placeholder="Search..."
                  id="generalSearch"
                  autoComplete="false"
                />
                <span>
                  <span className="svg-icon svg-icon-lg">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/General/Search.svg")}
                    />
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
        {/* end::Form */}
      </div>

      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {title && <li className="font-weight-500 font-size-14 color_292D34 mt-3 mb-3 d-block text-uppercase ml-2">{title}</li>}
        {/*begin::1 Level*/}
        {menuList.map((item, i) => {
          return (item.custom_ui ? 
          
                <li><CalendarPicker /></li>:
                <li
                  className={`menu-item ${item.isMenu&&"menu-item-submenu"} ${getMenuItemActive(item.to, item.isMenu)}`}
                  aria-haspopup="true"
                  data-menu-toggle="hover"
                  key={i}
                >
                  <NavLink className={`menu-link menu-toggle ${item.isMenu && "ml-5"}`} to={item.to}>
                    {item.isMenu && (<>
                      <i className="fas fa-caret-right" />
                      <span className="svg-icon menu-icon d-flex flex-column rounded customMenutexticon bgCustom1" style={{ backgroundColor: item.backgroundColor }}>
                        {item.shortName}
                      </span>
                    </>)}
                    {!item.isMenu && <span className="menu-sub-icons" style={{ backgroundColor: item.backgroundColor }}>
                      <img src={toAbsoluteUrl(item.icon)} alt={item.name} />
                    </span>}
                    <span className="menu-text">{item.name}</span>
                  </NavLink>
                  {item.isMenu && <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                      {item.subMenuList && item.subMenuList.map((subitem, i) => {
                        return (
                          <li
                            key={i}
                            className={`menu-item  ${getMenuItemActive(subitem.to)}`}
                            aria-haspopup="true"
                          >
                            <NavLink
                              className="menu-link"
                              to={subitem.to}
                            >
                              <i className="menu-bullet">
                                <span
                                  className="menu-sub-icons"
                                  style={{ backgroundColor: subitem.backgroundColor }}
                                >
                                  <img
                                    src={toAbsoluteUrl(subitem.icon)}
                                    alt={subitem.name}
                                  />
                                </span>
                              </i>
                              <span className="menu-text">{subitem.name}</span>
                            </NavLink>
                          </li>
                        )
                      })}
                    </ul>
                  </div>}
                </li>
            
          )
        })}
        {/*end::1 Level*/}
      </ul>
      {/* end::Menu Nav */}
    </div>
  );
}


export function CalendarPicker() {
  return (
    <div className="clearfix">
      <div className="custom-picker">
        <DatePickersKeyboardUtil /> 
      </div>
      <div className="calendar-filter ml-2">
        <div className="filter-title d-flex align-items-center mb-5">
          <img src={toAbsoluteUrl("/media/events/filter-icon.svg")} alt="" className="" />
          <span className="ml-3">Filter</span>
        </div>
        <div className="clearfix">
          <FilterPanels />
        </div>
      </div>
    </div>
  )
}

export default function FilterPanels() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Staff</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="form-group mb-0">
                <input type="text" className="form-control w-100" id="inputEmail4" placeholder="Search" />
              </div>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Status</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="status1" />
                <label className="custom-control-label complete" for="status1">Completed</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="status2" />
                <label className="custom-control-label upcoming" for="status2">Upcoming/Ongoing</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="status3" />
                <label className="custom-control-label cancel" for="status3">Cancel</label>
              </div>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Service</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="clearfix">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="service1" />
                <label className="custom-control-label" for="service1">Psychiatry</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="service2" />
                <label className="custom-control-label" for="service2">Dermatology</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="service3" />
                <label className="custom-control-label" for="service3">Pediatrics</label>
              </div>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}