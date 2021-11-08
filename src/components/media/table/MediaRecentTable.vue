<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <template v-for="(group, index) of thumbnailsGroups" :key="index">

        <div class="media-recent-time-ago-divider">
          <span class="label-subheader">{{ group.date }}</span>
        </div>

        <table>
          <thead>
            <tr class="bg-white">
              <th scope="col" class="pt-1 text-nowrap border-0">Name</th>
              <th scope="col" class="pt-1 text-nowrap border-0">File type</th>
              <th scope="col" class="pt-1 text-nowrap border-0">Duration</th>
              <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
              <th scope="col" class="pt-1 text-nowrap border-0"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item of group.thumbnails" :key="item.id">
              <MediaListItem :item="item" />
            </template>
          </tbody>
        </table>
      </template>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { MEDIA_ITEM_SIZES } from "@/store/enums/EnumTypes";
import MediaListItem from "@/components/media/table/MediaTableRowItem";
export default {
  name: "MediaRecentList",
  components: { MediaListItem },
  setup() {
    const store = useStore();
    const thumbnailsGroups = computed(
      () => store.getters.getMediaGroupedRecentThumbnails
    );

    return {
      thumbnailsGroups,
      MEDIA_ITEM_SIZES,
    };
  },
};
</script>
