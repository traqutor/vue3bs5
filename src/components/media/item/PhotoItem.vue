<template>
  <div
    class="bound-image"
    :style="{
      'background-image': `url(data:image/png;base64,${item.dataBase64})`,
    }"
  ></div>
</template>
<script>
export default {
  props: {
    item: null,
  },
};
</script>
<style scoped lang="scss">
@import "src/assets/scss/constans";
.bound-image {
  max-width: 100%;
  background-color: $grey-empty;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  &:hover {
    border-radius: 0;
  }
}
</style>
