<template>
  <div class="row">
    <div class="col-9">
      <!-- start::navigation header -->
      <nav class="side-nav-line">
        <div
          class="nav nav-tabs border-bottom border-secondary-light"
          style="min-height: 42px"
        >
          <a
            class="nav-item nav-link nav-filter-control ign-pointer"
            v-if="mediaTypeSelected.type === MEDIA_TYPES.ALL"
            @click="onTab(MEDIA_NAV_TABS.RECENT)"
            :class="tabActive === MEDIA_NAV_TABS.RECENT ? 'active' : ''"
            >Recent</a
          >

          <a
            class="nav-item nav-link nav-filter-control ign-pointer"
            @click="onTab(MEDIA_NAV_TABS.GENERAL)"
            :class="tabActive === MEDIA_NAV_TABS.GENERAL ? 'active' : ''"
            >General</a
          >

          <a
            class="nav-item nav-link nav-filter-control"
            @click="onTab(MEDIA_NAV_TABS.PATIENTS)"
            :class="tabActive === MEDIA_NAV_TABS.PATIENTS ? 'active' : ''"
            >Patients</a
          >

          <a
            class="nav-item nav-link nav-filter-control"
            @click="onTab(MEDIA_NAV_TABS.UNDEFINED)"
            :class="tabActive === MEDIA_NAV_TABS.UNDEFINED ? 'active' : ''"
            >Unidentified<span class="badge rounded-pill bg-secondary ms-2"
              >2</span
            ></a
          >

          <div class="btn-toolbar ms-auto">
            <div class="btn-group ms-3">
              <div class="d-flex align-items-center">
                <nav class="nav nav-inline nav-tabs border-0">
                  <a
                    @click="onViewMode(MEDIA_VIEW_MODES.GRID)"
                    class="btn border-0 nav-link m-0 shadow-none"
                    :class="mediaViewMode === MEDIA_VIEW_MODES.GRID && 'active'"
                  >
                    <feather-grid class="f-icon-22" />
                  </a>

                  <!-- start:: dropdown options for patients -->
                  <div
                    v-if="tabActive === MEDIA_NAV_TABS.PATIENTS"
                    class="btn-group"
                    role="group"
                  >
                    <button
                      type="button"
                      class="
                        btn
                        shadow-none
                        bg-transparent
                        px-2
                        dropdown-toggle dropdown-toggle-split
                      "
                      id="dropdownMediaPatientsMenuViewModeId"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                        dropdown-insert-click
                      "
                      aria-labelledby="dropdownMediaPatientsMenuViewModeId"
                    >
                      <div class="dropdown-header text-secondary pt-0 pb-1">
                        Item size
                      </div>

                      <label
                        v-for="(item, index) of Object.entries(
                          MEDIA_PATIENT_ITEM_SIZES
                        )"
                        :key="index"
                        @click="onPatientSize(item[1])"
                        class="
                          toggle-input toggle-input-success
                          m-0
                          font-weight-middle
                          dropdown-item
                        "
                      >
                        <input
                          type="radio"
                          name="size-type"
                          checked=""
                          class="toggle-listType-control"
                          value="sm"
                          toggle-list="#recentsMediaList"
                        />
                        <span class="input-icon f-icon-20">
                          <feather-circle />
                          <feather-check-circle /> </span
                        >{{ item[1] }}
                      </label>
                    </div>
                  </div>
                  <!-- end:: dropdown options for patients -->

                  <!-- start:: dropdown options for media -->
                  <div v-else class="btn-group" role="group">
                    <button
                      type="button"
                      class="
                        btn
                        shadow-none
                        bg-transparent
                        px-2
                        dropdown-toggle dropdown-toggle-split
                      "
                      id="dropdownMediaMenuViewModeId"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    ></button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                        dropdown-insert-click
                      "
                      aria-labelledby="dropdownMediaMenuViewModeId"
                    >
                      <div class="dropdown-header text-secondary pt-0 pb-1">
                        Item size
                      </div>

                      <label
                        v-for="(item, index) of Object.entries(
                          MEDIA_ITEM_SIZES
                        )"
                        :key="index"
                        @click="onSize(item[1])"
                        class="
                          toggle-input toggle-input-success
                          m-0
                          font-weight-middle
                          dropdown-item
                        "
                      >
                        <input
                          type="radio"
                          name="size-type"
                          checked=""
                          class="toggle-listType-control"
                          value="sm"
                          toggle-list="#recentsMediaList"
                        />
                        <span class="input-icon f-icon-20">
                          <feather-circle />
                          <feather-check-circle /> </span
                        >{{ item[1] }}
                      </label>
                    </div>
                  </div>
                  <!-- end:: dropdown options for media -->

                  <a
                    @click="onViewMode(MEDIA_VIEW_MODES.TABLE)"
                    class="btn border-0 nav-link ms-2 me-1 shadow-none"
                    :class="
                      mediaViewMode === MEDIA_VIEW_MODES.TABLE && 'active'
                    "
                  >
                    <feather-list class="f-icon-28" />
                  </a>
                </nav>
              </div>
            </div>

            <div class="btn-group ml-3 is-hidden" data-control="#nav-patients">
              <div class="d-flex align-items-center">
                <nav class="nav nav-inline nav-tabs border-0" role="tablist">
                  <a
                    class="btn border-0 nav-link m-0 active shadow-none"
                    data-toggle="tab"
                    href="#section-patients-grid"
                    role="tab"
                    aria-controls="section-patients-grid"
                    aria-selected="true"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-grid f-icon-22"
                    >
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect></svg
                  ></a>

                  <div class="btn-group" role="group">
                    <button
                      type="button"
                      class="
                        btn
                        shadow-none
                        bg-transparent
                        px-2
                        dropdown-toggle dropdown-toggle-split
                      "
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    ></button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                        dropdown-insert-click
                      "
                    >
                      <div class="dropdown-header text-secondary pt-0 pb-1">
                        Item size
                      </div>

                      <label
                        class="
                          toggle-input toggle-input-success
                          m-0
                          font-weight-middle
                          dropdown-item
                        "
                      >
                        <input
                          type="radio"
                          name="size-type-1"
                          checked=""
                          class="toggle-listType-control"
                          value="md"
                          toggle-list="#patientMediaList"
                        />
                        <span class="input-icon f-icon-20"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-circle"
                          >
                            <circle cx="12" cy="12" r="10"></circle></svg
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline
                              points="22 4 12 14.01 9 11.01"
                            ></polyline></svg></span
                        >Default
                      </label>

                      <label
                        class="
                          toggle-input toggle-input-success
                          m-0
                          font-weight-middle
                          dropdown-item
                        "
                      >
                        <input
                          type="radio"
                          name="size-type-1"
                          class="toggle-listType-control"
                          value="all"
                          toggle-list="#patientMediaList"
                        />
                        <span class="input-icon f-icon-20"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-circle"
                          >
                            <circle cx="12" cy="12" r="10"></circle></svg
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline
                              points="22 4 12 14.01 9 11.01"
                            ></polyline></svg></span
                        >Small
                      </label>

                      <label
                        class="
                          toggle-input toggle-input-success
                          m-0
                          font-weight-middle
                          dropdown-item
                        "
                      >
                        <input
                          type="radio"
                          name="size-type-1"
                          class="toggle-listType-control"
                          value="lg"
                          toggle-list="#patientMediaList"
                        />
                        <span class="input-icon f-icon-20"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-circle"
                          >
                            <circle cx="12" cy="12" r="10"></circle></svg
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline
                              points="22 4 12 14.01 9 11.01"
                            ></polyline></svg></span
                        >Large
                      </label>
                    </div>
                  </div>

                  <a
                    class="btn border-0 nav-link ml-2 shadow-none"
                    data-toggle="tab"
                    href="#section-patients-list"
                    role="tab"
                    aria-controls="section-patients-list"
                    aria-selected="false"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-list f-icon-28"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"></line>
                      <line x1="8" y1="12" x2="21" y2="12"></line>
                      <line x1="8" y1="18" x2="21" y2="18"></line>
                      <line x1="3" y1="6" x2="3.01" y2="6"></line>
                      <line x1="3" y1="12" x2="3.01" y2="12"></line>
                      <line x1="3" y1="18" x2="3.01" y2="18"></line></svg
                  ></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- end::navigation header -->
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
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";

export default {
  name: "MediaNavHeader",
  components: { FeatherCheckCircle, FeatherCircle, FeatherList, FeatherGrid },
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
