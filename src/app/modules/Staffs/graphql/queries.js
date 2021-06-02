const breakTimeField = `{
  start_time
  end_time
}
`;
const commonTimingField = `{
  name
  work_day_id
  work_day_name
  index
  start_time
  end_time
  is_day_off
  is_special_day
  breaktime ${breakTimeField}
  work_day_duration
  }
  `;
const sessionField = `{
  business_hour
  custome_hour
  data 
  ${commonTimingField}
}
`;

const inpersionField = `{
  buinsess_address
  client_address
}
`;
const oncallField = `{
  client
  staff
}`
  ;
const videoDataField = `{
id
video_type
}`
  ;

const availabilityField = `{
  id
  name
  inperson 
  ${inpersionField}
  oncall
   ${oncallField}
  video 
  ${videoDataField}
  site_id
  workspace_id
  is_deleted
  }
  `;

const timingField = `{
  id
  site_id
  workspace_id
  is_deleted
  availability_id 
  ${availabilityField}
  sessions 
  ${sessionField}
  }
  `;
const serviceField = `
services{
id 
${timingField}
service_type
}
`;

const staffTimings =`
staff_timings{
  timing_type
  timing_id
  ${timingField}
} 
` 
const commission =`
commission{
  amount
  percentage
  commission_type
} 
` 

const staff = `
{
  getStaffs {
      id
      booking_url
      color_code
      created_at
      description
      display_name
      display_order
      email
      employement_from
      employement_to
      experience_month
      experience_year
      first_name
      gender
      staff_id
      is_active
      is_service_provider
      last_name
      name
      phone_no
      phone_no_country
      role
      site_creator
      site_id
      site_owener
      sorting_id
      workspace_id
      ${serviceField}
      ${staffTimings}
      ${commission}
  }
}
`;

export default {
  staff,
  serviceField,
  timingField
};
