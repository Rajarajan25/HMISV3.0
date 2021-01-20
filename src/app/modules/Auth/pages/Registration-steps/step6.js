
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";


export default function step5() {
  return (
    <>
      <div className="my-auto mh-100 mx-5 p-5 text-center rightPanel">
        <div className="h1">
            Create account
        </div>
        <p className="helpText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="d-flex flex-column">
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-dark text-white customButton  px-10 d-flex "> 
                    <span className="mr-5">
                      <img alt="Logo" src={toAbsoluteUrl("/media/auth-screen/email.svg")} />                      
                    </span>
                    <span>Sign up with email</span>
                </button>
            </div>                                    
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-default customButton px-10 border d-flex"> 
                    <span className="mr-5">
                        <img alt="Logo" src={toAbsoluteUrl("/media/auth-screen/google.svg")} />
                    </span>
                    <span>Sign up with Google</span>
                </button>
            </div>                                    
            <div className="mx-auto my-3">
                <button type="button" className="btn btn-default customButton px-10 border d-flex"> 
                    <span className="mr-5">
                      <img alt="Logo" src={toAbsoluteUrl("/media/auth-screen/facebook.svg")} />
                    </span>
                    <span>Sign up with Facebook</span>
                </button>
            </div>
        </div>
      </div>
    </>
  );
}
