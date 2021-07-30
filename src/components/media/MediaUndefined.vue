<template>
  <media-undefined-grid v-if="mediaViewMode === MEDIA_VIEW_MODES.GRID" />
  <media-undefined-list v-else-if="mediaViewMode === MEDIA_VIEW_MODES.TABLE" />
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODES } from "@/store/enums/EnumTypes";
import MediaUndefinedGrid from "@/components/media/grid/MediaUndefinedGrid";
import MediaUndefinedList from "@/components/media/list/MediaUndefinedList";
export default {
  name: "MediaUndefined",
  data() {
    return { MEDIA_VIEW_MODES };
  },
  components: { MediaUndefinedList, MediaUndefinedGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>
