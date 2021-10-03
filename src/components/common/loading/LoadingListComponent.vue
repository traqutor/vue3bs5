<template>
  <div
    v-if="isShown"
    class="d-flex justify-content-center align-content-center fs-5 mt-3"
  >
    Is loading...
  </div>
</template>
<script>
export default {
  props: ["isShown"],
};
</script>
