import React from 'react';

const startTimeList = [
    {
        id:1,
        value:9,
        name: "9.00.00 AM",

    },
    {
        id:2,
        value:11,
        name: "11.00.00 AM",

    }, {
        id:3,
        value:13,
        name: "1.00.00 PM",

    },
    {
        id:4,
        value:15,
        name: "3.00.00 PM",

    },
];

let options = startTimeList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const StartTime = [options];




 
