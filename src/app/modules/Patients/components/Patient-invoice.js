import React from "react";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles({
  list: {
    width: 650,
  },
  fullList: {
    width: 'auto',
  },
});

export function PatientInvoice() {
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const styles = {
    BackdropProps: {
      background: 'transparent'
    }
  };
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const toggleDrawerClose = () => {
    setState(false);
  };

  return (
    <div className="invoice_card w-100">
      <div className="text-center">
        <h2 className="font-size-24 font_weight_bold my-4">Hmis</h2>
        <p className="font-size-16 color_707070 font_weight_bold mb-8">info@hmisservice.com, 9876543210</p>
      </div>
      <div className="row m-0 pb-10  border-bottom">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <p className="font-size-18 font_weight_bold mb-6">Doctor Treatment Invoice</p>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Invoice Number:</span>
            <span className="font_weight_bold">012345</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Billing To:</span>
            <span className="font_weight_bold">Andrea Jemmiah</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Client Address:</span>
            <span className="font_weight_bold">12 Gandhi Nagar, Chennai - 600176</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Email:</span>
            <span className="font_weight_bold">Andrea@gmail.com</span>
          </div>
          <div className="d-flex mb-3">
            <span className="font_weight_medium color_707070 mw_130">Due Date:</span>
            <span className="font_weight_bold">12th Feb 2021</span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div className="d-flex justify-content-end align-items-end h-100">
            <button type="button" className="btn btn-primary" onClick={toggleDrawer('right', true)}>Preview</button>
            <button type="button" className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
      <InvoiceHistory />

      <Drawer className="patientProfileinfo" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        <div className="py-5 px-10 overflow-auto">
          <Link to="#" className="closeDrawer" onClick={toggleDrawerClose}><span className="my-auto font-weight-500">X</span></Link>
          <InvoiceHistory />
        </div>
      </Drawer>

    </div>
  );
}

export function InvoiceHistory(){
  return(
    <div className="table-responsive text-nowrap">
      <Table className="table color_292D34 font_weight_medium font-size-12">
        <thead>
        <tr>
            <th colSpan="6" className="font-size-16 py-5">Invoice Details</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Qty</th>
            <th>Hours</th>
            <th>Tax INR</th>
            <th className="text-right">Total Cost INR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>General Checkup</td>
            <td>2</td>
            <td>15 Mins</td>
            <td><span>&#2352;</span> 20</td>
            <td className="text-right"><span>&#2352;</span> 200</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Medicine</td>
            <td>4</td>
            <td>30 Mins</td>
            <td><span>&#2352;</span> 10</td>
            <td className="text-right"><span>&#2352;</span> 100</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
            <td className="color_707070 text-right">Total Cost:</td>
            <td className="font_weight_bold text-right"><span>&#2352;</span> 500</td>
          </tr>
          <tr>
            <td colSpan="4"></td>
            <td className="color_707070 text-right">Total Tax:</td>
            <td className="font_weight_bold text-right"><span>&#2352;</span> 50</td>
          </tr>
          <tr>
            <td colSpan="4"></td>
            <td className="color_707070 text-right">Grand Total:</td>
            <td className="font_weight_bold text-right"><span>&#2352;</span> 550</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}