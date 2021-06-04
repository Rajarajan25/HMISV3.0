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
  mutation deleteStaff($_id:ID!) {
    deleteStaff(staffID: $_id)
  }
`;


export default {
  staffAdd,
  staffUpdate,
  staffRemove
};
