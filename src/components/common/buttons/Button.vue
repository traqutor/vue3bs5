<template>
  <button class="button btn btn-primary me-2">
    <slot class="label"></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
}
.label {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
}
</style>
