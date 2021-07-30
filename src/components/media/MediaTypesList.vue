<template>
  <div
    class="
      col
      f-col-xs
      pe-2
      d-flex
      flex-column
      overflow-hidden
      border-right border-secondary-light
    "
  >
    <div class="d-flex flex-column flex-fill position-relative">
      <perfect-scrollbar
        class="position-absolute h-100 w-100 pe-3 media-type-group"
      >
        <MediaTypeListItem
          v-for="item of mediaTypes"
          :key="item.id"
          :item="item"
        />
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import MediaTypeListItem from "@/components/media/MediaTypeListItem";

export default {
  components: { MediaTypeListItem },
  setup() {
    const store = useStore();
    const mediaTypes = computed(() => store.getters.getMediaTypes);
    return { mediaTypes };
  },
};
</script>
