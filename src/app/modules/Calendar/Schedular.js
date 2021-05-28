import React from 'react';
import Scheduler, { Editing } from 'devextreme-react/scheduler';
import SelectBox from 'devextreme-react/select-box';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { data, locations } from './data.js';
import timeZoneUtils from 'devextreme/time_zone_utils';
import { Switch } from 'devextreme-react/switch';

const currentDate = new Date();
const views = ['workWeek','month','day','agenda'];

function getLocations(date) {
  const timeZones = timeZoneUtils.getTimeZones(date);
  return timeZones.filter((timeZone) => {
    return locations.indexOf(timeZone.id) !== -1;
  });
}
const demoLocations = getLocations(currentDate);

class Schedular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: demoLocations[0].id,
      demoLocations: demoLocations,
      showCurrentTimeIndicator: false,
    };
    this.onValueChanged = this.onValueChanged.bind(this);
    this.onAppointmentFormOpening = this.onAppointmentFormOpening.bind(this);
    this.onOptionChanged = this.onOptionChanged.bind(this);
    this.onShowCurrentTimeIndicatorChanged=this.onShowCurrentTimeIndicatorChanged.bind(this)
  }
  onShowCurrentTimeIndicatorChanged(e) {
    this.setState({
      showCurrentTimeIndicator: true
    });
  }
  onValueChanged(e) {
    this.setState({
      timeZone: e.value
    });
  }

  onAppointmentFormOpening(e) {
    const form = e.form;

    const startDateTimezoneEditor = form.getEditor('startDateTimeZone');
    const endDateTimezoneEditor = form.getEditor('endDateTimeZone');
    const startDateDataSource = startDateTimezoneEditor.option('dataSource');
    const endDateDataSource = endDateTimezoneEditor.option('dataSource');

    startDateDataSource.filter(['id', 'contains', 'Asia']);
    endDateDataSource.filter(['id', 'contains', 'Asia']);

    startDateDataSource.load();
    endDateDataSource.load();
  }

  onOptionChanged(e) {
    if(e.name === 'currentDate') {
      this.setState({
        demoLocations: getLocations(e.value)
      });
    }
  }

  render() {
    const { timeZone, demoLocations,showCurrentTimeIndicator } = this.state;
    return (
      <React.Fragment>
        <div className="option">
          <span>Office Time Zone</span>
          <SelectBox
            items={demoLocations}
            displayExpr="title"
            valueExpr="id"
            width={240}
            value={timeZone}
            onValueChanged={this.onValueChanged}
          />
        <div className="label">Current time indicator </div>
              {' '}
              <div className="value">
                <Switch
                  id="show-indicator"
                  value={showCurrentTimeIndicator}
                  onValueChanged={this.onShowCurrentTimeIndicatorChanged}
                />
              </div>
           </div> 
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="workWeek"
          startDayHour={8}
          defaultCurrentDate={currentDate}
          timeZone={timeZone}
          height={600}
          onAppointmentFormOpening={this.onAppointmentFormOpening}
          onOptionChanged={this.onOptionChanged}
          showCurrentTimeIndicator={this.state.showCurrentTimeIndicator}
        >
          <Editing
            allowTimeZoneEditing={true}
          />
        </Scheduler>
      </React.Fragment>
    );
  }
}

export default Schedular;
