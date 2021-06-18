import gql from "graphql-tag";


export const ADD_SERVICE = gql`
  mutation addService($service: ServiceInput) {
    addService(service:$service) {
      id
      name
      description
      color_code
      prefered_gender
      service_type
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation updateService($serviceID: ID!, $service: ServiceInput) {
    updateService(serviceID:$serviceID,service:$service) {
      id
      name
      description
      color_code
      prefered_gender
      service_type
    }
  }
`;

export const DELETE_SERVICE = gql`
  mutation deleteService($serviceID: ID!) {
    deleteService(serviceID:$serviceID) {
      id
      name
      description
      color_code
      prefered_gender
      service_type
    }
  }
`;