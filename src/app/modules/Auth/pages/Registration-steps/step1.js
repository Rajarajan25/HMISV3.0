
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";


export default function step1() {
  return (
    <>
      <div className="my-auto mh-100 p-5 text-center">
      <div className="text-left mb-6">
        <h1 className="font-size-30 color_01234B font-weight-600 mb-5">Create account</h1>      
        <p className="font-size-14 text-muted font-weight-normal">Enter your details to create your account</p>
      </div>
        <div className="d-flex flex-column">
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-dark text-white customButton  px-10 d-flex "> 
                    <span className="mr-5">
                      <img alt="Email" src={toAbsoluteUrl("/media/auth-screen/email.svg")} />                      
                    </span>
                    <span>Sign up with email</span>
                </button>
            </div>                                    
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-default customButton px-10 border d-flex"> 
                    <span className="mr-5">
                        <img alt="Google" src={toAbsoluteUrl("/media/auth-screen/google.svg")} />
                    </span>
                    <span>Sign up with Google</span>
                </button>
            </div>                                    
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-default customButton px-10 border d-flex"> 
                    <span className="mr-5">
                      <img alt="Facebook" src={toAbsoluteUrl("/media/auth-screen/facebook.svg")} />
                    </span>
                    <span>Sign up with Facebook</span>
                </button>
            </div>
        </div>
      </div>
    </>
  );
}
