import React from 'react';

const serviceList = [
    {
        id:1,
        code:"category(0)",
        name: "category(0)"

    },
    {
        id:2,
        code:"category(1)",
        name: "category(1)"

    },
    {
        id:3,
        code:"category(2)",
        name: "category(2)"

    },
    {
        id:4,
        code:"category(3)",
        name: "category(3)"

    },
];

let options = serviceList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const Categories = [options];




 
