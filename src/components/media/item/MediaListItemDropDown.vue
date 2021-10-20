<template>
  <div class="dropdown position-absolute position-top-right m-2">
    <div
      class="avatar-group avatar-group-slide btn bg-white border-0"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <figure class="avatar avatar-custom text-media-2">
        <FeatherMoreVertical class="f-icon-18" />
      </figure>
    </div>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item">Attach to patient</a></li>
      <li><a class="dropdown-item">Share in conversation</a></li>
      <li><a class="dropdown-item">Delete</a></li>
    </ul>
  </div>
</template>
<script>
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
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
        switch (this.item.blobType) {
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
  },
};
</script>
<style>
.media-more-drop-menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
}
</style>
