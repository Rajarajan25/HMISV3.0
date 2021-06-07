import React from 'react';

export default function Search(props){
    const {handleSearch}=props;
    return(
        <input className="service_search_input" type="text" name="" placeholder="Search" onChange={handleSearch}/>
    )
}