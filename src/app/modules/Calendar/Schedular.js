import React from 'react';
import Scheduler,{ Resource ,Editing}from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { data, moviesData } from './data.js';
import AppointmentTemplate from './AppointmentTemplate.js';

const currentDate = new Date();
// const views = ['day', 'week','month','workWeek','timelineWeek','agenda'];
const views = [{
  type: 'day',
  name: 'Day',
},{
  type: 'week',
  name: 'Week',
}, {
  type: 'workWeek',
  name: 'WorkWeek',
},   {
  type: 'month',
  name: 'Month',
  maxAppointmentsPerCell:1
},{
  type: 'timelineWeek',
  name: 'TimelineWeek',
}, {
  type: 'agenda',
  name: 'Agenda',
}, ];


export default function Schedular  () {
  const [state,setState]=React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowResizing: true,
    allowDragging: true,
    allowUpdating: true,
    showCurrentTimeIndicator: true,
  });
  const onContentReady=(e) =>{
    const currentHour = new Date().getHours() - 1;
    e.component.scrollToTime(currentHour, 30, new Date());
  }
    return (
      <React.Fragment>
      <Scheduler
        dataSource={data}
        views={views}
        defaultCurrentView="week"
        showCurrentTimeIndicator={state.showCurrentTimeIndicator}
        defaultCurrentDate={currentDate}
        editing={state}
        height={800}
        appointmentRender={AppointmentTemplate}
        onContentReady={(e)=>onContentReady}
      >
        <Resource
          dataSource={moviesData}
          fieldExpr="movieId"
        />
        <Editing
            allowTimeZoneEditing={true}
          />
      </Scheduler>
      
    </React.Fragment>
    )

}