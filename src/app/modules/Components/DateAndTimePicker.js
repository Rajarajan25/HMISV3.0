import TextField from "@material-ui/core/TextField";
import { DateRangePicker, DateRangeDelimiter, LocalizationProvider, DatePicker, TimePicker, DesktopDateRangePicker } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { blue } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
export function DateRangePickersUtilFailed() {
  const [selectedDateRange, handleDateRangeChange] = React.useState([null, null]);
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DesktopDateRangePicker
          startText="Desktop start"
          value={selectedDateRange}
          onChange={(newValue) => handleDateRangeChange(newValue)}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <DateRangeDelimiter> to </DateRangeDelimiter>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export function DateRangePickersUtil() {
  const [startDate, onStartDateChange] = React.useState(new Date());
  const [endDate, onEndDateChange] = React.useState(new Date());
  return (
    <RangeDatePicker
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
  const [selectedDate, setDateChange] = React.useState(new Date());
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DatePicker
          label={props && props.label ? props.label : ""}
          value={selectedDate}
          onChange={(newValue) => setDateChange(newValue)}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider></ThemeProvider>
  );
}


export function TimePickersUtil() {
  const [isOpen, setIsOpen] = useState(false);
  const [valuetime, setTimeValue] = React.useState(new Date());
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <TimePicker
          renderInput={(props) => <TextField {...props} />}
          variant="inline"
          showToolbar={true}
          margin="normal"
          id="time-picker-inline"
          autoOk={true}
          KeyboardButtonProps={{
            onFocus: e => {
              setIsOpen(true);
            }
          }}
          PopoverProps={{
            disableRestoreFocus: true,
            onClose: () => {
              setIsOpen(false);
            }
          }}
          label="12 hours"
          open={isOpen}
          InputProps={{
            disableRestoreFocus: true,
            onFocus: () => {
              setIsOpen(true);
            }
          }}
          value={valuetime}
          onChange={(newValue) => setTimeValue(newValue)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}