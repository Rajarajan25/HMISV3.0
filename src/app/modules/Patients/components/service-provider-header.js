import React from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";


export default function ServiceProviderHeader() {
    return (
        <div className="pat_list">
            <div className="d-block">
                <div className="d-block mt-lg-15 border-bottomspace pb-lg-4 ml-xl-8">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column align-items-start col-4s">
                            <div className="d-flex flex-column flex-xl-row ">
                                <h3 class="service-header-label font-size-18">Service Providers</h3>
                            </div>
                            <div className="d-flex"> <span className="gray-color-text">Showing 63 Service Provider</span></div>
                        </div>
                        <div className="d-flex justify-content-end flex-fill">
                            <div className="sort-text pt-xl-4 mr-xl-3">Sort By:</div>
                            <div class="select-box mr-xl-11 mt-xl-2">
                                <select class="form-control-select">
                                    <option>Newst</option>
                                    <option>Oldest</option>
                                </select>
                            </div>
                            <div className="GridView mt-xl-3 mr-xl-3">
                                <Link to="#"><img src={toAbsoluteUrl("/media/health/gridview.svg")} alt="" className="mx-auto" /></Link>
                            </div>
                            <div className="ListView pt-xl-2 pr-xl-2 pl-xl-2 pb-xl-2 mt-xl-1">
                                <Link to="#"><img src={toAbsoluteUrl("/media/health/listview.svg")} alt="" className="mx-auto" /></Link>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}