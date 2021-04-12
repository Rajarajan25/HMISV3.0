import React, { createContext, useReducer } from 'react';
export const UserContext = createContext();
const initialState = {
   listUser:
   {
   }
   ,
   currentUser: [],
   searchUser: [],
   searchFlag: false
};
const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_USER":
         return {
            listUser: [...state.listUser, action.payload],
            currentUser: [state.currentUser],
            searchUser: state.searchUser,
            searchFlag: false
         };
      case "SET_STATE_USER":
         return {
            listUser: action.payload,
            currentUser: [state.currentUser]
         };
      case "EDIT_USER":
         return {
            listUser: state.listUser.map(emp => (emp.id === action.payload.id ? action.payload : emp)),
            currentUser: action.payload,
            searchUser: state.searchUser,
            searchFlag: false
         };
      case "DEL_USER":
         return {
            ...state,
            listUser: state.listUser.filter(emp => emp.id !== action.payload.id),
            searchUser: state.searchUser,
            searchFlag: false
         }
      case "SET_CURRENT_USER":
         return {
            listUser: state.listUser,
            currentUser: action.payload,
            searchUser: state.searchUser,
            searchFlag: false
         };
         case "SET_SEARCH_USER":
            return {
               listUser: state.listUser,
               currentUser: state.currentUser,
               searchUser: action.payload,
               searchFlag: true
            }
      default:
         throw new Error();
   }
};
export const UserProvider = props => {
   const [User, setUser] = useReducer(reducer, initialState);
   return (
      <UserContext.Provider value={[User, setUser]}>
         {props.children}
      </UserContext.Provider>
   )
}