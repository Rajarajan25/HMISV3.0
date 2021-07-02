import React from "react";
import PropTypes from 'prop-types';

export function SpinnerLarge(props) {
    const { loading } = props;
    if (!loading) {
        return <></>;
    }
    return (
            <div className="w-100 mh-100 text-center align-content-center mt-5">
                <span className="ml-3 spinner spinner-lg spinner-primary"></span>
            </div>
    )
}

SpinnerLarge.propTypes={
    loading:PropTypes.bool.isRequired
}

export function SpinnerSmall(props) {
    const { loading } = props;
    if (!loading) {
        return <></>;
    }
    return (
        <><span className="ml-3 mr-3 spinner spinner-white" {...props}></span></>
    )
}
SpinnerSmall.propTypes={
    loading:PropTypes.bool.isRequired
}