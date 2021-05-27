import React from 'react';
import { Link } from 'react-router-dom';
export function TableHeader(props) {
    const { column, listCount, expandVisiable, countLable } = props;
    return (<div className="topHeadercontent d-flex">
            {expandVisiable ?
                <div className="toggleLefticon LefticonBG11" >
                    <div  data-toggle="collapse" data-target="#staffmanagement" className="borderColor11 customProfileBG11 pointer">
                        <i className="fa fa-minus text-white"></i>
                    </div>
                </div> : <div></div>}
            <ul className="list-inline w-100 row">
                {column.map((item, i) => {
                    if (i === 0) return (<li className="col-lg-3" key={i}>
                        <span className="headingHighlight customProfileBG11 text-white">{item.name}<a className="ml-3"><i className="fa fa-pen"></i></a></span>
                        <span className="tasklistCount">{listCount}{" "}{countLable}</span>
                    </li>);
                    else if (i === column.length - 1) return (<li className="col-lg-2 position-relative text-right" key={i} >
                        <span className="title_drag">{item.name}</span>
                        <span className="addMultiplecolumn rounded-circle bg-grey"><i className="fa fa-plus fa-sm"></i></span>
                    </li>)
                    else return (<li className="col-lg-1" key={i}><span className="title_drag">{item.name}</span></li>)
                })}
            </ul>
    </div>)
}