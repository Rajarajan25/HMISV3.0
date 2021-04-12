import React, { createContext, useReducer } from 'react';
export const StaffContext = createContext();
const initialState = {

   listStaff: [
      {
         "name": "jenifer",
         "user_name":"jenifer@gmail.com",
         "official_email":"jenifer@gmail.com",
         "mobile":"8973150519",
         "role":"service_provider",

      }],
      

   
   currentStaff: []
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_STAFF":
         return {
            listStaff: [...state.listStaff, action.payload],
            currentStaff: [state.currentStaff],
            
         };
      case "SETSTATE_STAFF":
         return {
            listStaff: action.payload
         };
      case "EDIT_STAFF":
         return {
            listStaff: state.listStaff.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentStaff: action.payload,
            
         };
      case "DEL_STAFF":
         return {
            ...state,
            listStaff: state.listStaff.filter(emp => emp.id !== action.payload.id),
            
         }
      case "SET_CURRENT_STAFF":
         return {
            listStaff: state.listStaff,
            currentStaff: action.payload,
            
         };
      case "SET_SEARCH_STAFF":
         return {
            listStaff: state.listStaff,
            currentStaff: state.currentStaff,
            
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