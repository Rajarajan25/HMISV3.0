import { Field } from "formik";
import React from "react";
import ColorPicker from "rsuite-color-picker";
//import 'rsuite-color-picker/lib/styles.less'
import "rsuite-color-picker/lib/styles.css";
const colorDropDown = [
  "#41BC87",
  "#1DBC9C",
  "#27AE60",
  "#21D726",
  "#F41D2F",
  "#181D21",
  "#FD575E",
  "#FDB42B",
  "#B17F22",
  "#F34D1D",
  "#FD8624",
  "#2798B7",
  "#2980B9",
  "#3598DC",
  "#528CCB",
  "#0921EC",
  "#199EC7",
];
export function ColorPalette(props) {
  const { handleChangeDropDown, item, colorsCode } = props;
  React.useEffect(() => {
    handleChangeDropDown(colorsCode);
  }, []);
  const [color, setColor] = React.useState(colorsCode);
  const handleColorChange = (color) => {
    setColor(color);
    //handleChangeDropDown(eve.hex, id, "color_code");
  };
  return (
    <>
      <div className="col-12 pr-0">
        <div className="color_select">
          {colorDropDown.map((colors, index) => {
            return (
              <div className="d-inline-flex color_col p-3" key={index}>

                <input type="radio" id={"color_" + index} name="color-code" checked={colors === color ? true : false} />

                <label htmlFor={"color_" + index}>
                  <span
                    style={{ backgroundColor: colors }}
                    onClick={() => {
                      handleChangeDropDown(colors, item.id, "color_code");
                      handleColorChange(colors);
                    }
                    }
                  ></span>
                </label>
              </div>
            );
          })}
          {/* <div className="d-inline-flex color_col p-3 plus_btn">
            <span className="color_add">
              <ColorPicker
                onChangeComplete={(e) => handleColorChange(e, item.id)}
              />
             
            </span>
          </div>
          <button
                onClick={() =>
                  handleChangeDropDown(colors, item.id, "color_code")
                }
              >
                Ok
              </button>
         */}
        </div>
      </div>
    </>
  );
}

export function ColorPaletteFormik(props) {
  const { handleChangeDropDown, item } = props;
  const handleColorChange = (eve, id) => {
    handleChangeDropDown(eve.hex, id, "color_code");
  };
  return (
    <>
      <div className="col-12 pr-0">
        <div className="color_select">
          {colorDropDown.map((colors, index) => {
            return (
              <div className="d-inline-flex color_col p-3" key={index}>
                <Field
                  type="radio"
                  id={"color_" + index}
                  name={props.name}
                  name="color_code"
                  value={colors}
                />
                <label className="" htmlFor={"color_" + index}>
                  <span
                    style={{ backgroundColor: colors }}
                  ></span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
