import React from 'react';

const minsList = [
    {
        id:1,
        code:"05",
        name: "05"

    },
    {
        id:2,
        code:"10",
        name: "10"

    },
    {
        id:3,
        code:"15",
        name: "15"

    },
    {
        id:4,
        code:"20",
        name: "20"

    },
    {
        id:5,
        code:"25",
        name: "25"

    },
    {
        id:6,
        code:"30",
        name: "30"

    },
    {
        id:7,
        code:"35",
        name: "35"

    },
    {
        id:8,
        code:"40",
        name: "40"

    },
    {
        id:9,
        code:"45",
        name: "45"

    },
    {
        id:10,
        code:"50",
        name: "50"

    },
    {
        id:11,
        code:"55",
        name: "55"

    },
    
    
    
];

let options = minsList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const mins = [options];




 
