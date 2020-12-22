import React from 'react';

const endTimeList = [
    {
        id:1,
        value:17,
        name: "17.00.00 PM",

    },
    {
        id:2,
        value:19,
        name: "19.00.00 PM",

    }, {
        id:3,
        value:21,
        name: "21.00.00 PM",

    },
    {
        id:4,
        value:23,
        name: "23.00.00 PM",

    },
];

let options = endTimeList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const EndTime = [options];




 
