<template>
  <media-recent-grid v-if="mediaViewMode === MEDIA_VIEW_MODES.GRID" />
  <media-recent-table v-else-if="mediaViewMode === MEDIA_VIEW_MODES.TABLE" />
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODES } from "@/store/enums/EnumTypes";
import MediaRecentGrid from "@/components/media/grid/MediaRecentGrid";
import MediaRecentTable from "@/components/media/table/MediaRecentTable";

export default {
  name: "MediaRecent",
  data() {
    return { MEDIA_VIEW_MODES };
  },
  components: { MediaRecentTable, MediaRecentGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>
