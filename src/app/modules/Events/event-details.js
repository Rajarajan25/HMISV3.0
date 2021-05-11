import React from "react";
import { NewEvent } from "./components/new-event";
import { useSubheader } from "../../../_metronic/layout";

export default function EventDetails() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Event Management");
  return (
  <div className="event-management">
    <div className="d-block">
      <NewEvent />
    </div>
  </div>
  );
}