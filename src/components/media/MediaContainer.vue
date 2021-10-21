<template>
  <div class="col d-flex flex-column overflow-hidden max-content-wrapper">
    <div class="flex-section-slide flex-fill">
      <div class="flex-slide-content d-flex flex-column">
        <media-nav-header />

        <media-recent v-if="tabActive === MEDIA_NAV_TABS.RECENT" />

        <media-general v-else-if="tabActive === MEDIA_NAV_TABS.GENERAL" />
        <!--        <media-patients v-else-if="tabActive === MEDIA_NAV_TABS.PATIENTS" />-->
        <!--        <media-undefined v-else-if="tabActive === MEDIA_NAV_TABS.UNDEFINED" />-->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import { MEDIA_NAV_TABS } from "@/store/enums/EnumTypes";
import MediaNavHeader from "@/components/media/MediaNavHeader";
import MediaRecent from "@/components/media/MediaRecent";
import MediaGeneral from "@/components/media/MediaGeneral";

export default {
  name: "MediaContainer",
  data() {
    return {
      MEDIA_NAV_TABS,
    };
  },
  computed: {
    ...mapGetters({
      mediaTypes: "getMediaTypes",
      tabActive: "getMediaNavTabSelected",
      mediaTypeSelected: "getMediaTypeSelected",
    }),
  },
  components: {
    MediaGeneral,
    MediaRecent,
    MediaNavHeader,
  },
};
</script>
