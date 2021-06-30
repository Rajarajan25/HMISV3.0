/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import SVG from "react-inlinesvg";
import { useHistory } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_helpers";
import { Item } from "devextreme-react/accordion";

let Quick = [
  {
    id: 1,
    name: "S",
    className: "userIcon bg-primary active",
    bg_color: "#B17F22",
    bussiness_type: "Meetings",
  },
  {
    id: 2,
    name: "A",
    className: "userIcon bg-success",
    bg_color: "#41BC87",
    bussiness_type: "Classes",
  },
  {
    id: 3,
    name: "c",
    className: "userIcon bg-info",
    bg_color: "#F41D2F",
    bussiness_type: "Service provider",
  },
  {
    id: 4,
    name: "K",
    className: "userIcon bg-primary-light",
    bg_color: "#0921EC",
    bussiness_type: "Events",
  },
  {
    id: 5,
    name: "D",
    className: "userIcon bg-danger",
    bg_color: "#1DBC9C",
    bussiness_type: "Events",
  },
  {
    id: 6,
    name: "M",
    className: "userIcon bg-success",
    bg_color: "#181D21",
    bussiness_type: "Meetings",
  },
];

export function QuickUser(props) {
  const history = useHistory();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  const [selectQuick, setSelectQuick] = React.useState(Quick[0]);
  React.useEffect(() => {
    let updatedQuickSetting = sessionStorage.getItem("quickSetting");
    if (updatedQuickSetting) {
      let updatedSettings = JSON.parse(updatedQuickSetting);
      let topItemIndex = Quick.findIndex((item) => item.id === updatedSettings.id);
      let topItem = Quick.splice(topItemIndex, 1);
      Quick = [...topItem, ...Quick]
      setSelectQuick(updatedSettings);
    }
  }, [])

  const logoutClick = () => {
    const toggle = document.getElementById("kt_quick_user_toggle");
    if (toggle) {
      toggle.click();
    }
    history.push("/logout");
  };
  const handleQuick = (item) => {
    setSelectQuick(item)
    sessionStorage.setItem("quickSetting", JSON.stringify(item));
  }

  return (
    <div>
      <div
        id="kt_quick_user1"
        className="offcanvas offcanvas-left userProfilecanvas offcanvas p-10"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
          <h3 className="font-weight-bold m-0">
            User Profile
            <small className="text-muted font-size-sm ml-2">12 messages</small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_user_close1"
          >
            <i className="ki ki-close icon-xs text-muted" />
          </a>
        </div>

        <div className="offcanvas-content pr-5 mr-n5">
          <div className="d-flex align-items-center mt-5">
            <div className="symbol symbol-100 mr-5">
              <div
                className="symbol-label"
                style={{
                  backgroundImage: `url(${toAbsoluteUrl(
                    "/media/users/300_21.jpg"
                  )})`,
                }}
              />
              <i className="symbol-badge bg-success" />
            </div>
            <div className="d-flex flex-column">
              <a
                href="#"
                className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
              >
                {user.firstname} {user.lastname}
              </a>
              <div className="text-muted mt-1">{user.occupation}</div>
              <div className="navi mt-2">
                <a href="#" className="navi-item">
                  <span className="navi-link p-0 pb-2">
                    <span className="navi-icon mr-1">
                      <span className="svg-icon-lg svg-icon-primary">
                        <SVG
                          src={toAbsoluteUrl(
                            "/media/svg/icons/Communication/Mail-notification.svg"
                          )}
                        ></SVG>
                      </span>
                    </span>
                    <span className="navi-text text-muted text-hover-primary">
                      {user.email}
                    </span>
                  </span>
                </a>
              </div>
              {/* <Link to="/logout" className="btn btn-light-primary btn-bold">
                Sign Out
              </Link> */}
              <button
                className="btn btn-light-primary btn-bold"
                onClick={logoutClick}
              >
                Sign out
              </button>
            </div>
          </div>

          <div className="separator separator-dashed mt-8 mb-5" />

          <div className="navi navi-spacer-x-0 p-0">
            <Link to="/user-profile" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Notification2.svg"
                        )}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Profile</div>
                  <div className="text-muted">
                    Account settings and more{" "}
                    <span className="label label-light-danger label-inline font-weight-bold">
                      update
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/user-profile" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Shopping/Chart-bar1.svg"
                        )}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Messages</div>
                  <div className="text-muted">Inbox and tasks</div>
                </div>
              </div>
            </Link>

            <Link to="/user-profile" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Files/Selected-file.svg"
                        )}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Activities</div>
                  <div className="text-muted">Logs and notifications</div>
                </div>
              </div>
            </Link>

            <Link to="/user-profile" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Mail-opened.svg"
                        )}
                      ></SVG>
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Tasks</div>
                  <div className="text-muted">latest tasks and projects</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="separator separator-dashed my-7"></div>

          <div>
            <h5 className="mb-5">Recent Notifications</h5>

            <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-warning mr-5">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
                  className="svg-icon svg-icon-lg"
                ></SVG>
              </span>

              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Another purpose persuade
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>

              <span className="font-weight-bolder text-warning py-1 font-size-lg">
                +28%
              </span>
            </div>

            <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-success mr-5">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Write.svg"
                  )}
                  className="svg-icon svg-icon-lg"
                ></SVG>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Would be to people
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>

              <span className="font-weight-bolder text-success py-1 font-size-lg">
                +50%
              </span>
            </div>

            <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-danger mr-5">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Group-chat.svg"
                  )}
                  className="svg-icon svg-icon-lg"
                ></SVG>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Purpose would be to persuade
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>

              <span className="font-weight-bolder text-danger py-1 font-size-lg">
                -27%
              </span>
            </div>

            <div className="d-flex align-items-center bg-light-info rounded p-5">
              <span className="svg-icon svg-icon-info mr-5">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/General/Attachment2.svg"
                  )}
                  className="svg-icon svg-icon-lg"
                ></SVG>
              </span>

              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  The best product
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>

              <span className="font-weight-bolder text-info py-1 font-size-lg">
                +8%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="kt_quick_user"
        className="offcanvas offcanvas-left userProfilecanvas d-flex flex-column offcanvas"
      >
        <div className="d-flex h-100 w-100">
          <div
            className="offcanvas-close mt-n1"
            style={{
              position: "absolute",
              top: "15px",
              right: "10px",
              zIndex: "9",
            }}
          >
            <a
              href="#"
              className="btn btn-xs btn-icon btn-light btn-hover-primary"
              id="kt_quick_user_close"
            >
              <i className="ki ki-close icon-xs text-muted"></i>
            </a>
          </div>
          <div className="usermodalIconcontainer py-2 d-flex flex-column border-right">
            {Quick.map((item, index) => {
              return (

                <Link
                  to={{
                    pathname: "/manage/workspace1",
                    aboutProps: {
                      item: item
                    }
                  }}
                  onClick={() => handleQuick(item)}
                >
                  <span
                    className={item.className}
                    style={{ backgroundColor: item.bg_color }}
                  >{item.name}</span>
                </Link>

              );
            })}
            <Link
              to={{
                pathname: "/manage/workspace1",
                aboutProps: {
                  item: {}
                }
              }}
              className="userIcon bg-success font-size-h6 addNewevents"
            >
              +
            </Link>
          </div>


          <div className="d-flex w-100 userModalcontent">
            <div className="d-flex col h-100">
              <div className="d-inline-block w-100 h-100">
                <div className="d-flex">
                  <div className="modaluserIcon w-100 mb-3">
                    <span className="userIcon">{selectQuick.name}</span>
                    <span className="userName">{selectQuick.name}</span>
                  </div>
                </div>
                <ul className="list-inline">
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="">Import/Export</a>
                  </li>
                  <li>
                    <a href="">People</a>
                  </li>
                  <li>
                    <a href="">People</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex col">
              <div className="d-inline-block w-100">
                <div className="d-flex">
                  <div className="modaluserIcon w-100 mb-3">
                    <span className="userIcon">SK</span>
                    <span className="userName">Sivakumar</span>
                  </div>
                </div>
                <ul className="list-inline">
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="">Import/Export</a>
                  </li>
                  <li>
                    <a href="">People</a>
                  </li>
                  <li>
                    <a href="">People</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="modalFootersection p-3 border-top bg-grey ">
          <div className="leftmenuModalfooter w-100 d-flex">
            <ul className="list-inline d-flex my-auto">
              <li>
                <a>Download Apps:</a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-apple"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-android"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-desktop"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-phone"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
            </ul>
            <Link
              to="/logout"
              className="btn btn-light-primary btn-sm font-weight-bold ml-auto"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
