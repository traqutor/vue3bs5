<template>
  <span
    class="
      text-white
      px-2
      py-1
      f-size-12
      badge badge-pill
      bg-task-new
      shadow-none
      font-weight-middle
    "
    :class="`bg-task-${task.taskStatus.toLowerCase()}`"
  >
    {{ task.taskStatus }}
  </span>
</template>
<script>
export default {
  props: ["task"],
};
</script>
