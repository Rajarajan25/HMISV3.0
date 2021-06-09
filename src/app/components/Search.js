import React from 'react';

export default function Search(props){
    const {data,handleSearch}=props;
    const [textValue,setTextValue]=React.useState("");
    const onHandleSearch = (event) => {
        //setTextValue(event.target.value);
        //console.log(event.target.value);
        //props.handleSearch(event.target.value);
         let arr=data.filter((e)=>{return e.name.toLowerCase().match(new RegExp(event.target.value.toLowerCase(), "g"))});
         handleSearch(arr);
    }
    return<>
        
        <input className="search_input" type="text" name="" placeholder="Search Staff" value={textValue} onChange={(e)=>setTextValue(e.target.value)} onKeyUp={(e)=>onHandleSearch(e)}/>
    </>
}