import { DatePicker, TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
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
        onEndDateChange(endDate)
      }}
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
  const { value, onChange } = props;
  const [selectedDate, setDateChange] = useState(value || new Date());
  const handleDateChange = (date) => {
    setDateChange(date);
    if (onChange) onChange(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        {...props}
        variant="inline"
        format="dd/MM/yyyy"
        value={selectedDate}
        autoOk={true}
        id="date-picker-inline"
        onChange={handleDateChange}
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
  const { value, onChange } = props;
  const [selectedDate, setSelectedDate] = useState(value || new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) onChange(date);
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
export function TimePickersUtils(props) {
  const { value, } = props;
  // const selectedDate = useState(value||new Date('2014-08-18T21:11:54'));


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        {...props}
        variant="inline"
        value={value}
        autoOk={true}
      />
    </MuiPickersUtilsProvider>
  );
}