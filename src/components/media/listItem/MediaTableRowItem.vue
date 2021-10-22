<template>
  <tr class="custom-table-item">
    <td>
      <div class="d-flex align-items-center">
        <figure class="avatar avatar-md me-3 rounded overflow-hidden">
          <img :src="`data:image/png;base64,${item.dataBase64}`" alt="..." />
        </figure>
        <div
          class="media-title-label text-truncate"
          @click.self="onShowMedia(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </td>
    <td class="text-nowrap">{{ item.name.substr(-3) }}</td>
    <td class="text-nowrap">-</td>
    <td class="text-nowrap">{{ getCreatedAgo(item.created) }}</td>
    <td class="custom-table-row-data-button">
      <ButtonIcon data-bs-toggle="dropdown">
        <FeatherMoreVertical class="f-size-24" />
      </ButtonIcon>
      <ul class="dropdown-menu custom-dropdown-menu">
        <li class="dropdown-item custom-dropdown-item">Attach to patient</li>
        <li class="dropdown-item custom-dropdown-item">
          Share in conversation
        </li>
        <li class="dropdown-item custom-dropdown-item">Delete</li>
      </ul>
    </td>
  </tr>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import { Actions, MEDIA_TYPES } from "@/store/enums/EnumTypes";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";

export default {
  name: "MediaListItem",
  components: { FeatherMoreVertical, ButtonIcon },
  props: ["item", "isSelect"],
  setup(props) {
    const store = useStore();

    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    const onClickAttachToParent = () => {
      console.log("onClickAttachToParent", props);
    };
    const onClickShareInConversation = () => {
      console.log("onClickShareInConversation", props);
    };
    const onClickDelete = () => {
      console.log("onClickDelete", props);
    };

    const getCreatedAgo = () => moment(props.item.created).fromNow();

    const onShowMedia = () => {
      store.dispatch(Actions.onShowMediaFilesInLightBox, {
        media: thumbnails.value,
        item: props.item,
      });
    };

    const openMenu = () => {
      console.log("openMenu");
    };

    return {
      onShowMedia,
      getCreatedAgo,
      openMenu,
      onClickAttachToParent,
      onClickShareInConversation,
      onClickDelete,
      MEDIA_TYPES,
    };
  },
};
</script>
<style></style>
