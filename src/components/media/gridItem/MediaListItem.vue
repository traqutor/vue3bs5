<template>
  <div
    class="list-media-item on-hover position-relative mb-4"
    v-if="item"
    @click="onItemClick($event)"
  >
    <PhotoListItem :item="item" v-if="item.blobType == MEDIA_TYPES.PHOTO" />

    <AudioListItem :item="item" v-if="item.blobType === MEDIA_TYPES.AUDIO" />

    <DocListItem :item="item" v-if="item.blobType === MEDIA_TYPES.DOC" />

    <VideoListItem :item="item" v-if="item.blobType === MEDIA_TYPES.VIDEO" />

    <NoteListItem :item="item" v-if="item.blobType === MEDIA_TYPES.NOTE" />

    <div class="media py-1">
      <div class="media-body overflow-hidden">
        <div class="text-truncate font-weight-middle">Examination result</div>
      </div>
    </div>

    <div class="d-flex f-size-12 text-secondary">
      <div
        class="text-nowrap on-hover"
        data-toggle="tooltip"
        title=""
        data-original-title="12:48 pm • Yesterday"
      >
        12:48 <small>am</small>
      </div>
    </div>
  </div>
</template>
<script>
import AudioListItem from "@/components/media/gridItem/AudioListItem";
import DocListItem from "@/components/media/gridItem/DocListItem";
import PhotoListItem from "@/components/media/gridItem/PhotoListItem";
import NoteListItem from "@/components/media/gridItem/NoteListItem";
import VideoListItem from "@/components/media/gridItem/VideoListItem";
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";

export default {
  name: "MediaListItem",
  data() {
    return {
      MEDIA_TYPES,
    };
  },
  props: {
    item: null,
  },
  methods: {
    onItemClick(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log("onItemClick");
    },
  },
  components: {
    NoteListItem,
    AudioListItem,
    DocListItem,
    PhotoListItem,
    VideoListItem,
  },
};
</script>
