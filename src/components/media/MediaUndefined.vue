<template>
  <media-undefined-grid v-if="mediaViewMode === MEDIA_VIEW_MODE.GRID" />
  <media-undefined-list v-else-if="mediaViewMode === MEDIA_VIEW_MODE.TABLE" />
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODE } from "@/store/modules/media";
import MediaUndefinedGrid from "@/views/content/media/grid/MediaUndefinedGrid";
import MediaUndefinedList from "@/views/content/media/list/MediaUndefinedList";
export default {
  name: "MediaUndefined",
  data() {
    return { MEDIA_VIEW_MODE };
  },
  components: { MediaUndefinedList, MediaUndefinedGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode"
    })
  }
};
</script>
