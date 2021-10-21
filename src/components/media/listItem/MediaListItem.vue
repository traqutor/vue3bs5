<template>
  <tr @click="onShowMedia(item)">
    <td>
      <div class="d-flex align-items-center on-hover">
        <figure class="avatar avatar-md me-3 rounded overflow-hidden">
          <img :src="`data:image/png;base64,${item.dataBase64}`" alt="..." />
        </figure>
        <div class="media-body overflow-hidden">
          <div class="text-truncate">
            {{ item.name }}
          </div>
        </div>
      </div>
    </td>
    <td class="text-nowrap">{{ item.name.substr(-3) }}</td>
    <td class="text-nowrap">-</td>
    <td class="text-nowrap">{{ getCreatedAgo(item.created) }}</td>
  </tr>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { Actions, MEDIA_TYPES } from "@/store/enums/EnumTypes";

export default {
  name: "MediaListItem",
  props: ["item", "isSelect"],
  setup(props) {
    const store = useStore();

    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    const getCreatedAgo = () => moment(props.item.created).fromNow();

    const onShowMedia = () => {
      store.dispatch(Actions.onShowMediaFilesInLightBox, {
        media: thumbnails.value,
        item: props.item,
      });
    };
    return {
      onShowMedia,
      getCreatedAgo,
      MEDIA_TYPES,
    };
  },
};
</script>
