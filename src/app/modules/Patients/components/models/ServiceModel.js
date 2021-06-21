import { duration } from '@material-ui/core';
import {TimingsModel} from '../../../../models/TimingsModel';
export const ServiceModel={
    allow_multiple_appointment: false,
    allow_waitlist: false,
    booking_url: "",
    cancel_link: "",
    category: "",
    color_code: "",
    commission_enabled: false,
    deleted_at: "",
    description: "",
    display_booking_page: false,
    display_name: "",
    display_order: 0,
    extra_time_in_seconds: "",
    extra_time_type: "",
    is_active: true,
    is_deleted: false,
    is_recurring: false,
    name: "Service name 1",
    avatar_or_icon: "",
    avatar_or_icon_path: "",
    prefered_gender: "",
    reschedule_link: "",
    room_required: false,
    service_excluded: [],
    service_included: [],
    service_relationships: {service_duration: [{
      duration_id:{
        time_zone: "",
    duration_hours: 0,
    duration_minutes: 0,
    buffer_before_min: 0,
    buffer_after_min : 0,
    latest_appointment : 0,
    advanced_appointment: 0,
    hide_duration_on_booking_page: false,
    enable_appointment_at_fixed_time: false,
    multiple_duration: false,
    max_duration_in_seconds:  0,
    min_duration_in_seconds: 0,
    site_id: "",
    workspace_id: "",
    status: false
      }
    }], service_pricing: [], 
    service_staff: [{
      staff_id:"60c76fccfbc25a15c4e7a10a"
    }], service_locations: []},
    service_setting: [],
    service_type: "Private",
    
  }
    
