import React, { useEffect } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Upload } from "../../../components/Upload";
import { Formik, Field } from "formik";
import { ColorPaletteFormik } from "../../../components/ColorPalette";
import { scroller } from "react-scroll";
import Scrollspy from "react-scrollspy";
import { Hidden } from "@material-ui/core";
const fieldType = {
  Name: "Name",
  Color: "Color",
  Business: "Business",
  Go: "Go"
};
const defAction = {
  Name: false,
  Color: false,
  Business: false,
  Go: false
}

export default function WorkSpace1(props) {
  let handle = null;
  const [obj, setObj] = React.useState({
    name: "",
    colors: "",
    bussiness_type: "",
  });
  const [formActions, setFormActions] = React.useState({ ...defAction, Name: true });

  React.useEffect(() => {
    setTimeout(() => {
      handleScroll(fieldType.Name);
    });
    if (props.location.hasOwnProperty("aboutProps")) {
      let updateObj = {
        name: props.location.aboutProps.item.name,
        colors: props.location.aboutProps.item.bg_color,
        bussiness_type: props.location.aboutProps.item.bussiness_type
      };
      setObj(updateObj);
    }

  }, []);

  const handleScroll = (enableType) => {
    scroller.scrollTo(enableType, {
      duration: 400,
      delay: 0,
      smooth: "linear",
    });
  };

  const scrollTo = (disableType, enableType, name, fieldValue) => {
    handleScroll(enableType);
    setObj((oldObj) => {
      const value = { [name]: fieldValue };
      const newObj = { ...oldObj, ...value };
      return newObj
    })
    setFormActions((oldObj) => {
      const value = { [disableType]: false, [enableType]: true };
      const newObj = { ...oldObj, ...value };
      return newObj;
    });
  };

  const onMoveToLayout = (elem) => {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(() => {
      console.log("is scroll stop");
      handleOnScroll(elem);
    }, 400); // default 400 ms
  }

  const handleOnScroll = (elem) => {
    console.log("Element-->", elem);
    let scrollEle = fieldType.Name;
    if (elem && elem.id) {
      let updatedValue = { ...formActions };
      switch (elem.id) {
        case fieldType.Name:
          updatedValue = { ...defAction, Name: true };
          break;
        case fieldType.Color:
          if (obj.name) {
            updatedValue = { ...defAction, Color: true };
            scrollEle = fieldType.Color;
          } else {
            scrollEle = fieldType.Name;
          }
          break;
        case fieldType.Business:
          if (obj.colors) {
            updatedValue = { ...defAction, Business: true };
            scrollEle = fieldType.Business;
          } else {
            scrollEle = fieldType.Color;
          }
          break;
        case fieldType.Go:
          if (obj.bussiness_type) {
            updatedValue = { ...defAction, Go: true };
            scrollEle = fieldType.Go;
          } else {
            scrollEle = fieldType.Business;
          }
          break;
      }
      setFormActions(updatedValue);
    }
    handleScroll(scrollEle);
  };

  return (
    <div className="d-flex flex-column flex-root">
      <Formik
       enableReinitialize={true}
        initialValues={obj}
        onSubmit={(values) => {
          setObj(values);
          console.log(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>

            {/*begin::Page*/}
            <div className="d-flex flex-row flex-column-fluid page">
              <div className="workspace staff_first position-relative bg_FAFBFC p-7 col bor-20 h-100" style={{overflow:"hidden"}}>
                <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 mx1460 col mb150">
                  <Link to="/" className="cancel_clr">
                    Cancel
                  </Link>

                </div>
                <div className="d-flex justify-content-center flex-column col-xl-9 col-lg-11 wid col h-100 ml-35">
                  <Scrollspy
                    className="scrollspy"
                    items={[
                      fieldType.Name,
                      fieldType.Color,
                      fieldType.Business,
                      fieldType.Go,
                    ]}
                    currentClassName="isCurrent"
                    onUpdate={onMoveToLayout}
                  ></Scrollspy>
                  <div className={`space1 mb150 ${!formActions.Name && "disable_event"}`} id={fieldType.Name}>
                    <div className="d-flex w-100 loginMaincontent min-heis" name={fieldType.Name}>
                      <div className="d-flex w-100">
                        <Logo />
                        <div className="ml-10 mt-5 workspace-con">
                          <h1>Workspace Name</h1>
                          <div className="input-contain">
                            <Field
                              type="text"
                              placeholder="Name"
                              name="name"
                              value={values.name || ""}
                            />
                          </div>
                          <NextButton
                            lable="Next"
                            scrollTo={scrollTo}
                            disableType={fieldType.Name}
                            enableType={fieldType.Color}
                            name="name"
                            value={values.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`space2 mb150 ${!formActions.Color && "disable_event"}`} id={fieldType.Color}>
                    <div className="d-flex w-100 loginMaincontent min-heis" name={fieldType.Color}>
                      <div className="d-flex w-100">
                        <Logo />
                        <div className="ml-10 mt-5 workspace-con">
                          <h1>Choose your Logo and Colour</h1>
                          <div className="form-group">
                            <div className="d-flex pb-2">
                              <Upload />
                              <div className="col-8 pr-0">
                                <ColorPaletteFormik
                                  name="colors"
                                  colorsCode={values.colors}
                                />
                              </div>
                            </div>
                          </div>
                          <NextButton
                            lable="Next"
                            scrollTo={scrollTo}
                            name="colors"
                            disableType={fieldType.Color}
                            enableType={fieldType.Business}
                            value={values.colors} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`space3 mb150 ${!formActions.Business && "disable_event"}`} id={fieldType.Business}>
                    <div className="d-flex w-100 loginMaincontent min-heis" name={fieldType.Business}>
                      <div className="d-flex w-100">
                        <Logo />
                        <Bussinessformik
                          name="bussiness_type"
                          value={values.bussiness_type}
                          handleScrollTo={scrollTo}
                        />

                      </div>
                    </div>
                  </div>
                  <div className={`space4 mb150 ${!formActions.Go && "disable_event"}`} id={fieldType.Go} >
                    <div
                      className="d-flex w-100 loginMaincontent min-heis"
                      name={fieldType.Go}
                    >
                      <div className="d-flex w-100">
                        <Logo />
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
          </form>
        )}
      </Formik>
    </div>

  );
}


export function Bussinessformik(props) {
  const { handleScrollTo, value, name } = props;
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
                  name={name}
                  value={item.value}
                />
                <label className="pat_box" htmlFor={item.id}>
                  <div className="d-block text-center">
                    <div className="service_img d-flex">
                      <img
                        src={item.ulr}
                        alt={item.name}
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
      <NextButton
        lable="Next"
        scrollTo={handleScrollTo}
        disableType={fieldType.Business}
        enableType={fieldType.Go}
        name={name}
        value={value} />

    </div>
  );
}
export function Logo() {

  return (
    <Link to="/" className="flex-column-auto logo-tb mb-5">
      <img
        alt="Logo"
        src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
      />
    </Link>
  )
}

export function NextButton(props) {
  const { scrollTo, disableType, enableType, value, lable, name } = props;
  return (
    <div className="space-btn">
      <button
        type='button'
        onClick={(event) => {
          console.log("name-->", name);
          console.log("value-->", value);
          scrollTo(disableType, enableType, name, value);
        }}
        className={`btn btn-btn-primary ${!value && "disable_event"}`}
      >
        {lable}
      </button>
    </div>
  )
}
