<template>
  <div
    v-if="isDropFileBoxVisible || selectedFiles.length > 0"
    class="drop-files-box"
    @drop="onDropFiles"
  >
    <div class="media-recent-time-ago-divider">
      <span class="label-subheader">Files to upload</span>
      <button class="btn btn-primary ms-auto me-3" @click="onUpload = true">
        Upload
      </button>
    </div>
    <div>
      <div class="media-grid-container">
        <ImageUploadThumbnailPreview
          v-for="(file, index) of selectedFiles"
          :key="file.name"
          :file="file"
          :index="index"
          :on-upload="onUpload"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageUploadThumbnailPreview from "@/components/media/manager/ImageUploadThumbnailPreview";
import { computed, ref } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
import { useStore } from "vuex";

export default {
  components: { ImageUploadThumbnailPreview },
  setup() {
    const store = useStore();
    const onUpload = ref(false);
    const isDropFileBoxVisible = computed(
      () => store.getters.getIsDropFileBoxVisible
    );

    const onDropFiles = (e) => {
      const dt = Array.from(e.dataTransfer.files);
      store.commit(Mutations.setTemporarySelectedFilesToUpload, dt);
      store.commit(Mutations.setIsMediaShareLoading, false);
    };

    const selectedFiles = computed(
      () => store.getters.getTemporarySelectedFilesToUpload
    );

    return {
      onUpload,
      isDropFileBoxVisible,
      selectedFiles,
      onDropFiles,
    };
  },
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
