
import React from 'react';
import { gql, useQuery } from "@apollo/client";
const GET_USER = gql`
{
  getUser{
    first_name
    _id
  }
}

      `;
export default function BusinessConfirmatoin() {
  let currentUser={};
  const {data}=useQuery(GET_USER);
  let business_id=localStorage.getItem("Business_id")
  if(data!== undefined)
  {
     currentUser= data.getUser.find(user => user._id==business_id);
  }
       
  const handleClick = () => {
   window.location.href="/auth/login";
  }
  return (
    <>
    <div class="busi_col">
      <div class="busi_con col-lg-10 col-xl-10 col-12">
      <img src="/media/auth-screen/busi_image.svg" className="d-block d-xl-none d-lg-none d-md-none busicme mw-100" alt="" />
      <div className="text-left mb-6">
      <h1 class="h1 color_3F4772 font-weight-600 d-flex my-auto"><span class="mr-3 mt-8"> Congrats!!! {currentUser &&currentUser.first_name?currentUser.first_name:""} </span> <img src="/media/auth-screen/thumbs-up.svg" alt="thumbs-up" /></h1>      
        <p className="font-size-18 wl_txt mt-10">https://lookman.bitrix24.com/stream/?current_fieldset= SOCSERV</p>
      </div>
      <div className="form-group flex-wrap flex-center">
        <button type="submit" className="btn btn-primary sign-btn h-77 font-weight-500 mt-6" onClick={handleClick}>
          <span>Login</span>
        </button>
      </div>
      </div>
      </div>
    </>
  );
}
