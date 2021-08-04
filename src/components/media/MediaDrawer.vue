<template>
  <div
    class="
      d-flex
      flex-column flex-slide-col flex-slide-col-right flex-slide-col-absolute
      bg-white
      shadow
      f-col-xl
    "
    :class="mediaDrawerViewMode !== MEDIA_DRAWER_VIEW_MODES.CLOSED && 'show'"
  >
    <div
      v-if="patient"
      class="
        flex-fill
        ps-4
        d-flex
        flex-column
        steps-section
        border-secondary-light border-left
      "
    >
      <div class="d-flex flex-column h-100 w-100 position-absolute">
        <div class="mb-2 d-flex align-items-center pe-4">
          <figure class="avatar avatar-xm rounded me-3">
            <img v-if="patient.avatar" :src="patient.avatar" />
            <FeatherPatient v-else />
          </figure>

          <div class="overflow-hidden me-auto">
            <div class="text-truncate f-size-16 font-weight-middle">
              {{ patient.name }}
            </div>
            <div class="text-truncate f-size-13 text-secondary">
              {{ patient.birthDate }} • {{ patient.id }}
            </div>
          </div>

          <div class="d-flex align-items-center ms-auto">
            <div
              v-if="patient.gender"
              class="badge badge-info font-weight-normal f-size-12"
            >
              {{ patient.gender }}
            </div>
          </div>

          <div class="d-flex align-items-center">
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
            :active="tabActive === MEDIA_TYPES.AUDIO"
            @click="onTab(MEDIA_TYPES.AUDIO)"
            >Audio
          </b-nav-item>

          <b-nav-item
            :active="tabActive === MEDIA_TYPES.PHOTO"
            @click="onTab(MEDIA_TYPES.PHOTO)"
            >Photos<span class="badge badge-pill ms-2 badge-primary"
              >12</span
            ></b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPES.VIDEO"
            @click="onTab(MEDIA_TYPES.VIDEO)"
            >Videos
            <span class="badge badge-pill ms-2 badge-primary"
              >3</span
            ></b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPES.NOTE"
            @click="onTab(MEDIA_TYPES.NOTE)"
            >Notes</b-nav-item
          >

          <b-nav-item
            :active="tabActive === MEDIA_TYPES.DOC"
            @click="onTab(MEDIA_TYPES.DOC)"
            >Documents</b-nav-item
          >
        </b-nav>

        <div
          v-if="tabActive === MEDIA_TYPES.AUDIO"
          class="
            d-flex
            flex-wrap
            list-media-group list-group-md
            mt-3
            table-todo-list
            select-action-group
            pe-4
          "
        >
          <MediaGridItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="i"
            :item="{ type: MEDIA_TYPES.AUDIO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPES.PHOTO"
          class="
            d-flex
            flex-wrap
            list-media-group list-group-md
            mt-3
            table-todo-list
            select-action-group
            pe-4
          "
        >
          <MediaGridItem
            v-for="i in [1, 2, 3, 4]"
            :key="i"
            :item="{ type: MEDIA_TYPES.PHOTO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPES.VIDEO"
          class="
            d-flex
            flex-wrap
            list-media-group list-group-md
            mt-3
            table-todo-list
            select-action-group
            pe-4
          "
        >
          <MediaGridItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]"
            :key="i"
            :item="{ type: MEDIA_TYPES.VIDEO }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPES.NOTE"
          class="
            d-flex
            flex-wrap
            list-media-group list-group-md
            mt-3
            table-todo-list
            select-action-group
            pe-4
          "
        >
          <MediaGridItem
            v-for="i in [1, 2, 3]"
            :key="i"
            :item="{ type: MEDIA_TYPES.NOTE }"
          />
        </div>

        <div
          v-if="tabActive === MEDIA_TYPES.DOC"
          class="
            d-flex
            flex-wrap
            list-media-group list-group-md
            mt-3
            table-todo-list
            select-action-group
            pe-4
          "
        >
          <MediaGridItem
            v-for="i in [1, 2, 3, 4, 5, 6, 7]"
            :key="i"
            :item="{ type: MEDIA_TYPES.DOC }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  MEDIA_TYPES,
  MEDIA_DRAWER_VIEW_MODES,
  Mutations,
} from "@/store/enums/EnumTypes";
import FeatherPatient from "@/icons/FeatherPatient";
import MediaGridItem from "@/components/media/gridItem/MediaGridItem";

export default {
  name: "MediaDrawer",
  components: { MediaGridItem, FeatherPatient },
  data() {
    return {
      MEDIA_TYPES,
      MEDIA_DRAWER_VIEW_MODES,
      tabActive: MEDIA_TYPES.AUDIO,
    };
  },
  methods: {
    onClose() {
      this.$store.commit(
        Mutations.setMediaDrawerViewMode,
        this.MEDIA_DRAWER_VIEW_MODES.CLOSED
      );
    },
    onTab(tab) {
      this.tabActive = tab;
    },
  },
  computed: {
    ...mapGetters({
      patient: "getMediaPatientSelected",
      mediaDrawerViewMode: "getMediaDrawerViewMode",
      mediaType: "getMediaTypeSelected",
    }),
  },
  watch: {
    mediaType(mediaType) {
      this.tabActive =
        mediaType.type !== MEDIA_TYPES.ALL ? mediaType.type : this.tabActive;
    },
  },
};
</script>
