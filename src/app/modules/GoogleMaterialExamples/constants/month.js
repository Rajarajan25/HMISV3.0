import React from 'react';

const monthList = [
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
   
    
    
    
];

let options = monthList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const month = [options];





 
