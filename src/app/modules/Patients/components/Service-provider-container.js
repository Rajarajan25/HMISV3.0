import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

export class ServiceProviderContainer extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         key: "home"
      };
   }

   render() {
      return (

         <div>
            <div className="containerAreaouter">
               <div className="containerArea">
                  <div className="CollapsebleIcon">
                     <a data-toggle="collapse" data-target="#availabledoctors" class="circlebordercolor textColor11" href=""><i class="fa fa-angle-down"></i></a>
                  </div>
                  <div className="TittleCard d-flex">
                     <ul>
                        <li>
                           <span className=" headingHighlight TittleCardColor borderradiuscard text-white">HEALTHY
                        <a class="ml-3"><i class="fa fa-pen"></i></a>
                              <a href=""><i class="fa fa-check-square"></i></a>
                              <a href=""><i class="fa fa-ellipsis-h"></i></a>
                           </span>
                        </li>
                     </ul>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradius">
                              <img src={toAbsoluteUrl("/media/health/heartbeat.svg")} alt="" className="mx-auto" />
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row text-center">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row text-center">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1 ">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_1.png")} class="MuiAvatar-img" /> </div>
                              <div className="MuiAvatar-root MuiAvatar-circle jss1"><span className="circleprovideblue font-size-12 text-center pt-xl-2">AK</span></div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_3.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                              <span className="MuiAvatar-root1 MuiAvatar-circle jss1 circleprovideGray"><span className="labelText1  font-size-12">+ 5</span></span>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradiusBlue">
                              <label className="circle-text-white font-size-13">AK</label>
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row text-center">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row text-center">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1 ">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div className="MuiAvatar-root MuiAvatar-circle jss1"><span className="circleprovideGreen font-size-12 text-center pt-xl-2">S</span></div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradiusGreen circle-text-white">
                              <label className="circle-text-align font-size-15 ml-xl-auto">S</label>
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_1.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/usericon.png")} class="MuiAvatar-img" /> </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradiusPurple circle-text-white">
                              <label className="circle-text-align font-size-15 ml-xl-auto">JP</label>
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_1.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_3.png")} class="MuiAvatar-img" /> </div>
                              <span className="MuiAvatar-root1 MuiAvatar-circle jss1 circleprovideGray"><span className="labelText1  font-size-12">+ 2</span></span>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradius">
                              <img src={toAbsoluteUrl("/media/health/home.svg")} alt="" className="mx-auto" />
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="containerAreaouter">
               <div className="containerArea">
                  <div className="CollapsebleIcon">
                     <a data-toggle="collapse" data-target="#availabledoctors" class="circleborderLightGreen TextColorLightGreen" href=""><i class="fa fa-angle-down"></i></a>
                  </div>
                  <div className="TittleCard d-flex">
                     <ul>
                        <li>
                           <span className=" headingHighlight TittleCardLightGreen borderradiuscard text-white">WITH DOCTOR
                        <a class="ml-3"><i class="fa fa-pen"></i></a>
                              <a href=""><i class="fa fa-check-square"></i></a>
                              <a href=""><i class="fa fa-ellipsis-h"></i></a>
                           </span>
                        </li>
                     </ul>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradius">
                              <img src={toAbsoluteUrl("/media/health/heartbeat.svg")} alt="" className="mx-auto" />
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_1.png")} class="MuiAvatar-img" /> </div>
                              <div className="MuiAvatar-root MuiAvatar-circle jss1"><span className="circleprovideGreen font-size-12 text-center pt-xl-2">S</span></div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradiusBlue">
                              <label className="circle-text-white font-size-13">AK</label>
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row text-center">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row text-center">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1 ">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div className="MuiAvatar-root MuiAvatar-circle jss1"><span className="circleprovidePurple font-size-12 text-center pt-xl-2">JP</span></div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="containerAreaouter">
               <div className="containerArea">
                  <div className="CollapsebleIcon">
                     <a data-toggle="collapse" data-target="#availabledoctors" class="circleborderpink TextColorPink" href=""><i class="fa fa-angle-down"></i></a>
                  </div>
                  <div className="TittleCard d-flex">
                     <ul>
                        <li>
                           <span className=" headingHighlight TittleCardLightPink borderradiuscard text-white">WAITING ROOM
                        <a class="ml-3"><i class="fa fa-pen"></i></a>
                              <a href=""><i class="fa fa-check-square"></i></a>
                              <a href=""><i class="fa fa-ellipsis-h"></i></a>
                           </span>
                        </li>
                     </ul>
                  </div>
                  <div className="card card-custom borderspace InnerOuterSpace">
                     <div className="d-flex flex-row Health_Box ">
                        <div className="d-flex text-center p-xl-2">
                           <span className="circleradius">
                              <img src={toAbsoluteUrl("/media/health/heartbeat.svg")} alt="" className="mx-auto" />
                           </span>
                        </div>
                        <div className="col-5 Pad-Left">
                           <div className="pt-xl-4">
                              <div className="d-flex">
                                 <span className="form-lable font_weight_bold font-size-13 fontname HealthHighlight">
                                    <label className="borderdashed mb-sm-0">Health</label>
                                    <Link to="#">
                                       <img src={toAbsoluteUrl("/media/health/edit.svg")} alt="" className="" /></Link>
                                 </span>
                                 <span className="font-size-10 DurationBg Fontcolor pad-ctrl font_weight_medium">Duration: 30 Mins</span>
                              </div>
                              <div className="d-flex MT-5">
                                 <p className="form-control-static font_weight_medium color_b5b5c4 d-flex font-size-12"><img src={toAbsoluteUrl("/media/users/location.svg")} alt="" className="imght" />Perumbakkam, Chennai <span className="LabelText">10 Mins Ago</span></p>
                              </div>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 font-size-13 m-xl-auto1">Service Type</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-13 m-xl-auto1">Private</span>
                           </div>
                        </div>
                        <div className="col-1b pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Providers</label>
                           </div>
                           <div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_1.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/usericon.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_3.png")} class="MuiAvatar-img" /> </div>
                              <div class="MuiAvatar-root MuiAvatar-circle jss1"><img alt="" src={toAbsoluteUrl("/media/health/healthicon_4.png")} class="MuiAvatar-img" /> </div>
                              <span className="MuiAvatar-root1 MuiAvatar-circle jss1 circleprovideGray"><span className="labelText1  font-size-12">+ 5</span></span>
                           </div>
                        </div>
                        <div className="col-1a pt-xl-2">
                           <div className="d-flex flex-row">
                              <label className="font_weight_medium color_b5b5c4 m-xl-auto1 font-size-13">Experience</label>
                           </div>
                           <div className="d-flex flex-row">
                              <span className="font_weight_medium color_3f4355 font_weight_bold m-xl-auto1 font-size-13">10Years</span>
                           </div>
                        </div>
                        <div className="col-1a m-xl-4 borderLeft">
                           <div className="d-flex flex-row pl-xl-5 pt-xl-1">
                              <span className="font_weight_medium color_b5b5c4 font-size-11 pt-xl-3 pl-xl-7">Price</span>
                              <span className="font_weight_medium color_3f4355 font_weight_bold font-size-11 PriceStyle  text-center MLspace TxtcolorWhite mt-xl-2">Rs.200</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex flex-row">
               <div className="ml-auto ImageWidth">
                  <Link to="#">
                     <img src={toAbsoluteUrl("/media/health/download.svg")} alt="" className="" /></Link>
               </div>
            </div>
         </div>

      );
   }
}

export default ServiceProviderContainer;
