import React from "react";

export function SpinnerLarge(props) {
    const { loading } = props;
    if (!loading) {
        return <></>;
    }
    return (
            <div className="w-100 mh-100 text-center align-content-center">
                <span className="ml-3 spinner spinner-lg spinner-primary"></span>
            </div>
    )
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