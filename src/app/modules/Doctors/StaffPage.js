import React from "react";
import { useSubheader } from "../../../_metronic/layout";
import { ProfileCard } from "./components/ProfileCard";
import { Filter } from "./components/Filter";
import { ListActivity01, ListActivity02, ListActivity03, ListActivity04 } from "./components/ListActivity";

export default function StaffPage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Staff Managements");

  return (
    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      <div className="d-flex flex-column mt-1">
        <div className="contentSection collapse show w-100" id="holepageToggle">
          <ListActivity01></ListActivity01>
          <ListActivity02></ListActivity02>
          <ListActivity03></ListActivity03>
          <ListActivity04></ListActivity04>
        </div>
      </div>
    </div>
  );
}
