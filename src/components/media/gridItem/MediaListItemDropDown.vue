<template>
  <div
    class="
      dropdown
      position-absolute position-top-right
      m-2
      image-inner-dropdown
      avatar-group-mask
    "
  >
    <div
      class="avatar-group avatar-group-slide btn bg-white border-0"
      id="dropdownMediaListItemMenuButtonId"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <figure class="avatar avatar-custom text-white" :class="getClass()">
        <FeatherPlay v-if="item && item.type === MEDIA_TYPES.VIDEO" />
        <FeatherMic v-if="item && item.type === MEDIA_TYPES.AUDIO" />
        <FeatherEdit v-if="item && item.type === MEDIA_TYPES.NOTE" />
        <FeatherCamera v-if="item && item.type === MEDIA_TYPES.PHOTO" />
        <FeatherFileText v-if="item && item.type === MEDIA_TYPES.DOC" />
      </figure>
      <figure class="avatar avatar-custom text-media-2">
        <FeatherMoreVertical class="f-icon-18" />
      </figure>
    </div>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#">Attach to patient</a></li>
      <li><a class="dropdown-item" href="#">Share in conversation</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Delete</a></li>
    </ul>
  </div>
</template>
<script>
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import FeatherPlay from "@/icons/FeatherPlay";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherMic from "@/icons/FeatherMic";
import FeatherEdit from "@/icons/FeatherEdit";
import FeatherCamera from "@/icons/FeatherCamera";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";

export default {
  name: "MediaListItemDropDown",
  data() {
    return {
      MEDIA_TYPES,
    };
  },
  methods: {
    getClass() {
      if (this.item) {
        switch (this.item.type) {
          case this.MEDIA_TYPES.VIDEO:
            return "bg-media-5";
          case this.MEDIA_TYPES.PHOTO:
            return "bg-media-4";
          case this.MEDIA_TYPES.NOTE:
            return "bg-media-3";
          case this.MEDIA_TYPES.DOC:
            return "bg-media-2";
          case this.MEDIA_TYPES.AUDIO:
            return "bg-media-1";
          default:
            return "";
        }
      } else {
        return "";
      }
    },
  },
  props: {
    item: null,
  },
  components: {
    FeatherMoreVertical,
    FeatherCamera,
    FeatherEdit,
    FeatherMic,
    FeatherFileText,
    FeatherPlay,
  },
};
</script>
