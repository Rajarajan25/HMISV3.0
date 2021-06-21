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
          duration_id{
            time_zone
            status
            duration_hours
            duration_minutes
            buffer_before_min
            buffer_after_min
            
          }
        }
        service_staff{
          staff_id{
            id
            name
            
          }
        }
      }     
     }    
    }
  `;