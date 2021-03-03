import * as Yup from 'yup';
import * as myConstClass from './constants';

const StaffValidationSchema = Yup.object({
    name: Yup.string().required(myConstClass.NAMEREQ_ERROR),
    Category_List: Yup.string().required(myConstClass.CATEGORYLIST_ERROR),
  });


  export default  StaffValidationSchema;


