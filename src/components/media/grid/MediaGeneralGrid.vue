<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar class="d-flex flex-column position-absolute h-100 w-100 me-3">
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

export default {
  name: "MediaGeneralGrid",
  components: { MediaGridItem },
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
