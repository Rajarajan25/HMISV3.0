import React from 'react';

const appointmentlist = [
    {
        id:1,
        code:"1",
        name: "1"

    },
    {
        id:2,
        code:"2",
        name: "2"

    },
    {
        id:3,
        code:"3",
        name: "3"

    },
    {
        id:4,
        code:"4",
        name: "4"

    },
    {
        id:5,
        code:"5",
        name: "5"

    },
    {
        id:6,
        code:"6",
        name: "6"

    },
    {
        id:7,
        code:"7",
        name: "7"

    },
    {
        id:8,
        code:"8",
        name: "8"

    },
    {
        id:9,
        code:"9",
        name: "9"

    },
    
    
    
];

let options = appointmentlist.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const appointmenttime = [options];




 
