import React from 'react';
import { toImageUrl } from '../../azure-storage-blob';
import { DevConsoleLog } from '../SiteUtill';
import PropTypes from 'prop-types';

export function AzureImageview(props) {
  const { data } = props;
  DevConsoleLog("AzureImageview--->", data.avatar_or_icon);
  return (
    <div className="d-flex">
      <span className="listprofileIcon my-auto" style={{ backgroundColor: data.color_code || `#2ecd6f` }}>
        {data.avatar_or_icon ?
          <img src={toImageUrl(data.avatar_or_icon)} alt="" className="h-100 w-100 d-block rounded-circle" loading="lazy" />
          : data.name ? data.name.substr(0, 2).toUpperCase() : ""}
      </span>
    </div>
  )
}

AzureImageview.propTypes={
  data:PropTypes.array
}
AzureImageview.prototype={
  data:PropTypes.element.isRequired
}