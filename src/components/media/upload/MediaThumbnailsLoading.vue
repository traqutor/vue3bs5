<template>
  <div v-if="isLoading" class="d-flex align-items-center me-3 mb-2">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
  </div>
</template>
<script>
export default {
  props: ["isLoading"],
};
</script>

<style scoped lang="scss">
.spinner-wrapper {
  height: 40px;
}
</style>
