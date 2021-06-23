import gql from "graphql-tag";


export const ADD_SERVICE = gql`
  mutation addService($service: ServiceInput) {
    addService(service:$service) {
      id
      name
      description
      color_code
      prefered_gender
      booking_url
      service_type
      service_relationships{
        service_staff{
          staff_id{
            id
          }
        }
        service_duration{
          duration_id{
            id
          }
        }
      }
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
      booking_url
      prefered_gender
      service_type
      service_relationships{
        service_staff{
          staff_id{
            id
          }
        }
        service_duration{
          duration_id{
            id
          }
        }
      }
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