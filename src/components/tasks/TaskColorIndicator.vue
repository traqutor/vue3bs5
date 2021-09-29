<template>
  <span class="f-icon me-3"
    ><i
      class="f-icon f-icon-24 rounded"
      :style="`background-color: ${color}`"
    ></i
  ></span>
</template>
<script>
export default {
  props: ["color"],
};
</script>
