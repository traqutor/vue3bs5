<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
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
export default {
  name: "MediaGeneralList",
  components: { MediaTableRowItem },
  setup() {
    const store = useStore();
    const itemSizeClass = computed(() => store.getters.getMediaItemClass);

    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    return {
      itemSizeClass,
      thumbnails,
    };
  },
};
</script>
