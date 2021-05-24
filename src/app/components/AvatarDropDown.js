import React from 'react';
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import { Link } from 'react-router-dom';

const avatarDropDown = ["/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg", "/media/users/300_20.jpg"];
export function AvatarDropDown(props) {
  return (
    <>
    <div className="avatar_search position-relative d-flex p-2">
          <img src={toAbsoluteUrl("/media/patients/drop_search.svg")} alt="search" className="drop_search" />
          <input type="text" placeholder="Search" className="form-control" />
          <Link to="#" className="add-avatar">+ Add Avatar</Link>
        </div>
      <div className="avatar_select p-2">
          {avatarDropDown.map((item, index) => {
            return (
              <div class="d-inline-flex avatar_box p-2">
                <input type="radio" id={"avatar_" + index} name="avatar_img" className="" />
                <label className="avatar_col" for={"avatar_" + index}>
                  <img src={toAbsoluteUrl(item)} alt="" className="mh-100 d-block rounded-circle" />
                </label>
              </div>
            )
          })}
        </div>
    </>
  );
}