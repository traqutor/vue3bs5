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
        <MediaGridItem
          v-for="i in [1, 2, 3, 4, 5]"
          :key="i"
          :item="{ type: 'photo' }"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import MediaGridItem from "@/views/content/media/gridItem/MediaGridItem";

export default {
  name: "MediaUndefinedGrid",
  components: { MediaGridItem },
  computed: {
    ...mapGetters({
      itemSizeClass: "getMediaItemClass",
    }),
  },
};
</script>
