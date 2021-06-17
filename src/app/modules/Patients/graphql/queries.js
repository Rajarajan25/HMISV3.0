import gql from "graphql-tag";

export const GET_SERVICE = gql`
  query{
    getService{
      id
      name
      description
      prefered_gender
      color_code
      service_type
      }    
    }
  `;