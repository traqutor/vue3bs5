<template>
  <figure class="image-figure mb-1 alert alert-warning bg-media-type-2 p-0">
    <div class="image-figure-wrap">
      <div class="image-figure-inner">
        <div
          class="
            image-inner-content
            justify-content-start
            image-inner-img
            text-white
          "
        >
          <img src="../../../assets/files/pdf-1.jpg" />
          <FeatherEye class="f-icon-30 image-inner-icon" />
        </div>

        <div class="position-absolute position-bottom-right m-2">
          <span class="badge badge-pill bg-white font-weight-middle f-size-11"
            >PDF</span
          >
        </div>

        <MediaListItemDropDown :item="item" />
      </div>
    </div>
  </figure>
</template>
<script>
import FeatherEye from "@/icons/FeatherEye";
import MediaListItemDropDown from "@/components/media/gridItem/MediaListItemDropDown";

export default {
  name: "DocListItem",
  components: { MediaListItemDropDown, FeatherEye },
  props: {
    item: null,
  },
};
</script>
