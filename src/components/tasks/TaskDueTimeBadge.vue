<template>
  <span
    class="
      badge badge-pill
      bagd
      px-2
      py-1
      f-size-13
      font-weight-middle
      text-spacing text-monospace
      timer
    "
    :class="badgeClass"
  >
    {{ badgeLabel }}</span
  >
</template>
<script>
import { ref } from "vue";
import { timeTaskDueFormat } from "@/services/datetime.service";
import moment from "moment";

export default {
  props: ["task"],
  setup(props) {
    const SECONDS_PER_MINUTE = 60;
    const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;
    const SECONDS_PER_DAY = 24 * SECONDS_PER_HOUR;

    const badgeClass = ref("badge-warning");
    const badgeLabel = ref("");
    const deadLine = moment.unix(props.task.dateDeadline.seconds);

    const countDownDueTime = () => {
      const now = moment();
      if (deadLine.isAfter(now)) {
        setTimeout(() => {
          const difference = deadLine.diff(now, "seconds");
          const days = Math.floor(difference / SECONDS_PER_DAY);
          const hours = Math.floor(
            (difference % SECONDS_PER_DAY) / SECONDS_PER_HOUR
          );
          const minutes = Math.floor(
            (difference % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE
          );
          const seconds = Math.floor(difference % SECONDS_PER_MINUTE);

          badgeLabel.value = `${days > 0 ? days + "d " : ""}
            ${hours > 0 ? hours + "h " : ""}
            ${minutes}:${seconds}
          `;

          if (days === 0 && hours === 0 && minutes < 59) {
            badgeClass.value = "badge-danger";
          }

          countDownDueTime();
        }, 1000);
      } else {
        badgeLabel.value = "Overdue";
        badgeClass.value = "badge-danger";
      }
    };

    countDownDueTime();

    return {
      badgeLabel,
      badgeClass,
      moment,
      timeTaskDueFormat,
    };
  },
};
</script>
