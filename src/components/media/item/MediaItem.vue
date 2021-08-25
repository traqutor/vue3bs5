<template>
  <figure
    class="image-figure mb-1 alert alert-wait p-0"
    :class="getItemClass"
    @click="onItemClick"
  >
    <div class="image-figure-wrap">
      <div class="image-figure-inner">
        <PhotoItem :item="item" v-if="item.blobType == MEDIA_TYPES.PHOTO" />

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
  </figure>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AudioListItem from "@/components/media/item/AudioListItem";
import DocListItem from "@/components/media/item/DocListItem";
import PhotoItem from "@/components/media/item/PhotoItem";
import NoteItem from "@/components/media/item/NoteItem";
import VideoItem from "@/components/media/item/VideoItem";
import MediaListItemDropDown from "@/components/media/item/MediaListItemDropDown";
import { MEDIA_TYPES, Mutations } from "@/store/enums/EnumTypes";
import MediaItemSelectToggle from "@/components/media/item/MediaItemSelectToggle";

export default {
  props: {
    item: null,
    isSelect: null,
    isDropDownMenu: null,
  },
  setup(props) {
    const store = useStore();
    const onItemClick = () => {
      if (props.isSelect) {
        store.commit(Mutations.toggleMediaSelectedItem, props.item);
      }
    };

    const getItemClass = computed(() => {
      switch (props.item) {
        case MEDIA_TYPES.PHOTO:
          return "bg-media-type-5";
        case MEDIA_TYPES.VIDEO:
          return "bg-media-type-6";
        case MEDIA_TYPES.NOTE:
          return "bg-media-type-4";
        case MEDIA_TYPES.AUDIO:
        default:
          return "bg-media-type-2";
      }
    });

    return {
      onItemClick,
      getItemClass,
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
