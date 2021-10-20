<template>
  <!-- start::navigation header -->
  <nav class="side-nav-line">
    <div
      class="nav nav-tabs border-bottom border-secondary-light"
      style="min-height: 42px"
    >
      <a
        class="nav-item nav-link nav-filter-control on-hover"
        @click="onTab(MEDIA_NAV_TABS.RECENT)"
        :class="tabActive === MEDIA_NAV_TABS.RECENT ? 'active' : ''"
        >Recent</a
      >

      <a
        class="nav-item nav-link nav-filter-control on-hover"
        @click="onTab(MEDIA_NAV_TABS.GENERAL)"
        :class="tabActive === MEDIA_NAV_TABS.GENERAL ? 'active' : ''"
        >General</a
      >

      <a
        class="nav-item nav-link nav-filter-control on-hover"
        @click="onTab(MEDIA_NAV_TABS.PATIENTS)"
        :class="tabActive === MEDIA_NAV_TABS.PATIENTS ? 'active' : ''"
        >Patients</a
      >

      <a
        class="nav-item nav-link nav-filter-control on-hover"
        @click="onTab(MEDIA_NAV_TABS.UNDEFINED)"
        :class="tabActive === MEDIA_NAV_TABS.UNDEFINED ? 'active' : ''"
        >Unidentified</a
      >
    </div>
  </nav>
  <!-- end::navigation header -->

  <div class="d-flex chips-selection-frame">
    <button-chip
      v-for="type of mediaTypes"
      @click="onTypeSelect(type)"
      :key="type.id"
      :active="mediaTypeSelected.id === type.id"
      class="me-2"
      >{{ type.name }}</button-chip
    >

    <div class="d-flex ms-auto">
      <input type="text" class="input-field" placeholder="Filter by keyword" />

      <ButtonIcon
        class="ms-3"
        @click="onViewMode(MEDIA_VIEW_MODES.GRID)"
        :active="mediaViewMode === MEDIA_VIEW_MODES.GRID"
      >
        <feather-grid class="f-icon-22" />
      </ButtonIcon>

      <ButtonIcon
        @click="onViewMode(MEDIA_VIEW_MODES.TABLE)"
        :active="mediaViewMode === MEDIA_VIEW_MODES.TABLE"
      >
        <feather-list class="f-icon-28" />
      </ButtonIcon>
    </div>
  </div>
</template>
<script>
import FeatherGrid from "@/icons/FeatherGrid";
import FeatherList from "@/icons/FeatherList";
import {
  MEDIA_TYPES,
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
  MEDIA_NAV_TABS,
  MEDIA_VIEW_MODES,
  Mutations,
} from "@/store/enums/EnumTypes";
import { mapGetters } from "vuex";
import ButtonChip from "@/components/common/buttons/ButtonChip";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";

export default {
  name: "MediaNavHeader",
  components: {
    ButtonIcon,
    ButtonChip,
    FeatherList,
    FeatherGrid,
  },
  data() {
    return {
      MEDIA_TYPES,
      MEDIA_ITEM_SIZES,
      MEDIA_PATIENT_ITEM_SIZES,
      MEDIA_NAV_TABS,
      MEDIA_VIEW_MODES,
    };
  },
  methods: {
    onTab(tab) {
      this.$store.commit(Mutations.setMediaNavTabSelected, tab);
    },
    onTypeSelect(type) {
      this.$store.commit(Mutations.setMediaTypeSelected, type);
    },
    onViewMode(mode) {
      this.$store.commit(Mutations.setMediaViewMode, mode);
    },
  },
  computed: {
    ...mapGetters({
      tabActive: "getMediaNavTabSelected",
      mediaTypes: "getMediaTypes",
      mediaTypeSelected: "getMediaTypeSelected",
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/constans";

.input-field {
  background: #eaecee;
  border-radius: 4px;
  outline: none;
  border-width: 0;
  padding-left: 12px;
}

.input-field::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: $grey;
}

.chips-selection-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 0px;
  margin-top: 12px;
}
</style>
