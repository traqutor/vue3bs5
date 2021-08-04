<template>
  <div class="modal" id="modalMediaSelectorManagerId" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <!-- start::modal header -->
        <div class="modal-header bg-grey-light py-0">
          <div class="row flex-fill">
            <!-- start:: arrows -->
            <div
              class="
                col
                f-col-xs
                d-flex
                align-items-center
                justify-content-between
              "
            >
              <h6 class="modal-title">Media</h6>

              <div class="btn-group me-1">
                <button
                  class="btn text-primary text-dark-hover p-0 shadow-none"
                >
                  <feather-arrow-left class="f-icon-24" />
                </button>

                <button
                  class="
                    btn
                    text-secondary text-dark-hover
                    border-0
                    p-0
                    shadow-none
                    ms-2
                  "
                >
                  <feather-arrow-right class="f-icon-24" />
                </button>
              </div>
            </div>
            <!-- end:: arrows -->

            <!-- start:: select mode and tabs -->
            <div
              class="col ps-4 d-flex align-items-center justify-content-between"
            >
              <!-- start:: select mode -->
              <div class="steps-section w-col-3xs">
                <button
                  v-if="!selectMode"
                  @click="onToggleSelectMode"
                  class="
                    btn btn-sm btn-success
                    toggle-checklist-control
                    shadow-none
                  "
                >
                  Select
                </button>

                <div
                  v-else
                  class="d-flex align-items-center justify-content-between"
                >
                  <button
                    class="btn btn-sm btn-secondary-light shadow-none"
                    @click="onToggleSelectMode"
                  >
                    Cancel
                  </button>

                  <div class="btn-group">
                    <button
                      class="
                        btn
                        text-secondary text-dark-hover
                        p-0
                        shadow-none
                        toggle-select-list
                      "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Select All"
                    >
                      <feather-check-circle class="f-icon-22" />
                    </button>

                    <button
                      class="
                        btn
                        text-secondary text-dark-hover
                        border-0
                        p-0
                        shadow-none
                        toggle-select-list
                        ms-25
                      "
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Deselect All"
                    >
                      <feather-x-circle class="f-icon-22" />
                    </button>
                  </div>
                </div>
              </div>
              <!-- end:: select mode  -->

              <!-- start:: tabs -->
              <nav
                class="side-nav-line nav-line-center ms-5 ps-3 pe-5 flex-fill"
              >
                <div class="nav nav-tabs nav-fill border-0 f-size-15">
                  <a class="nav-item nav-link pt-25 pb-3">Patients</a>

                  <a class="nav-item nav-link pt-25 pb-3">Unidentified</a>

                  <a class="nav-item nav-link pt-25 pb-3 active">General</a>
                </div>
              </nav>
              <!-- end:: tabs -->

              <!-- start:: toggle view button -->
              <div class="btn-group ms-5">
                <button
                  class="btn btn-link p-0 shadow-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Grid View"
                >
                  <feather-grid class="f-icon-22" />
                </button>

                <button
                  class="
                    btn btn-link
                    text-secondary text-dark-hover
                    border-0
                    p-0
                    shadow-none
                    ms-25
                  "
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="List View"
                >
                  <feather-list class="f-icon-28" />
                </button>
              </div>
              <!-- end:: toggle view button -->

              <button
                type="button"
                class="btn btn-sm btn-secondary-light shadow-none me-1 ms-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <feather-x />
              </button>
            </div>
            <!-- end:: select mode and tabs -->
          </div>
        </div>
        <!-- end::modal header -->

        <!-- start::modal body -->
        <div
          class="
            modal-body
            d-flex
            flex-column
            modal-body-filemanager
            overflow-hidden
          "
        >
          <div class="row section-widget position-relative flex-fill">
            <!-- start:: column media types -->
            <div
              class="
                col
                f-col-xs
                pe-1
                d-flex
                flex-column
                overflow-hidden
                border-right border-secondary-light
              "
            >
              <div class="input-group input-group-sm mb-4 pe-3">
                <input
                  type="text"
                  class="form-control is-filter-control bg-light shadow-none"
                  placeholder="Filter"
                />
              </div>

              <div class="d-flex flex-column flex-fill position-relative">
                <perfect-scrollbar
                  class="position-absolute h-100 w-100 pe-3 media-type-group"
                >
                  <!-- start:: Audio type button -->
                  <button
                    class="
                      media-type-item
                      btn btn-block
                      f-size-14
                      alert alert-primary
                      bg-media-type-2
                      p-25
                      shadow-none
                      border-secondary-light
                    "
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center overflow-hidden">
                        <figure
                          class="
                            avatar
                            f-icon-28
                            avatar-custom
                            text-white
                            bg-media-1
                            me-2
                          "
                        >
                          <feather-mic class="f-icon-15" />
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Audio
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >0</span
                      >
                    </div>
                  </button>
                  <!-- end:: Audio type button -->

                  <!-- start:: Docs type button -->
                  <button
                    class="
                      media-type-item
                      btn btn-block
                      f-size-14
                      alert alert-warning
                      bg-media-type-3
                      p-25
                      shadow-none
                      border-secondary-light
                    "
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center overflow-hidden">
                        <figure
                          class="
                            avatar
                            f-icon-28
                            avatar-custom
                            text-white
                            bg-media-2
                            me-2
                          "
                        >
                          <feather-file-text class="f-icon-15" />
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Documents
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >0</span
                      >
                    </div>
                  </button>
                  <!-- end:: Docs type button -->

                  <!-- start:: Notes type button -->
                  <button
                    class="
                      media-type-item
                      btn btn-block
                      f-size-14
                      alert alert-danger
                      bg-media-type-4
                      p-25
                      shadow-none
                      border-secondary-light
                    "
                    disabled=""
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center overflow-hidden">
                        <figure
                          class="
                            avatar
                            f-icon-28
                            avatar-custom
                            text-white
                            bg-media-3
                            me-2
                          "
                        >
                          <feather-edit class="f-icon-15" />
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Notes
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >0</span
                      >
                    </div>
                  </button>
                  <!-- end:: Notes type button -->

                  <!-- start:: Photos type button -->
                  <button
                    class="
                      media-type-item
                      btn btn-block
                      f-size-14
                      alert alert-wait
                      bg-media-type-5
                      p-25
                      shadow-none
                      border-secondary-light
                      active
                    "
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center overflow-hidden">
                        <figure
                          class="
                            avatar
                            f-icon-28
                            avatar-custom
                            text-white
                            bg-media-4
                            me-2
                          "
                        >
                          <feather-camera class="f-icon-15" />
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Photos
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt">{{
                        thumbnails.length
                      }}</span>
                    </div>
                  </button>
                  <!-- end:: Photos type button -->

                  <!-- start:: Videos type button -->
                  <button
                    class="
                      media-type-item
                      btn btn-block
                      f-size-14
                      alert alert-success
                      bg-media-type-6
                      p-25
                      shadow-none
                      border-secondary-light
                    "
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center overflow-hidden">
                        <figure
                          class="
                            avatar
                            f-icon-28
                            avatar-custom
                            text-white
                            bg-media-5
                            me-2
                          "
                        >
                          <feather-video class="f-icon-15" />
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Videos
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >0</span
                      >
                    </div>
                  </button>
                  <!-- end:: Videos type button -->
                </perfect-scrollbar>
              </div>
            </div>
            <!-- end:: column media types -->

            <!-- start:: column media selector -->
            <div class="col d-flex flex-column ps-4 pe-1">
              <!-- start:: media items selections breadcrumb -->
              <nav
                class="
                  d-flex
                  align-items-center
                  mb-4
                  me-3
                  bg-grey-light
                  px-25
                  rounded
                  f-size-15
                  steps-section
                "
                style="height: 32px"
              >
                <div class="d-flex align-items-center">
                  <div>
                    <a href="" class="text-decoration-none">
                      <feather-folder class="f-icon-20 me-2" />
                      Photos
                    </a>
                  </div>
                  <feather-chevron-right
                    class="mx-1 text-muted opacity-75 f-icon-15"
                  />

                  <div class="text-secondary">General</div>
                </div>

                <div class="ms-auto"><small>items</small></div>

                <div class="dropdown ms-4">
                  <button
                    class="
                      btn
                      p-0
                      shadow-none
                      text-secondary text-dark-hover
                      dropdown-toggle
                    "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <feather-bar-chart class="f-icon-20" />
                  </button>
                  <div
                    class="
                      dropdown-menu dropdown-menu-sm dropdown-menu-right
                      shadow
                      dropdown-insert-click
                    "
                  >
                    <div class="dropdown-header text-secondary pt-0 pb-1">
                      Sorting by:
                    </div>
                    <button class="dropdown-item active">Date</button>
                    <button class="dropdown-item">Filename</button>
                    <button class="dropdown-item">Size</button>
                  </div>
                </div>

                <button
                  class="
                    btn
                    text-secondary text-dark-hover
                    border-0
                    p-0
                    shadow-none
                    ms-3
                  "
                >
                  <feather-repeat class="f-icon-18" />
                </button>
              </nav>
              <!-- start:: media items selections breadcrumb -->

              <!-- start:: media items selections -->
              <div class="overflow-hidden position-relative flex-fill">
                <perfect-scrollbar
                  class="d-flex flex-column position-absolute w-100 h-100 pe-3"
                >
                  <div class="tab-content">
                    <div class="tab-pane fade active show">
                      <div
                        class="
                          d-flex
                          flex-wrap
                          list-media-group
                          table-todo-list
                          select-action-group
                        "
                      >
                        <template v-for="item of thumbnails" :key="item.name">
                          <MediaThumbnailItem
                            :item="item"
                            :is-select="selectMode"
                          />
                        </template>
                      </div>
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>
              <!-- end:: media items selections -->
            </div>
            <!-- end:: column media selector -->
          </div>
        </div>
        <!-- end::modal body -->

        <!-- start::modal footer -->
        <div class="modal-footer bg-grey-light py-25">
          <div class="row flex-fill">
            <!-- start:: upload files button -->
            <div class="col f-col-xs">
              <div class="pe-1">
                <button class="btn btn-sm btn-primary btn-block">
                  Upload Files
                </button>
              </div>
            </div>
            <!-- end:: upload files button -->

            <div class="col ps-4">
              <div
                v-if="selectMode"
                class="d-flex justify-content-between align-items-center"
              >
                <!-- start:: confirm share dropdown button -->
                <div class="btn-group btn-group-sm dropup">
                  <button
                    :disabled="selectedItems.length <= 0"
                    class="
                      btn btn-sm
                      d-inline-flex
                      align-items-center
                      btn-link
                      text-decoration-none
                      p-0
                      f-size-15
                    "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-offset="0,15"
                  >
                    <feather-share class="f-icon-24 me-2" />
                    Share
                  </button>

                  <div
                    class="dropdown-menu dropdown-menu-sm shadow w-col-lg px-4"
                  >
                    <div
                      class="
                        text-dark text-nowrap text-center
                        font-weight-middle
                        f-size-15
                        position-relative
                        my-3
                      "
                    >
                      Share
                      <span class="text-primary">{{
                        selectedItems.length
                      }}</span>
                      selected items in the conversation?
                    </div>
                    <div class="btn-group btn-group-sm mt-2 mb-3 w-100 px-5">
                      <button
                        type="button"
                        class="btn btn-success me-4 rounded"
                        @click="onShareGalleryItems"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary-light rounded"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
                <!-- end:: confirm share dropdown button -->

                <div class="text-secondary">
                  <span id="shareListControl-cnt" default-val="0"
                    >{{ selectedItems.length }} </span
                  >/10 items selected
                </div>

                <!-- start:: confirm delete dropdown button -->
                <div class="btn-group btn-group-sm dropup">
                  <button
                    :disabled="selectedItems.length <= 0"
                    class="
                      btn btn-sm
                      d-inline-flex
                      align-items-center
                      btn-link
                      text-decoration-none
                      p-0
                      f-size-15
                      text-danger
                    "
                    id="dropdownMediaDeleteConfirmDropdownMenuButtonId"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-offset="0,15"
                  >
                    Delete<feather-trash2 class="f-icon-24 ms-2" />
                  </button>
                  <!-- start:: confirm delete dropdown menu -->
                  <div
                    class="
                      dropdown-menu dropdown-menu-right dropdown-menu-sm
                      shadow
                      w-col-lg
                      px-4
                    "
                    aria-labelledby="dropdownMediaDeleteConfirmDropdownMenuButtonId"
                  >
                    <div
                      class="
                        text-dark text-nowrap text-center
                        font-weight-middle
                        f-size-15
                        position-relative
                        my-3
                      "
                    >
                      Delete selected items
                    </div>
                    <div class="text-center mb-2 f-size-14">Are you sure?</div>

                    <div class="btn-group btn-group-sm mt-2 mb-3 w-100 px-5">
                      <button type="button" class="btn btn-danger me-4 rounded">
                        Yes
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary-light rounded"
                      >
                        No
                      </button>
                    </div>
                  </div>
                  <!-- start:: confirm delete dropdown menu -->
                </div>
                <!-- end:: confirm delete dropdown button -->
              </div>
            </div>
          </div>
        </div>
        <!-- end::modal footer -->
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Modal } from "bootstrap";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";
import FeatherTrash2 from "@/icons/FeatherTrash2";
import FeatherShare from "@/icons/FeatherShare";
import FeatherMic from "@/icons/FeatherMic";
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherEdit from "@/icons/FeatherEdit";
import FeatherCamera from "@/icons/FeatherCamera";
import FeatherVideo from "@/icons/FeatherVideo";
import FeatherBarChart from "@/icons/FeatherBarChart";
import FeatherRepeat from "@/icons/FeatherRepeat";
import FeatherFolder from "@/icons/FeatherFolder";
import FeatherChevronRight from "@/icons/FeatherChevronRight";
import FeatherArrowLeft from "@/icons/FeatherArrowLeft";
import FeatherArrowRight from "@/icons/FeatherArrowRight";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";
import FeatherXCircle from "@/icons/FeatherXCircle";
import FeatherList from "@/icons/FeatherList";
import FeatherGrid from "@/icons/FeatherGrid";
import MediaThumbnailItem from "@/components/media/item/MediaThumbnailItem";

