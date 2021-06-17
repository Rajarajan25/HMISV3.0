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
      service_relationships{
        service_duration{
          id{
            id
            time_zone
            duration_hours
            duration_minutes
            buffer_before_min
          }        
        }
        service_staff{
          id{
            id
            booking_url
            color_code
            display_name
          }       
        }
      }    
    }
  }
  `;