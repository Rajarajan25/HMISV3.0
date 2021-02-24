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