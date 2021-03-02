import React, { createContext, useReducer } from 'react';
export const DoctorContext = createContext();
const initialState = {
   listDoctor: [
      {
        "BillingAddress": null,
        "ShippingAddress": null,
        "active": null,
        "business_id": null,
        "country_name": "India (91)",
        "display_name": null,
        "email": "maria@lookman.in",
        "first_name": "Jenifer",
        "last_name": "Monica",
        "mobile_number": "89731502424",
        "password": "123",
        "sex": "female",
        "time_Zone": null,
        "title": null,
        "user_name": "Maria",
        "user_type": null,
         "_id": 1,
         "id": 1,
         "name": "Provider name 1",
         "last_name": "Provider name 1",
         "position": null,
         "avatar": null,
         "avatar_path": null,
         "color_code": 9999,
         "display_name": "LkmSpa",
         "title": "Mr",
         "sms_notifications_on": true,
         "email_notifications_on": false,
         "push_notifications_on": true,
         "country_name": "INDIA",
         "mobile_number": "9884412344",
         "teams_view_filter": "all",
         "calendar_sync_id": null,
         "email_signature": "test@gmail.com",
         "created_at": "2020-04-22T15:54:06.000+05:30",
         "updated_at": "2020-04-22T15:57:04.000+05:30",
         "welcome_dialog": null,
         "role": "admin",
         "permissions": null,
         "Office": "",
         "Home": "",
         "Address": "Nandhanam",
         "City": "Chennai",
         "State": "TN",
         "Zip": "",
         "services": [],
         "more_options": {
            "security": "asia pacific",
            "accept_appointments": true,
            "specific_color_calendar": false,
            "color_option_enable": "red",
            "flexible_notifications": true,
            "book_soon_notification_system": true,
            "twoway_google_calendar_sync": true,
            "twoway_office365_calendar_sync": false,
            "oneway_google_sync": true,
            "oneway_apple": true,
            "oneway_office365": false,
            "oneway_mobile": true
         },
         "Provider": "",
         "assign": {
         },
         "unpurchase": null,
         "Country_code": "+91",
         "Image": "",
         "description": "",
         "Client_Count": "1",
         "display_on": true,
         "Created_date": "12-06-2020",
         "Active": false,
         "colorbooking": false,
         "Calendersync": false,
         "Flexinotification": false,
         "Booksoon": false,
         "acceptAppointment": false,
         "officesync": false,
         "googlesync": false,
         "placeholder": "",
         "onewaySync": [],
         "activate": true,
         "Staffbookingpage": "staff",
         "Verifyemail": true,
         "loginAllow": true,
         "color": "",
         "autosave": true,
         locations: [{
            "id": 25,
            "name": "location 1",
            timings: [
               {
                  "id": "16",
                  "work_day_id": "16",
                  "work_day_name": "Monday",
                  "index": "1",
                  "start_time": "16:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     },
                     {
                        "id": "3",
                        "start_time": "13:00:00",
                        "end_time": "14:00:00",
                     }
                  ],
                  "work_day_duration": 480
               },
               {
                  "id": "2",
                  "work_day_id": "2",
                  "work_day_name": "Tuesday",
                  "index": "2",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "3",
                  "work_day_id": "3",
                  "work_day_name": "Wednesday",
                  "index": "3",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "4",
                  "work_day_id": "4",
                  "work_day_name": "Thursday",
                  "index": "4",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "5",
                  "work_day_id": "5",
                  "work_day_name": "Friday",
                  "index": "5",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "6",
                  "work_day_id": "6",
                  "work_day_name": "Saturday",
                  "index": "6",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "7",
                  "work_day_id": "7",
                  "work_day_name": "Sunday",
                  "index": "7",
                  "start_time": "00:00:00",
                  "end_time": "00:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "00:00:00",
                        "end_time": "00:00:00",
                     }], "work_day_duration": 0
               }
            ]
         },
         {
            "id": 345,
            "name": "location 2", timings: [
               {
                  "id": "16",
                  "work_day_id": "16",
                  "work_day_name": "Monday",
                  "index": "1",
                  "start_time": "10:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     },
                     {
                        "id": "3",
                        "start_time": "13:00:00",
                        "end_time": "14:00:00",
                     }
                  ],
                  "work_day_duration": 480
               },
               {
                  "id": "2",
                  "work_day_id": "2",
                  "work_day_name": "Tuesday",
                  "index": "2",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "3",
                  "work_day_id": "3",
                  "work_day_name": "Wednesday",
                  "index": "3",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "4",
                  "work_day_id": "4",
                  "work_day_name": "Thursday",
                  "index": "4",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "5",
                  "work_day_id": "5",
                  "work_day_name": "Friday",
                  "index": "5",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "6",
                  "work_day_id": "6",
                  "work_day_name": "Saturday",
                  "index": "6",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "7",
                  "work_day_id": "7",
                  "work_day_name": "Sunday",
                  "index": "7",
                  "start_time": "00:00:00",
                  "end_time": "00:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "00:00:00",
                        "end_time": "00:00:00",
                     }], "work_day_duration": 0
               }
            ]
         },
         {
            "id": 234,
            "name": "location 3",
            timings: [
               {
                  "id": "16",
                  "work_day_id": "16",
                  "work_day_name": "Monday",
                  "index": "1",
                  "start_time": "10:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     },
                     {
                        "id": "3",
                        "start_time": "13:00:00",
                        "end_time": "14:00:00",
                     }
                  ],
                  "work_day_duration": 480
               },
               {
                  "id": "2",
                  "work_day_id": "2",
                  "work_day_name": "Tuesday",
                  "index": "2",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "3",
                  "work_day_id": "3",
                  "work_day_name": "Wednesday",
                  "index": "3",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "4",
                  "work_day_id": "4",
                  "work_day_name": "Thursday",
                  "index": "4",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }], "work_day_duration": 540
               },
               {
                  "id": "5",
                  "work_day_id": "5",
                  "work_day_name": "Friday",
                  "index": "5",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 0,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "6",
                  "work_day_id": "6",
                  "work_day_name": "Saturday",
                  "index": "6",
                  "start_time": "09:00:00",
                  "end_time": "18:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "11:00:00",
                        "end_time": "12:00:00",
                     }],
                  "work_day_duration": 540
               },
               {
                  "id": "7",
                  "work_day_id": "7",
                  "work_day_name": "Sunday",
                  "index": "7",
                  "start_time": "00:00:00",
                  "end_time": "00:00:00",
                  "is_day_off": 1,
                  "is_special_day": 0,
                  "breaktime": [
                     {
                        "id": "2",
                        "start_time": "00:00:00",
                        "end_time": "00:00:00",
                     }], "work_day_duration": 0
               }
            ]
         }
         ]
      }
      ],

   
   currentDoctor: []
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_DOCTOR":
         return {
            listDoctor: [...state.listDoctor, action.payload],
            currentDoctor: [state.currentDoctor],
            
         };
      case "SETSTATE_DOCTOR":
         return {
            listDoctor: action.payload
         };
      case "EDIT_DOCTOR":
         return {
            listDoctor: state.listDoctor.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentDoctor: action.payload,
            
         };
      case "DEL_DOCTOR":
         return {
            ...state,
            listDoctor: state.listDoctor.filter(emp => emp.id !== action.payload.id),
            
         }
      case "SET_CURRENT_DOCTOR":
         return {
            listDoctor: state.listDoctor,
            currentDoctor: action.payload,
            
         };
      case "SET_SEARCH_DOCTOR":
         return {
            listDoctor: state.listDoctor,
            currentDoctor: state.currentDoctor,
            
         }
      default:
         throw new Error();
   }
};
export const DoctorProvider = props => {
   const [doctor, setdoctor] = useReducer(reducer, initialState);
   return (
      <DoctorContext.Provider value={[doctor, setdoctor]}>
         {props.children}
      </DoctorContext.Provider>
   )
}