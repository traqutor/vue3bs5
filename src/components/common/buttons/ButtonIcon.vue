<template>
  <div class="btn btn-sm btn-icon" :class="active && 'active'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ["active"],
};
</script>
<style lang="scss">
@import "../../../assets/scss/constans";

.btn-icon {
  /* icon */
  height: 24px;
  width: 24px;
}

.btn-icon:hover {
  background-color: $grey-hover;
  color: #000000;
}

.btn-icon.active {
  color: $blue-system;
}
</style>
