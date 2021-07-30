<template>
  <media-patients-grid v-if="mediaViewMode === MEDIA_VIEW_MODES.GRID" />
  <media-patients-list v-else-if="mediaViewMode === MEDIA_VIEW_MODES.TABLE" />
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODES } from "@/store/enums/EnumTypes";
import MediaPatientsGrid from "@/components/media/grid/MediaPatientsGrid";
import MediaPatientsList from "@/components/media/list/MediaPatientList";

export default {
  name: "MediaPatients",
  data() {
    return { MEDIA_VIEW_MODES };
  },
  components: { MediaPatientsList, MediaPatientsGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>
