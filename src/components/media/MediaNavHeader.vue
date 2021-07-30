<template>
  <div class="row">
    <div class="col-9">
      <b-nav class="side-nav-line border-bottom border-secondary-light">
        <b-nav-item
          v-if="mediaTypeSelected.type === MEDIA_TYPES.ALL"
          @click="onTab(MEDIA_NAV_TABS.RECENT)"
          :active="tabActive === MEDIA_NAV_TABS.RECENT"
          >{{ MEDIA_NAV_TABS.RECENT }}
        </b-nav-item>

        <b-nav-item
          @click="onTab(MEDIA_NAV_TABS.GENERAL)"
          :active="tabActive === MEDIA_NAV_TABS.GENERAL"
          >{{ MEDIA_NAV_TABS.GENERAL }}
        </b-nav-item>

        <b-nav-item
          @click="onTab(MEDIA_NAV_TABS.PATIENTS)"
          :active="tabActive === MEDIA_NAV_TABS.PATIENTS"
          >{{ MEDIA_NAV_TABS.PATIENTS }}
        </b-nav-item>

        <b-nav-item
          @click="onTab(MEDIA_NAV_TABS.UNDEFINED)"
          :active="tabActive === MEDIA_NAV_TABS.UNDEFINED"
          >{{ MEDIA_NAV_TABS.UNDEFINED }}
          <span class="badge badge-secondary badge-pill ml-2">2</span>
        </b-nav-item>

        <div class="d-flex align-items-center ml-auto">
          <div class="btn-toolbar">
            <div class="btn-group ml-3">
              <div class="d-flex align-items-center pb-1">
                <nav class="nav nav-inline nav-tabs border-0">
                  <button
                    @click="onViewMode(MEDIA_VIEW_MODES.GRID)"
                    class="btn border-0 nav-link m-0 shadow-none"
                    :class="mediaViewMode === MEDIA_VIEW_MODES.GRID && 'active'"
                  >
                    <FeatherGrid class="f-icon-22" />
                  </button>

                  <div
                    v-if="tabActive === MEDIA_NAV_TABS.PATIENTS"
                    class="btn-group"
                    role="group"
                  >
                    <b-dropdown
                      variant="link"
                      right
                      toggle-class="text-decoration-none"
                      :disabled="mediaViewMode !== MEDIA_VIEW_MODES.GRID"
                    >
                      <b-dropdown-header>Item size</b-dropdown-header>
                      <b-dropdown-item
                        class="font-weight-middle"
                        v-for="(item, index) of Object.entries(
                          MEDIA_PATIENT_ITEM_SIZES
                        )"
                        :key="index"
                        @click="onPatientSize(item[1])"
                      >
                        <b-icon
                          v-if="
                            patientItemSize === MEDIA_PATIENT_ITEM_SIZES[item[0]]
                          "
                          variant="success"
                          icon="check2-circle"
                          class="mr-2"
                        />
                        <b-icon v-else icon="circle" class="mr-2" />
                        {{ item[1] }}
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <div v-else class="btn-group" role="group">
                    <b-dropdown
                      variant="link"
                      right
                      toggle-class="text-decoration-none"
                      :disabled="mediaViewMode !== MEDIA_VIEW_MODES.GRID"
                    >
                      <b-dropdown-header>Item size</b-dropdown-header>

                      <b-dropdown-item
                        class="font-weight-middle"
                        v-for="(item, index) of Object.entries(MEDIA_ITEM_SIZES)"
                        :key="index"
                        @click="onSize(item[1])"
                      >
                        <b-icon
                          v-if="itemSize === MEDIA_ITEM_SIZES[item[0]]"
                          variant="success"
                          icon="check2-circle"
                          class="mr-2"
                        />
                        <b-icon v-else icon="circle" class="mr-2" />
                        {{ item[1] }}
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <button
                    @click="onViewMode(MEDIA_VIEW_MODES.TABLE)"
                    class="btn border-0 nav-link ml-2 mr-1 shadow-none"
                    :class="mediaViewMode === MEDIA_VIEW_MODES.TABLE && 'active'"
                  >
                    <FeatherList class="f-icon-28" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </b-nav>
    </div>
    <div class="col d-flex align-items-center pl-1">
      <div class="input-group input-group-sm filter-control-group flex-grow-1">
        <input
          type="text"
          class="form-control is-filter-control bg-light shadow-none"
          id="media_filter"
          placeholder="Filter"
          aria-describedby="button-addon2"
        />
      </div>
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

export default {
  name: "MediaNavHeader",
  components: { FeatherList, FeatherGrid },
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
    onSize(size) {
      this.$store.commit(Mutations.setMediaItemSize, size);
    },
    onPatientSize(size) {
      this.$store.commit(Mutations.setMediaPatientItemSize, size);
    },
    onViewMode(mode) {
      this.$store.commit(Mutations.setMediaViewMode, mode);
    },
  },
  computed: {
    ...mapGetters({
      itemSize: "getMediaItemSize",
      patientItemSize: "getMediaPatientItemSize",
      tabActive: "getMediaNavTabSelected",
      mediaTypeSelected: "getMediaTypeSelected",
      mediaViewMode: "getMediaViewMode",
    }),
  },
};
</script>
