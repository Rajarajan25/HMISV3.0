import React from 'react'
export function STypeDropdownMenu() {
    return <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">Private</span>
          </a>
        </li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">Public</span>
          </a>
        </li>
      </ul>
      {/*end::Navigation*/}
    </>
  }