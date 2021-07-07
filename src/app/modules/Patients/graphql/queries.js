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
      booking_url
      avatar_or_icon
      avatar_or_icon_path
      service_relationships{
        service_staff{
          staff_id{
            id
            name
            color_code
            booking_url
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

