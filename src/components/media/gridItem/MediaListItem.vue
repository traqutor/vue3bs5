<template>
  <div
    class="list-media-item on-hover position-relative mb-4"
    @click="onItemClick($event)"
  >
    <AudioListItem :item="item" v-if="item && item.type === MEDIA_TYPE.AUDIO" />

    <DocListItem :item="item" v-if="item && item.type === MEDIA_TYPE.DOC" />

    <PhotoListItem :item="item" v-if="item && item.type === MEDIA_TYPE.PHOTO" />

    <VideoListItem :item="item" v-if="item && item.type === MEDIA_TYPE.VIDEO" />

    <NoteListItem :item="item" v-if="item && item.type === MEDIA_TYPE.NOTE" />

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
import AudioListItem from "@/views/content/media/gridItem/AudioListItem";
import DocListItem from "@/views/content/media/gridItem/DocListItem";
import PhotoListItem from "@/views/content/media/gridItem/PhotoListItem";
import NoteListItem from "@/views/content/media/gridItem/NoteListItem";
import VideoListItem from "@/views/content/media/gridItem/VideoListItem";
import { MEDIA_TYPE } from "@/store/modules/media";

export default {
  name: "MediaListItem",
  data() {
    return {
      MEDIA_TYPE
    };
  },
  props: {
    item: null
  },
  methods: {
    onItemClick(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log("onItemClick");
    }
  },
  components: {
    NoteListItem,
    AudioListItem,
    DocListItem,
    PhotoListItem,
    VideoListItem
  }
};
</script>
