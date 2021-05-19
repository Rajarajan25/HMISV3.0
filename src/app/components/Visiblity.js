import React from 'react';
import { Field } from 'formik';

export default function VisiblityFormik(props){
    return(
        <div className="form-group">
        <label class="form-label d-block">{props.name}</label>
        <div className="d-flex">
          <div className="w-100 mt-3">
            <div className="d-inline-flex gen">
              <Field type="radio" id="private" name="visibility" className="checkbx" />
              <label className="subCategory" for="private">
                  <span className="chk_txt">Private</span>
              </label>
            </div>
            <div className="d-inline-flex gen">
              <Field type="radio" id="public" name="visibility" className="checkbx" />
              <label className="subCategory" for="public">
                  <span className="chk_txt">Public</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
}