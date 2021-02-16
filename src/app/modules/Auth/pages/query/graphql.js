import gql from "graphql-tag";



export const GET_USER = gql`
query GetUser($query:UserQueryInput) {
user(query:$query)
{
  _id
  first_name
  last_name
}
}
`;
export const GET_ALL_USER = gql`
query GetUser($query:UserQueryInput,$limit:Int,$sortBy:UserSortByInput) {
users(query:$query,limit:$limit,sortBy:$sortBy)
{
  _id
  first_name
  last_name
}
}
`;


export const REPLACE_ONE_USER = gql`
    mutation ReplaceOneUser($query: UserQueryInput!,$data: UserInsertInput!) {
      replaceOneUser(query:$query, data: $data) {
        _id
  first_name
  last_name
      }
      
    }
`;


export const ADD_USER = gql`
    mutation AddUser($data: UserInsertInput!) {
      insertOneUser(data: $data) {
        first_name
        last_name
        ShippingAddress
        deleted
        BillingAddress
        affiliate_id
        _id
      }
    }
`;
export const DELETE_USER = gql`
    mutation DeleteUser($query: UserQueryInput!) {
      deleteOneUser(query: $query) {
        first_name
        last_name
        ShippingAddress
        deleted
        BillingAddress
        affiliate_id
        _id
      }
    }
`;

export const DELETE_MANY_USER = gql`
    mutation DeleteManyUsers($query: UserQueryInput!) {
      deleteManyUsers(query: $query) {
      
        deletedCount
       
      }
      
    }
`;
export const ADD_MANY_USER = gql`
    mutation AddManyUser($data: [UserInsertInput!]!) {
      insertManyUsers(data: $data) {
        insertedIds
      }
      
    }
`;
export const UPDATE_ALL_USER = gql`
    mutation UpdateAllUser($query: UserQueryInput!,$set: UserUpdateInput!) {
      updateManyUsers(query:$query, set: $set) {
        matchedCount
        modifiedCount
      }
      
    }
`;
export const UPDATE_USER = gql`
    mutation UpdateUser($query: UserQueryInput, $set: UserUpdateInput!){
      updateOneUser(query:$query, set: $set){
        _id
        first_name
        last_name
    }
  }

`;
