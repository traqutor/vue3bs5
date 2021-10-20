<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_DRAWER_VIEW_MODES, Mutations } from "@/store/enums/EnumTypes";
export default {
  name: "MediaPatientsGrid",
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
