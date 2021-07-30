<template>
  <button
    class="
      media-type-item
      btn-block
      alert
      bg-media-type-1
      pl-3
      pr-0
      py-2
      mx-0
      shadow-none
    "
    :class="getItemClass()"
    @click="onMediaTypeItem()"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div class="media align-items-center overflow-hidden">
        <figure
          class="avatar avatar-md avatar-custom text-white me-2"
          :class="getAvatarClass()"
        >
          <FeatherLayers v-if="item.type === MEDIA_TYPES.ALL" />
          <FeatherMic v-if="item.type === MEDIA_TYPES.AUDIO" />
          <FeatherCamera v-if="item.type === MEDIA_TYPES.PHOTO" />
          <FeatherPlay v-if="item.type === MEDIA_TYPES.VIDEO" />
          <FeatherFileText v-if="item.type === MEDIA_TYPES.DOC" />
          <FeatherEdit v-if="item.type === MEDIA_TYPES.NOTE" />
        </figure>
        <div class="media-body text-truncate font-weight-middle">
          {{ item.name }}
        </div>
      </div>

      <div class="btn-group btn-group-sm mx-1">
        <b-dropdown
          variant="link"
          size="sm"
          right
          toggle-class="text-decoration-none btn-sm f-icon-28 px-2"
          no-caret
        >
          <template #button-content>
            <b-icon icon="three-dots-vertical"></b-icon>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Second Action</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div class="d-flex align-items-center mt-1">
      <span class="f-size-15 font-weight-middle">{{ item.itemsCount }}</span
      >items
    </div>
  </button>
</template>
<script>
import FeatherLayers from "@/icons/FeatherLayers";
import FeatherMic from "@/icons/FeatherMic";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherEdit from "@/icons/FeatherEdit";
import FeatherCamera from "@/icons/FeatherCamera";
import FeatherPlay from "@/icons/FeatherPlay";
import {
  MEDIA_TYPES,
  MEDIA_NAV_TABS,
  Mutations,
} from "@/store/enums/EnumTypes";
import { mapGetters } from "vuex";
export default {
  name: "MediaTypeListItem",
  props: {
    item: null,
  },
  data() {
    return {
      MEDIA_TYPES,
      MEDIA_NAV_TABS,
    };
  },
  computed: {
    ...mapGetters({
      navTabSelected: "getMediaNavTabSelected",
      mediaTypeSelected: "getMediaTypeSelected",
    }),
  },
  methods: {
    onMediaTypeItem() {
      if (this.item.type !== MEDIA_TYPES.ALL) {
        if (this.navTabSelected === MEDIA_NAV_TABS.RECENT) {
          console.log(this.navTabSelected);
          this.$store.commit(
            Mutations.setMediaNavTabSelected,
            MEDIA_NAV_TABS.GENERAL
          );
        }
      }
      this.$store.commit(Mutations.setMediaTypeSelected, this.item);
    },
    getItemClass() {
      if (this.item.type === this.mediaTypeSelected.type) {
        switch (this.item.type) {
          case MEDIA_TYPES.AUDIO:
            return "alert-primary bg-media-type-2 active";
          case MEDIA_TYPES.PHOTO:
            return "alert-wait bg-media-type-5 active";
          case MEDIA_TYPES.VIDEO:
            return "alert-success bg-media-type-6 active";
          case MEDIA_TYPES.DOC:
            return "alert-warning bg-media-type-3 active";
          case MEDIA_TYPES.NOTE:
            return "alert-danger bg-media-type-4 active";
          default:
            return "alert-secondary bg-media-type-1 active";
        }
      }
    },
    getAvatarClass() {
      switch (this.item.type) {
        case MEDIA_TYPES.AUDIO:
          return "bg-media-1";
        case MEDIA_TYPES.PHOTO:
          return "bg-media-4";
        case MEDIA_TYPES.VIDEO:
          return "bg-media-5";
        case MEDIA_TYPES.DOC:
          return "bg-media-2";
        case MEDIA_TYPES.NOTE:
          return "bg-media-3";
        default:
          return "bg-secondary-light";
      }
    },
  },
  components: {
    FeatherLayers,
    FeatherMic,
    FeatherFileText,
    FeatherEdit,
    FeatherCamera,
    FeatherPlay,
  },
};
</script>
