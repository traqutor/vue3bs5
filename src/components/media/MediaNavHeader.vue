<template>
  <!-- start::navigation header -->

  <div class="nav custom-nav">
    <div
      class="nav-item custom-nav-item "
      @click="onTab(MEDIA_NAV_TABS.RECENT)"
      :class="tabActive === MEDIA_NAV_TABS.RECENT ? 'active' : ''"
    >
      <span class="nav-link custom-nav-link">Recent</span>
    </div>

    <div
      class="nav-item custom-nav-item"
      @click="onTab(MEDIA_NAV_TABS.GENERAL)"
      :class="tabActive === MEDIA_NAV_TABS.GENERAL ? 'active' : ''"
    >
      <span class="nav-link custom-nav-link">General</span>
    </div>

    <div
      class="nav-item custom-nav-item"
      @click="onTab(MEDIA_NAV_TABS.PATIENTS)"
      :class="tabActive === MEDIA_NAV_TABS.PATIENTS ? 'active' : ''"
    >
      <span class="nav-link custom-nav-link">Patients</span>
    </div>

    <div
      class="nav-item custom-nav-item"
      @click="onTab(MEDIA_NAV_TABS.UNDEFINED)"
      :class="tabActive === MEDIA_NAV_TABS.UNDEFINED ? 'active' : ''"
    >
      <span class="nav-link custom-nav-link">Unidentified</span>
    </div>
  </div>

  <!-- end::navigation header -->

  <!-- start:: media type selection chips buttons -->
  <div class="d-flex chips-buttons-nav">
    <button-chip
      v-for="type of mediaTypes"
      @click="onTypeSelect(type)"
      :key="type.id"
      :active="mediaTypeSelected.id === type.id"
      class="me-2"
      >{{ type.name }}</button-chip
    >

    <div class="d-flex ms-auto">
      <input
        v-model="searchText"
        type="text"
        class="input-field"
        placeholder="Filter by keyword"
      />

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
  <!-- end:: media type selection chips buttons -->

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
import { useStore } from "vuex";
import ButtonChip from "@/components/common/buttons/ButtonChip";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";
import { computed } from "vue";

export default {
  name: "MediaNavHeader",
  components: {
    ButtonIcon,
    ButtonChip,
    FeatherList,
    FeatherGrid,
  },
  setup() {
    const store = useStore();

    const searchText = computed({
      set(value) {
        store.commit(Mutations.setMediaSearchText, value);
      },
      get() {
        return store.getters.getMediaSearchText;
      },
    });

    const tabActive = computed(() => store.getters.getMediaNavTabSelected);
    const mediaTypes = computed(() => store.getters.getMediaTypes);
    const mediaTypeSelected = computed(
      () => store.getters.getMediaTypeSelected
    );
    const mediaViewMode = computed(() => store.getters.getMediaViewMode);

    const onTab = (tab) => {
      store.commit(Mutations.setMediaNavTabSelected, tab);
    };

    const onTypeSelect = (type) => {
      store.commit(Mutations.setMediaTypeSelected, type);
    };

    const onViewMode = (mode) => {
      store.commit(Mutations.setMediaViewMode, mode);
    };

    return {
      searchText,
      tabActive,
      mediaTypes,
      mediaTypeSelected,
      mediaViewMode,
      onTab,
      onTypeSelect,
      onViewMode,
      MEDIA_TYPES,
      MEDIA_ITEM_SIZES,
      MEDIA_PATIENT_ITEM_SIZES,
      MEDIA_NAV_TABS,
      MEDIA_VIEW_MODES,
    };
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
</style>
