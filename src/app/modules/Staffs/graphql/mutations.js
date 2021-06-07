const staffAdd = `
  mutation addStaff($staff: StaffInput) {
    addStaff(staff:$staff) {
      id
    }
  }
`;

const staffUpdate = `
  mutation updateStaff($staffID: ID!,$staff: StaffInput) {
    updateStaff(staffID: $staffID,staff:$staff) {
      id
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
