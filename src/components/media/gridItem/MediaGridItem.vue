<template>
  <div class="media-grid-tile" v-if="item">
    <MediaItem :item="item" :is-drop-down-menu="true" />

    <span class="text-truncate media-grid-tile-name-label">
      {{ item.name }}</span
    >
    <span class="media-grid-tile-created-label"
      >Created {{ getCreatedAgo }}</span
    >
  </div>
</template>
<script>
import { computed } from "vue";
import moment from "moment";
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import MediaItem from "@/components/media/item/MediaItem";

export default {
  name: "MediaGridItem",
  props: ["item", "isSelect"],
  setup(props) {
    const getCreatedAgo = computed(() => moment(props.item.created).fromNow());

    return {
      MEDIA_TYPES,
      getCreatedAgo,
    };
  },
  components: {
    MediaItem,
  },
};
</script>
