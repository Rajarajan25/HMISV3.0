import React, { useEffect } from 'react';
import { toAbsoluteUrl } from '../../_metronic/_helpers';
import PropTypes from 'prop-types';

export default function Search(props) {
    const { data, handleSearch, placeholder, uiType } = props;
    const [textValue, setTextValue] = React.useState("");
    const [dataSource, setSource] = React.useState(data || []);

    useEffect(() => {
        if (dataSource.length === 0)
            setSource(data);
    }, [data]);

    const onHandleSearch = (event) => {
        let value = event.target.value;
        let searchedVal = dataSource.filter((e) => { return e.name.toLowerCase().match(new RegExp(value.toLowerCase(), "g")) });
        console.log(searchedVal);
        handleSearch(searchedVal);
    }
    if (uiType === "small") {
        return (<>
            <div className="service_search position-relative">
                <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
                <input type="text" placeholder="Search" className="form-control" value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    onKeyUp={(e) => onHandleSearch(e)} />
            </div>
        </>)
    }
    return <>
        <div className="searchbar d-flex justify-items-center">
            <input className="search_input"
                type="text"
                placeholder={placeholder || "Search"}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                onKeyUp={(e) => onHandleSearch(e)}
            />
            <a href="/#" className="search_icon"><img src={toAbsoluteUrl("/media/patients/cat_search.svg")} alt="" className="" /></a>
        </div>

    </>
}

Search.propTypes={
    data:PropTypes.array.isRequired,
    handleSearch:PropTypes.func.isRequired,
    placeholder:PropTypes.string,
    uiType:PropTypes.string

}
