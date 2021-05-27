import { Field } from 'formik';
import React from 'react';
const colorDropDown = ["#41BC87", "#1DBC9C", "#27AE60", "#21D726", "#F41D2F", "#181D21",
  "#FD575E", "#FDB42B", "#B17F22", "#F34D1D", "#FD8624", "#2798B7", "#2980B9", "#3598DC", "#528CCB", "#0921EC", "#199EC7"];
export function ColorPalette(props) {
  return (
    <>
      <div className="col-12 pr-0">
        <div className="color_select">
          {colorDropDown.map((item, index) => {
            return (
              <div className="d-inline-flex color_col p-3" key={index}>
                <input type="radio" id={"color_" + index} name="avatar_bg_color" className="" />
                <label className="" htmlFor={"color_" + index}>
                  <span style={{ backgroundColor: item }}></span>
                </label>
              </div>)
          })}
          <div className="d-inline-flex color_col p-3">
            <span className="color_add"><i>+</i></span>
          </div>
        </div>
      </div>
    </>
  );
}

export function ColorPaletteFormik(props) {
  return (
    <>
      <div className="col-12 pr-0">
        <div className="color_select">
        {colorDropDown.map((item, index) => {
            return (
              <div className="d-inline-flex color_col p-3" key={index}>
                <Field type="radio" id={"color_" + index} name="avatar_bg_color" className="" value={item} />
                <label className="" htmlFor={"color_" + index}>
                  <span style={{ backgroundColor: item }}></span>
                </label>
              </div>)
          })}
          <div className="d-inline-flex color_col p-3">
            <span className="color_add"><i>+</i></span>
          </div>
        </div>
      </div>
    </>
  );
}