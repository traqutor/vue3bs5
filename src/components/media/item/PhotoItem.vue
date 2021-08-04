<template>
  <a @click="index = 0" class="image-inner-content image-inner-img text-white">
    <img :src="`data:image/png;base64,${item.dataBase64}`" />
    <FeatherZoomIn />
  </a>
</template>
<script>
import FeatherZoomIn from "@/icons/FeatherZoomIn";
import { timeHhMmaDotDdddFormat } from "@/services/datetime.service";

export default {
  components: { FeatherZoomIn },
  setup() {
    return {
      timeHhMmaDotDdddFormat,
    };
  },
  data: function () {
    return {
      index: null,
    };
  },
  props: {
    item: null,
  },
};
</script>
