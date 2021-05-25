import React from 'react';
import Scheduler,{ Resource }from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { data, moviesData } from './data.js';
import AppointmentTemplate from './AppointmentTemplate.js';

const currentDate = new Date();
const views = ['day', 'week','month','workWeek','timelineWeek'];

export default function Schedular  () {
  const [state,setState]=React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowResizing: true,
    allowDragging: true,
    allowUpdating: true,
    showCurrentTimeIndicator: true,
    shadeUntilCurrentTime: true,
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
        showAllDayPanel={false}
        shadeUntilCurrentTime={state.shadeUntilCurrentTime}
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
      </Scheduler>
      
    </React.Fragment>
    )

}