import React from 'react';

const PrevilidgesLst = [
    {
        id:1,
        code:"Edit",
        name: "Edit"

    },
    {
        id:2,
        code:"Add",
        name: "Add"

    },
    {
        id:3,
        code:"Delete",
        name: "Delete"

    },
    {
        id:4,
        code:"View",
        name: "View"

    },
    
   
    
    
    
];

let options = PrevilidgesLst.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const Previlidge = [options];





 
