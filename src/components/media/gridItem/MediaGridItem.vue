<template>
  <div class="list-media-item" style="margin-bottom: 24px"   v-if="item">
    <MediaItem :item="item" :is-drop-down-menu="true" />

    <div class="d-flex pe-3" style="margin-top: 12px">
      <span class="text-truncate file-name-label"> {{ item.name }}</span>
    </div>

    <div class="d-flex" style="margin-top: 3.71px">
      <span class="file-created-label">Created {{ getCreatedAgo }}</span>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import moment from "moment";
import { MEDIA_TYPES } from "@/store/enums/EnumTypes";
import MediaItem from "@/components/media/item/MediaItem";

export default {
  name: "MediaGridItem",
  props: ["item", "isSelect"],
  setup(props) {
    const getCreatedAgo = computed(() => moment(props.item.created).fromNow());

    return {
      MEDIA_TYPES,
      getCreatedAgo,
    };
  },
  components: {
    MediaItem,
  },
};
</script>
<style lang="scss">
@import "../../../assets/scss/colors";
.file-name-label {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: $primary-black;
}

.file-created-label {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: $grey;
}
</style>
