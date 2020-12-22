import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext'
export default function ViewClient({ editRow }) {
    const [user, setUser] = React.useContext(UserContext)
    let currentUser = user.currentUser;
    if (currentUser.id) {
        return (
            <form className="needs-validation h-100" noValidate>
                <div className="custom-scrollbar minHeight530 py-3 pl-3 pr-3">
                    <div className="col-md-4 col-sm-4 col-12 mb-2">
                        <div className="form-group">
                            <div className="row">
                                <label className="form-label" htmlFor="validationCustom02">Name <span className="text-danger">*</span></label>
                            </div>
                            <div className="row-5">
                                <label type="text"  >{currentUser.name}  </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 mb-2">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="validationCustom02">USER NAME <span className="text-danger">*</span></label>
                                        <textarea type="text" className="form-control" id="validationCustom01" value={currentUser.email} disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-12 mb-2">
                        <div className="form-group">
                            <div className="row">
                                <label className="form-label" htmlFor="validationCustom02">Password <span className="text-danger">*</span></label>
                            </div>
                            <div className="row-5">
                                <label type="text"  >{currentUser.password}  </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-12 mb-2">
                        <div className="form-group">
                            <div className="row">
                                <label className="form-label" htmlFor="validationCustom02">Type <span className="text-danger">*</span></label>
                            </div>
                            <div className="row-5">
                                <label type="text"  >{currentUser.type}  </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-12 mb-2">
                        <div className="form-group">
                            <div className="row">
                                <label className="form-label" htmlFor="validationCustom02">Phone  <span className="text-danger">*</span></label>
                            </div>
                            <div className="row-5">
                                <label type="text"  >{currentUser.phone_num}</label>
                            </div>
                        </div>
                    </div>
                    
                   
                   
                   
                </div>
                <div className="form-group bg-white border-top border-left">
                    <div className="col-md-12">
                        <div className="panel-content d-flex flex-row align-items-center  pb-3 pr-3 pt-3">
                            <button className="btn btn-primary ml-auto waves-effect waves-themed" type="submit"
                                onClick={() => { editRow(currentUser) }}>Edit</button>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
    else {
        return (
            <>Please select User</>
        )
    }
}