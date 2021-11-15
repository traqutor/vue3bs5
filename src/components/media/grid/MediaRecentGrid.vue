<template>
  <div class="flex-fill position-relative overflow-hidden">
    <div class="media-grid-wrapper">
      <perfect-scrollbar
        class="d-flex flex-column position-absolute h-100 w-100"
      >
        <div v-if="selectedFiles.length > 0">
          <div class="media-recent-time-ago-divider">
            <span class="label-subheader">Files to upload</span>
          </div>
          <div class="media-grid-container">
            <ImageUploadThumbnailPreview
              v-for="(file, index) of selectedFiles"
              :key="index"
              :file="file"
            />
          </div>
        </div>

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
  </div>
</template>
<script>
import { useStore } from "vuex";
import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";
import { computed } from "vue";
import ImageUploadThumbnailPreview from "@/components/media/manager/ImageUploadThumbnailPreview";
export default {
  name: "MediaRecentGrid",
  setup() {
    const store = useStore();

    const selectedFiles = computed(
      () => store.getters.getTemporarySelectedFilesToUpload
    );

    const thumbnails = computed(() => store.getters.getMediaRecentThumbnails);
    const thumbnailsGroups = computed(
      () => store.getters.getMediaGroupedRecentThumbnails
    );

    return {
      selectedFiles,
      thumbnails,
      thumbnailsGroups,
      MEDIA_ITEM_SIZES,
    };
  },
  components: { ImageUploadThumbnailPreview, MediaGridItem },
};
</script>
