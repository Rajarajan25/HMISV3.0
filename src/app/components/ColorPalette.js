import { Field } from 'formik';
import React from 'react';
export function ColorPalette(props) {
    return (
        <>
            <div className="col-9 pr-0">
            <div className="color_select">
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_01" name="color-code" className=""/>
                <label className="" for="color_01">
                  <span style={{backgroundColor: `#41BC87`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_02" name="color-code" className="" />
                <label className="" for="color_02">
                  <span style={{backgroundColor: `#1DBC9C`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_03" name="color-code" className="" />
                <label className="" for="color_03">
                  <span style={{backgroundColor: `#27AE60`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_04" name="color-code" className="" />
                <label className="" for="color_04">
                  <span style={{backgroundColor: `#21D726`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_05" name="color-code" className="" />
                <label className="" for="color_05">
                  <span style={{backgroundColor: `#F41D2F`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_06" name="color-code" className="" />
                <label className="" for="color_06">
                  <span style={{backgroundColor: `#181D21`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_07" name="color-code" className="" />
                <label className="" for="color_07">
                  <span style={{backgroundColor: `#FD575E`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_08" name="color-code" className="" />
                <label className="" for="color_08">
                  <span style={{backgroundColor: `#FDB42B`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_09" name="color-code" className="" />
                <label className="" for="color_09">
                  <span style={{backgroundColor: `#B17F22`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_10" name="color-code" className="" />
                <label className="" for="color_10">
                  <span style={{backgroundColor: `#F34D1D`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_11" name="color-code" className="" />
                <label className="" for="color_11">
                  <span style={{backgroundColor: `#FD8624`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_12" name="color-code" className="" />
                <label className="" for="color_12">
                  <span style={{backgroundColor: `#2798B7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_13" name="color-code" className="" />
                <label className="" for="color_13">
                  <span style={{backgroundColor: `#2980B9`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_14" name="color-code" className="" />
                <label className="" for="color_14">
                  <span style={{backgroundColor: `#3598DC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_15" name="color-code" className="" />
                <label className="" for="color_15">
                  <span style={{backgroundColor: `#528CCB`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <input type="radio" id="color_16" name="color-code" className="" />
                <label className="" for="color_16">
                  <span style={{backgroundColor: `#0921EC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <input type="radio" id="color_17" name="color-code" className="" />
                <label className="" for="color_17">
                  <span style={{backgroundColor: `#199EC7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
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
            <div className="col-9 pr-0">
            <div className="color_select">
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_01" name="color_code" className="" value="#41BC87"/>
                <label className="" for="color_01">
                  <span style={{backgroundColor: `#41BC87`}}></span>
                </label>
              </div> 
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_02" name="color_code" className="" value="#1DBC9C"/>
                <label className="" for="color_02">
                  <span style={{backgroundColor: `#1DBC9C`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_03" name="color_code" className="" value="#27AE60"/>
                <label className="" for="color_03">
                  <span style={{backgroundColor: `#27AE60`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_04" name="color_code" className="" value="#21D726"/>
                <label className="" for="color_04">
                  <span style={{backgroundColor: `#21D726`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_05" name="color_code" className="" value="#F41D2F"/>
                <label className="" for="color_05">
                  <span style={{backgroundColor: `#F41D2F`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_06" name="color_code" className="" value="#181D21"/>
                <label className="" for="color_06">
                  <span style={{backgroundColor: `#181D21`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_07" name="color_code" className="" value="#FD575E"/>
                <label className="" for="color_07">
                  <span style={{backgroundColor: `#FD575E`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_08" name="color_code" className="" value="#FDB42B"/>
                <label className="" for="color_08">
                  <span style={{backgroundColor: `#FDB42B`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_09" name="color_code" className="" value="#B17F22"/>
                <label className="" for="color_09">
                  <span style={{backgroundColor: `#B17F22`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_10" name="color_code" className="" value="#F34D1D"/>
                <label className="" for="color_10">
                  <span style={{backgroundColor: `#F34D1D`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_11" name="color_code" className="" value="#FD8624"/>
                <label className="" for="color_11">
                  <span style={{backgroundColor: `#FD8624`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_12" name="color_code" className="" value="#2798B7"/>
                <label className="" for="color_12">
                  <span style={{backgroundColor: `#2798B7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_13" name="color_code" className="" value="#2980B9"/>
                <label className="" for="color_13">
                  <span style={{backgroundColor: `#2980B9`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_14" name="color_code" className="" value="#3598DC"/>
                <label className="" for="color_14">
                  <span style={{backgroundColor: `#3598DC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_15" name="color_code" className="" value="#528CCB"/>
                <label className="" for="color_15">
                  <span style={{backgroundColor: `#528CCB`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
              <Field type="radio" id="color_16" name="color_code" className="" value="#0921EC"/>
                <label className="" for="color_16">
                  <span style={{backgroundColor: `#0921EC`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <Field type="radio" id="color_17" name="color_code" className="" value="#199EC7"/>
                <label className="" for="color_17">
                  <span style={{backgroundColor: `#199EC7`}}></span>
                </label>
              </div>
              <div class="d-inline-flex color_col p-3">
                <span className="color_add"><i>+</i></span>
              </div>
            </div>
          </div>
        </>
    );
}