import React from 'react';
import { StaffDetail } from "../../Doctors/components/staff-detail";

export default function EventStep1() {

  return (
    <div className="event-step1 row">
      <div className="col-3"></div>
      <div className="col-6 bg-white">
        <StaffDetail />
      </div>
    </div>
  );
}