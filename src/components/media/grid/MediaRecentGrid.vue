<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <div class="text-blue my-3 f-size-15">Today</div>

      <div
        class="d-flex flex-wrap list-media-group table-todo-list"
        :class="itemSizeClass"
      >
        <MediaListItem :item="{ type: 'doc' }" />
        <MediaListItem :item="{ type: 'audio' }" />
        <MediaListItem :item="{ type: 'photo' }" />
        <MediaListItem :item="{ type: 'video' }" />
        <MediaListItem :item="{ type: 'note' }" />
      </div>

      <div class="text-blue my-3 f-size-15">Yesterday</div>

      <div
        class="d-flex flex-wrap list-media-group table-todo-list"
        :class="itemSizeClass"
      >
        <MediaListItem v-for="i in [1, 2, 3]" :key="i" :item="{ type: 'doc' }">
        </MediaListItem>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaListItem from "@/components/media/gridItem/MediaListItem";
export default {
  name: "MediaRecentGrid",
  data() {
    return {
      MEDIA_ITEM_SIZES,
    };
  },
  components: { MediaListItem },
  computed: {
    ...mapGetters({
      itemSizeClass: "getMediaItemClass",
    }),
  },
};
</script>
