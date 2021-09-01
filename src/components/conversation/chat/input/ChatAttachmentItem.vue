<template>
  <picture class="has-zoom has-inner-icon rounded">
    <feather-zoom-in class="f-icon-30 image-inner-icon text-white" />

    <img :src="`data:image/png;base64,${thumbnail.dataBase64}`" />
  </picture>
</template>
<script>
import FeatherZoomIn from "@/icons/FeatherZoomIn";

export default {
  components: { FeatherZoomIn },
  props: {
    thumbnail: null,
  },
  setup() {
    return {};
  },
};
</script>
