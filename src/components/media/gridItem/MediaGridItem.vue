<template>
  <div
    class="list-media-item on-hover position-relative hover-action-group mb-4"
    v-if="item"
  >
    <MediaItem :item="item" :is-drop-down-menu="true" />

    <div
      v-if="
        item.blobType === MEDIA_TYPES.DOC ||
        item.blobType === MEDIA_TYPES.NOTE ||
        item.blobType === MEDIA_TYPES.AUDIO
      "
      class="media py-1"
    >
      <div class="media-body overflow-hidden">
        <div class="text-truncate font-weight-middle">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="d-flex f-size-12 text-secondary">
      <div
        class="text-nowrap on-hover"
        data-toggle="tooltip"
        title=""
        data-original-title="12:48 pm • Yesterday"
      >
        12:48 <small>am</small>
      </div>
    </div>
  </div>
</template>
<script>
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import MediaItem from "@/components/media/item/MediaItem";

export default {
  name: "MediaGridItem",
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
