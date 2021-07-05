import React from "react";
import { SalesDashboard } from "./components/sales-dahboard";
import { useSubheader } from "../../../_metronic/layout";

export default function SalesDetails() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Sales Management");
  return (
  <div className="sales-management">
    <div className="d-block">
      <SalesDashboard />
    </div>
  </div>
  );
}