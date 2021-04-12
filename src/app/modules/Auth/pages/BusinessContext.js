import React, { createContext, useReducer } from 'react';
export const BusinessContext = createContext();
const initialState = {
   listBusiness:
   {
   }
   ,
   currentBusiness: [],
   searchBusiness: [],
   searchFlag: false
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_BUSINESS":
         return {
            listBusiness: [...state.listBusiness, action.payload],
            currentBusiness: [state.currentBusiness],
            searchBusiness: state.searchBusiness,
            searchFlag: false
         };
      case "SET_STATE_BUSINESS":
         return {
            listBusiness: action.payload,
            currentBusiness: [state.currentBusiness]
         };
      case "EDIT_BUSINESS":
         return {
            listBusiness: state.listBusiness.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentBusiness: action.payload,
            searchBusiness: state.searchBusiness,
            searchFlag: false
         };
      case "DEL_BUSINESS":
         return {
            ...state,
            listBusiness: state.listBusiness.filter(emp => emp.id !== action.payload.id),
            searchBusiness: state.searchBusiness,
            searchFlag: false
         }
      case "SET_CURRENT_BUSINESS":
         return {
            listBusiness: state.listBusiness,
            currentBusiness: action.payload,
            searchBusiness: state.searchBusiness,
            searchFlag: false
         };
      case "SET_SEARCH_BUSINESS":
         return {
            listBusiness: state.listBusiness,
            currentBusiness: state.currentBusiness,
            searchBusiness: action.payload,
            searchFlag: true
         }
      default:
         throw new Error();
   }
};
export const BusinessProvider = props => {
   const [Business, setBusiness] = useReducer(reducer, initialState);
   return (
      <BusinessContext.Provider value={[Business, setBusiness]}>
         {props.children}
      </BusinessContext.Provider>
   )
}