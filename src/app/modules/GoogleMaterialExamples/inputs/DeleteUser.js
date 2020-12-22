import React from 'react';
import {UserContext} from './UserContext';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
const DELETE_STAFF = gql`
  mutation deleteUser( $UserId : ID!) {
    deleteUser( UserId :$UserId) {
        UserId
    }
  }
`;
export default function DeleteUser(){
    const[user,setUser]=React.useContext(UserContext);
    const [deleteUser] = useMutation(DELETE_STAFF)
    let currentUser=user.currentUser;
    const handleClick=()=>{
    //     deleteUser({variables:{
    //         UserId:currentUser.id
    //     }
    // })
           
       
        setUser({
			type: "DEL_USER",
			payload: currentUser
		});
    }
    return(
        <div className="dropdown-menu" style={{}}>
											
											<a className="dropdown-item" href="#" onClick={handleClick}>Delete</a>
										</div>
    )
}