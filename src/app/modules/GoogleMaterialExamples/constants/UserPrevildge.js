import React from 'react';

const UserPrevilidgesLst = [
  
    {
        id:4,
        code:"View",
        name: "View"

    },
    
   
    
    
    
];

let options = UserPrevilidgesLst.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const UserPrevildge = [options];





 
