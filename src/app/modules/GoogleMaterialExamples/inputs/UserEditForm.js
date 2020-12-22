import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage,FieldArray } from 'formik';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import {Previlidge} from '../constants/Previlidges';
import {AdminPrevildge} from '../constants/AdminPrevildge';
import {UserPrevildge} from '../constants/UserPrevildge';
const UPDATE_CUSTOMER = gql`
  mutation UpdateUser( $UserId : ID!, $UserInfo: UserInput!) {
    UpdateUser( UserId :$UserId, UserInfo: $UserInfo ) {
        name
		email
        id
        type
        password
        previlidge
       
    }
  }
`;
const UserEditForm = ({ nclient, callb, cancelRow }) => {
    const [currentUser] = useState(nclient)
    const [UpdateUser] = useMutation(UPDATE_CUSTOMER);
    const [previlidge]=useState(Previlidge)
    return (
        <Formik
            initialValues={currentUser}
            onSubmit={fields => {
                var clientPromise = new Promise(function (resolve, reject) {
                    if (callb(fields)) {
                        UpdateUser({
                            variables: {
                                UserId: fields.id, UserInfo: {
                                    name: fields.name, email: fields.email, password: fields.password,
                                    type: fields.type,phone_num:fields.phone_num,previlidge:fields.previlidge
                                }
                            }
                        });
                        resolve();
                    } else {
                        reject();
                    }
                });
                clientPromise.then(function () {
                    cancelRow();
                }).catch(function () {
                    console.log("ERROR")
                });
            }}
        >
            {({ values, errors, touched, handleSubmit, onChange }) => (
                <Form onSubmit={handleSubmit}  >
                    <div class="custom-scrollbar heightminFotter minHeight530  py-3 pl-3 pr-3">
                        <div class="row">
                            <div class="col-md-6 col-12 mb-3">
                                <div class="form-group">
                                    <label class="d-block control-label" for="password">Name<span class="text-danger">*</span> </label>
                                    <Field name="name" type="text" class="js-hide-search form-control" id="Address">
                                    </Field>
                                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-12 mb-2">
                                <div class="form-group">
                                    <label class="form-label" for="validationCustom01">Email  <span class="text-danger">*</span> </label>
                                    <Field name="email" component="textarea" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} id="validationCustom01" required />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mb-3">
                                <div class="form-group">
                                    <label class="d-block control-label" for="password">Password<span class="text-danger">*</span> </label>
                                    <Field name="password" type="text" class="js-hide-search form-control" id="Address">
                                    </Field>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                           
                            <div class="col-md-6 col-12 mb-3">
                                <div class="form-group">
                                    <label class="d-block control-label" for="phone_num">Phone Number<span class="text-danger">*</span> </label>
                                    <Field name="phone_num" type="text" class="js-hide-search form-control" id="phone_num">
                                    </Field>
                                    <ErrorMessage name="phone_num" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            
                            <div class="col-md-6 col-12 mb-3">
                                <div class="form-group">
                                    <label class="d-block control-label" for="password">User Type<span class="text-danger">*</span> </label>
                                    <Field name="type" as="select" class="js-hide-search form-control" id="Address">
                                        <option value="Super-Admin">Super Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                    </Field>
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                </div>
                            </div>
                            {values.type ==="Super-Admin" && 
                             <div class="col-md-6 col-12 mb-3">
                             <div class="form-group">
                             <FormControl component="fieldset" >
     <FormLabel component="legend">Assign responsibility</FormLabel>
     <FormGroup>
     <FieldArray
            name="previlidge"
            render={arrayHelpers => (
              <div>
                {previlidge[0].map(value => (
                  <label key={value.props.value}>
                    <Field name="previlidge" as={FormControlLabel}
                control={<Checkbox   />}
                label={value.props.value}
                value={value.props.value}
                checked={values.previlidge.includes(value.props.value)}
                      onChange={e => {
                        if (e.target.checked) {
                          arrayHelpers.push(value.props.value);
                        } else {
                          const idx = values.previlidge.indexOf(value.props.value);
                          arrayHelpers.remove(idx);
                        }
                      }}

              />
                    <span>{value.props.value.label}</span>
                  </label>
                ))}
              </div>
            )}
          />
     
     </FormGroup>
   
   </FormControl>
                             </div>
                         </div>}
                         {values.type ==="Admin" && 
                             <div class="col-md-6 col-12 mb-3">
                             <div class="form-group">
                             <FormControl component="fieldset" >
     <FormLabel component="legend">Assign responsibility</FormLabel>
     <FormGroup>
     {AdminPrevildge[0].map(value => {
             return (
                <Field name="previlidge" as={FormControlLabel}
                control={<Checkbox   />}
                label={value.props.value}
                value={value.props.value}
              />
            )  })}
     
     </FormGroup>
   
   </FormControl>
                             </div>
                         </div>}
                         {values.type ==="User" && 
                             <div class="col-md-6 col-12 mb-3">
                             <div class="form-group">
                             <FormControl component="fieldset" >
     <FormLabel component="legend">Assign responsibility</FormLabel>
     <FormGroup>
     {UserPrevildge[0].map(value => {
             return (
              <Field name ="previlidge" as={FormControlLabel}
              control={<Checkbox  />}
              label={value.props.value}
            />
            )  })}
     
     </FormGroup>
   
   </FormControl>
                             </div>
                         </div>}
                            
                        </div>
                    </div>
                    <div className="form-group bg-white border-top border-left">
                        <div className="col-md-12">
                            <div className="panel-content d-flex flex-row align-items-center  pb-3 pr-3 pt-3">
                                <button type="submit" className="btn btn-primary mr-2"> Save and Close</button>
                                <button type="reset" onClick={() => cancelRow()} className="btn btn-secondary"> Cancel</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default UserEditForm;