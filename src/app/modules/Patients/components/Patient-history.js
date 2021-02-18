import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { PatientInvoice } from "./Patient-invoice";


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <div className="history_card w-100">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <Link  onClick={toggleDrawer('right', true)}><img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" /></Link>
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
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
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="card text-center">
            <div className="d-flex flex-row-reverse p-2">
              <img src={toAbsoluteUrl("/media/users/tick_icon.svg")} alt="" className="" />
            </div>
            <div className="MuiAvatar-root position-relative">
              <Link  onClick={toggleDrawer('right', true)}><img src={toAbsoluteUrl("/media/users/300_21.jpg")} alt="" className="" /></Link>
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
        {/* sideList('right') */}
        <PatientInvoice />
      </Drawer>

    </div>
  );
}