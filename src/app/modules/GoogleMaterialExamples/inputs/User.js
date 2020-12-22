import React from 'react';
import UserDetail from './UserDetail';
import { UserProvider } from './UserContext';
import InfiniteUserList from './InfiniteUserList';
import AddUser from './AddUser'
export default function User() {
  return (

    <UserProvider>
      <div className="d-flex flex-grow-1 p-0">
        <div id="js-chat-contact" className="flex-wrap position-relative slide-on-mobile slide-on-mobile-left minWidth250  border-right-0 shadow-4 ml-2 bg-white">
          <div className="d-flex flex-column bg-white position-relative w-100">
            <div className="px-3 py-4 border-bottom">
              <div className="d-flex">
              <div className="d-flex-1">
                <input type="text" className="form-control bg-white searchInput" placeholder="Search key words" />
              </div>
              <div className="d-flex-2 pl-2 customUseractivity">
                <div className="btn-group dropdown">
                  {/* <button className="btn btn-info rounded-circle btn-icon waves-effect waves-themed" type="button"><i className="fal fa-plus" /></button>
                  <div className="dropdown-menu" style={{}}>
                    <a className="dropdown-item" href="#"> Add a new locations</a>
                    <a className="dropdown-item" href="#">Add a new service provider</a>
                  </div> */}
                  <AddUser/>
                </div>
              </div>
                <div className="d-flex-3 pl-2 customUseractivity my-auto d-none">
                  <div className="btn-group dropdown">
                    <button type="button" className="btn btn-primary rounded-circle btn-icon waves-effect waves-themed" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fal fa-bars" />
                    </button>
                    <div className="dropdown-menu" style={{}}>
                      <div className="dropdown-header">With selected</div>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Delete</a>
                      <a className="dropdown-item" href="#">Select all provider</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Set visible</a>
                      <a className="dropdown-item" href="#">Hide</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 custom-scrollbar filterNav leftScrollbar">
              <div className="w-100">
                <div className="tab-content py-0">
                  <div className="tab-pane fade show active" id="Activeuser" role="tabpanel">
                    <ul className="list-unstyled m-0 usersSelection animate__animated animate__fadeIn animate__faster">
                      <InfiniteUserList />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-backdrop" data-action="toggle" data-class="slide-on-mobile-left-show" data-target="#js-chat-contact" /> {/* end left slider */}
        <div className="d-flex flex-column flex-grow-1 bg-white staffDetails ml-3 mt-3 border rounded">
          <div className="flex-grow-0  bg-white">
            <div className="col-lg-12 px-0">
              <div className="py-2 w-100 border-0">
                <div className="row mx-0">
                  <div className="col-12 col-md-5 col-sm-6 d-flex">
                    <div className="d-flex my-auto w-100">
                      <div className="js-easy-pie-chart color-success-500 position-relative d-inline-flex align-items-center justify-content-center" data-percent={86} data-piesize={80} data-linewidth={7} data-scalelength={4}>
                        <div className="d-flex align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom">
                          <img src="img/demo/avatars/avatar-admin.png" className="profile-image-md rounded-circle" alt="Dr. Codex Lantern" />
                        </div>
                      </div>
                      <h5 className="flex-2 mb-0 fw-700 my-auto ml-2">
                        Dr. Codex Lantern
                        <small className="text-muted mb-0">Toronto, Canada</small>
                      </h5>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 col-sm-6 my-auto">
                    <div className="row">
                      <div className="col-12 col-sm-5">
                        <div className="subheader-block d-none d-sm-flex align-items-center">
                          <div className="d-inline-flex flex-column justify-content-center mr-3">
                            <span className="fw-300 fs-lg d-block opacity-60">
                              <small>Total Revenue</small>
                            </span>
                            <span className="fw-500 fs-xl d-block color-info-500">
                              $47,000
                            </span>
                          </div>
                          <span className="js-easy-pie-chart color-primary-500 position-relative d-flex align-items-center justify-content-center" data-percent={45} data-scalelength={2}>
                            <span className="js-percent d-flex align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom" />
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-5 border-left">
                        <div className="subheader-block d-none d-sm-flex align-items-center">
                          <div className="d-inline-flex flex-column justify-content-center mr-3 text-center">
                            <span className="fw-300 fs-lg d-block opacity-60">
                              <small>Appointments</small>
                            </span>
                            <span className="fw-500 fs-xl d-block color-danger-500">
                              500
                            </span>
                          </div>
                          <span className="js-easy-pie-chart color-danger-500 position-relative d-flex align-items-center justify-content-center" data-percent={86} data-scalelength={2}>
                            <span className="js-percent d-flex align-items-center justify-content-center position-absolute pos-left pos-right pos-top pos-bottom" />
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-2 border-left pt-1">
                        <button type="button" className="btn btn-primary ml-auto waves-effect waves-themed rounded-circle addClientBtn"><i className="fal fa-plus" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0 bg-white">
            <div className="d-flex align-items-center p-0 border-faded border-top-0 border-left-0 border-right-0 flex-shrink-0">
              <div className="d-flex align-items-center w-100 pl-3 position-relative">
                <div className="d-flex flex-row align-items-center">
                  <ul className="nav nav-tabs nav-tabs-clean noborder  animate__animated animate__fadeInRight animate__slow" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#info">Info</a></li>
                    {/* <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#appointments">Appointments</a></li>
                    <li className="nav-item"><a className="nav-link " data-toggle="tab" href="#payment">Payment</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#review">Review</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#timeline">Timeline</a></li> */}
                  </ul>
                </div>
              </div>
              <a href="#;" className="px-3 py-2 d-flex d-lg-none align-items-center justify-content-center mr-2 btn" data-action="toggle" data-class="slide-on-mobile-left-show" data-target="#js-chat-contact">
                <i className="fal fa-ellipsis-v h1 mb-0 " />
              </a>
            </div>
          </div>
          <div className="flex-wrap align-items-center flex-grow-1 position-relative bg-gray animate__animated animate__fadeIn animate__slow" style={{ minHeight: '600px' }}>
            <div className="d-flex flex-column h-100">
              <div className="tab-content w-100 h-100">
                <div className="tab-pane fade h-100 active show" id="info" role="tabpanel">
                  <UserDetail />
                </div>

                <div className="tab-pane h-100 fade" id="review" role="tabpanel">
                </div>
                <div className="tab-pane h-100 fade" id="timeline" role="tabpanel">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
