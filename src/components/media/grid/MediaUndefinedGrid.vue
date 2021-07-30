<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pr-3"
    >
      <div
        class="d-flex flex-wrap list-media-group table-todo-list"
        :class="itemSizeClass"
        id="patientMediaList"
      >
        <MediaListItem
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
import MediaListItem from "@/views/content/media/gridItem/MediaListItem";

export default {
  name: "MediaUndefinedGrid",
  components: { MediaListItem },
  computed: {
    ...mapGetters({
      itemSizeClass: "getMediaItemClass",
    }),
  },
};
</script>
