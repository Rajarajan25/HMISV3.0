import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    business_name,
    business_address,
    business_size,
    business_type,
    country_code,
    phone_number,
    business,
    spa_type,
    applyWeek,
    applyMonth,
    acceptTerms,
    timezone
  }
} = checkoutFormModel;

export default {
  [business_name.name]: "",
  [business_address.name]: "",
  [business_size.name]: "",
  [business_type.name]: "",
  [country_code.name]: "",
  [phone_number.name]: "",
  [business.name]: "",
  [spa_type.name]: "",
  [applyWeek.name] :false,
  [applyMonth.name] :false,
  [acceptTerms.name]:false,
  timezone:""
};
