<template>
  <div
    class="
      list-media-item list-media-card
      on-hover
      position-relative
      mb-3
      hover-action-group
    "
  >
    <MediaItem :item="item" :is-select="isSelect" />
  </div>
</template>
<script>
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import MediaItem from "@/components/media/item/MediaItem";

export default {
  props: {
    item: null,
    isSelect: null,
  },
  setup() {
    return {
      MEDIA_TYPES,
    };
  },
  components: {
    MediaItem,
  },
};
</script>
