import {createSlice} from "@reduxjs/toolkit";
const initialServiceState = {

    listService: [],            
    currentService: []
 };

 export const ServiceSlice = createSlice({
    name: "service",
    initialState: initialServiceState,
    reducers:{
        serviceFetched: (state, action) => {
            state.listService= action.payload;
        },
        addService:(state, action)=>{
            state.listService= [...state.listService, action.payload];
            state.currentService= [state.currentService];
        },
        editService:(state, action)=>{
            state.listService= state.listService.map(emp => (emp.id === action.payload.id ? action.payload : emp));
            state.currentService=action.payload;
        },
        deleteService:(state, action)=>{
            state.listService= state.listService.filter(emp => emp.id !== action.payload.id);
        },
        currentService:(state, action)=>{
            state.currentService= action.payload;
        },
    }
 });