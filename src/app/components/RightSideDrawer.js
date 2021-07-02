import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from 'prop-types';

export function RightSideDrawer({ children, ...props }) {
    const { toggleDrawer, isOpen } = props;
    return (
        <div className="contentAreaouter">
            <Drawer
                className="patientProfileinfo StaffInfo"
                anchor="right"
                open={isOpen}
                onClose={
                    toggleDrawer(false)
                }
            >
                <div className="p-0 overflow-auto">
                    <Link
                        to="#"
                        className="closeDrawer"
                        onClick={toggleDrawer(false)}
                    >
                        <span className="my-auto font-weight-500">
                            <img
                                src={toAbsoluteUrl("/media/patients/drawer_close.svg")}
                                alt=""
                                className="d-block"
                            />
                        </span>
                    </Link>
                    <div className="staff_detail">
                        {children && (<>{children}</>)}
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

RightSideDrawer.propTypes={
    open:PropTypes.bool.isRequired,
    toggleDrawer:PropTypes.func.isRequired
}