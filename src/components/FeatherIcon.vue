<template>
  <svg class="feather">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
</template>

<script>
export default {
  name: "FeatherIcon",
  props() {
    return {
      name: String,
    };
  },
};
</script>

<style lang="sass" scoped>
.feather
  width: 24px
  height: 24px
  stroke: currentColor
  stroke-width: 2
  stroke-linecap: round
  stroke-linejoin: round
  fill: none
</style>