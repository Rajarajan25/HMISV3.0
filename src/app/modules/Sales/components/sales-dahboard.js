import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { DropdownItemToggler } from "../../../../_metronic/_partials/dropdowns";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Table } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Shoppingcart() {
  return (
    <div className="clearfix">
      <div className="shopping-list-view">
        <ul>
          <li>Entavir 0.5Mg Strip Of 10 Tablets</li>
          <li>
            <SimpleSelect />
          </li>
          <li className="oty-icons">
            <span> Qty </span> :
            <span>
              <img alt="icons" src={toAbsoluteUrl("/media/sales/minus.svg")} />
            </span>
            1
            <span>
              <img alt="icons" src={toAbsoluteUrl("/media/sales/plus.svg")} />
            </span>
          </li>
          <li>
            <span>
              <img alt="icons" src={toAbsoluteUrl("/media/sales/Delete.svg")} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Girdviewlayouticon(){
  return (
    <div className="clearfix">
    <div className="gird-view-list">
      <span>Showing 58 results for “Pulmonology”</span>
      <ListGroup horizontal className="grid-view-icons">
        <ListGroup.Item>
          <span>
            <img
              alt="icons"
              src={toAbsoluteUrl("/media/sales/grid-layout.svg")}
            />
          </span>
        </ListGroup.Item>
        <ListGroup.Item className="active">
          <span>
            <img
              alt="icons"
              src={toAbsoluteUrl("/media/sales/list-layout.svg")}
            />
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span>
            <img
              alt="icons"
              src={toAbsoluteUrl("/media/sales/table-layout.svg")}
            />
          </span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  </div>
  );
}

export function SimpleSelect() {
  // const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   age: "",
  //   name: "hai",
  // });

  // const inputLabel = React.useRef(null);
  // const [labelWidth, setLabelWidth] = React.useState(0);

  // function handleChange(event) {
  //   setValues((oldValues) => ({
  //     ...oldValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // }

  return (
    // <form className={classes.root}>
    //   <FormControl className={classes.formControl}>
    //     <InputLabel htmlFor="age-simple">Tonic</InputLabel>
    //     <Select
    //       value={values.age}
    //       onChange={handleChange}
    //       inputProps={{
    //         name: "age",
    //         id: "age-simple",
    //       }}
    //     >
    //       <MenuItem value={10}>Ten</MenuItem>
    //       <MenuItem value={20}>Twenty</MenuItem>
    //       <MenuItem value={30}>Thirty</MenuItem>
    //     </Select>
    //   </FormControl>
    // </form>
    <select className="tablets">
      <option value="volvo">Tablets</option>
      <option value="saab">Cream</option>
      <option value="mercedes">olment</option>
      <option value="audi">Others</option>
    </select>
  );
}

export function SalesDashboard() {
  return (
    <div className="clearfix">
      <div className="grid-layout">
        <div className="row">
          <div className="col-md-7 ">
           <Girdviewlayouticon />
            <div class="list-layout-view">
              <div className="row">
                <div class="col-md-12">
                  <Card className="sales-card-view">
                    <div className="user-tablets">
                      <div className="card-lable">
                        <span
                          className="listprofileIcon-event"
                          style={{ backgroundColor: `#1EBCD4` }}
                        >
                          AS
                        </span>
                      </div>
                      <div className="card-summary">
                        <div className="tb-name">
                        Entavir 0.5Mg Strip Of 10 Tablets
                          <span className="offer">Save 15%</span>
                        </div>
                        <span className="manufacturing">By CIPLA LIMITED</span>
                        <span className="tablet-count">
                          10 Tablet(s) in Strip
                        </span>
                      </div>
                    </div>
                    <div className="product-selector">
                      <SimpleSelect />
                    </div>
                    <div className="add-card-price">
                      <span className="price"> ₹696.86*</span>
                      <span className="strike">
                        <s>MRP 819.84</s>
                      </span>
                      <Button variant="contained" className="cart-btn">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <div class="grid-layout-view">
              <div className="row">
                <div class="col-md-4">
                  <Card className="sales-card-view active">
                    <div className="offer-tablets-name">
                      <div className="product-selector">
                        <SimpleSelect />
                      </div>
                      <span className="offer">Save 15%</span>
                    </div>
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#fff` }}
                      >
                        <img
                          src={toAbsoluteUrl("/media/sales/drug.png")}
                          alt="#"
                        />
                      </span>
                    </div>
                    <div className="card-summary">
                      <div className="tb-name">
                        Entavir 0.5Mg Strip Of 10 Tablets
                      </div>
                    </div>
                    <div className="add-card-price">
                      <span className="strike">
                        <s>MRP 819.84</s>
                      </span>
                      <span className="price"> ₹314.50*</span>
                    </div>
                    <Button variant="contained" className="cart-btn">
                      Add to Cart
                    </Button>
                  </Card>
                </div>
                <div class="col-md-4">
                  <Card className="sales-card-view">
                    <div className="offer-tablets-name">
                      <div className="product-selector">
                        <SimpleSelect />
                      </div>
                      <span className="offer">Save 15%</span>
                    </div>
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#1EBCD4` }}
                      >
                        AS
                      </span>
                    </div>
                    <div className="card-summary">
                      <div className="tb-name">
                        Entavir 0.5Mg Strip Of 10 Tablets
                      </div>
                    </div>
                    <div className="add-card-price">
                      <span className="strike">
                        <s>MRP 819.84</s>
                      </span>
                      <span className="price"> ₹314.50*</span>
                    </div>
                    <Button variant="contained" className="cart-btn">
                      Add to Cart
                    </Button>
                  </Card>
                </div>
                <div class="col-md-4">
                  <Card className="sales-card-view">
                    <div className="offer-tablets-name">
                      <div className="product-selector">
                        <SimpleSelect />
                      </div>
                      <span className="offer">Save 15%</span>
                    </div>
                    <div className="card-lable">
                      <span
                        className="listprofileIcon-event"
                        style={{ backgroundColor: `#1EBCD4` }}
                      >
                        AS
                      </span>
                    </div>
                    <div className="card-summary">
                      <div className="tb-name">
                        Entavir 0.5Mg Strip Of 10 Tablets
                      </div>
                    </div>
                    <div className="add-card-price">
                      <span className="strike">
                        <s>MRP 819.84</s>
                      </span>
                      <span className="price"> ₹314.50*</span>
                    </div>
                    <Button variant="contained" className="cart-btn">
                      Add to Cart
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
            <div class="table-layout-view">
              <div className="row">
                <div class="col-md-12">
                  <Card className="sales-card-view">
                    <div className="user-tablets">
                      <div className="card-lable">
                        <span
                          className="listprofileIcon-event"
                          style={{ backgroundColor: `#fff` }}
                        >
                            <span>
                            <img
                          src={toAbsoluteUrl("/media/sales/drug.png")}
                          alt="#"
                        />
                            </span>
                        </span>
                      </div>
                      <div className="card-summary">
                        <div className="tb-name">
                        Entavir 0.5Mg Strip Of 10 Tablets
                        </div>
                      </div>
                    </div>
                    <div className="product-selector">
                      <SimpleSelect />
                    </div>
                    <div className="add-card-price">
                      <span className="strike">
                        <s>MRP 819.84</s>
                      </span>
                      <span className="price"> ₹696.86*</span>
                    </div>
                    <span className="manufacturing">By CIPLA LIMITED</span>
                    <Button variant="contained" className="cart-btn">
                      Add to Cart
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 side-bar">
            <div className="grid-table">
              <div className="shopping-card">
                <span>Shopping Cart(10)</span>
              </div>
              <div className="shopping-tabel-box">
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              <Shoppingcart />
              </div>
              <div className="payment-details">
                <span>Payment Details</span>
              </div>
              <div className="bag-total">
                <span>Bag Total</span>
                <span>₹ 550</span>
              </div>
              <div className="bag-discount">
                <span>Bag Discount</span>
                <span>₹ 137</span>
              </div>
              <div className="sub-total">
                <span>Sub Total</span>
                <span>₹ 413</span>
              </div>
              <div className="shipping-charge">
                <span>Shipping Charge</span>
                <span>₹ 070</span>
              </div>
              <div className="Grand-total">
                <span>
                  <b>Grand Total</b>
                </span>
                <span> <b> ₹ 483 </b></span>
              </div>
              <br/>
              <div className="Grand-total-proced">
                <div className="sub-grand">              
                  Grand Total: <span >₹ 483 </span>
                </div>
                <Button variant="contained" className="proced-btn">
                  PROCEED 
                  <span> 
                    <img
                          src={toAbsoluteUrl("/media/sales/right-arrow.svg")}
                          alt="#"/>
                   </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
