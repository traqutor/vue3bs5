<template>
  <div class="media-grid-figure">
    <PhotoItem :item="item" v-if="item.blobType === MEDIA_TYPES.PHOTO" />

    <AudioListItem :item="item" v-if="item.blobType === MEDIA_TYPES.AUDIO" />

    <DocListItem :item="item" v-if="item.blobType === MEDIA_TYPES.DOC" />

    <VideoItem :item="item" v-if="item.blobType === MEDIA_TYPES.VIDEO" />

    <NoteItem :item="item" v-if="item.blobType === MEDIA_TYPES.NOTE" />

    <MediaListItemDropDown v-if="isDropDownMenu" :item="item" />

    <MediaItemSelectToggle v-if="isSelect" :item="item" />
  </div>
</template>
<script>
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import AudioListItem from "@/components/media/item/AudioListItem";
import DocListItem from "@/components/media/item/DocListItem";
import PhotoItem from "@/components/media/item/PhotoItem";
import NoteItem from "@/components/media/item/NoteItem";
import VideoItem from "@/components/media/item/VideoItem";
import MediaListItemDropDown from "@/components/media/gridItem/MediaGridItemDropDown";
import MediaItemSelectToggle from "@/components/media/item/MediaItemSelectToggle";

export default {
  props: ["item", "isSelect", "isDropDownMenu"],
  setup() {
    return {
      MEDIA_TYPES,
    };
  },

  components: {
    MediaItemSelectToggle,
    MediaListItemDropDown,
    NoteItem,
    AudioListItem,
    DocListItem,
    PhotoItem,
    VideoItem,
  },
};
</script>
