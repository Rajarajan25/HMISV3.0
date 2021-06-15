import {createSlice} from "@reduxjs/toolkit";
const initialServiceState = {

    listService: [
       {
          "id":"1",
          "name":"Service name 1",
          "service_type":"Public",
          "description":"personal and retailer",
          "is_active":"1",
          "position":"1",
          "cost":200,
          "color_code":"#41BC87",
          "display_name":"LkmSpa",
          "booking_url":"apm/sd",
          "is_recurring":"0",
          "picture":null,
          "picture_sub_path":null,
          "is_visible":"1",
          "picture_path":null,
          "category":"ENT",
          "allow_waitlist":true,
          "staff_conformation":true,
          "allow_multiple_appointment":true,
          "display_provider_booking_page":true,
          "enable_accept_payments":true,
          "accept_deposits":true,
          "gender":"Both",
          "display_order":1,
          "commission-enabled":true,
          "deleted-at":null,
          "extra-time-in-seconds":null,
          "extra-time-type":"Processing or Bocked",
          "room-required":false,
          "sorting-id":1,
          "voucher-enabled":true,
          "voucher-expiration-period":"default",
          "site_id":1727093,
          "workspace_id":2232323,
          "duration":{
             "duration_hours":1,
             "duration_minutes":20,
             "buffer_before_min":10,
             "buffer_after_min":10,
             "latest_appointment":10,
             "advanced_appointment":1,
             "hide_duration_on_booking_page":false,
             "enable_appointment_at_fixed_time":false,
             "multiple_duration":true,
             "max-duration-in-seconds":5400,
             "min-duration-in-seconds":5400,
             "pricetype":"fixed",
             "price":2000,
             "date_range":"infinity"
          },
          "relationships":{
             "staff":{
                "data":[
                   {
                      "id":"1397814",
                      "type":"staff"
                   },
                   {
                      "id":"1397815",
                      "type":"staff"
                   }
                ]
             },
             "locations":{
                "data":[
                   {
                      "id":"478457",
                      "type":"locations"
                   }
                ]
             },
             "resources":{
                "data":[
                   {
                      "id":"478457",
                      "type":"room"
                   }
                ]
             },
             "service-group":{
                "data":{
                   "id":"1164883",
                   "type":"service-groups"
                }
             },
             "subcategory":{
                "data":{
                   "id":"115",
                   "type":"subcategories"
                }
             }
          },
          "service_more_options":{
             "group_booking":true,
             "private_service":true,
             "limit_booking":10
          },
          "commission": [
            {
              "amount": 10,
              "percentage": 2,
              "commission_type": "Service",
            }
          ],
          "timings":{
             
                   
             "availability":{
                "data":[
                   {
                      "availability_id":12121212,
                   "availability_type":"Zoom",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   },
                 {
                      "availability_id":12121212,
                   "availability_type":"In-Person",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   }
                ]
             }
          },
          "staff":[{
             "id":"123455",
             "name":"Maadhuri",
             "mobile_number":"7094820686"
          },
          {
             "id":"123456",
             "name":"Prabhakaran",
             "mobile_number":"6383376365",
          },
          {
             "id":"123457",
             "name":"Kabilan",
             "mobile_number":"6383376365",
          },
          {
             "id":"123458",
             "name":"Murali",
             "mobile_number":"6383376365",
          }
 
       ],
          "payments":{
             "currency":"usd",
             "deposit":1000,
             "taxable":true,
             "tax_percentage":5,
             "require_payment_for_service":"Boolean",
             "staff_commission":true,
             "voucher-enabled":true,
             "retail_price":"23.0",
             "special_price":"20.0",
             "advance_retail_price":"200",
             "price_type":"fixed",
             "staff_name":"",
             "isAdvancedPrice":true,
             "service_pricing_by_staff":
                [
                   {
                      "staff_id":89988,
                      "non-discounted-price":25.0,
                      "price_type":"fixed",
                      "retail_price":25.0,
                      "special_price":100,
                      "duration_hours":1,
                      "duration_minutes":20
                   },
                   {
                      "staff_id":89987,
                      "non-discounted-price":25.0,
                      "price_type":"fixed",
                      "retail_price":50.0,
                      "special_price":200,
                      "duration_hours":1,
                      "duration_minutes":10
                   }
                ]
             
          }
       },
       {
          "id":"2",
          "name":"Service name 2",
          "description":"personal and retailer",
          "service_type":"Public",
          "is_active":"1",
          "position":"1",
          "cost":100,
          "color_code":"#41BC87",
          "display_name":"LkmSpa",
          "booking_url":"apm/sd",
          "is_recurring":"0",
          "picture":null,
          "picture_sub_path":null,
          "is_visible":"1",
          "picture_path":null,
          "category":"ENT",
          "allow_waitlist":true,
          "staff_conformation":true,
          "allow_multiple_appointment":true,
          "display_provider_booking_page":true,
          "enable_accept_payments":true,
          "accept_deposits":true,
          "gender":"Both",
          "display_order":1,
          "commission-enabled":true,
          "deleted-at":null,
          "extra-time-in-seconds":null,
          "extra-time-type":"Processing or Bocked",
          "room-required":false,
          "sorting-id":1,
          "voucher-enabled":true,
          "voucher-expiration-period":"default",
          "site_id":1727093,
          "workspace_id":2232323,
          "duration":{
             "duration_hours":1,
             "duration_minutes":20,
             "buffer_before_min":10,
             "buffer_after_min":10,
             "latest_appointment":10,
             "advanced_appointment":1,
             "hide_duration_on_booking_page":false,
             "enable_appointment_at_fixed_time":false,
             "multiple_duration":true,
             "max-duration-in-seconds":5400,
             "min-duration-in-seconds":5400
          },
          "staff":[{
             "id":"123455",
             "name":"Maadhuri",
             "mobile_number":"7094820686"
          },
          {
             "id":"123456",
             "name":"Prabhakaran",
             "mobile_number":"6383376365",
          },
          {
             "id":"123457",
             "name":"Kabilan",
             "mobile_number":"6383376365",
          },
          {
             "id":"123458",
             "name":"Murali",
             "mobile_number":"6383376365",
          }
 
       ],
          "relationships":{
             "staff":{
                "data":[
                   {
                      "id":"1397814",
                      "type":"staff"
                   },
                   {
                      "id":"1397815",
                      "type":"staff"
                   }
                ]
             },
             "locations":{
                "data":[
                   {
                      "id":"478457",
                      "type":"locations"
                   }
                ]
             },
             "resources":{
                "data":[
                   {
                      "id":"478457",
                      "type":"room"
                   }
                ]
             },
             "service-group":{
                "data":{
                   "id":"1164883",
                   "type":"service-groups"
                }
             },
             "subcategory":{
                "data":{
                   "id":"115",
                   "type":"subcategories"
                }
             }
          },
          "service_more_options":{
             "group_booking":true,
             "private_service":true,
             "limit_booking":10
          },
          "commission": [
            {
              "amount": 10,
              "percentage": 2,
              "commission_type": "Service",
            }
          ],
          "timings":{
             
                   
             "availability":{
                "data":[
                   {
                      "availability_id":12121212,
                   "availability_type":"Zoom",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   },
                 {
                      "availability_id":12121212,
                   "availability_type":"In-Person",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   }
                ]
             }
          },
          "payments":{
             "currency":"usd",
             "deposit":1000,
             "taxable":true,
             "tax_percentage":5,
             "require_payment_for_service":"Boolean",
             "staff_commission":true,
             "voucher-enabled":true,
             "service-pricing-by-staff":{
                "data":[
                   {
                      "staff_id":89988,
                      "non-discounted-price":25.0,
                      "price-type":"fixed",
                      "retail_price":25.0,
                      "special_price":100,
                      "duration_hours":1,
                      "duration_minutes":20
                   },
                   {
                      "staff_id":89988,
                      "non-discounted-price":25.0,
                      "price-type":"fixed",
                      "retail_price":25.0,
                      "special_price":100,
                      "duration_hours":1,
                      "duration_minutes":20
                   }
                ]
             }
          }
       },
       {
          "id":"3",
          "name":"Service name 3",
          "description":"personal and retailer",
          "service_type":"Public",
          "is_active":"1",
          "position":"1",
          "cost":250,
          "color_code":"#41BC87",
          "display_name":"LkmSpa",
          "booking_url":"apm/sd",
          "is_recurring":"0",
          "picture":null,
          "picture_sub_path":null,
          "is_visible":"1",
          "picture_path":null,
          "category":"ENT",
          "allow_waitlist":true,
          "staff_conformation":true,
          "allow_multiple_appointment":true,
          "display_provider_booking_page":true,
          "enable_accept_payments":true,
          "accept_deposits":true,
          "gender":"Both",
          "display_order":1,
          "commission-enabled":true,
          "deleted-at":null,
          "extra-time-in-seconds":null,
          "extra-time-type":"Processing or Bocked",
          "room-required":false,
          "sorting-id":1,
          "voucher-enabled":true,
          "voucher-expiration-period":"default",
          "site_id":1727093,
          "workspace_id":2232323,
          "duration":{
             "duration_hours":1,
             "duration_minutes":20,
             "buffer_before_min":10,
             "buffer_after_min":10,
             "latest_appointment":10,
             "advanced_appointment":1,
             "hide_duration_on_booking_page":false,
             "enable_appointment_at_fixed_time":false,
             "multiple_duration":true,
             "max-duration-in-seconds":5400,
             "min-duration-in-seconds":5400
          },
          "staff":[{
             "id":"123455",
             "name":"Maadhuri",
             "mobile_number":"7094820686"
          },
          {
             "id":"123456",
             "name":"Prabhakaran",
             "mobile_number":"6383376365",
          },
          {
             "id":"123457",
             "name":"Kabilan",
             "mobile_number":"6383376365",
          },
          {
             "id":"123458",
             "name":"Murali",
             "mobile_number":"6383376365",
          }
 
       ],
          "relationships":{
             "staff":{
                "data":[
                   {
                      "id":"1397814",
                      "type":"staff"
                   },
                   {
                      "id":"1397815",
                      "type":"staff"
                   }
                ]
             },
             "locations":{
                "data":[
                   {
                      "id":"478457",
                      "type":"locations"
                   }
                ]
             },
             "resources":{
                "data":[
                   {
                      "id":"478457",
                      "type":"room"
                   }
                ]
             },
             "service-group":{
                "data":{
                   "id":"1164883",
                   "type":"service-groups"
                }
             },
             "subcategory":{
                "data":{
                   "id":"115",
                   "type":"subcategories"
                }
             }
          },
          "service_more_options":{
             "group_booking":true,
             "private_service":true,
             "limit_booking":10
          },
          "commission": [
            {
              "amount": 10,
              "percentage": 2,
              "commission_type": "Service",
            }
          ],
          "timings":{
             
                   
             "availability":{
                "data":[
                   {
                      "availability_id":12121212,
                   "availability_type":"Zoom",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   },
                 {
                      "availability_id":12121212,
                   "availability_type":"In-Person",
                      "sessions":{
                         "data":[
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Sunday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 1",
                               "work_day_id":1,
                               "work_day_name":"Monday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            },
                            {
                               "id":12,
                               "name":"Session 2",
                               "work_day_id":1,
                               "work_day_name":"Tuesday",
                               "index":1,
                               "start_time":"9.30",
                               "end_time":"6.30",
                               "is_day_off":1,
                               "is_special_day":1,
                               "servicebreaktime":[
                                  {
                                     "id":12,
                                     "start_time":"9.10",
                                     "end_time":"10.10"
                                  }
                               ],
                               "work_day_duration":"Number"
                            }
                         ]
                      }
                   }
                ]
             }
          },
          "payments":{
             "currency":"usd",
             "deposit":1000,
             "taxable":true,
             "tax_percentage":5,
             "require_payment_for_service":"Boolean",
             "staff_commission":true,
             "voucher-enabled":true,
             "service-pricing-by-staff":{
                "data":[
                   {
                      "staff_id":89988,
                      "non-discounted-price":25.0,
                      "price-type":"fixed",
                      "retail_price":25.0,
                      "special_price":100,
                      "duration_hours":1,
                      "duration_minutes":20
                   },
                   {
                      "staff_id":89988,
                      "non-discounted-price":25.0,
                      "price-type":"fixed",
                      "retail_price":25.0,
                      "special_price":100,
                      "duration_hours":1,
                      "duration_minutes":20
                   }
                ]
             }
          }
       }
    
              
    ],
    currentService: []
 };

 export const ServiceSlice = createSlice({
    name: "service",
    initialState: initialServiceState,
    reducers:{
        serviceFetched: (state, action) => {
            state.listService= action.payload;
        },
        addService:(state, action)=>{
            state.listService= [...state.listService, action.payload];
            state.currentService= [state.currentService];
        },
        editService:(state, action)=>{
            state.listService= state.listService.map(emp => (emp.id === action.payload.id ? action.payload : emp));
            state.currentService=action.payload;
        },
        deleteService:(state, action)=>{
            state.listService= state.listService.filter(emp => emp.id !== action.payload.id);
        },
        currentService:(state, action)=>{
            state.currentService= action.payload;
        },
    }
 });