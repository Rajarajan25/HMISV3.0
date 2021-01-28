/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from "react";
import objectPath from "object-path";
import { useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import { QuickActions } from "./components/QuickActions";
import { BreadCrumbs } from "./components/BreadCrumbs";
import Popup from "reactjs-popup";

import Warper from "./Warper";
import './components/index.css'
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";
import { useHtmlClassService } from "../../_core/MetronicLayout";


const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

function  SubHeader(){
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();

  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      subheaderFixed: objectPath.get(uiService.config, "subheader.fixed"),
      subheaderMobileToggle: objectPath.get(
        uiService.config,
        "subheader.mobile-toggle"
      ),
      subheaderCssClasses: uiService.getClasses("subheader", true),
      subheaderContainerCssClasses: uiService.getClasses(
        "subheader_container",
        true
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;
    subheader.setBreadcrumbs(breadcrumbs);
    subheader.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
    // eslint-disable-next-line
  }, [location.pathname]);

  // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
  useEffect(() => {}, [subheader]);

  return (
    <div
      id="kt_subheader"
      className={`subheader py-3 py-lg-8 ${layoutProps.subheaderCssClasses}`}
    >
      <div
        className={`${layoutProps.subheaderContainerCssClasses} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
      >
        {/* Info */}
        
        <div className="d-flex align-items-center flex-wrap mr-1">
          {/* begin::Mobile Toggle */}
          {layoutProps.subheaderMobileToggle && (
            <button
              className="burger-icon burger-icon-left mr-4 d-inline-block d-lg-none"
              id="kt_subheader_mobile_toggle"
            >
              <span />
            </button>
          )}
          {/* end::Mobile Toggle */}

          {/* begin::Heading */}
          <div className="d-flex align-items-baseline mr-5">
            {/* begin::Title */}
            <h2 className="subheader-title text-dark font-weight-bold my-2 mr-3">
              {subheader.title}
            </h2>
            {/* end::Title */}

            <BreadCrumbs items={subheader.breadcrumbs} />
          </div>
          {/* end::Heading */}
        </div>
        {/* Info */}

        {/* Toolbar */}
        <div className="d-flex align-items-center flex-wrap">
        <div className="topMiddlecontent">

        <Popup
    trigger={open => (
      <button className="btn btn-primary btn-icon font-weight-bolds   ">EDIT    {open ? "Opened" : "Closed"}</button>
    )}
    position="bottom center"
    closeOnDocumentClick
  >
       
<span>

<div className="modal-body p-0">
  <div className="d-flex justify-content-center">
    <div className="d-flex py-4 px-0 col-10 ">
      <form className="w-100" action="/action_page.php">
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="userName">Name</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <select className="custom-select" id="usertype" aria-label="usertype">
                  <option selected>Dr</option>
                  <option value={1}>St</option>
                  <option value={1}>Mr</option>
                  <option value={2}>Miss</option>
                  <option value={3}>Mrs</option>
                </select>
              </div>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
                placeholder="User name"
                id="name"
              />
              <input
                type="text"
                aria-label="Degree"
                className="form-control"
                placeholder="Degree"
                id="degree"
              />
            </div>
          </div>
          <div className="form-group d-none">
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="userName"
              name="userName"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Official Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Official Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Personal Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Personal Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Mobile</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your number"
              id="mobileNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Alternative number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your alternative number"
              id="alternativeNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="dob">Date of birth</label>
            <div
              className="input-group date"
              id="datepicker-only-init"
              data-target-input="nearest"
            >
              <input
                type="text"
                className="form-control datetimepicker-input"
                data-target="#datepicker-only-init"
              />
              <div
                className="input-group-append"
                data-target="#datepicker-only-init"
                data-toggle="datetimepicker"
              >
                <div className="input-group-text rounded-0">
                  <i className="fa fa-calendar" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="sex">Sex</label>
            <select className="form-control" required>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="dob">Blood Group</label>
            <input
              type="text"
              className="form-control"
              placeholder="Blood group"
              id="bloodGroup"
              name="bloodGroup"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Location</label>
            <select className="form-control" required>
              <option>KK Nagar, Chennai</option>
              <option>Adayar, Chennai</option>
              <option>Velachery, Chennai</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Speciality</label>
            <select className="form-control" required>
              <option>General Medicine</option>
              <option>General Surgery</option>
              <option>Cardiologist</option>
              <option>Neuro Specialist</option>
              <option>Skin Specialist</option>
              <option>Diabetologist</option>
              <option>ENT Specialist</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zipcode</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="Zipcode"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="userName">Comments</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                required
                defaultValue={''}
              />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> I accept the
            terms and Conditions.
          </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Save
          </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</span>
</Popup></div>
          <button
            type="button"
            className={`btn btn-primary btn-fixed-height font-weight-bold px-2 px-lg-5 mr-2`}
          >
            <span className="svg-icon svg-icon-lg">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Add-user.svg"
                )}
              />
            </span>
            {` `}New Member
          </button>

          <QuickActions />

          {/* Button */}

         
          <button
            className="btn btn-primary btn-icon font-weight-bolds   "
            data-toggle="modal"
            data-target="#kt_chat_modal"
          >
            <span className="svg-icon svg-icon-lg">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Group-chat.svg"
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Warper(SubHeader);