<template>
  <media-general-grid v-if="mediaViewMode === MEDIA_VIEW_MODES.GRID" />
  <media-general-table v-else-if="mediaViewMode === MEDIA_VIEW_MODES.TABLE" />
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODES } from "@/store/enums/EnumTypes";
import MediaGeneralGrid from "@/components/media/grid/MediaGeneralGrid";
import MediaGeneralTable from "@/components/media/table/MediaGeneralTable";

export default {
  name: "MediaGeneral",
  data() {
    return { MEDIA_VIEW_MODES };
  },
  components: { MediaGeneralTable, MediaGeneralGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>
