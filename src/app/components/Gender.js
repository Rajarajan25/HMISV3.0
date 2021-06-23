import { Field } from "formik";
import React from "react";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
export function Gender(props) {
  return (
    <>
      <div className="form-group">
        <div className="col-12">
          <label className="form-label d-block">{props.label || ""}</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_gender d-flex">
              <div className="gender_col">
                <input
                  type="radio"
                  id="gender_01"
                  name="gender_img"
                  className=""
                  checked="true"
                />
                <label className="avatar_col" htmlFor="gender_01">
                  <span className="gen_img male">
                    <img
                      src={toAbsoluteUrl("/media/patients/male_icon.svg")}
                      alt=""
                      className="d-inline-flex"
                    />
                  </span>
                  <span className="d-flex justify-content-center">Male</span>
                </label>
              </div>
              <div className="gender_col">
                <input
                  type="radio"
                  id="gender_02"
                  name="gender_img"
                  className=""
                />
                <label className="avatar_col" htmlFor="gender_02">
                  <span className="gen_img female">
                    <img
                      src={toAbsoluteUrl("/media/patients/female_icon.svg")}
                      alt=""
                      className="d-inline-flex"
                    />
                  </span>
                  <span className="d-flex justify-content-center">Female</span>
                </label>
              </div>
              <div className="gender_col">
                <input
                  type="radio"
                  id="gender_03"
                  name="gender_img"
                  className=""
                />
                <label className="avatar_col" htmlFor="gender_03">
                  <span className="gen_img both">
                    <img
                      src={toAbsoluteUrl("/media/patients/both_icon.svg")}
                      alt=""
                      className="d-inline-flex"
                    />
                  </span>
                  <span className="d-flex justify-content-center">Both</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function GenderFormik(props) {
  return (
    <>
      <div className="form-group">
        <div className="col-12">
          <label className="form-label d-block">{props.label}</label>
        </div>
        <div className="d-flex">
          <div className="col-12">
            <div className="pre_gender d-flex">

              <div className="gender_col">
                <Field
                  type="radio"
                  id="gender_01"
                  name={props.name}
                  className=""
                  value="Male"
                />
                <label className="avatar_col" htmlFor="gender_01">
                  <span className="gen_img male">
                    <img
                      src={toAbsoluteUrl("/media/patients/male_icon.svg")}
                      alt=""
                      className="d-inline-flex"
                    />
                  </span>
                  <span className="d-flex justify-content-center">Male</span>
                </label>
              </div>
              <div className="gender_col">
                <Field
                  type="radio"
                  id="gender_02"
                  name={props.name}
                  className=""
                  value="Female"
                />
                <label className="avatar_col" htmlFor="gender_02">
                  <span className="gen_img female">
                    <img
                      src={toAbsoluteUrl("/media/patients/female_icon.svg")}
                      alt=""
                      className="d-inline-flex"
                    />
                  </span>
                  <span className="d-flex justify-content-center">
                    Female
                  </span>
                </label>
              </div>

              {props.type === "service" ? (
                <div className="gender_col">
                  <Field
                    type="radio"
                    id="gender_03"
                    name={props.name}
                    className=""
                    value="Both"
                  />
                  <label className="avatar_col" htmlFor="gender_03">
                    <span className="gen_img both">
                      <img
                        src={toAbsoluteUrl("/media/patients/both_icon.svg")}
                        alt=""
                        className="d-inline-flex"
                      />
                    </span>
                    <span className="d-flex justify-content-center">Both</span>
                  </label>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





