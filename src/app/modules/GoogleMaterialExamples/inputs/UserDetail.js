import React, { useState, Fragment, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ViewUser from './ViewUser';
import EditUser from './EditUser';
import { UserContext, UserProvider } from './UserContext'
export default function UserDetail() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [user, setUser] = React.useContext(UserContext);
  let currentUser = user.currentUser;
  const [editing, setEditing] = useState(false);
  const editRow = User => {
    setEditing(true)
  }
  const cancelRow = () => {
    setEditing(false);
  }
  return (
    <div >
      {editing ? (
        <Fragment>
          <EditUser cancelRow={cancelRow} />
        </Fragment>
      ) : (
          <Fragment>
            <ViewUser editRow={editRow} />
          </Fragment>
        )}
    </div>
  );
}
