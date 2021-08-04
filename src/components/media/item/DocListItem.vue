<template>
  <div
    class="image-inner-content justify-content-start image-inner-img text-white"
  >
    <img src="../../../assets/files/pdf-1.jpg" />
    <FeatherEye class="f-icon-30 image-inner-icon" />
  </div>

  <div class="position-absolute position-bottom-right m-2">
    <span class="badge badge-pill bg-white font-weight-middle f-size-11"
      >PDF</span
    >
  </div>
</template>
<script>
import FeatherEye from "@/icons/FeatherEye";

export default {
  name: "DocListItem",
  components: { FeatherEye },
  props: {
    item: null,
  },
};
</script>
