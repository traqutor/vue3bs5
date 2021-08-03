<template>
  <div class="modal" id="modalMediaSelectorManagerId" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <!-- start::modal header -->
        <div class="modal-header bg-grey-light py-0">
          <div class="row flex-fill">
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
                  href="#mediaPatientList-1;#breadcrumb-1"
                  class="
                    btn
                    text-primary text-dark-hover
                    p-0
                    shadow-none
                    user-media-getlist
                    step-tabpanel-open
                  "
                  data-type="def"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-left f-icon-24"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-right f-icon-24"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="col ps-4 d-flex align-items-center justify-content-between"
            >
              <div class="steps-section w-col-3xs">
                <div class="step-tabpanel active" id="mediaSelectGroup-1">
                  <button
                    href="#mediaSelectGroup-2;#mediaSelectBtnGroup"
                    data-outside="true"
                    class="
                      btn btn-sm btn-success
                      toggle-checklist-control
                      step-tabpanel-open
                      shadow-none
                    "
                    toggle-checklist-group="#fileManagerItemList"
                  >
                    Select
                  </button>
                </div>

                <div class="step-tabpanel" id="mediaSelectGroup-2">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <button
                      href="#mediaSelectGroup-1;#mediaSelectBtnGroup-1"
                      data-outside="true"
                      class="
                        btn btn-sm btn-secondary-light
                        toggle-checklist-control
                        step-tabpanel-open
                        shadow-none
                      "
                      toggle-checklist-group="#fileManagerItemList"
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
                        toggle-select="true"
                        toggle-select-group="#fileManagerItemList"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Select All"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-check-circle f-icon-22"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
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
                        toggle-select="false"
                        toggle-select-group="#fileManagerItemList"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Deselect All"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-x-circle f-icon-22"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="15" y1="9" x2="9" y2="15"></line>
                          <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <nav
                class="side-nav-line nav-line-center ms-5 ps-3 pe-5 flex-fill"
              >
                <div
                  class="nav nav-tabs nav-fill border-0 f-size-15"
                  role="tablist"
                >
                  <a
                    class="nav-item nav-link pt-25 pb-3 active"
                    id="files-type-tab-1"
                    data-toggle="tab"
                    href="#files-type-1"
                    role="tab"
                    aria-controls="files-type-1"
                    aria-selected="true"
                    >Patients</a
                  >

                  <a
                    class="nav-item nav-link pt-25 pb-3"
                    id="files-type-tab-2"
                    data-toggle="tab"
                    href="#files-type-2"
                    role="tab"
                    aria-controls="files-type-2"
                    aria-selected="false"
                    >Unidentified</a
                  >

                  <a
                    class="nav-item nav-link pt-25 pb-3"
                    id="files-type-tab-3"
                    data-toggle="tab"
                    href="#files-type-3"
                    role="tab"
                    aria-controls="files-type-3"
                    aria-selected="false"
                    >General</a
                  >
                </div>
              </nav>

              <div class="btn-group ms-5">
                <button
                  class="btn btn-link p-0 shadow-none"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Grid View"
                >
                  <svg
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
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
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
                  data-toggle="tooltip"
                  title=""
                  data-original-title="List View"
                >
                  <svg
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
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </div>

              <button
                type="button"
                class="btn btn-sm btn-secondary-light shadow-none me-1 ms-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <feather-x />
              </button>
            </div>
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
                        >3</span
                      >
                    </div>
                  </button>

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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-file-text f-icon-15"
                          >
                            <path
                              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            ></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Documents
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >1</span
                      >
                    </div>
                  </button>

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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-edit f-icon-15"
                          >
                            <path
                              d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                            ></path>
                            <path
                              d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                            ></path>
                          </svg>
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-camera f-icon-15"
                          >
                            <path
                              d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                            ></path>
                            <circle cx="12" cy="13" r="4"></circle>
                          </svg>
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Photos
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >6</span
                      >
                    </div>
                  </button>

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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-video f-icon-15"
                          >
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect
                              x="1"
                              y="5"
                              width="15"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                          </svg>
                        </figure>
                        <div
                          class="media-body text-truncate font-weight-middle"
                        >
                          Videos
                        </div>
                      </div>
                      <span class="font-weight-middle ms-2 media-type-cnt"
                        >1</span
                      >
                    </div>
                  </button>
                </perfect-scrollbar>
              </div>
            </div>
            <!-- end:: column media types -->

            <!-- start:: column media selector -->
            <div class="col d-flex flex-column ps-4 pe-1">
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
                <div
                  class="step-tabpanel active show"
                  id="breadcrumb-1"
                  style="display: block"
                >
                  <div class="d-flex align-items-center">
                    <div>
                      <a
                        href="#mediaPatientList-1;#breadcrumb-1"
                        class="text-decoration-none step-tabpanel-open"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-folder f-icon-20 me-2"
                        >
                          <path
                            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                          ></path></svg
                        >Audio
                      </a>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="
                        feather feather-chevron-right
                        mx-1
                        text-muted
                        opacity-75
                        f-icon-15
                      "
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <div class="text-secondary">Patients</div>
                  </div>
                </div>

                <div
                  class="step-tabpanel"
                  id="breadcrumb-2"
                  style="display: none"
                >
                  <div
                    class="d-flex align-items-center user-media-getlist"
                    data-type="def"
                  >
                    <div>
                      <a href="#" class="text-decoration-none"
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
                          class="feather feather-folder f-icon-20 me-2"
                        >
                          <path
                            d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                          ></path></svg
                        >Audio</a
                      >
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="
                        feather feather-chevron-right
                        mx-1
                        text-muted
                        opacity-75
                        f-icon-15
                      "
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <div>
                      <a
                        href="#mediaPatientList-1;#breadcrumb-1"
                        class="text-decoration-none step-tabpanel-open"
                        >Patients</a
                      >
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="
                        feather feather-chevron-right
                        mx-1
                        text-muted
                        opacity-75
                        f-icon-15
                      "
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <div class="text-secondary">Floyd Miles</div>
                  </div>
                </div>

                <div class="ms-auto">5 <small>items</small></div>

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
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-bar-chart f-icon-20 me-n1"
                    >
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-repeat f-icon-18"
                  >
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                  </svg>
                </button>
              </nav>

              <!-- start::  -->
              <div class="overflow-hidden position-relative flex-fill">
                <perfect-scrollbar
                  class="d-flex flex-column position-absolute w-100 h-100 pe-3"
                >
                  <p>Modal body text goes here.</p>
                </perfect-scrollbar>
              </div>
            </div>
            <!-- end:: column media selector -->
          </div>
        </div>
        <!-- end::modal body -->

        <!-- start::modal footer -->
        <div class="modal-footer bg-grey-light py-25">
          <div class="row flex-fill">
            <div class="col f-col-xs">
              <div class="pe-1">
                <button class="btn btn-sm btn-primary btn-block">
                  Upload Files
                </button>
              </div>
            </div>
            <div class="col ps-4">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group btn-group-sm dropup">
                  <button
                    :disabled="false"
                    class="
                      btn btn-sm
                      d-inline-flex
                      align-items-center
                      btn-link
                      text-decoration-none
                      p-0
                      f-size-15
                    "
                    id="dropdownMediaShareConfirmDropdownMenuButtonId"
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
                      aria-labelledby="dropdownMediaShareConfirmDropdownMenuButtonId"
                    >
                      Share <span class="text-primary">10</span> selected items
                      in the conversation?
                    </div>
                    <div class="btn-group btn-group-sm mt-2 mb-3 w-100 px-5">
                      <button
                        type="button"
                        class="btn btn-success me-4 rounded"
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

                <div class="text-secondary">
                  <span id="shareListControl-cnt" default-val="0">0</span>/10
                  items selected
                </div>

                <!-- start:: confirm delete dropdown button -->
                <div class="btn-group btn-group-sm dropup">
                  <button
                    :disabled="false"
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
import FeatherX from "@/icons/FeatherX";
import FeatherTrash2 from "@/icons/FeatherTrash2";
import FeatherShare from "@/icons/FeatherShare";
import FeatherMic from "@/icons/FeatherMic";
export default {
  components: {FeatherMic, FeatherShare, FeatherTrash2, FeatherX },
  setup() {
    return {};
  },
};
</script>
