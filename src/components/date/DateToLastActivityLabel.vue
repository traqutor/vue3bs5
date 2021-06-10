<template>
  <span>{{ getTextLabel() }}</span>
</template>
<script>
import moment from "moment";
export default {
  props: {
    activityDate: {}
  },
  setup(props) {

    function getTextLabel() {
      const momentValue = props.activityDate.seconds ? moment.unix(props.activityDate.seconds) : moment(props.activityDate);
      let text;

      const TODAY = moment().startOf("day");

      if (momentValue.isSame(TODAY, "d")) {
        text = momentValue.fromNow();
      } else {
        text = momentValue.format("DD/MM/YYYY");
      }
      return text;
    }

    return {
      getTextLabel,
    }
  }
}
</script>
