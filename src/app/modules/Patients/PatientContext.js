import React, { createContext, useReducer } from 'react';
export const PatientContext = createContext();
const initialState = {
   listPatient: [
      {
        "BillingAddress": null,
        "ShippingAddress": null,
        "active": null,
        "business_id": null,
        "country_name": "India (91)",
        "display_name": null,
        "email": "maadhuri@lookman.in",
        "first_name": "Maadhuri",
        "last_name": "S",
        "mobile_number": "07094820686",
        "password": "123",
        "sex": "female",
        "time_Zone": null,
        "title": null,
        "user_name": null,
        "user_type": null,
         "_id": 1,
         "appointment":[
            {
               "name":"Hospital"
            },
            {
               "name":"Dental"
            }
         ]
      }
      ],

   
   currentPatient: []
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_PATIENT":
         return {
            listPatient: [...state.listPatient, action.payload],
            currentPatient: [state.currentPatient],
            
         };
      case "SETSTATE_PATIENT":
         return {
            listPatient: action.payload
         };
      case "EDIT_PATIENT":
         return {
            listPatient: state.listPatient.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentPatient: action.payload,
            
         };
      case "DEL_PATIENT":
         return {
            ...state,
            listPatient: state.listPatient.filter(emp => emp.id !== action.payload.id),
            
         }
      case "SET_CURRENT_PATIENT":
         return {
            listPatient: state.listPatient,
            currentPatient: action.payload,
            
         };
      case "SET_SEARCH_PATIENT":
         return {
            listPatient: state.listPatient,
            currentPatient: state.currentPatient,
            
         }
      default:
         throw new Error();
   }
};
export const PatientProvider = props => {
   const [patient, setpatient] = useReducer(reducer, initialState);
   return (
      <PatientContext.Provider value={[patient, setpatient]}>
         {props.children}
      </PatientContext.Provider>
   )
}