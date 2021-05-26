import {DatePicker, TimePicker,MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import React, { useState } from "react";
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

export function DateRangePickersUtil(props) {
  const [startDate, onStartDateChange] = useState(new Date());
  const [endDate, onEndDateChange] = useState(new Date());
  return (
    <RangeDatePicker
    {...props}
      startDate={startDate}
      endDate={endDate}
      onChange={(startDate, endDate) => {
        onStartDateChange(startDate);
        onEndDateChange(endDate)}}
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date(2100, 0, 1)}
      dateFormat="DD/MM/YYYY"
      monthFormat="MMM YYYY"
      startDatePlaceholder="Start Date"
      endDatePlaceholder="End Date"
      singleCalendar={true}
      className="my-own-class-name"
      startWeekDay="monday"
    />
  );
}

export function DatePickersUtil(props) {
  const [selectedDate, setDateChange] = useState(new Date());
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
        {...props}
        variant="inline"
        format="dd/MM/yyyy"
        value={selectedDate}
        autoOk={true}
        id="date-picker-inline"
        disableFuture={true}
        onChange={setDateChange}
      />
        {/* <KeyboardDatePicker
        {...props}
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          disableFuture={true}
          autoOk={true}
          onChange={setDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />  */}
      </MuiPickersUtilsProvider>
  );
}


export function TimePickersUtil(props) {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <TimePicker
         {...props}
        variant="inline"
        value={selectedDate}
        autoOk={true}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
  );
}