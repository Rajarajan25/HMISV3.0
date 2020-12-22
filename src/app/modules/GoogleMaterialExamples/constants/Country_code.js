import React from 'react';

const countrycodeList = [
    {
        id:1,
        code:"+91",
        name: "+91"

    },
    {
        id:2,
        code:"+61",
        name: "+61"

    },
    {
        id:3,
        code:"+65",
        name: "+65"

    },
    {
        id:4,
        code:"+1",
        name: "+1"

    },
];

let options = countrycodeList.map((data) =>
<option key={data.id} value={data.name}>{data.name}</option>
        );
        
export const Country_code = [options];




 
