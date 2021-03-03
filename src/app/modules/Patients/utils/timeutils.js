import * as Yup from "yup";
import moment from "moment";
import * as myConstClass from './constants';


const isSameOrBefore = (startTime, endTime) => {

  return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
}
const breaktimeschema = Yup.object().shape({

  start_time: Yup.string()
    .test(
      'not empty',
      myConstClass.START_TIME_EMPTY,
      function (value) {
        if (value == "00:00")
          return 0
        else
          return 1
      }
    )
    .test(
      "start_time_test",
      myConstClass.START_TIME_BEFORE,
      function (value) {
        const { end_time } = this.parent;
        return isSameOrBefore(value, end_time);
      }
    ),
  end_time: Yup.string()
    .test(
      'not empty',
      myConstClass.END_TIME_EMPTY,
      function (value) {
        if (value == "00:00")
          return 0
        else
          return 1
      }
    ),
  breaktime: Yup.array().of(
    Yup.object().shape({
      start_time: Yup.string()
        .test(
          'not empty',
          myConstClass.BREAK_START_TIME_EMPTY,
          function (value) {
            if (value == "00:00")
              return 0
            else
              return 1
          }
        )
        .test(
          "start_time_test",
          myConstClass. BREAK_START_TIME_BEFORE,
          function (value) {

            const { end_time } = this.parent;
            return isSameOrBefore(value, end_time);
          }
        ),
      end_time: Yup.string()
        .test(
          'not empty',
          myConstClass. BREAK_END_TIME_EMPTY ,
          function (value) {
            if (value == "00:00")
              return 0
            else
              return 1
          }
        ),
    })
  )

});
export default breaktimeschema