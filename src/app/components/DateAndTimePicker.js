import TextField from "@material-ui/core/TextField";
import { DateRangePicker, DateRangeDelimiter, LocalizationProvider, DatePicker, TimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";
import { blue } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
export function DateRangePickersUtil(props) {
  const [selectedDateRange, handleDateRangeChange] = React.useState([null, null]);
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DateRangePicker
          startText={props.startText}
          endText={props.endText}
          value={selectedDateRange}
          onChange={date => handleDateRangeChange(date)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <DateRangeDelimiter> to </DateRangeDelimiter>
              <TextField {...endProps} />
            </>
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export function DatePickersUtil(props) {
  const [selectedDate, setDateChange] = React.useState(new Date());
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <DatePicker
          label={props&&props.label?props.label:""}
          value={selectedDate}
          onChange={(newValue) => setDateChange(newValue)}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider></ThemeProvider>
  );
}


export function TimePickersUtil(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [valuetime, setTimeValue] = React.useState(new Date());
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <LocalizationProvider dateAdapter={DateFnsUtils}>
        <TimePicker
          renderInput={(props) => <TextField {...props} />}
          {...props}
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