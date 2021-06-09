import React from "react";
import { SpinnerSmall } from "./Spinner";

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