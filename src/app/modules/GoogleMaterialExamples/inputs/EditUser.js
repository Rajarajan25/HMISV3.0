import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import UserEditForm from './UserEditForm'
const EditUser = props => {
    const [user, setUser] = useContext(UserContext);
    const editUser = (currentUser) => {
        setUser({
            type: "EDIT_USER",
            payload: currentUser
        });
        return true;
    }
    const cancelRow = () => {
        props.cancelRow();
    }
    return (
        <UserEditForm nclient={user.currentUser} callb={editUser} cancelRow={cancelRow} />
    )
}
export default EditUser;