import React from "react";

export function SpinnerLarge(props) {
    const { loading } = props;
    if (!loading) {
        return <div></div>;
    }
    return (
        <div {...props}>
            <div className="w-100 mh-100 text-center">
                <span className="ml-3 spinner spinner-lg spinner-primary"></span>
            </div>
        </div>
    )
}

export function SpinnerSmall(props) {
    const { loading } = props;
    if (!loading) {
        return <div></div>;
    }
    return (
        <div {...props}>
            <span className="ml-3 spinner spinner-white"></span>
        </div>
    )
}