import React from 'react';
import Scheduler,{ Resource ,Editing}from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { data, moviesData,owners } from './data.js';
import AppointmentTemplate from './AppointmentTemplate.js';
import SelectBox from 'devextreme-react/select-box';
import ResourceCell from './ResourceCell.js';
import Button from "devextreme/ui/button";
import Tabs from "devextreme/ui/tabs";
//import Button from '@material-ui/core/Button';
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

const currentDate = new Date();
export const tabs = [
  {
    id: 0,
    icon: 'bulletlist'
  },
  {
    id: 1,
    icon: 'event'
  }
];

// const views = ['day', 'week','month','workWeek','timelineWeek','agenda'];
const views = [{
  type: 'day',
  name: 'Day',
},{
  type: 'week',
  name: 'Week',
},   {
  type: 'month',
  name: 'Month',
  maxAppointmentsPerCell:1
},{
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
    showTodayButton:true
  });
  const [selectedTabIndex, setTabValue] = React.useState(1);
  const [groupByDate,setgroupbyDate]=React.useState(true);
  function onContentReady(e){
    const currentHour = new Date().getHours() - 1;
    e.component.scrollToTime(currentHour, 30, new Date());
    const todayButton = document.getElementById('schedulerTodayButton');
        if (!todayButton)
        {
            let element = document.querySelectorAll('.dx-scheduler-navigator');  
            const container = document.createElement('div');
            container.id = 'schedulerTodayButton';
            element[0].appendChild(container);  
            new Button(container, {  
                text:    'Today',  
                onClick: () => {  
                  e.component.option("currentDate", new Date())
                }  
            });  
        }
    const grouptab = document.getElementById('grouptab');
    if(!grouptab){
      let groupEle = document.querySelectorAll('.dx-scheduler-view-switcher');
      const groupCon = document.createElement('div');
      groupCon.id = 'grouptab';
      groupEle[0].appendChild(groupCon);  
      new Tabs(groupCon, {
        dataSource:tabs,
        selectedIndex:selectedTabIndex,
        onOptionChanged:(e)=>{
          if(e.name == 'selectedIndex') {
            setTabValue(e.value);
            console.log(selectedTabIndex);
            if(!groupByDate)setgroupbyDate(true);
            else setgroupbyDate(false);
            }
        }
      }); 
    }

    const newAdd = document.getElementById('newappointment');
    if(!newAdd){
      let element = document.querySelectorAll('.dx-scheduler-view-switcher');
      const newAddEle = document.createElement('div');
      newAddEle.id = 'newappointment';
      newAddEle.className="m-5 appointment";
      element[0].appendChild(newAddEle);
      new Button(newAddEle, {  
        text:'+ Appointment',
        type:'normal',
        onClick: () => {  
        }  
    }); 
    }
  }
  let id="ownerid"
    let datas=owners
  const onValueChanged=(e)=> {
    if(e.name == 'selectedIndex') {
    setTabValue(e.value);
    console.log(selectedTabIndex);
    if(!groupByDate)setgroupbyDate(true);
    else setgroupbyDate(false);
    }
  }

    return (
      <React.Fragment>
       {/* <div className="option align-items-center border-0 group-by">
          <img src={toAbsoluteUrl("/media/events/group_by.svg")} alt="Group By" className="mr-5" />
          <SelectBox
            items={option}
            onValueChanged={onValueChanged}
          />
          </div> */}
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
        onContentReady={onContentReady}
        resourceCellComponent={ResourceCell}
        showAllDayPanel={true}
      >
        {!groupByDate&&<Resource
          dataSource={datas}
          fieldExpr={id}       />}
        <Resource
          dataSource={moviesData}
          fieldExpr="movieId"/>
        
        <Editing
            allowTimeZoneEditing={true}
          />
      </Scheduler>
      
    </React.Fragment>
    )

}