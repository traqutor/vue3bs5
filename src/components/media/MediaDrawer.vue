<template>
  <div
    class="d-flex flex-column flex-slide-col flex-slide-col-right flex-slide-col-absolute bg-white shadow f-col-xl"
    :class="mediaDrawerViewMode !== MEDIA_DRAWER_VIEW_MODE.CLOSED && 'show'"
  >
    <div
      v-if="patient"
      class="flex-fill pl-4 d-flex flex-column steps-section border-secondary-light border-left"
    >
      <div class="d-flex flex-column h-100 w-100 position-absolute">
        <div class="mb-2 d-flex align-items-center pr-4">
          <figure class="avatar avatar-xm rounded mr-3">
            <img v-if="patient.avatar" :src="patient.avatar" />
            <FeatherPatient v-else />
          </figure>

          <div class="overflow-hidden mr-auto">
            <div class="text-truncate f-size-16 font-weight-middle">
              {{ patient.name }}
            </div>
            <div class="text-truncate f-size-13 text-secondary">
              {{ patient.birthDate }} • {{ patient.id }}
            </div>
          </div>

          <div class="d-flex align-items-center ml-auto">
            <div
              v-if="patient.gender"
              class="badge badge-info font-weight-normal f-size-12"
            >
              {{ patient.gender }}
            </div>
          </div>

          <div class="d-flex align-items-center ">
            <b-dropdown
              variant="link"
              right
              toggle-class="text-decoration-none shadow-none text-secondary text-dark-hover"
              no-caret
            >
              <template #button-content>
                <b-icon icon="three-dots-vertical" />
              </template>
              <b-dropdown-item>Details</b-dropdown-item>
              <b-dropdown-item>Share with</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item>Add note</b-dropdown-item>
              <b-dropdown-item>Add audio record</b-dropdown-item>
            </b-dropdown>
            <b-button class="btn-sm" @click="onClose()">
              <b-icon icon="x"></b-icon>
            </b-button>
          </div>
        </div>

        <b-nav class="side-nav-line border-bottom border-secondary-light">
          <b-nav-item
            :active="tabActive === MEDIA_TYPE.AUDIO"
            @click="onTab(MEDIA_TYPE.AUDIO)"
            >Audio
          </b-nav-item>

          <b-nav-item
            :active="tabActive === MEDIA_TYPE.PHOTO"
            @click="onTab(MEDIA_TYPE.PHOTO)"
            >Photos<span class="badge badge-pill ml-2 badge-primary"
              >12</span
            ></b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPE.VIDEO"
            @click="onTab(MEDIA_TYPE.VIDEO)"
            >Videos
            <span class="badge badge-pill ml-2 badge-primary"
              >3</span
            ></b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPE.NOTE"
            @click="onTab(MEDIA_TYPE.NOTE)"
            >Notes</b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPE.DOC"
            @click="onTab(MEDIA_TYPE.DOC)"
            >Documents</b-nav-item
          >
        </b-nav>

        <div
          v-if="tabActive === MEDIA_TYPE.AUDIO"
          class="d-flex flex-wrap list-media-group list-group-md mt-3 table-todo-list select-action-group pr-4"
        >
          <MediaListItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="i"
            :item="{ type: MEDIA_TYPE.AUDIO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPE.PHOTO"
          class="d-flex flex-wrap list-media-group list-group-md mt-3 table-todo-list select-action-group pr-4"
        >
          <MediaListItem
            v-for="i in [1, 2, 3, 4]"
            :key="i"
            :item="{ type: MEDIA_TYPE.PHOTO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPE.VIDEO"
          class="d-flex flex-wrap list-media-group list-group-md mt-3 table-todo-list select-action-group pr-4"
        >
          <MediaListItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]"
            :key="i"
            :item="{ type: MEDIA_TYPE.VIDEO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPE.NOTE"
          class="d-flex flex-wrap list-media-group list-group-md mt-3 table-todo-list select-action-group pr-4"
        >
          <MediaListItem
            v-for="i in [1, 2, 3]"
            :key="i"
            :item="{ type: MEDIA_TYPE.NOTE }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPE.DOC"
          class="d-flex flex-wrap list-media-group list-group-md mt-3 table-todo-list select-action-group pr-4"
        >
          <MediaListItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7]"
            :key="i"
            :item="{ type: MEDIA_TYPE.DOC }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  MEDIA_TYPE,
  MEDIA_DRAWER_VIEW_MODE,
  SET_MEDIA_DRAWER_VIEW_MODE
} from "@/store/modules/media";
import FeatherPatient from "@/views/content/icons/FeatherPatient";
import MediaListItem from "@/views/content/media/gridItem/MediaListItem";

export default {
  name: "MediaDrawer",
  components: { MediaListItem, FeatherPatient },
  data() {
    return { MEDIA_TYPE, MEDIA_DRAWER_VIEW_MODE, tabActive: MEDIA_TYPE.AUDIO };
  },
  methods: {
    onClose() {
      this.$store.commit(
        SET_MEDIA_DRAWER_VIEW_MODE,
        this.MEDIA_DRAWER_VIEW_MODE.CLOSED
      );
    },
    onTab(tab) {
      this.tabActive = tab;
    }
  },
  computed: {
    ...mapGetters({
      patient: "getMediaPatientSelected",
      mediaDrawerViewMode: "getMediaDrawerViewMode",
      mediaType: "getMediaTypeSelected"
    })
  },
  watch: {
    mediaType(mediaType) {
      this.tabActive =
        mediaType.type !== MEDIA_TYPE.ALL ? mediaType.type : this.tabActive;
    }
  }
};
</script>
