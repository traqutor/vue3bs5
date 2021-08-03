<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <div
        class="d-flex flex-wrap list-media-group table-todo-list"
        :class="itemSizeClass"
        id="patientMediaList"
      >
        <template v-for="item of thumbnails" :key="item.name">
          <MediaListItem :item="item" />
        </template>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import MediaListItem from "@/components/media/gridItem/MediaListItem";
import { computed } from "vue";

export default {
  name: "MediaGeneralGrid",
  components: { MediaListItem },
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
