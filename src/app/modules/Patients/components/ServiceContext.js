import React, { createContext, useContext, useReducer } from 'react';
export const ServiceContext = createContext();

export function useServiceContext() {
   return useContext(ServiceContext);
 }

export const ServiceConsumer = ServiceContext.Consumer;

export const ServiceProviders = props => {
   const initialState={
      pagename:"Service"
   }
   return (
      <ServiceContext.Provider value={initialState}>
         {props.children}
      </ServiceContext.Provider>
   )
}