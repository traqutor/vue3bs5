<template>
  <media-recent-grid v-if="mediaViewMode === MEDIA_VIEW_MODE.GRID" />
  <media-recent-list v-else-if="mediaViewMode === MEDIA_VIEW_MODE.TABLE" />
</template>
<script>
import MediaRecentGrid from "@/views/content/media/grid/MediaRecentGrid";
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODE } from "@/store/modules/media";
import MediaRecentList from "@/views/content/media/list/MediaRecentList";
export default {
  name: "MediaRecent",
  data() {
    return { MEDIA_VIEW_MODE };
  },
  components: { MediaRecentList, MediaRecentGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode"
    })
  }
};
</script>
