import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export function EventDashboard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div className="clearfix">
      <div className="col-md-3">
        <div className="card">
          <div className="event-table-provider">
            <div className="event-table">
              <Button variant="primary" size="sm" className="">
                  ENT
              </Button>
              <FormGroup row>               
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.checkedB}
                      onChange={handleChange("checkedB")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Primary"
                />       
              </FormGroup>
            </div>
            <div className="event-content">
                  <div className="row">
                    <div className="col-2">
                        <div>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar} />
                        </div>
                    </div>
                    <div className="col-10">
                        <div>
                            <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                            </p>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
          <div className>
                <div className="">
                  
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
