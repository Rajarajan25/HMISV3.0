import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { appointments } from './data.js';

const currentDate = new Date();
const views = ['day', 'week','month','workWeek','timelineWeek'];

function App () {
  
  const [state,setState]=React.useState({
    allowAdding: true,
    allowDeleting: true,
    allowResizing: true,
    allowDragging: true,
    allowUpdating: true
  });

  
    return (
      <React.Fragment>
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={appointments}
          views={views}
          defaultCurrentView="month"
          defaultCurrentDate={currentDate}
          startDayHour={9}
          endDayHour={19}
          height={600}
          editing={state}
        />
       </React.Fragment>
    )

}

export default App;