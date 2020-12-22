import React from 'react';

const AdminPrevilidgesLst = [
    {
        id:1,
        code:"Edit",
        name: "Edit"

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

let options = AdminPrevilidgesLst.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const AdminPrevildge = [options];





 
