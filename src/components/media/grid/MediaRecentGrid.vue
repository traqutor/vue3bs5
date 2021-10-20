<template>
  <div class="flex-fill position-relative overflow-hidden">
    <div class="media-grid-wrapper">
      <perfect-scrollbar
        class="d-flex flex-column position-absolute h-100 w-100"
      >
        <div class="media-recent-time-ago-divider">
          <span class="subheader-label">Today</span>
        </div>

        <div class="media-grid-container">
          <MediaGridItem
            v-for="item of thumbnails"
            :key="item.name"
            :item="item"
          />
        </div>

        <div class="media-recent-time-ago-divider">
          <span class="subheader-label">Yesterday</span>
        </div>

        <div class="media-grid-container">
          <MediaGridItem
            v-for="item of thumbnails"
            :key="item.name"
            :item="item"
          />
        </div>
      </perfect-scrollbar>
    </div>
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
      MEDIA_ITEM_SIZES,
    };
  },
  components: { MediaGridItem },
};
</script>
