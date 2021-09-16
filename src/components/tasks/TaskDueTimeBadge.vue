<template>
  <span
    class="
      badge badge-pill badge-danger
      me-4
      px-2
      py-1
      f-size-13
      font-weight-middle
      text-spacing text-monospace
      timer
    "
    >{{ dueTime(task.dateDeadline.seconds) }}</span
  >
</template>
<script>
import { timeTaskDueFormat } from "@/services/datetime.service";

export default {
  props: ["task"],
  setup() {
    const dueTime = (time) => timeTaskDueFormat(time);
    return {
      dueTime,
    };
  },
};
</script>
