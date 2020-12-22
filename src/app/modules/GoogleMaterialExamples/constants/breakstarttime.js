import React from 'react';

const breakstartTimeList = [
    {
        id:1,
        value:9,
        name: "9.00.00 AM",

    },
    {
        id:2,
        value:9.3,
        name: "9.30.00 AM",

    }, {
        id:3,
        value:10,
        name: "10.00.00 AM",

    },
    {
        id:4,
        value:10.3,
        name: "10.30.00 AM",

    },
    {
        id:5,
        value:11,
        name: "11.30.00 AM",

    },
    {
        id:6,
        value:12,
        name: "12.00.00 PM",

    },
    {
        id:7,
        value:12.3,
        name: "12.30.00 PM",

    },
    {
        id:8,
        value:13,
        name: "13.00.00 PM",

    },
    {
        id:9,
        value:13.3,
        name: "13.30.00 PM",

    },
    {
        id:10,
        value:14,
        name: "14.00.00 PM",

    },
];

let options = breakstartTimeList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const BreakStartTime = [options];




 
