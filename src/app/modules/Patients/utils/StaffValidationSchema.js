import * as Yup from 'yup';
import * as myConstClass from './constants';

const StaffValidationSchema = Yup.object({
    name: Yup.string().required(myConstClass.NAMEREQ_ERROR),
    mobile_number: Yup.string().required(myConstClass.MOBILE_ERROR),
    email_signature: Yup.string()
        .email(myConstClass.EMAILVALID_ERROR)
        .required(myConstClass.EMAILREQ_ERROR),
    clients_served_sametime:Yup.string()
        .required(myConstClass.CLIENTCOUNT_ERROR),
    //doj: Yup.string().required(myConstClass.DOJ_ERROR),
  });

  export default  StaffValidationSchema;


