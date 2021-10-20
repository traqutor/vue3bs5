<template>
  <div class="btn btn-chip" :class="active && 'active'" >
    <span class="label"><slot></slot></span>
  </div>
</template>
<script>
export default {
  props: ["active"],
};
</script>

