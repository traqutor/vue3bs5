<template>
  <span
    class="
      badge badge-pill badge-danger
      px-2
      py-1
      f-size-13
      font-weight-middle
      text-spacing text-monospace
      timer
    "
    >{{ timeTaskDueFormat(task.dateDeadline.seconds) }}</span
  >
</template>
<script>
import { ref, onMounted } from "vue";
import { timeTaskDueFormat } from "@/services/datetime.service";

export default {
  props: ["task"],
  setup() {
    const MILLISECONDS_SECOND = 1000;
    const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
    const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
    const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;

    const remainingMilliseconds = ref(0);

    onMounted(() => {});

    return {
      remainingMilliseconds,
      timeTaskDueFormat,
    };
  },
};
</script>
