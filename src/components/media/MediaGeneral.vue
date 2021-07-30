<template>
  <media-general-grid v-if="mediaViewMode === MEDIA_VIEW_MODE.GRID" />
  <media-general-list v-else-if="mediaViewMode === MEDIA_VIEW_MODE.TABLE" />
</template>
<script>
import MediaGeneralGrid from "@/views/content/media/grid/MediaGeneralGrid";
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODE } from "@/store/modules/media";
import MediaGeneralList from "@/views/content/media/list/MediaGeneralList";
export default {
  name: "MediaGeneral",
  data() {
    return { MEDIA_VIEW_MODE };
  },
  components: { MediaGeneralList, MediaGeneralGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode"
    })
  }
};
</script>
