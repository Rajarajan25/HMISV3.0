import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import InfiniteLoading from 'react-simple-infinite-loading'
import useUser from './InfiniteUserList.hooks'
import './InfiniteList.css'
import NetworkError from './NetworkError';
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import networkError from "./networkError.png";
import { onError } from "@apollo/client/link/error";
import DeleteUser from './DeleteUser';

function InfiniteUserList() {
	const [user, setUser] = React.useContext(UserContext)
    const { users, loading, loadMore, hasNextPage } = useUser()
	const [selectedIndex, setSelectedIndex] = React.useState(0);
//	const { data, loading } = useQuery(GET_CUSTOMER);
	const [error, setError] = React.useState(false);
    const loadMoreusers = loading ? () => { } : loadMore
    const isPersonLoaded = index => !hasNextPage || index < users.length
    const onUserClick = (id) => {
		let usernew = users.find(user => user.id === id);
		setUser({
			type: "SET_CURRENT_USER",
			payload: usernew
		});
	}
	
	  //console.log(link)
	
	function handleListItemClick(event, index) {
		setSelectedIndex(index);
	}
	
      
    if(Object.keys(users).length==0)
    {
    
      return ( <div>
        <img
          src={networkError}
          style={{
            width: "85%",
            height: "500px",
            display: "block",
            margin: "auto",
            position: "relative"
          }}
        />
         <center>
          <div color='red'>NETWORK ERROR !</div>
        </center>
        <center>
          <Link to="/">Refresh</Link>
        </center>
      </div>)
    }
    else{
    return (
      <div className="InfiniteList-list">
        <InfiniteLoading
          items={users}
          itemHeight={60}
          hasMoreItems={hasNextPage}
          loadMoreItems={loadMoreusers}
        >
          
          {users.map(value => {
          
       
            return (
              <li key={value.id}>
						<div selected={selectedIndex === value.id} onClick={(event) => { onUserClick(value.id); handleListItemClick(event, value.id) }} key={value.id} >
						<div className="d-flex w-100 px-2 py-2 text-dark hover-white cursor-pointer show-child-on-hover active">
							<div className="flex-2 contactlistImage userAvatar">
								<strong className="bg-pink">TC</strong>
								<span className="userStatus online" />
							</div>
							<div className="ml-3 flex-3 w-100 userlistNamedetails my-auto">
								<div className="text-truncate text-truncate-md">
									{value.name}
								</div>
							</div>
							<div className="flex-2  mt-0 my-auto">
								<div className="d-flex">
									<div className="mr-2 show-on-hover-parent d-none">
										<button className="btn btn-danger btn-xs btn-icon rounded-circle shadow-0 waves-effect waves-themed" data-toggle="tooltip" data-template="<div class=&quot;tooltip&quot; role=&quot;tooltip&quot;>
									<div class=&quot;tooltip-inner bg-danger-500&quot;></div></div>" data-original-title="Delete">
											<i className="fal fa-trash-alt" />
										</button>
									</div>
									<div className="show-on-hover-parent btn-group dropdown mr-1">
										<button className="btn btn-default1 rounded-circle btn-icon btn-sm waves-effect waves-themed" data-original-title="More" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<i className="fal fa-ellipsis-v fa-2x align-middle" />
										</button>
										{/* <div className="dropdown-menu" style={{}}>
											
											<a className="dropdown-item" href="#">Delete</a>
										</div> */}
                                        <DeleteUser/>
									</div>
									<div className="flex-2 my-auto align-right d-none">
										<div className="custom-control custom-checkbox px-0">
											<input type="checkbox" className="custom-control-input" id="userActiveCheckbox1" />
											<label className="custom-control-label" htmlFor="userActiveCheckbox1">&nbsp;</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
              </li>
            );
          })}
        </InfiniteLoading>
      </div>
    )
        }   
}

export default InfiniteUserList;