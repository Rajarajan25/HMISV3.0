import React from 'react';
import Scheduler,{ Resource ,Editing}from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { data, moviesData,owners } from './data.js';
import AppointmentTemplate from './AppointmentTemplate.js';
import Select from 'react-select';
import SelectBox from 'devextreme-react/select-box';
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
const groups = ['ownerid'];

const option = [
  'Group By Staff',
  'Group By Date',
];
export default function Schedular  () {
  const [state,setState]=React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowResizing: true,
    allowDragging: true,
    allowUpdating: true,
    showCurrentTimeIndicator: true,
  });
  const [value, setValue] = React.useState('Group By Staff');
  const [groupByDate,setgroupbyDate]=React.useState(true);
  const onContentReady=(e) =>{
    const currentHour = new Date().getHours() - 1;
    e.component.scrollToTime(currentHour, 30, new Date());
  }
  let id="ownerid"
    let datas=owners
  function onValueChanged(e) {
    setValue(e.value);
    console.log(value)
    if(!groupByDate)setgroupbyDate(true);
    else setgroupbyDate(false);
  }
    return (
      <React.Fragment>
       <div className="option">
          <span>Group By</span>
          <SelectBox
            items={option}
            onValueChanged={onValueChanged}
          />
          </div>
      <Scheduler
        dataSource={data}
        views={views}
        groups={groups}
        defaultCurrentView="week"
        showCurrentTimeIndicator={state.showCurrentTimeIndicator}
        groupByDate={groupByDate}
        defaultCurrentDate={currentDate}
        editing={state}
        height={800}
        appointmentRender={AppointmentTemplate}
        onContentReady={(e)=>onContentReady}
      >
        {!groupByDate&&<Resource
          dataSource={datas}
          fieldExpr={id}       />}
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