import React from 'react';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import PropTypes from 'prop-types';
export function TableHeader(props) {
    const { column, listCount, toggleList, expand,countLable } = props;
    return (<div className="topHeadercontent d-flex row w-100 ml-0" style={{background:"#00000000"}}>
        <AccordionSummary aria-controls="panel1a-content" style={{height:"0px"}}>
            <div className="toggleLefticon LefticonBG11" onClick={toggleList}>
                <div className="borderColor11 customProfileBG11 pointer">
                     {expand?<i className="fa fa-minus text-white"></i>:<i className="fa fa-plus text-white"></i>}
                </div>
            </div>
        </AccordionSummary>
        <ul className="list-inline w-100 row">
            {column.map((item, i) => {
                if (i === 0) return (<li className={`col-lg-${item.col_size} my-auto`} key={i}>
                    <span className="headingHighlight customProfileBG11 text-white">{item.name}<a href="/#" className="ml-3"><i className="fa fa-pen"></i></a></span>
                    <span className="tasklistCount">{listCount}{" "}{countLable}</span>
                </li>);
                else if (i === column.length - 1) return (<li className={`col-lg-${item.col_size} position-relative`} key={i} >
                    <span className="title_drag">{item.name}</span>
                    {/* <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span> */}
                </li>)
                else return (<li className={`col-lg-${item.col_size} my-auto`} key={i}><span className="title_drag">{item.name}</span></li>)
            })}
        </ul>
        
    </div>)
}

TableHeader.propTypes={
    column:PropTypes.object.isRequired,
    listCount:PropTypes.number.isRequired,
    toggleList:PropTypes.func.isRequired,
    expand:PropTypes.bool.isRequired,
    countLable:PropTypes.string.isRequired
}