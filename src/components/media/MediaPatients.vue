<template>
  <media-patients-grid v-if="mediaViewMode === MEDIA_VIEW_MODE.GRID" />
  <media-patients-list v-else-if="mediaViewMode === MEDIA_VIEW_MODE.TABLE" />
</template>
<script>
import MediaPatientsGrid from "@/views/content/media/grid/MediaPatientsGrid";
import { mapGetters } from "vuex";
import { MEDIA_VIEW_MODE } from "@/store/modules/media";
import MediaPatientsList from "@/views/content/media/list/MediaPatientList";

export default {
  name: "MediaPatients",
  data() {
    return { MEDIA_VIEW_MODE };
  },
  components: { MediaPatientsList, MediaPatientsGrid },
  computed: {
    ...mapGetters({
      mediaViewMode: "getMediaViewMode"
    })
  }
};
</script>
