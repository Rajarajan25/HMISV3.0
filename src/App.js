import "./styles.css";
import * as React from "react";

import {  useMutation,useQuery,useState} from "@apollo/client";
import { ADD_USER,ADD_MANY_USER,UPDATE_USER,UPDATE_ALL_USER,GET_USER,DELETE_USER,DELETE_MANY_USER,GET_ALL_USER,REPLACE_ONE_USER} from "./graphql-operations";
export default function App(props) {
 // const [searchText, setSearchText] = React.useState("The Matrix Reloaded");
 const [deleteManyUser] = useMutation(DELETE_MANY_USER);
 const [deleteUser] = useMutation(DELETE_USER);
  const [addUser] = useMutation(ADD_USER);
  const [addManyUser] = useMutation(ADD_MANY_USER);
  const [updateUser] = useMutation(UPDATE_USER);
  const [updateAllUser] = useMutation(UPDATE_ALL_USER);
  const [replaceOneUser] = useMutation(REPLACE_ONE_USER);

  


 
  const [firstname, setfirstname] = React.useState("");
  const [lastname,setlastname] =React.useState("");
  const AddUser = async () => {
    addUser({
      variables: {
        data: {
          "first_name":"Jenifer21",
          "last_name":"Monica",
          "ShippingAddress":"saligramam",
          "deleted": false,
          "BillingAddress":"saligramam",
          "affiliate_id": "1234567"
      }
    }
    });
  };

  const {getAllUser } = useQuery(GET_ALL_USER, {
    variables: { query: { first_name: "1J" },limit:100,sortBy:"FIRST_NAME_ASC"}
  });
  console.log(getAllUser)
  const GetAllUser = async () => {
    console.log(getAllUser)
  };

  const {getUser } = useQuery(GET_USER, {
    variables: { query: { first_name: "Jenifer" } }
  });
  console.log(getUser)
  const GetUser = async () => {
    console.log(getUser)
  };
  const UpdateUser = async () => {
    updateUser({
      variables: {
        query: { "_id":"602a14c44162849887187efe"},
        set: { "first_name": "Jenifer5" }
      }
  });
  };
  const DeleteOneUser = async () => {
    deleteUser({
      variables: {
        query: { "_id":"602a2835dab8340a3cf385d7"},
        
      }
  });
  };
  const DeleteManyUser = async () => {
    deleteManyUser({
      variables: {
        query: { "first_name":"Jenifer12"},
        
      }
  });
  };
  const UpdateAllUser = async () => {
    updateAllUser({
      variables: {
        query: {"first_name":"Jenifer1"},
        set: { "first_name": "Jenifer54321" }
      }
  });
  };
  const ReplaceOneUser = async () => {
    replaceOneUser({
      variables: {
        query: {"first_name":"Jenifer1"},
        data: { "first_name": "Jenifer54321" }
      }
  });
  };
  const AddManyUser = async () => {
    addManyUser({
      variables: {
        data: [{
          "first_name":"1Jenifer",
          "last_name":"Monica",
          "ShippingAddress":"saligramam",
          "deleted": false,
          "BillingAddress":"saligramam",
          "affiliate_id": "1234567"
        },

     {
        "first_name":"1Joel",
        "last_name":"Mathew",
        "ShippingAddress":"saligramam",
        "deleted": false,
        "BillingAddress":"saligramam",
        "affiliate_id": "1234567"
    },
    {
      "first_name":"1Jenifer1",
      "last_name":"Mathew",
      "ShippingAddress":"saligramam",
      "deleted": false,
      "BillingAddress":"saligramam",
      "affiliate_id": "1234567"
  },
  {
    "first_name":"1Jenifer12",
    "last_name":"Mathew",
    "ShippingAddress":"saligramam",
    "deleted": false,
    "BillingAddress":"saligramam",
    "affiliate_id": "1234567"
},
{
  "first_name":"1Jenifer13",
  "last_name":"Mathew",
  "ShippingAddress":"saligramam",
  "deleted": false,
  "BillingAddress":"saligramam",
  "affiliate_id": "1234567"
},
{
  "first_name":"1Jenifer23",
  "last_name":"Mathew",
  "ShippingAddress":"saligramam",
  "deleted": false,
  "BillingAddress":"saligramam",
  "affiliate_id": "1234567"
}]
    }
    });
  };

  
 
  return (
    <div className="App">
      {/* <h1>Find a Movie</h1>
      <span className="subheading">
        The app automatically searches as you type
      </span>
      <div className="title-input">
        <input
          className="fancy-input"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          type="text"
        />
      </div>
      {APP_ID === "<Your App ID>" ? (
        <div className="status important">
          Replace APP_ID with your App ID in index.js
        </div>
      ) : (
        !loading &&
        !movie && <div className="status">No movie with that name!</div>
      )} */}
        <div>
          <div className="row">
         
           
              <label>First Name</label>
           
              <input
                type="text"
                className="fancy-input"
                value={firstname}
                onChange={e => setfirstname(e.target.value)}
              />
              </div>
              <div className="row">
              <label>Last Name</label>
              <input
                type="text"
                className="fancy-input"
                value={lastname}
                onChange={e => setlastname(e.target.value)}
              /> </div>
              <button
                className="fancy-button"
                onClick={() => AddUser()}
              >
                Add User
              </button>
               <button
                className="fancy-button"
                onClick={() => AddManyUser()}
              >
                AddManyUser
              </button>
              <button
                className="fancy-button"
                onClick={() => UpdateUser()}
              >
                UpdateUser
              </button>
              <button
                className="fancy-button"
                onClick={() => UpdateAllUser()}
              >
                Update  ALL User
              </button>
              <button
                className="fancy-button"
                onClick={() => DeleteOneUser()}
              >
                Delete User
              </button>
              <button
                className="fancy-button"
                onClick={() => DeleteManyUser()}
              >
                Delete Many User
              </button>
              <button
                className="fancy-button"
                onClick={() => GetUser()}
              >
                GetUser
              </button>
              <button
                className="fancy-button"
                onClick={() => GetAllUser()}
              >
                Get ALL User
              </button>
              <button
                className="fancy-button"
                onClick={() => ReplaceOneUser()}
              >
                Replace One User
              </button>
          {/* <h2>{movie.title}</h2>
          <div>Year: {movie.year}</div>
          <div>Runtime: {movie.runtime} minutes</div> */}
          {/* <br />
          <img alt={`Poster for ${movie.title}`} src={movie.poster} /> */}
        </div>
        </div>
   
  );
}