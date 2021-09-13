<template>
  <div class="flex-section-slide flex-fill">
    <div class="flex-slide-content row">
      <div class="col d-flex flex-column">
        <!-- start::header buttons -->
        <div class="list-group list-group-horizontal nav-fill list-group-task">
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              text-white
              bg-task-new
              toggle-filter-control
              shadow-none
            "
          >
            New<span class="f-size-24 font-weight-middle ms-auto">3</span>
          </button>
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              bg-task-start
              text-white
              toggle-filter-control
              shadow-none
            "
          >
            Started<span class="f-size-24 font-weight-middle ms-auto">2</span>
          </button>
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              bg-task-queue
              text-white
              toggle-filter-control
              shadow-none
            "
            filter-value="3"
          >
            Queued<span class="f-size-24 font-weight-middle ms-auto">1</span>
          </button>
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              bg-task-hold
              text-white
              toggle-filter-control
              shadow-none
            "
            filter-value="4"
          >
            On Hold<span class="f-size-24 font-weight-middle ms-auto">0</span>
          </button>
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              bg-task-overdue
              text-white
              toggle-filter-control
              shadow-none
            "
            filter-value="5"
          >
            Overdue<span class="f-size-24 font-weight-middle ms-auto">0</span>
          </button>
          <button
            class="
              btn btn-sm
              list-group-item
              nav-link
              d-flex
              align-items-center
              flex-fill
              w-25
              rounded
              px-3
              list-task-item
              bg-task-complete
              text-white
              toggle-filter-control
              shadow-none
            "
            filter-value="6"
          >
            Completed<span class="f-size-24 font-weight-middle ms-auto">0</span>
          </button>

          <div class="btn-group-vertical btn-group-vertical-separate ms-3">
            <button class="btn btn-sm btn-primary toggle-filter-control">
              <feather-refresh-cw />
            </button>
            <button class="btn btn-sm btn-primary shadow-none">
              <feather-filter />
            </button>
          </div>
        </div>
        <!-- end::header buttons -->

        <div class="flex-fill position-relative overflow-hidden mt-4">
          <!-- start::table -->
          <perfect-scrollbar
            class="d-flex flex-column position-absolute h-100 w-100 pe-3"
          >
            <table
              class="
                table
                table-hover
                table-head-sticky
                table-self-middle
                table-todo-list
                table-collapse-list
              "
              id="task-full-list"
            >
              <thead>
                <tr class="bg-white font-weight-middle">
                  <th scope="col" class="pt-1 text-nowrap border-0">Type</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Location
                  </th>
                  <th scope="col" class="pt-1 text-nowrap border-0">Raised</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Assigned To
                  </th>
                  <th scope="col" class="pt-1 text-nowrap border-0">Status</th>
                  <th scope="col" class="pt-1 text-nowrap border-0">
                    Due Time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="task-item on-hover hover-action-group"
                  @click="onTaskSelect('task')"
                >
                  <td class="ps-2">
                    <div class="d-flex align-items-center overflow-hidden">
                      <span class="f-icon me-3"
                        ><i class="f-icon f-icon-24 rounded todo-label-6"></i
                      ></span>
                      <div
                        class="
                          media-body
                          d-flex
                          align-items-center
                          font-weight-middle
                        "
                      >
                        Patient Transfer
                      </div>
                      <div class="text-secondary f-size-13 ms-3">#121</div>
                    </div>
                  </td>
                  <td>
                    <div class="open-map text-primary-hover on-hover">
                      ICU Pod 1, Bed 5
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
                          feather feather-arrow-right
                          text-muted
                          mx-1
                          f-icon-16
                          opacity-75
                        "
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                      Bed 1, Oxley South
                    </div>
                  </td>
                  <td>
                    <span
                      class="text-nowrap pe-5"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="12:18 pm • Today"
                      >2 <small>min ago</small></span
                    >
                  </td>
                  <td>
                    <div
                      class="
                        d-inline-flex
                        dropdown
                        hover-action-group
                        clear-action
                      "
                    >
                      <div
                        class="
                          media
                          align-items-center
                          on-hover
                          opacity-50 opacity-hover-1
                        "
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <figure class="avatar avatar-md me-3" data-initial="YZ">
                          <img src="images/avatar/2.jpg" alt="..." />
                        </figure>
                        <div class="media-body overflow-hidden ms-n1">
                          <div class="text-truncate font-weight-middle">
                            James Dean
                          </div>
                          <div class="text-truncate text-secondary f-size-12">
                            Porter #2
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          dropdown-menu dropdown-menu-sm
                          shadow
                          pt-0
                          cursor-default
                        "
                      >
                        <div
                          class="
                            media
                            align-items-center
                            dropdown-item-text
                            py-2
                          "
                        >
                          <div class="avatar avatar-lg me-3 ms-n1 shadow-none">
                            <img src="images/avatar/2.jpg" alt="" />
                          </div>
                          <div class="media-body ms-n1">
                            <div class="font-weight-middle text-nowrap">
                              James Dean
                            </div>
                            <div class="text-secondary f-size-12 text-nowrap">
                              Porter #2
                            </div>
                          </div>
                        </div>
                        <button class="dropdown-item" type="button">
                          Send Message
                        </button>
                        <button class="dropdown-item" type="button">
                          Information
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="dropdown mw-6xl">
                      <button
                        class="
                          btn btn-block
                          text-white
                          px-2
                          py-1
                          f-size-12
                          badge badge-pill
                          bg-task-new
                          shadow-none
                          font-weight-middle
                        "
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-offset="-15,5"
                      >
                        New
                      </button>

                      <div
                        class="
                          dropdown-menu dropdown-menu-sm
                          shadow
                          dropdown-insert-click
                          btn-status-group
                        "
                      >
                        <div class="dropdown-item-text">
                          <button
                            type="button"
                            class="
                              btn btn-sm
                              text-white
                              bg-task-start
                              btn-block
                              shadow-none
                              btn-status-toggle
                            "
                            status-pressed="false"
                          >
                            Start
                          </button>
                          <button
                            type="button"
                            class="
                              btn btn-sm
                              text-white
                              bg-task-queue
                              btn-block
                              shadow-none
                              btn-status-toggle
                            "
                            status-pressed="false"
                          >
                            Queue
                          </button>
                          <button
                            type="button"
                            class="
                              btn btn-sm
                              text-white
                              bg-task-hold
                              btn-block
                              shadow-none
                              btn-status-toggle
                            "
                            status-pressed="false"
                          >
                            Hold
                          </button>
                          <button
                            type="button"
                            class="
                              btn btn-sm
                              text-white
                              bg-task-complete
                              btn-block
                              shadow-none
                              btn-status-toggle
                            "
                            status-pressed="false"
                          >
                            Completed
                          </button>
                        </div>
                        <div class="is-hidden status-group-control">
                          <div class="dropdown-divider"></div>
                          <div class="dropdown-item-text">
                            <button
                              type="button"
                              class="
                                btn btn-sm btn-primary btn-block
                                shadow-none
                                btn-status-control
                              "
                              disabled=""
                            >
                              Update status
                            </button>
                          </div>
                        </div>

                        <div class="dropdown-divider"></div>
                        <div class="dropdown-item-text">
                          <button
                            type="button"
                            class="btn btn-sm btn-danger btn-block shadow-none"
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
                              class="feather feather-rocket me-2"
                            >
                              <path
                                d="M 15.095 12.007 C 16.802 12.007 18.185 10.623 18.185 8.917 C 18.185 7.21 16.802 5.826 15.095 5.826 C 13.388 5.826 12.005 7.21 12.005 8.917 C 12.005 10.623 13.388 12.007 15.095 12.007 Z"
                              ></path>
                              <path
                                d="M 6.442 8.153 C 4.326 8.239 3.23 8.836 1.512 11.223 C 1.506 11.231 1.512 11.243 1.522 11.243 L 5.201 11.243 C 5.204 11.243 5.207 11.244 5.21 11.246"
                              ></path>
                              <path
                                d="M 15.859 16.951 C 16.279 18.836 15.594 20.054 12.789 22.495 C 12.781 22.503 12.768 22.497 12.768 22.487 L 12.768 18.81 C 12.768 18.807 12.767 18.804 12.765 18.802"
                              ></path>
                              <path
                                d="M 10.765 18.871 C 19.151 14.479 22.413 12.734 22.511 1.513 C 22.511 1.506 22.505 1.5 22.498 1.5 C 11.554 1.829 9.156 4.232 5.104 13.246"
                              ></path>
                              <path
                                d="M 7.061 14.478 C 7.951 14.044 8.487 14.015 9.528 14.477 C 9.531 14.478 9.533 14.48 9.534 14.483 C 10.008 15.463 10.077 16.007 9.533 16.95 L 9.532 16.952 C 8.131 18.513 6.269 19.434 4.098 20.102 C 4.088 20.105 3.359 20.301 3.362 20.291 C 4.297 17.636 6.056 15.203 7.059 14.48 L 7.061 14.478 Z"
                              ></path></svg
                            >Boost
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <span
                        class="
                          badge badge-pill badge-danger
                          me-4
                          px-2
                          py-1
                          f-size-13
                          font-weight-middle
                          text-spacing text-monospace
                          timer
                        "
                        data-starttimer="10"
                        >09:15</span
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </perfect-scrollbar>
          <!-- end::table -->
        </div>
      </div>
    </div>

    <!-- start::drawer -->
    <div
      class="
        d-flex
        flex-column flex-slide-col flex-slide-col-right
        ps-4
        f-col-lg
      "
      :class="isDrawerVisible && 'show'"
    >
      <div
        class="
          flex-fill
          ps-4
          d-flex
          flex-column
          steps-section
          overflow-hidden
          border-secondary-light border-left
        "
      ></div>
    </div>
    <!-- end::drawer -->
  </div>
</template>
<script>
import FeatherRefreshCw from "@/icons/FeatherRefreshCw";
import FeatherFilter from "@/icons/FeatherFilter";
import { useStore } from "vuex";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
export default {
  components: { FeatherFilter, FeatherRefreshCw },
  setup() {
    const store = useStore();
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const onTaskSelect = (task) => {
      console.log(task);
      store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
    };

    return { isDrawerVisible, onTaskSelect };
  },
};
</script>
