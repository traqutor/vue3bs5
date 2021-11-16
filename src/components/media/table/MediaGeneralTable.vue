<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <MediaThumbnailsLoading :is-loading="isLoading" />
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <UploadMediaFilesBox />

      <table>
        <thead>
          <tr>
            <th scope="col" class="pt-1 text-nowrap border-0">Name</th>
            <th scope="col" class="pt-1 text-nowrap border-0">File type</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Duration</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item of thumbnails" :key="item.id">
            <MediaTableRowItem :item="item" />
          </template>
        </tbody>
      </table>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import MediaTableRowItem from "@/components/media/table/MediaTableRowItem";
import MediaThumbnailsLoading from "@/components/media/upload/MediaThumbnailsLoading";
import UploadMediaFilesBox from "@/components/media/upload/UploadMediaFilesBox";
export default {
  name: "MediaGeneralList",
  components: {
    UploadMediaFilesBox,
    MediaThumbnailsLoading,
    MediaTableRowItem,
  },
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
