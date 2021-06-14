import { TimingsModel } from "./TimingsModel";

export const StaffModel={
id:undefined,//Int
booking_url:"",//String
color_code: "#000000",//Int
description:"",//String,
display_name:"",//String,
display_order:0,//Integer,
email: "",//String,
employement_from: "",//String,
employement_to: "",//String,
experience_month: 1,//Number,
experience_year: 0,//Number,
first_name: "",//String,
gender: "",//String,
staff_id:0,//Number,
is_active:false,//String,
is_service_provider:false,// String,
last_name: "",//String,
name: "",//String,
phone_no: "",//String,
phone_no_country: "",//String,
// services: [staff_services]=[],
// sync: [staff_sync]=[],
// role: [String]=[],
site_creator:false,//Boolean,
site_id: "",//String,
site_owener:false,//Boolean,
sorting_id:0,//Number,
workspace_id:0,//Number,
staff_timings: [TimingsModel],
commission:[],
}