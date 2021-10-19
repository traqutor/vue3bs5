<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <div class="text-blue my-3 f-size-15">Today</div>

      <div class="d-flex flex-wrap list-media-group table-todo-list">
        <template v-for="item of thumbnails" :key="item.name">
          <MediaGridItem :item="item" />
        </template>
      </div>

      <div class="text-blue my-3 f-size-15">Yesterday</div>

      <div class="d-flex flex-wrap list-media-group table-todo-list">
        <template v-for="item of thumbnails" :key="item.name">
          <MediaGridItem :item="item" />
        </template>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";
import { computed } from "vue";
export default {
  name: "MediaRecentGrid",
  setup() {
    const store = useStore();
    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    return {
      thumbnails,
    };
  },
  data() {
    return {
      MEDIA_ITEM_SIZES,
    };
  },
  components: { MediaGridItem },
};
</script>
