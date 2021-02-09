
import React from 'react';
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";

export default function Step2(props){

  const {
    formField: {
      
      business,
      
    }
  } = props;
  const [fieldValue,setFieldValue] =React.useState("");
  const handleClick =(e)=>{
    let idaval = e.currentTarget.getAttribute("id");
    console.log(idaval)
    setFieldValue(idaval)
    
    
  }
  localStorage.setItem("business",fieldValue)
  //business.name=fieldValue;
  console.log(fieldValue);
  return (
    <>
    
    <div className="my-auto mh-100 text-center rightPanel">
      <div className="text-left mb-6">
        <h1 className="font-size-28 color_3F4772 text-capitalize font-weight-600 mb-10">Choose Your Business Below</h1>      
        <p className="font-size-14 d-none text-muted font-weight-normal">Enter your details to create your account</p>
      </div>
      
        <div className="row categoryList  scroll scroll-pull">
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column ">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/hospital.svg")} id="hospital" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Hospital</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column ">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/petservice.svg")} id="petservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Pet Services</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/accounts.svg")} id="accounts" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Accounts</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/fitness.svg")} id="fitness" onClick={handleClick}/>
               </span>
               <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Fitness</span> 
            </a>
          </div>
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/counselors.svg")} id="counselors" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Counselors</span>
            </a>
          </div>
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/realestate.svg")} id="realestate" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Real Estate</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/mechanicservice.svg")} id="mechanicservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Mechanic Services</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/salon.svg")} id="salon" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Salon</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/chiropractic.svg")} id="chiropractic" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Chiropractic</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Home Services</span>
            </a>
          </div>

          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/acupuncture.svg")} id="acupuncture" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Acupuncture</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/education.svg")} id="education" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Education</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/film.svg")} id="film" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Film</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/auto.svg")} id="auto" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Auto</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/cleaners.svg")} id="cleaners" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Cleaners</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Home Services</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Home Services</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Home Services</span>
            </a>
          </div>
          
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate  mt-4 mb-2">Home Services</span>
            </a>
          </div>
    
          <div className="m-0">
            <a href="#" className="btn btn-block btn-light text-dark-50 text-center px-5 d-flex flex-column">
              <span className="svg-icon svg-icon-3x svg-icon-primary m-auto ">
                <img alt="Category icons" src={toAbsoluteUrl("/media/auth-screen/homeservice.svg")} id="homeservice" onClick={handleClick}/>
              </span>
              <span className="d-block font-weight-500 text-truncate mt-4 mb-2">Home Services</span>
            </a>
          </div>
          
        </div>
       
      </div>
     
    </>
  );
}
