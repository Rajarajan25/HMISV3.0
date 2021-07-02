import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import PropTypes from 'prop-types';

export function AddFab(props) {
    const{onClick}=props;
    return (
        <div className="contentAreaouter">
            <div className="add-staff">
                <Link to="#" onClick={onClick}>
                    <img
                        src={toAbsoluteUrl("/media/patients/add_staff.svg")}
                        alt=""
                        className="d-block rounded-circle"
                    />
                </Link>
            </div>
        </div>
    )
}
AddFab.propTypes = {
    onClick: PropTypes.func,
}