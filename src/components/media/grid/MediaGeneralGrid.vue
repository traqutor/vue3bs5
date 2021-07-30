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
        <MediaListItem :item="{ type: 'doc' }" />
        <MediaListItem :item="{ type: 'audio' }" />
        <MediaListItem :item="{ type: 'photo' }" />
        <MediaListItem :item="{ type: 'video' }" />
        <MediaListItem :item="{ type: 'note' }" />
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import MediaListItem from "@/components/media/gridItem/MediaListItem";

export default {
  name: "MediaGeneralGrid",
  components: { MediaListItem },
  computed: {
    ...mapGetters({
      itemSizeClass: "getMediaItemClass",
    }),
  },
};
</script>
