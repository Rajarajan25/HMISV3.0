import React from "react";
import { Redirect, BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import { Filter } from "./components/Filter";
import { AsideSearch } from "./components/Patient-list-search";
import { PatientList } from "./components/Patient";
import { PatientDetailsTab } from "./components/Patient-details-tab";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {PatientProvider} from './PatientContext';
export default function PatientDetails() {
  return (
    <PatientProvider>
  <div className="pat_list">
    <div className="d-block">
      <div className="d-flex flex-row">        
        <Filter></Filter>
      </div>
      
      <div className="d-block mt-15">
        <div className="d-flex">        
            <div className="col wid_360">              
              <div className="d-flex flex-row">     
                <AsideSearch />
              </div>
              
                <PatientList />
             
            </div>
            <div className="col">
              <PatientDetailsTab />
            </div>
        </div>
      </div>
    </div>
  </div>
  </PatientProvider>
  );
}




// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export function PatientDetailsTab() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('one');

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Tabs           
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="fullWidth"
//         >
//           <Tab value="one" label="Overview" wrapped />
//           <Tab value="two" label="FILE" />
//           <Tab value="three" label="History" />
//           <Tab value="four" label="Invoice" />
//           <Tab value="five" label="Appoinment" />
//         </Tabs>
//       </AppBar>
//       {value === 'one' && 
//         <TabContainer>
//           Item One adsfasf
//         </TabContainer>
//       }
//       {value === 'two' && 
//         <TabContainer>
//           Item Two asgghf jdf dsfgsd
//         </TabContainer>
//       }
//       {value === 'three' && 
//         <TabContainer>
//           Item Three dsgfds dsfbbxcsrtgfds cgfv dasgf sdf
//         </TabContainer>
//       }
//       {value === 'four' && 
//         <TabContainer>
//           Item Two asgghf jdf dsfgsd
//         </TabContainer>
//       }
//       {value === 'five' && 
//         <TabContainer>
//           Item Three dsgfds dsfbbxcsrtgfds cgfv dasgf sdf
//         </TabContainer>
//       }
//     </div>
//   );
// }