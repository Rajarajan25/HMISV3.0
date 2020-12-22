import React, { createContext, useReducer } from 'react';
export const UserContext = createContext();
const initialState = {
   listUser: [
      {
         "name": "Maadhuri Selvaraj",
         "email": "maadhuri@lookman.in",
         "phone_number": "7094820686",
         "password" :"maadhuri@123",
         "id" :"1"
      }
   ],
   currentUser: []
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_USER":
         return {
            listUser: [...state.listUser, action.payload],
            currentUser: [state.currentUser]
         };
      case "EDIT_USER":
         return {
            listUser: state.listUser.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentUser: action.payload
         };
      case "DEL_USER":
         return {
            ...state,
            listUser: state.listUser.filter(emp => emp.id !== action.payload.id),
         }
      case "SET_CURRENT_USER":
         return {
            listUser: state.listUser,
            currentUser: action.payload
         };
      case "SET_STATE_USER":
         return {
            listUser: action.payload,
            currentUser: [state.currentUser]
         };
      default:
         throw new Error();
   }
};
export const UserProvider = props => {
   const [user, setUser] = useReducer(reducer, initialState);
   return (
      <UserContext.Provider value={[user, setUser]}>
         {props.children}
      </UserContext.Provider>
   )
}