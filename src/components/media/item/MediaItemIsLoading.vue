<template>
  <div class="image-load-button-loader">
    <div v-if="isLoading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/constans";
.image-load-button-loader {
  height: 48px;
  width: 48px;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
}
</style>
