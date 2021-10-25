<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <div class="text-blue my-3 f-size-15">Today</div>

      <table>
        <thead>
          <tr class="bg-white">
            <th scope="col" class="pt-1 text-nowrap border-0">Name</th>
            <th scope="col" class="pt-1 text-nowrap border-0">File type</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Duration</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
            <th scope="col" class="pt-1 text-nowrap border-0"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item of thumbnails" :key="item.id">
            <MediaListItem :item="item" />
          </template>
        </tbody>
      </table>

      <div class="text-blue my-3 f-size-15">Yesterday</div>

      <table>
        <thead>
          <tr class="bg-white">
            <th scope="col" class="pt-1 text-nowrap border-0">Name</th>
            <th scope="col" class="pt-1 text-nowrap border-0">File type</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Duration</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item of thumbnails" :key="item.id">
            <MediaListItem :item="item" />
          </template>
        </tbody>
      </table>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaListItem from "@/components/media/table/MediaTableRowItem";
export default {
  name: "MediaRecentList",
  components: { MediaListItem },
  setup() {
    const store = useStore();
    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    return {
      thumbnails,
      MEDIA_ITEM_SIZES,
    };
  },
};
</script>
