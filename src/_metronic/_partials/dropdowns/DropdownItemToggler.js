import React from "react";

export const DropdownItemToggler = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="drop_div"
      data-offset="10px,0px"
      onClick={e => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      {props.children}
    </div>
  );
});


// position: absolute;
//     inset: 0px auto auto 0px;
//     margin: 0px;
//     transform: translate(0px, 31px);
DropdownItemToggler.displayName = 'DropdownItemToggler';
