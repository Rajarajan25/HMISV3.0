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
        <Popup trigger= {<button
           className="btn btn-primary btn-icon font-weight-bolds   "
           data-toggle="modal"
           data-target="#kt_chat_modal"
          > EDIT</button>}
           position="right center"
          closeOnDocumentClick>
<span>
<div className="modal-header justify-content-center">
  <div className="d-inline-block">
    <div className="d-flex">
      <div className="leftmenumodalProfileicon d-inline-block mr-2">
        <span className="bg-blue m-0">S</span>
      </div>
      <div className="userName d-flex mr-2">
        <span className="m-auto">name</span>
      </div>
      <div className="dropdown d-flex">
        <a
          className="d-flex m-auto"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.704"
            height="21.259"
            viewBox="0 0 20.704 21.259"
          >
            <g
              id="noun_Color_Picker_1005580"
              data-name="noun_Color Picker_1005580"
              transform="translate(-2.48 -1.335)"
            >
              <path
                id="Path_391"
                data-name="Path 391"
                d="M82.834,64.432a.245.245,0,0,1-.2-.382c.132-.2.26-.4.377-.61a.246.246,0,0,1,.426.245c-.125.218-.257.434-.4.64A.245.245,0,0,1,82.834,64.432Z"
                transform="translate(-60.4 -46.708)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
              <path
                id="Path_392"
                data-name="Path 392"
                d="M13.525,25.721a10.642,10.642,0,0,1-1.088-.054.247.247,0,0,1,.047-.493,10.672,10.672,0,0,0,1.414.044.245.245,0,1,1,0,.49Zm1.823-.154a.246.246,0,0,1-.042-.49,10.445,10.445,0,0,0,1.375-.333.245.245,0,0,1,.147.468,10.874,10.874,0,0,1-1.439.348Zm-4.313-.137h-.056a10.918,10.918,0,0,1-1.414-.441.246.246,0,1,1,.176-.458,10.423,10.423,0,0,0,1.35.422.247.247,0,0,1-.056.49Zm7.068-.735A.245.245,0,0,1,18,24.228a10.45,10.45,0,0,0,1.225-.691.245.245,0,1,1,.267.412,11.009,11.009,0,0,1-1.292.735.245.245,0,0,1-.1.01Zm-9.764-.311a.245.245,0,0,1-.118-.032,10.972,10.972,0,0,1-1.243-.8.245.245,0,0,1,.294-.392,10.484,10.484,0,0,0,1.184.77.245.245,0,0,1-.12.458Zm12.183-1.265a.245.245,0,0,1-.159-.431,10.587,10.587,0,0,0,1-1,.245.245,0,1,1,.368.324,11.087,11.087,0,0,1-1.051,1.042A.245.245,0,0,1,20.522,23.118Zm-14.5-.466a.245.245,0,0,1-.172-.071,10.992,10.992,0,0,1-.98-1.108.245.245,0,0,1,.387-.3A10.567,10.567,0,0,0,6.2,22.231a.245.245,0,0,1-.172.419ZM4.256,20.371a.245.245,0,0,1-.213-.123,10.994,10.994,0,0,1-.652-1.328.245.245,0,1,1,.453-.186A10.482,10.482,0,0,0,4.467,20a.245.245,0,0,1-.211.368ZM3.161,17.7a.245.245,0,0,1-.245-.184,10.9,10.9,0,0,1-.265-1.458A.247.247,0,0,1,3.141,16a10.352,10.352,0,0,0,.26,1.39.245.245,0,0,1-.245.306Zm-.336-2.87h0a.245.245,0,0,1-.245-.245,11.055,11.055,0,0,1,.125-1.47.248.248,0,0,1,.49.074,10.587,10.587,0,0,0-.12,1.409A.245.245,0,0,1,2.825,14.83Zm.436-2.855a.245.245,0,0,1-.069,0,.245.245,0,0,1-.167-.3,10.871,10.871,0,0,1,.517-1.39.245.245,0,1,1,.446.2,10.342,10.342,0,0,0-.49,1.326A.245.245,0,0,1,3.261,11.975ZM4.45,9.342a.24.24,0,0,1-.206-.368,11.053,11.053,0,0,1,.87-1.2.245.245,0,1,1,.377.314,10.523,10.523,0,0,0-.833,1.13.245.245,0,0,1-.208.12ZM6.3,7.122A.245.245,0,0,1,6.136,6.7a10.987,10.987,0,0,1,1.157-.924.245.245,0,1,1,.279.4,10.538,10.538,0,0,0-1.105.882.245.245,0,0,1-.167.066Z"
                transform="translate(0 -3.228)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
              <path
                id="Path_393"
                data-name="Path 393"
                d="M26.769,2.24a.245.245,0,0,1-.11-.463c.223-.113.453-.221.681-.316a.245.245,0,0,1,.191.451c-.218.093-.439.194-.652.3A.245.245,0,0,1,26.769,2.24Z"
                transform="translate(-18.077 0)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
              <path
                id="Path_394"
                data-name="Path 394"
                d="M.828,0H1.934A.826.826,0,0,1,2.76.826V4.549H0V.828A.826.826,0,0,1,.828,0Z"
                transform="matrix(0.694, 0.72, -0.72, 0.694, 18.607, 4.445)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
              <path
                id="Path_395"
                data-name="Path 395"
                d="M35.182,27.082l1.4,1.458-4.62,4.453a2.713,2.713,0,0,1-.98.61l-1.716.6v-.012l.659-1.679a2.713,2.713,0,0,1,.647-.968l4.6-4.463m0-.52L30.308,31.27a3.1,3.1,0,0,0-.735,1.1l-.657,1.679a.382.382,0,0,0,.353.524.387.387,0,0,0,.13-.022l1.7-.6a3.1,3.1,0,0,0,1.125-.694l4.884-4.71L35.194,26.56Z"
                transform="translate(-19.861 -18.96)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
              <path
                id="Path_396"
                data-name="Path 396"
                d="M54.8,26.983a.184.184,0,0,1-.132-.056l-3.1-3.22a.184.184,0,0,1,.265-.245l3.1,3.21a.184.184,0,0,1-.132.311Z"
                transform="translate(-36.96 -16.594)"
                fill="#707070"
                stroke="#707070"
                strokeWidth="0.2"
              />
            </g>
          </svg>
        </a>
        <div
          className="dropdown-menu dropdown-menu-lg-right"
          dropdown
          auto-close="disabled"
        >
          <div className="dropdown-item" href="#">
            <ul className="list-inline customColorlist">
              <li>
                <span className="customProfileBG1">B</span>
                <span className="customProfileBG2">B</span>
                <span className="customProfileBG3">B</span>
                <span className="customProfileBG4">B</span>
                <span className="customProfileBG5">B</span>
                <span className="customProfileBG6">B</span>
                <span className="customProfileBG7">B</span>
                <span className="customProfileBG8">B</span>
                <span className="customProfileBG9">B</span>
                <span className="customProfileBG10">B</span>
                <span className="customProfileBG11">B</span>
                <span className="customProfileBG12">B</span>
              </li>
              <li>
                <div className="card bg-color">
                  <div className="card-body text-center d-flex justify-content-center align-items-center flex-column">
                    <p>My background color will be changed</p>
                    <span
                      id="color-picker-3"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Color Picker
</span>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body text-center d-flex justify-content-center align-items-center flex-column">
                    <p className="text-color">My text color will be changed</p>
                    <button
                      id="color-picker-4"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Color Picker
</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex">
      <div className="userName d-flex">
        <span className="m-auto">Online</span>
      </div>
    </div>
  </div>
  <div className="d-flex ml-auto my-auto">
    <div className="leftmenumodalProfileicon d-inline-block mr-2">
      <span className="bg-blue m-0">+</span>
    </div>
  </div>
  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
</div>
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