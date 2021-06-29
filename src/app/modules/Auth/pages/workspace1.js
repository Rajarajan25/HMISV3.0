import React, { useEffect } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Upload } from "../../../components/Upload";
import { Formik, Field } from "formik";
import { ColorPalette } from "../../../components/ColorPalette";
import { colors } from "@material-ui/core";
import { findLastKey, values } from "lodash";
import { scroller, animateScroll as scroll, Events } from "react-scroll";
import Scrollspy from "react-scrollspy";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WorkSpace1(props) {

  const [obj, setObj] = React.useState({
    name: "",
    colors: "",
    bussiness_type: "",
  });
  const [formActions, setFormActions] = React.useState({
    enableName: true,
    enableColor: false,
    enableBusiness: false,
    enableGo: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      handleScroll("enableName");
    });
    let updateObj = { name: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.name : "", colors: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.bg_color : "", bussiness_type: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.bussiness_type : "" };
    setObj(updateObj);
  }, []);

  const handleScroll = (enableType) => {
    scroller.scrollTo(enableType, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollTo = (disableType, enableType) => {
    handleScroll(enableType);
    setFormActions((oldObj) => {
      const value = { [disableType]: false, [enableType]: true };
      const newObj = { ...oldObj, ...value };
      return newObj;
    });
  };
  const handleChangeDropDown = (colors) => {
    setObj({ ...obj, colors: colors });
  };
  const handleOnScroll = (elem) => {
    if (elem && elem.id) {
      let updatedValue = { ...formActions };
      Object.keys(formActions, {}).forEach((item, i) => {
        if (obj.name === "" && obj.colors === "" && obj.bussiness_type === "") {
          setTimeout(() => {
            handleScroll("enableName");
          }, 600);
        } else if ((obj.name !== "" && obj.colors === "" && obj.bussiness_type === "") && elem.id === "enableName") {
          setTimeout(() => {
            handleScroll("enableName");
          }, 600);
          updatedValue.enableName = true;
          updatedValue.enableBusiness = false;
          updatedValue.enableColor = false;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors === "" && obj.bussiness_type === "") && elem.id === "enableColor") {
          setTimeout(() => {
            handleScroll("enableColor");
          }, 600);
          updatedValue.enableName = false;
          updatedValue.enableBusiness = false;
          updatedValue.enableColor = true;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors === "" && obj.bussiness_type === "") && (elem.id === "enableBusiness" || elem.id === "enableGo")) {
          setTimeout(() => {
            handleScroll("enableColor");
          }, 600);
          updatedValue.enableName = false;
          updatedValue.enableBusiness = false;
          updatedValue.enableColor = true;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors !== "" && obj.bussiness_type === "") && elem.id === "enableColor") {
          setTimeout(() => {
            handleScroll("enableColor");
          }, 600);
          updatedValue.enableName = false;
          updatedValue.enableBusiness = false;
          updatedValue.enableColor = true;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors !== "" && obj.bussiness_type === "") && elem.id === "enableName") {
          setTimeout(() => {
            handleScroll("enableName");
          }, 600);
          updatedValue.enableName = true;
          updatedValue.enableBusiness = false;
          updatedValue.enableColor = false;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors !== "" && obj.bussiness_type === "") && elem.id === "enableBusiness") {
          setTimeout(() => {
            handleScroll("enableBusiness");
          }, 600);
          updatedValue.enableName = false;
          updatedValue.enableBusiness = true;
          updatedValue.enableColor = false;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors !== "" && obj.bussiness_type === "") && elem.id === "enableGo") {
          setTimeout(() => {
            handleScroll("enableBusiness");
          }, 600);
          updatedValue.enableName = false;
          updatedValue.enableBusiness = true;
          updatedValue.enableColor = false;
          updatedValue.enableGo = false;
        } else if ((obj.name !== "" && obj.colors !== "" && obj.bussiness_type !== "")) {
          if (item === elem.id) {
            updatedValue[item] = true;
          } else {
            updatedValue[item] = false;
          }
          // setTimeout(() => {
          //   handleScroll("enableBusiness");
          // }, 600);

        }
        //  else if (obj.name !== "" && obj.colors === "" && obj.bussiness_type === "") {
        //   setTimeout(() => {
        //     handleScroll("enableColor");
        //   }, 600);
        // } else if (obj.name !== "" && obj.colors !== "" && obj.bussiness_type === "") {
        //   setTimeout(() => {
        //     handleScroll("enableBusiness");
        //   }, 600);
        // }
        // if (obj.name === "" && elem.id === "enableColor") {
        //   handleScroll("enableName");
        // } else if (obj.colors === "" && elem.id === "enableBusiness") {
        //   handleScroll("enableColor");
        // } else if (obj.bussiness_type === "" && elem.id === "enableGo") {
        //   handleScroll("enableBusiness");
        // }

        // if (elem.id === "enableColor" && obj.colors !== "") {
        //   updatedValue.enableColor = true;
        // } else if (elem.id === "enableBusiness" && obj.bussiness_type !== "") {
        //   updatedValue.enableBusiness = true;
        // } else if (elem.id === "enableGo" && (obj.bussiness_type !== "" && obj.colors !== "" && obj.name !== "")) {
        //   updatedValue.enableGo = true;
        // } else {
        //   if (elem.id === "enableName") {
        //     updatedValue[item] = true;
        //   }
        // }
      });
      setFormActions(updatedValue);
    }
  };

  return (
    <Formik
      initialValues={{ name: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.name : "", colors: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.bg_color : "", bussiness_type: props.location.hasOwnProperty("aboutProps") ? props.location.aboutProps.item.bussiness_type : "" }}
      onSubmit={(values) => {
        values.colors = obj.colors;
        setObj(values)
        console.log(JSON.stringify(values));
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="d-flex flex-row flex-column-fluid page">
              <div className="workspace staff_first position-relative bg_FAFBFC p-7 col bor-20 h-100">
                <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 mx1460 col mb150">
                  <Link to="/" className="cancel_clr">
                    Cancel
                  </Link>

                </div>
                <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col h-100 ml-35">
                  <Scrollspy
                    className="scrollspy"
                    items={[
                      "enableName",
                      "enableColor",
                      "enableBusiness",
                      "enableGo",
                    ]}
                    currentClassName="isCurrent"
                    onUpdate={handleOnScroll}
                  ></Scrollspy>
                  <div
                    className="space1 mb150"
                    id="enableName"
                    style={
                      formActions.enableName
                        ? {}
                        : { pointerEvents: "none", opacity: "0.4" }
                    }
                  >
                    <div
                      className="d-flex w-100 loginMaincontent min-heis"
                      name="enableName"
                    >
                      <div className="d-flex w-100">
                        <Link to="/" className="flex-column-auto logo-tb mb-5">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                          />
                        </Link>
                        <div className="ml-10 mt-5 workspace-con">
                          <h1>Workspace Name</h1>
                          <div className="input-contain">
                            <Field
                              type="text"
                              placeholder="Name"
                              name="name"
                              className=""
                              value={values.name || ""}
                            />
                          </div>
                          <div className="space-btn">
                            <button
                              onClick={() =>
                                scrollTo("enableName", "enableColor")
                              }
                              className="btn btn-btn-primary"
                              style={
                                values.name
                                  ? {}
                                  : { pointerEvents: "none", opacity: "0.4" }
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="space2 mb150"
                    id="enableColor"
                    style={
                      formActions.enableColor
                        ? {}
                        : { pointerEvents: "none", opacity: "0.4" }
                    }
                  >
                    <div
                      className="d-flex w-100 loginMaincontent min-heis"
                      name="enableColor"
                    >
                      <div className="d-flex w-100">
                        <Link to="/" className="flex-column-auto logo-tb mb-5">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                          />
                        </Link>
                        <div className="ml-10 mt-5 workspace-con">
                          <h1>Choose your Logo and Colour</h1>
                          <div className="form-group">
                            <div className="d-flex pb-2">
                              <Upload />
                              <div className="col-8 pr-0">
                                <ColorPalette
                                  handleChangeDropDown={handleChangeDropDown}
                                  colorsCode={values.colors}
                                  item={{ id: 1 }}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-btn">
                            <button
                              onClick={() =>
                                scrollTo("enableColor", "enableBusiness")
                              }
                              className="btn btn-btn-primary"
                              style={
                                obj.colors
                                  ? {}
                                  : { pointerEvents: "none", opacity: "0.4" }
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="space3 mb150"
                    id="enableBusiness"
                    style={
                      formActions.enableBusiness
                        ? {}
                        : { pointerEvents: "none", opacity: "0.4" }
                    }
                  >
                    <div
                      className="d-flex w-100 loginMaincontent min-heis"
                      name="enableBusiness"
                    >
                      <div className="d-flex w-100">
                        <Link to="/" className="flex-column-auto logo-tb mb-5">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                          />
                        </Link>
                        <Bussinessformik
                          name="bussiness_type"
                          handleScrollTo={scrollTo}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="space4 mb150"
                    id="enableGo"
                    style={
                      formActions.enableGo
                        ? {}
                        : { pointerEvents: "none", opacity: "0.4" }
                    }
                  >
                    <div
                      className="d-flex w-100 loginMaincontent min-heis"
                      name="enableGo"
                    >
                      <div className="d-flex w-100">
                        <Link to="/" className="flex-column-auto logo-tb mb-5">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
                          />
                        </Link>
                        <div className="ml-10 mt-5 workspace-con">
                          <h1>Yor’re ready for takeoff!</h1>
                          <p className="takeoff">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl("/media/auth-screen/rocket.svg")}
                            className="rocket"
                          />
                          <div className="space-btn">
                            <button
                              type="submit"
                              className="btn btn-btn-primary"
                            >
                              Go
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export function ColorCode() {
  const classes = useStyles();
  return (
    <div className="color_select">
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_01" name="color-code" className="" />
        <label className="" for="color_01">
          <span style={{ backgroundColor: `#41BC87` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_02" name="color-code" className="" />
        <label className="" for="color_02">
          <span style={{ backgroundColor: `#1DBC9C` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_03" name="color-code" className="" />
        <label className="" for="color_03">
          <span style={{ backgroundColor: `#27AE60` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_04" name="color-code" className="" />
        <label className="" for="color_04">
          <span style={{ backgroundColor: `#21D726` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_05" name="color-code" className="" />
        <label className="" for="color_05">
          <span style={{ backgroundColor: `#F41D2F` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_06" name="color-code" className="" />
        <label className="" for="color_06">
          <span style={{ backgroundColor: `#181D21` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_07" name="color-code" className="" />
        <label className="" for="color_07">
          <span style={{ backgroundColor: `#FD575E` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_08" name="color-code" className="" />
        <label className="" for="color_08">
          <span style={{ backgroundColor: `#FDB42B` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_09" name="color-code" className="" />
        <label className="" for="color_09">
          <span style={{ backgroundColor: `#B17F22` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_10" name="color-code" className="" />
        <label className="" for="color_10">
          <span style={{ backgroundColor: `#F34D1D` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_11" name="color-code" className="" />
        <label className="" for="color_11">
          <span style={{ backgroundColor: `#FD8624` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_12" name="color-code" className="" />
        <label className="" for="color_12">
          <span style={{ backgroundColor: `#2798B7` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_13" name="color-code" className="" />
        <label className="" for="color_13">
          <span style={{ backgroundColor: `#2980B9` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_14" name="color-code" className="" />
        <label className="" for="color_14">
          <span style={{ backgroundColor: `#3598DC` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_15" name="color-code" className="" />
        <label className="" for="color_15">
          <span style={{ backgroundColor: `#528CCB` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_16" name="color-code" className="" />
        <label className="" for="color_16">
          <span style={{ backgroundColor: `#0921EC` }}></span>
        </label>
      </div>
      <div class="d-inline-flex color_col p-6">
        <input type="radio" id="color_17" name="color-code" className="" />
        <label className="" for="color_17">
          <span style={{ backgroundColor: `#199EC7` }}></span>
        </label>
      </div>
      <div class="d-none color_col p-6">
        <span className="color_add">
          <i>+</i>
        </span>
      </div>
    </div>
  );
}
export function Bussinessformik(props) {
  const { handleScrollTo } = props;
  const scrollTo = (disableType, enableType) => {
    handleScrollTo(disableType, enableType);
  };

  const bussiness = [
    {
      id: "pet_box_01",
      value: "Service provider",
      ulr: toAbsoluteUrl("/media/auth-screen/service_provider.svg"),
    },
    {
      id: "pet_box_02",
      value: "Meetings",
      ulr: toAbsoluteUrl("/media/auth-screen/meetings.svg"),
    },
    {
      id: "pet_box_03",
      value: "Events",
      ulr: toAbsoluteUrl("/media/auth-screen/events.svg"),
    },
    {
      id: "pet_box_04",
      value: "Classes",
      ulr: toAbsoluteUrl("/media/auth-screen/classes.svg"),
    },
  ];
  return (
    <div className="ml-10 mt-5 workspace-con">
      <h1>Select your business type</h1>

      <div className="serve_sec">
        <div className="row">
          {bussiness.map((item) => {
            return (
              <div className="col px-1" key={item.id}>
                <Field
                  type="radio"
                  id={item.id}
                  name={props.name}
                  className=""
                  value={item.value}
                />
                <label className="pat_box" htmlFor={item.id}>
                  <div className="d-block text-center">
                    <div className="service_img d-flex">
                      <img
                        src={item.ulr}
                        alt=""
                        className="m-auto align-items-center"
                      />
                    </div>
                    <div className="service_title">
                      <p>{item.value}</p>
                    </div>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-btn">
        <button
          onClick={() => {
            scrollTo("enableBusiness", "enableGo");
            // handleBusinessType(businessType)
          }}
          className="btn btn-btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}
