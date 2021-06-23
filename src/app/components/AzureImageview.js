import React from 'react';
import { toImageUrl } from '../../azure-storage-blob';
export function AzureImageview(props) {
    const { data } = props;
    return (
      <div className="d-flex">
        <span className="listprofileIcon my-auto" style={{ backgroundColor: data.color_code || `#2ecd6f` }}>
          {data.booking_url ? <img src={toImageUrl(data.booking_url)} alt="" className="mh-100 mw-100 d-block rounded-circle" loading="lazy" style={{height:34}}/> : data.name ? data.name.substr(0, 2).toUpperCase() : ""}
        </span>
      </div>
    )
}