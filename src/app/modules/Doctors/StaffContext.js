import React, { createContext, useReducer } from 'react';
export const StaffContext = createContext();
const initialState = {
   listStaff: [
      {
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
      },
      {
         "id": 2,
         "name": "Provider name 2",
         "last_name": "Provider name 2",
         "position": null,
         "avatar": null,
         "avatar_path": null,
         "color_code": 9999,
         "display_name": "LkmSpa",
         "title": "Mr",
         "sms_notifications_on": true,
         "email_notifications_on": false,
         "push_notifications_on": true,
         "country_name": "India",
         "mobile_number": "9884412345",
         "teams_view_filter": "all",
         "calendar_sync_id": null,
         "email_signature": "sample@gmail.com",
         "created_at": "2020-04-22T15:54:06.000+05:30",
         "updated_at": "2020-04-22T15:57:04.000+05:30",
         "welcome_dialog": null,
         "role": "admin",
         "permissions": null,
         "assign": {
            "interactions": false,
            "booking": false
         },
         "unpurchase": null,
         "Country_code": "+91",
         "Image": "",
         "description": "",
         "Client_Count": "1",
         "display_on": true,
         "Created_date": "12-06-2020",
         "Active": true,
         "colorbooking": false,
         "Calendersync": false,
         "Flexinotification": false,
         "Booksoon": false,
         "acceptAppointment": false,
         "officesync": false,
         "googlesync": false,
         "placeholder": "Alaska",
         "onewaySync": [
         ],
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
      },
      {
         "id": 3,
         "name": "Provider name 3",
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
         "Services": [
         ],
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
         Provider: "",
         "assign": {
         },
         "unpurchase": null,
         "Country_code": "+91",
         "Image": "",
         "description": "",
         "Client_Count": "1",
         "display_on": true,
         "Created_date": "12-06-2020",
         "Active": true,
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
      },
      {
         "id": 4,
         "name": "Provider name 4",
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
         "Services": [
         ],
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
         Provider: "",
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
      },
      {
         "id": 5,
         "name": "Provider name 5",
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
         "Services": [
         ],
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
         Provider: "",
         "assign": {
         },
         "unpurchase": null,
         "Country_code": "+91",
         "Image": "",
         "description": "",
         "Client_Count": "1",
         "display_on": true,
         "Created_date": "12-06-2020",
         "Active": true,
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
      },
      {
         "id": 6,
         "name": "Provider name 6",
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
         "Services": [
         ],
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
         Provider: "",
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
      },
   ],
   currentStaff: {
      "id": -1,
      "name": "Provider name 1",
      "description": "Provider description 1",
      "mobile_number": null,
      "email_signature": null,
      "avatar_path": null,
      "clients_served_sametime": 2,
      "staff_booking_page": "booking page",
      "verification_email_signature": true,
      "email_verification": true,
      "login_Allowed": true,
      "display_provider_booking_page": true,
      "sms_notifications_on": null,
      "email_notifications_on": null,
      "push_notifications_on": true,
      "teams_view_filter": "all",
      "calendar_sync_id": null,
      "calendar_color": "yellow",
      "book_soon_notification": true,
      "created_at": "2020-04-22T15:54:06.000+05:30",
      "updated_at": "2020-04-22T15:57:04.000+05:30",
      "welcome_dialog": null,
      "role": "admin",
      "permissions": null,
      "active_status": true,
      "more_options": {
         "security": "asia pacific",
         "accept appointments": true,
         "specific_color_calendar": false,
         "color_option_enable": "red",
         "flexible_notifications": true,
         "book_soon_notification_system": true,
         "twoway_google_calendar_sync": true,
         "twoway_office365_calendar_sync": false,
         "oneway_google_sync": true,
         "oneway_apple": true,
         "oneway_office365": false,
         "oneway_mobile": true,
      },
      "assign": {
         "interactions": false,
         "booking": false
      },
      "unpurchase": null,
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
      services: [
         {
            "id": 178,
            "name": "service 1"
         },
         {
            "id": 1745,
            "name": "service 2"
         },
         {
            "id": 156,
            "name": "service 3"
         }
      ],
      locations: [{
         "id": 1,
         "name": "location 1",
         timings: [
            {
               "id": "1",
               "work_day_id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
                     "start_time": "00:00:00",
                     "end_time": "00:00:00",
                  }], "work_day_duration": 0
            }
         ]
      },
      {
         "id": 2,
         "name": "location 2", timings: [
            {
               "id": "1",
               "work_day_id": "1",
               "work_day_name": "Monday",
               "index": "1",
               "start_time": "10:00:00",
               "end_time": "18:00:00",
               "is_day_off": 0,
               "is_special_day": 0,
               "breaktime": [
                  {
                     "id": "1",
                     "start_time": "11:00:00",
                     "end_time": "12:00:00",
                  },
                  {
                     "id": "2",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
                     "start_time": "00:00:00",
                     "end_time": "00:00:00",
                  }], "work_day_duration": 0
            }
         ]
      },
      {
         "id": 3,
         "name": "location 3",
         timings: [
            {
               "id": "1",
               "work_day_id": "1",
               "work_day_name": "Monday",
               "index": "1",
               "start_time": "10:00:00",
               "end_time": "18:00:00",
               "is_day_off": 0,
               "is_special_day": 0,
               "breaktime": [
                  {
                     "id": "1",
                     "start_time": "11:00:00",
                     "end_time": "12:00:00",
                  },
                  {
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
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
                     "id": "1",
                     "start_time": "00:00:00",
                     "end_time": "00:00:00",
                  }], "work_day_duration": 0
            }
         ]
      }
      ]
   },
   searchStaff: [],
   searchFlag: false
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_STAFF":
         return {
            listStaff: [...state.listStaff, action.payload],
            currentStaff: [state.currentStaff],
            searchStaff: state.searchStaff,
            searchFlag: false
         };
      case "SETSTATE_STAFF":
         return {
            listStaff: action.payload
         };
      case "EDIT_STAFF":
         return {
            listStaff: state.listStaff.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentStaff: action.payload,
            searchStaff: state.searchStaff,
            searchFlag: false
         };
      case "DEL_STAFF":
         return {
            ...state,
            listStaff: state.listStaff.filter(emp => emp.id !== action.payload.id),
            searchStaff: state.searchStaff,
            searchFlag: false
         }
      case "SET_CURRENT_STAFF":
         return {
            listStaff: state.listStaff,
            currentStaff: action.payload,
            searchStaff: state.searchStaff,
            searchFlag: false
         };
      case "SET_SEARCH_STAFF":
         return {
            listStaff: state.listStaff,
            currentStaff: state.currentStaff,
            searchStaff: action.payload,
            searchFlag: true
         }
      default:
         throw new Error();
   }
};
export const StaffProvider = props => {
   const [staff, setstaff] = useReducer(reducer, initialState);
   return (
      <StaffContext.Provider value={[staff, setstaff]}>
         {props.children}
      </StaffContext.Provider>
   )
}