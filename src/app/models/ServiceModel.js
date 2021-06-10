import {TimingsModel} from './TimingsModel';
export const ServiceModel={
    

    id:"4",
    name:"",
    cost:"",
    service_type:"",
    duration:{duration_minutes:"",buffer_before_min:"",buffer_after_min:"",pricetype:"",price:"",date_range:""},
    payments:{retail_price:"",special_price:"",staff_name:"",duration_minutes:"",price_type:"",service_pricing_by_staff:[{
      staff_id:"",price_type:"",retail_price:"",special_price:"",duration_minutes:"",duration_hours:""
    }]},
    staff:[
      {
        "id":"",
        "name":"",
        "mobile_number":""
     }
    ],
    staff_timings: [TimingsModel],

  
    
}