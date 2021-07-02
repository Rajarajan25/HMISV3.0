import React from "react";
import { SpinnerSmall } from "./Spinner";
import PropTypes from 'prop-types';

export function ButtonLoading(props) {
    const { label, loading } = props;
    return (
        <div className="form-group mb-0">
            <div className="d-flex justify-content-end patientButton pos_fix">
                <button type="submit" className="btn btn-primary">
                    {label}
                    <SpinnerSmall loading={loading} />
                </button>
            </div>
        </div>
    )
}
ButtonLoading.propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool
}
 
// Creating default props
ButtonLoading.defaultProps = {
 
    label: "EXAMPLE",
    loading: false,
    
}
ButtonLoading.propTypes = {
    children: PropTypes.element.isRequired
  };
  