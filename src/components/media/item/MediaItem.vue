<template>
  <div class="image-figure" @click="onItemClick">
    <div class="image-figure-wrap">
      <div class="image-figure-inner">

        <PhotoItem :item="item" v-if="item.blobType === 'Picture'" />

        <AudioListItem
          :item="item"
          v-if="item.blobType === MEDIA_TYPES.AUDIO"
        />

        <DocListItem :item="item" v-if="item.blobType === MEDIA_TYPES.DOC" />

        <VideoItem :item="item" v-if="item.blobType === MEDIA_TYPES.VIDEO" />

        <NoteItem :item="item" v-if="item.blobType === MEDIA_TYPES.NOTE" />

        <MediaListItemDropDown v-if="isDropDownMenu" :item="item" />

        <MediaItemSelectToggle v-if="isSelect" :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { MEDIA_TYPES, Mutations } from "@/store/enums/EnumTypes";
import AudioListItem from "@/components/media/item/AudioListItem";
import DocListItem from "@/components/media/item/DocListItem";
import PhotoItem from "@/components/media/item/PhotoItem";
import NoteItem from "@/components/media/item/NoteItem";
import VideoItem from "@/components/media/item/VideoItem";
import MediaListItemDropDown from "@/components/media/item/MediaListItemDropDown";
import MediaItemSelectToggle from "@/components/media/item/MediaItemSelectToggle";

export default {
  props: ["item", "isSelect", "isDropDownMenu"],
  setup(props) {
    const store = useStore();
    const onItemClick = () => {
      if (props.isSelect) {
        store.commit(Mutations.toggleMediaSelectedItem, props.item);
      }
    };

    return {
      onItemClick,
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
