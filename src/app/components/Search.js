import React, { useEffect } from 'react';

export default function Search(props) {
    const { data, handleSearch,placeholder } = props;
    const [textValue, setTextValue] = React.useState("");
    const [dataSource, setSource] = React.useState(data || []);

    useEffect(() => {
        if (dataSource.length === 0)
            setSource(data);
    }, [data]);

    const onHandleSearch = (event) => {
        let value = event.target.value;
        let arr = dataSource.filter((e) => { return e.name.toLowerCase().match(new RegExp(value.toLowerCase(), "g")) });
        handleSearch(arr);
    }
    return <>
        <input className="search_input" 
            type="text"
            placeholder={placeholder||"Search"}
            value={textValue} 
            onChange={(e) => setTextValue(e.target.value)} 
            onKeyUp={(e) => onHandleSearch(e)} 
        />
    </>
}