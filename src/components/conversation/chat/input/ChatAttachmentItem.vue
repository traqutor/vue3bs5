<template>
  <div
    class="
      list-media-item list-media-card
      on-hover
      position-relative
      hover-action-group
    "
    style="min-width: 128px; min-height: 64px;"
  >
    <MediaItem :item="item" />
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
