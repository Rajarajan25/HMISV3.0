const commonParamsDef = `{
  $name: String!
}`;

const commonParams = `{
  name: $name,
}`;

const staffAdd = `
  mutation addStaff($staff: StaffInput) {
    addStaff(staff:$staff) {
      _id
    }
  }
`;

const staffUpdate = `
  mutation updateStaff($staffID: ID!,$staff: StaffInput) {
    updateStaff(staffID: $staffID,staff:$staff) {
      _id
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
