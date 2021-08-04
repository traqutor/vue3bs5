<template>
  <a @click="index = 1" class="image-inner-content image-inner-img text-white">
    <img src="../../../assets/files/video1.png" />
    <FeatherPlay class="f-icon-34 image-inner-icon" />
  </a>

  <figcaption>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
    <div>12:48 <small>am</small> • Today</div>
  </figcaption>

  <div class="position-absolute position-bottom-right m-2 position-index">
    <span class="badge badge-pill bg-white font-weight-middle f-size-11"
      >0:11</span
    >
  </div>
</template>
<script>
import FeatherPlay from "@/icons/FeatherPlay";

export default {
  name: "VideoItem",
  components: { FeatherPlay },
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
