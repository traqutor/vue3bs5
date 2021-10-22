<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <table
        class="
          table
          table-hover
          table-head-sticky
          table-self-middle
          table-collapse-list
          table-todo-list
          pe-3
        "
      >
        <thead>
          <tr class="bg-white">
            <th scope="col" class="pt-1 text-nowrap border-0">Patient</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Date of Birth</th>
            <th scope="col" class="pt-1 text-nowrap border-0">ID Number</th>
            <th scope="col" class="pt-1 text-nowrap border-0">
              Admitting Specialty
            </th>
            <th scope="col" class="pt-1 text-nowrap border-0">Gender</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Media</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="patient of patients"
            :key="patient.id"
            @click="onPatient(patient)"
          >
            <td>
              <div class="media align-items-center on-hover">
                <figure class="avatar avatar-lg me-3 rounded">
                  <img v-if="patient.avatar" :src="patient.avatar" />
                  <FeatherPatient v-else />
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    {{ patient.name }}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div
                class="text-decoration-none text-nowrap on-hover"
                data-toggle="tooltip"
                title=""
                data-original-title="November 26, 1976"
              >
                {{ patient.birthDate }}
              </div>
            </td>
            <td>{{ patient.id }}</td>
            <td class="text-nowrap">Cardiology</td>
            <td>
              <div v-if="patient.gender" class="font-weight-normal f-size-12">
                {{ patient.gender }}
              </div>
            </td>
            <td>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div
                    v-if="
                      mediaType.type === MEDIA_TYPES.ALL ||
                      mediaType.type === MEDIA_TYPES.DOC
                    "
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-warning
                      bg-media-type-3
                      on-hover
                      p-0
                      pl-3
                      mb-0
                    "
                  >
                    <div class="font-weight-middle f-size-15 ml-n1">3</div>
                    <figure
                      class="avatar avatar-custom text-white bg-media-2 ml-2"
                    >
                      <FeatherFileText />
                    </figure>
                  </div>

                  <div
                    v-if="
                      mediaType.type === MEDIA_TYPES.ALL ||
                      mediaType.type === MEDIA_TYPES.PHOTO
                    "
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-wait
                      bg-media-type-5
                      on-hover
                      p-0
                      pl-3
                      mb-0
                    "
                  >
                    <div class="font-weight-middle f-size-15 ml-n1">3</div>
                    <figure
                      class="avatar avatar-custom text-white bg-media-4 ml-2"
                    >
                      <FeatherCamera />
                    </figure>
                  </div>

                  <div
                    v-if="
                      mediaType.type === MEDIA_TYPES.ALL ||
                      mediaType.type === MEDIA_TYPES.VIDEO
                    "
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-success
                      bg-media-type-6
                      on-hover
                      p-0
                      pl-3
                      mb-0
                    "
                  >
                    <div class="font-weight-middle f-size-15 ml-n1">1</div>
                    <figure
                      class="avatar avatar-custom text-white bg-media-5 ml-2"
                    >
                      <FeatherPlay />
                    </figure>
                  </div>

                  <div
                    v-if="
                      mediaType.type === MEDIA_TYPES.ALL ||
                      mediaType.type === MEDIA_TYPES.AUDIO
                    "
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-primary
                      bg-media-type-2
                      on-hover
                      p-0
                      pl-3
                      mb-0
                    "
                  >
                    <div class="font-weight-middle f-size-15 ml-n1">14</div>
                    <figure
                      class="avatar avatar-custom text-white bg-media-1 ml-2"
                    >
                      <FeatherMic />
                    </figure>
                  </div>

                  <div
                    v-if="
                      mediaType.type === MEDIA_TYPES.ALL ||
                      mediaType.type === MEDIA_TYPES.NOTE
                    "
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-danger
                      bg-media-type-4
                      on-hover
                      p-0
                      pl-3
                      mb-0
                    "
                  >
                    <div class="font-weight-middle f-size-15 ml-n1">11</div>
                    <figure
                      class="avatar avatar-custom text-white bg-media-3 ml-2"
                    >
                      <FeatherEdit />
                    </figure>
                  </div>
                </div>

                <div class="btn-group btn-group-sm me-n3">
                  <button
                    class="
                      btn
                      text-secondary text-dark-hover
                      border-0
                      p-0
                      shadow-none
                      rounded
                    "
                  >
                    <FeatherMoreVertical class="f-icon-20" />
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li><a class="dropdown-item" href="#">Details</a></li>
                    <li><a class="dropdown-item" href="#">Share with</a></li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import FeatherPatient from "@/icons/FeatherPatient";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherPlay from "@/icons/FeatherPlay";
import FeatherCamera from "@/icons/FeatherCamera";
import FeatherMic from "@/icons/FeatherMic";
import FeatherEdit from "@/icons/FeatherEdit";
import {
  MEDIA_DRAWER_VIEW_MODES,
  MEDIA_TYPES,
  Mutations,
} from "@/store/enums/EnumTypes";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
export default {
  name: "MediaPatientsList",
  data() {
    return { MEDIA_TYPES, MEDIA_DRAWER_VIEW_MODES };
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
      mediaType: "getMediaTypeSelected",
    }),
  },
  components: {
    FeatherMoreVertical,
    FeatherEdit,
    FeatherMic,
    FeatherCamera,
    FeatherPlay,
    FeatherFileText,
    FeatherPatient,
  },
};
</script>
