<template>
  <div class="list-media-item">
    <div
      class="alert border-secondary-light bg-grey-light pt-2 px-3 on-hover hover-action-group hover-visible-group todo-tabpanel-open"
      @click="onPatientClick()"
    >
      <div class="media align-items-center">
        <figure class="avatar avatar-xm mr-3 ml-n1 rounded" title="">
          <img v-if="patient.avatar" :src="patient.avatar" />
          <FeatherPatient v-else />
        </figure>

        <div class="media-body overflow-hidden">
          <div
            class="text-truncate font-weight-middle text-dark f-size-15 is-filtered"
          >
            {{ patient.name }}
          </div>
          <div v-if="patient.gender" class="text-secondary f-size-13">
            {{ patient.gender }}
          </div>
        </div>

        <div
          class="position-absolute position-top-right mt-2 mr-4 p-2 image-inner-dropdown avatar-group-mask on-hover-visible bg-grey-light"
        >
          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.DOC"
            class="avatar-group avatar-group-slide avatar-slide-reverse btn bg-white border-0 ml-1 pr-0"
          >
            <figure class="avatar avatar-custom text-white bg-media-2">
              <FeatherFileText />
            </figure>
            <figure
              class="avatar avatar-custom avatar-text-block text-media-2 alert alert-warning bg-white rounded-right-0 border-right-0 font-weight-middle px-3 f-size-14"
            >
              <span class="ml-n1 mr-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.PHOTO"
            class="avatar-group avatar-group-slide avatar-slide-reverse btn bg-white border-0 ml-1 pr-0"
          >
            <figure class="avatar avatar-custom text-white bg-media-4">
              <FeatherCamera />
            </figure>
            <figure
              class="avatar avatar-custom avatar-text-block text-media-4 alert alert-wait bg-white rounded-right-0 border-right-0 font-weight-middle px-3 f-size-14"
            >
              <span class="ml-n1 mr-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.VIDEO"
            class="avatar-group avatar-group-slide avatar-slide-reverse btn bg-white border-0 ml-1 pr-0"
          >
            <figure class="avatar avatar-custom text-white bg-media-5">
              <FeatherVideo />
            </figure>
            <figure
              class="avatar avatar-custom avatar-text-block text-media-5 alert alert-success bg-white rounded-right-0 border-right-0 font-weight-middle px-3 f-size-14"
            >
              <span class="ml-n1 mr-3">2</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.AUDIO"
            class="avatar-group avatar-group-slide avatar-slide-reverse btn bg-white border-0 ml-1 pr-0"
          >
            <figure class="avatar avatar-custom text-white bg-media-1">
              <FeatherMic />
            </figure>
            <figure
              class="avatar avatar-custom avatar-text-block text-media-1 alert alert-primary bg-white rounded-right-0 border-right-0 font-weight-middle px-3 f-size-14"
            >
              <span class="ml-n1 mr-3">4</span>
            </figure>
          </div>

          <div
            v-if="type === MEDIA_TYPE.ALL || type === MEDIA_TYPE.NOTE"
            class="avatar-group avatar-group-slide avatar-slide-reverse btn bg-white border-0 ml-1 pr-0"
          >
            <figure class="avatar avatar-custom text-white bg-media-3">
              <FeatherEdit />
            </figure>
            <figure
              class="avatar avatar-custom avatar-text-block text-media-3 alert alert-danger bg-white rounded-right-0 border-right-0 font-weight-middle px-3 f-size-14"
            >
              <span class="ml-n1 mr-3">11</span>
            </figure>
          </div>

        </div>

        <div class="btn-group btn-group-sm mr-n3">
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none shadow-none text-secondary text-dark-hover"
            no-caret
          >
            <template #button-content>
              <b-icon icon="three-dots-vertical" />
            </template>
            <b-dropdown-item>Details</b-dropdown-item>
            <b-dropdown-item>Share with</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-6">
          <div class="media align-items-center ml-2">
            <FeatherCalendar
              class="mr-3 align-self-center f-icon-20 text-secondary"
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
              class="mr-3 align-self-center f-icon-20 text-secondary"
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
import { PATIENT_DRAWER_VIEW_MODE } from "@/store/modules/patients";
import FeatherPatient from "@/views/content/icons/FeatherPatient";
import FeatherCalendar from "@/views/content/icons/FeatherCalendar";
import FeatherUserHash from "@/views/content/icons/FeatherUserHash";
import { MEDIA_TYPE } from "@/store/modules/media";
import FeatherFileText from "@/views/content/icons/FeatherFileText";
import FeatherCamera from "@/views/content/icons/FeatherCamera";
import FeatherVideo from "@/views/content/icons/FeatherVideo";
import FeatherMic from "@/views/content/icons/FeatherMic";
import FeatherEdit from "@/views/content/icons/FeatherEdit";

export default {
  name: "MediaPatientGridItem",
  data() {
    return { MEDIA_TYPE, PATIENT_DRAWER_VIEW_MODE };
  },
  props: {
    patient: null,
    type: null,
    onPatient: { type: Function }
  },
  components: {
    FeatherEdit,
    FeatherMic,
    FeatherVideo,
    FeatherCamera,
    FeatherFileText,
    FeatherUserHash,
    FeatherCalendar,
    FeatherPatient
  },
  methods: {
    onPatientClick() {
      this.onPatient(this.patient);
    }
  }
};
</script>
