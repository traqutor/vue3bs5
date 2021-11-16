<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <MediaThumbnailsLoading :is-loading="isLoading" />

    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 me-3"
    >
      <UploadMediaFilesBox />

      <div class="media-grid-container">
        <MediaGridItem
          v-for="item of thumbnails"
          :key="item.name"
          :item="item"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";
import { computed } from "vue";
import UploadMediaFilesBox from "@/components/media/upload/UploadMediaFilesBox";
import MediaThumbnailsLoading from "@/components/media/upload/MediaThumbnailsLoading";

export default {
  name: "MediaGeneralGrid",
  components: { MediaThumbnailsLoading, UploadMediaFilesBox, MediaGridItem },
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters.getIsThumbnailsLoading);
    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    return {
      isLoading,
      thumbnails,
    };
  },
};
</script>
