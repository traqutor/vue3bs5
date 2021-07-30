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
        <media-patient-grid-item
          v-for="patient of patients"
          :patient="patient"
          :key="patient.id"
          :on-patient="onPatient"
          :type="mediaType.type"
        />
      </div>

      <div class="no-filter-results is-hidden py-3 h6">No results</div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_DRAWER_VIEW_MODES, Mutations } from "@/store/enums/EnumTypes";
import MediaPatientGridItem from "@/components/media/gridItem/MediaPatientGridItem";
export default {
  name: "MediaPatientsGrid",
  components: { MediaPatientGridItem },
  data() {
    return { MEDIA_DRAWER_VIEW_MODES };
  },
  methods: {
    onPatient(patient) {
      this.$store.commit(Mutations.setMediaPatientSelected, patient);
      this.$store.commit(
        Mutations.setMediaDrawerViewMode,
        this.MEDIA_DRAWER_VIEW_MODES.PATIENT
      );
    },
  },
  computed: {
    ...mapGetters({
      patients: "getPatients",
      itemSizeClass: "getMediaPatientItemClass",
      mediaType: "getMediaTypeSelected",
    }),
  },
};
</script>
