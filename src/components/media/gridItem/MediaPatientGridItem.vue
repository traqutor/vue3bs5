<template>
  <div class="list-media-item">
    <div
      class="
        alert
        border-secondary-light
        bg-grey-light
        pt-2
        px-3
        on-hover
        hover-action-group hover-visible-group
        todo-tabpanel-open
      "
      @click="onPatientClick()"
    >
      <div class="media align-items-center">
        <figure class="avatar avatar-xm me-3 ml-n1 rounded" title="">
          <img v-if="patient.avatar" :src="patient.avatar" />
          <FeatherPatient v-else />
        </figure>

        <div class="media-body overflow-hidden">
          <div
            class="
              text-truncate
              font-weight-middle
              text-dark
              f-size-15
              is-filtered
            "
          >
            {{ patient.name }}
          </div>
          <div v-if="patient.gender" class="text-secondary f-size-13">
            {{ patient.gender }}
          </div>
        </div>

        <div
          class="
            position-absolute position-top-right
            mt-2
            me-4
            p-2
            image-inner-dropdown
            avatar-group-mask
            on-hover-visible
            bg-grey-light
          "
        >
          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.DOC"
            class="
              avatar-group avatar-group-slide avatar-slide-reverse
              btn
              bg-white
              border-0
              ml-1
              pe-0
            "
          >
            <figure class="avatar avatar-custom text-white bg-media-2">
              <FeatherFileText />
            </figure>
            <figure
              class="
                avatar avatar-custom avatar-text-block
                text-media-2
                alert alert-warning
                bg-white
                rounded-right-0
                border-right-0
                font-weight-middle
                px-3
                f-size-14
              "
            >
              <span class="ml-n1 me-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.PHOTO"
            class="
              avatar-group avatar-group-slide avatar-slide-reverse
              btn
              bg-white
              border-0
              ml-1
              pe-0
            "
          >
            <figure class="avatar avatar-custom text-white bg-media-4">
              <FeatherCamera />
            </figure>
            <figure
              class="
                avatar avatar-custom avatar-text-block
                text-media-4
                alert alert-wait
                bg-white
                rounded-right-0
                border-right-0
                font-weight-middle
                px-3
                f-size-14
              "
            >
              <span class="ml-n1 me-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.VIDEO"
            class="
              avatar-group avatar-group-slide avatar-slide-reverse
              btn
              bg-white
              border-0
              ml-1
              pe-0
            "
          >
            <figure class="avatar avatar-custom text-white bg-media-5">
              <FeatherVideo />
            </figure>
            <figure
              class="
                avatar avatar-custom avatar-text-block
                text-media-5
                alert alert-success
                bg-white
                rounded-right-0
                border-right-0
                font-weight-middle
                px-3
                f-size-14
              "
            >
              <span class="ml-n1 me-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.AUDIO"
            class="
              avatar-group avatar-group-slide avatar-slide-reverse
              btn
              bg-white
              border-0
              ml-1
              pe-0
            "
          >
            <figure class="avatar avatar-custom text-white bg-media-1">
              <FeatherMic />
            </figure>
            <figure
              class="
                avatar avatar-custom avatar-text-block
                text-media-1
                alert alert-primary
                bg-white
                rounded-right-0
                border-right-0
                font-weight-middle
                px-3
                f-size-14
              "
            >
              <span class="ml-n1 me-3">4</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.NOTE"
            class="
              avatar-group avatar-group-slide avatar-slide-reverse
              btn
              bg-white
              border-0
              ml-1
              pe-0
            "
          >
            <figure class="avatar avatar-custom text-white bg-media-3">
              <FeatherEdit />
            </figure>
            <figure
              class="
                avatar avatar-custom avatar-text-block
                text-media-3
                alert alert-danger
                bg-white
                rounded-right-0
                border-right-0
                font-weight-middle
                px-3
                f-size-14
              "
            >
              <span class="ml-n1 me-3">11</span>
            </figure>
          </div>
        </div>

        <div class="btn-group btn-group-sm me-n3">
          <button
            class="
              btn
              border-0
              px-2
              shadow-none
              text-secondary text-dark-hover
              rounded
            "
            type="button"
            id="dropdownMediaPatientGridMenuid"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FeatherMoreVertical />
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>Details</li>
            <li>Share with</li>
          </ul>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-6">
          <div class="media align-items-center ml-2">
            <FeatherCalendar
              class="me-3 align-self-center f-icon-20 text-secondary"
            />
            <div class="media-body overflow-hidden">
              <div class="text-truncate text-secondary f-size-13">
                Date of Birth
              </div>
              <div class="text-truncate font-weight-middle">
                {{ patient.birthDate }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media align-items-center">
            <FeatherUserHash
              class="me-3 align-self-center f-icon-20 text-secondary"
            />
            <div class="media-body ml-n1 overflow-hidden">
              <div class="text-truncate text-secondary f-size-13">
                ID Number
              </div>
              <div class="text-truncate font-weight-middle">
                {{ patient.id }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  PATIENT_DRAWER_VIEW_MODES,
  MEDIA_TYPES,
} from "@/store/enums/EnumTypes";
import FeatherPatient from "@/icons/FeatherPatient";
import FeatherCalendar from "@/icons/FeatherCalendar";
import FeatherUserHash from "@/icons/FeatherUserHash";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherCamera from "@/icons/FeatherCamera";
import FeatherVideo from "@/icons/FeatherVideo";
import FeatherMic from "@/icons/FeatherMic";
import FeatherEdit from "@/icons/FeatherEdit";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";

export default {
  name: "MediaPatientGridItem",
  data() {
    return { MEDIA_TYPES, PATIENT_DRAWER_VIEW_MODES };
  },
  props: {
    patient: null,
    type: null,
    onPatient: { type: Function },
  },
  components: {
    FeatherMoreVertical,
    FeatherEdit,
    FeatherMic,
    FeatherVideo,
    FeatherCamera,
    FeatherFileText,
    FeatherUserHash,
    FeatherCalendar,
    FeatherPatient,
  },
  methods: {
    onPatientClick() {
      this.onPatient(this.patient);
    },
  },
};
</script>
