<template>
  <div
    class="flex-fill position-relative overflow-hidden"
    @dragenter="onDragEnter(true)"
  >
    <div class="media-grid-wrapper">
      <perfect-scrollbar
        class="d-flex flex-column position-absolute h-100 w-100"
        @dragover.prevent
        @drop.prevent
      >
        <div
          v-if="isDropFileBoxVisible || selectedFiles.length > 0"
          class="drop-files-box"
          @drop="onDropFiles"
        >
          <div class="media-recent-time-ago-divider">
            <span class="label-subheader">Files to upload</span>
          </div>
          <div>
            <div class="media-grid-container">
              <ImageUploadThumbnailPreview
                v-for="(file, index) of selectedFiles"
                :key="index"
                :file="file"
                :index="index"
              />
            </div>
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
import { computed } from "vue";
import { useStore } from "vuex";

import { MEDIA_ITEM_SIZES, Mutations } from "@/store/enums/EnumTypes";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";
import ImageUploadThumbnailPreview from "@/components/media/manager/ImageUploadThumbnailPreview";

export default {
  name: "MediaRecentGrid",
  setup() {
    const store = useStore();

    const isDropFileBoxVisible = computed(
      () => store.getters.getIsDropFileBoxVisible
    );

    const onDragEnter = (flag) => {
      store.commit(Mutations.setIsMediaShareLoading, flag);
    };

    const onDropFiles = (e) => {
      const dt = Array.from(e.dataTransfer.files);
      store.commit(Mutations.setTemporarySelectedFilesToUpload, dt);
    };

    const selectedFiles = computed(
      () => store.getters.getTemporarySelectedFilesToUpload
    );

    const thumbnails = computed(() => store.getters.getMediaRecentThumbnails);
    const thumbnailsGroups = computed(
      () => store.getters.getMediaGroupedRecentThumbnails
    );

    return {
      isDropFileBoxVisible,
      selectedFiles,
      thumbnails,
      thumbnailsGroups,
      onDropFiles,
      onDragEnter,
      MEDIA_ITEM_SIZES,
    };
  },
  components: { ImageUploadThumbnailPreview, MediaGridItem },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/constans";
.drop-files-box {
  display: grid;
  padding-bottom: 48px;
  border: 4px dashed $grey-box-shadow;
  margin: 16px 12px 0 0;
}
</style>
