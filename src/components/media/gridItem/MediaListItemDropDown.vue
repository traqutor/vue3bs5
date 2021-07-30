<template>
  <div
    class="dropdown position-absolute position-top-right m-2 image-inner-dropdown avatar-group-mask"
  >
    <b-dropdown
      variant="link"
      size="sm"
      right
      toggle-class="text-decoration-none avatar-group avatar-group-slide btn bg-white border-0"
      no-caret
    >
      <template #button-content>
        <figure class="avatar avatar-custom text-white" :class="getClass()">
          <FeatherPlay v-if="item && item.type === MEDIA_TYPE.VIDEO" />
          <FeatherMic v-if="item && item.type === MEDIA_TYPE.AUDIO" />
          <FeatherEdit v-if="item && item.type === MEDIA_TYPE.NOTE" />
          <FeatherCamera v-if="item && item.type === MEDIA_TYPE.PHOTO" />
          <FeatherFileText v-if="item && item.type === MEDIA_TYPE.DOC" />
        </figure>
        <figure class="avatar avatar-custom text-media-2">
          <b-icon icon="three-dots-vertical" class=" f-icon-18" />
        </figure>
      </template>
      <b-dropdown-item href="#">Attach to patient</b-dropdown-item>
      <b-dropdown-item href="#">Share in conversation</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item href="#">Delete</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
import { MEDIA_TYPE } from "@/store/modules/media";
import {
  FeatherPlay,
  FeatherFileText,
  FeatherMic,
  FeatherEdit,
  FeatherCamera
} from "@/views/content/icons";
export default {
  name: "MediaListItemDropDown",
  data() {
    return {
      MEDIA_TYPE
    };
  },
  methods: {
    getClass() {
      if (this.item) {
        switch (this.item.type) {
          case this.MEDIA_TYPE.VIDEO:
            return "bg-media-5";
          case this.MEDIA_TYPE.PHOTO:
            return "bg-media-4";
          case this.MEDIA_TYPE.NOTE:
            return "bg-media-3";
          case this.MEDIA_TYPE.DOC:
            return "bg-media-2";
          case this.MEDIA_TYPE.AUDIO:
            return "bg-media-1";
          default:
            return "";
        }
      } else {
        return "";
      }
    }
  },
  props: {
    item: null
  },
  components: { FeatherCamera, FeatherEdit, FeatherMic, FeatherFileText, FeatherPlay }
};
</script>