export default {
  components: {
    MediaThumbnailItem,
    FeatherGrid,
    FeatherList,
    FeatherXCircle,
    FeatherCheckCircle,
    FeatherArrowRight,
    FeatherArrowLeft,
    FeatherChevronRight,
    FeatherFolder,
    FeatherRepeat,
    FeatherBarChart,
    FeatherVideo,
    FeatherCamera,
    FeatherEdit,
    FeatherFileText,
    FeatherMic,
    FeatherShare,
    FeatherTrash2,
    FeatherX,
  },
  setup() {
    let modal = null;
    const selectMode = ref();
    const store = useStore();
    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    const selectedItems = computed(() => store.getters.getMediaSelectedItems);

    const onToggleSelectMode = () => {
      selectMode.value = !selectMode.value;
      if (!selectMode.value) {
        store.commit(Mutations.setMediaSelectedItems, []);
      }
    };

    const onShareGalleryItems = () => {
      const payload = {
        ids: selectedItems.value.map((item) => item.name.substr(19, 36)),
      };
      console.log("onShareGalleryItems", payload);
      store.dispatch(Actions.onShareGalleryItems, payload).then(() => {
        console.log("onShareGalleryItems response");
        modal.hide();
      });
    };

    onMounted(() => {
      modal = new Modal(document.getElementById("modalMediaSelectorManagerId"));
    });

    return {
      selectMode,
      thumbnails,
      selectedItems,
      onToggleSelectMode,
      onShareGalleryItems,
    };
  },
};
</script>
