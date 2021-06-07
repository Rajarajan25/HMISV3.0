import React, { createContext, useReducer } from 'react';
export const ServiceContext = createContext();
const initialState = {

   listService: [
      {
         "_id":"1",
         "name":"Service name 1",
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
         "prefered_gender":"Both",
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
         "commission":{
            "Commision":"10",
            "tax_amount":"100",
            "tax_percent":"10",
            "voucher_amount":"20",
            "voucher_percent":"2"
         },
         "timings":{
            "businessType":"MyBusiness",
                  "businessAddress":[{
                     "id":"1",
                     "name":"Maadhuri Selvaraj",
                     "address1":"2/130",
                     "address2":"Kaliyamman Kovil Street, Keelakottai",
                     "address3":"Melakottai (PO)",
                     "city":"Madurai",
                     "pincode":"625706"
                  }],
                  "ClientAddress":"",
                  
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
         "_id":"2",
         "name":"Service name 2",
         "description":"personal and retailer",
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
         "prefered_gender":"Both",
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
         "commission":{
            "Commision":"10",
            "tax_amount":"100",
            "tax_percent":"10",
            "voucher_amount":"20",
            "voucher_percent":"2"
         },
         "timings":{
            "businessType":"MyBusiness",
                  "businessAddress":[{
                     "id":"1",
                     "name":"Maadhuri Selvaraj",
                     "address1":"2/130",
                     "address2":"Kaliyamman Kovil Street, Keelakottai",
                     "address3":"Melakottai (PO)",
                     "city":"Madurai",
                     "pincode":"625706"
                  }],
                  "ClientAddress":"",
                  
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
         "_id":"3",
         "name":"Service name 3",
         "description":"personal and retailer",
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
         "prefered_gender":"Both",
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
         "commission":{
            "Commision":"10",
            "tax_amount":"100",
            "tax_percent":"10",
            "voucher_amount":"20",
            "voucher_percent":"2"
         },
         "timings":{
            "businessType":"MyBusiness",
                  "businessAddress":[{
                     "id":"1",
                     "name":"Maadhuri Selvaraj",
                     "address1":"2/130",
                     "address2":"Kaliyamman Kovil Street, Keelakottai",
                     "address3":"Melakottai (PO)",
                     "city":"Madurai",
                     "pincode":"625706"
                  }],
                  "ClientAddress":"",
                  
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
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_SERVICE":
         return {
            listService: [...state.listService, action.payload],
            currentService: [state.currentService],
            
         };
      case "SETSTATE_SERVICE":
         return {
            listService: action.payload
         };
      case "EDIT_SERVICE":
         return {
            listService: state.listService.map(emp => (emp._id === action.payload._id ? action.payload : emp)),
            currentService: action.payload,
            
         };
      case "DEL_SERVICE":
         return {
            ...state,
            listService: state.listService.filter(emp => emp._id !== action.payload._id),
            
         }
      case "SET_CURRENT_SERVICE":
         return {
            listService: state.listService,
            currentService: action.payload,
            
         };
      case "SET_SEARCH_SERVICE":
         return {
            listService: state.listService,
            currentService: state.currentService,
            
         }
      default:
         throw new Error();
   }
};
export const ServiceProviders = props => {
   const [service, setservice] = useReducer(reducer, initialState);
   return (
      <ServiceContext.Provider value={[service, setservice]}>
         {props.children}
      </ServiceContext.Provider>
   )
}