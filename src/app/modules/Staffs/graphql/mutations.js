const staffAdd = `
  mutation addStaff($staff: StaffInput) {
    addStaff(staff:$staff) {
      id
      staff_services{
        service_id{
          name
          id
          color_code
        }
      }
    }
  }
`;

const staffUpdate = `
  mutation updateStaff($staffID: ID!,$staff: StaffInput) {
    updateStaff(staffID: $staffID,staff:$staff) {
      id
      staff_services{
        service_id{
          name
          id
          color_code
        }
      }
    }
  }
`;

const staffRemove = `
  mutation deleteStaff($staffID:ID!) {
    deleteStaff(staffID: $staffID){
      id
    }
  }
`;


export default {
  staffAdd,
  staffUpdate,
  staffRemove
};
