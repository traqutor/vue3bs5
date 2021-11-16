<template>
  <div class="flex-fill position-relative overflow-hidden">
    <MediaThumbnailsLoading :is-loading="isLoading" />
    <perfect-scrollbar class="d-flex flex-column position-absolute h-100 w-100">
      <UploadMediaFilesBox />

      <template v-for="(group, index) of thumbnailsGroups" :key="index">
        <div class="media-recent-time-ago-divider">
          <span class="label-subheader">{{ group.date }}</span>
        </div>

        <div class="media-grid-container">
          <MediaGridItem
            v-for="item of group.thumbnails"
            :key="item.name"
            :item="item"
          />
        </div>
      </template>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";
import UploadMediaFilesBox from "@/components/media/upload/UploadMediaFilesBox";
import MediaThumbnailsLoading from "@/components/media/upload/MediaThumbnailsLoading";

export default {
  name: "MediaRecentGrid",
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters.getIsRecentThumbnailsLoading);
    const thumbnails = computed(() => store.getters.getMediaRecentThumbnails);
    const thumbnailsGroups = computed(
      () => store.getters.getMediaGroupedRecentThumbnails
    );

    return {
      isLoading,
      thumbnails,
      thumbnailsGroups,
      MEDIA_ITEM_SIZES,
    };
  },
  components: {
    MediaThumbnailsLoading,
    UploadMediaFilesBox,
    MediaGridItem,
  },
};
</script>
