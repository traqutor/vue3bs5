<template>
  <div class="h-100">
    <div class="d-flex flex-column h-100">
      <div class="flex-section-slide flex-fill">
        <div class="flex-slide-content row">
          <div class="col d-flex flex-column">
            <!-- start::search task types input -->
            <div class="row">
              <div class="col f-col-sm">
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control bg-light shadow-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button
                      class="
                        btn btn-light
                        border-left-0
                        text-secondary text-dark-hover
                      "
                      type="button"
                      id="button-addon2"
                    >
                      <feather-search />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col d-flex align-self-center justify-content-end">
                <div class="btn-group align-items-center">
                  <div class="f-size-13">Per page</div>
                  <div class="btn-group">
                    <button
                      class="
                        btn btn-sm btn-link
                        text-decoration-none
                        dropdown-toggle
                        shadow-none
                      "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      50
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                        w-auto
                      "
                    >
                      <button
                        class="dropdown-item active"
                        @click="onSelectPerPage(50)"
                      >
                        50
                      </button>
                      <button
                        class="dropdown-item"
                        @click="onSelectPerPage(100)"
                      >
                        100
                      </button>
                      <button
                        class="dropdown-item"
                        @click="onSelectPerPage(200)"
                      >
                        200
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end::search task types input -->

            <!-- start::search task types list -->
            <div class="flex-fill position-relative overflow-hidden mt-4">
              <perfect-scrollbar
                class="d-flex flex-column position-absolute h-100 w-100 pr-3"
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
                      <th scope="col" class="pt-1 text-nowrap border-0">
                        Name
                      </th>
                      <th scope="col" class="pt-1 text-nowrap border-0">
                        Boost Priority
                      </th>
                      <th scope="col" class="pt-1 text-nowrap border-0">
                        Overdue
                      </th>
                      <th scope="col" class="pt-1 text-nowrap border-0">
                        Task recipients
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item of taskTypes"
                      :key="item.id"
                      class="task-item on-hover hover-action-group"
                      @click="onSelectTaskType(item)"
                    >
                      <td class="ps-2">
                        <div class="d-flex align-items-center overflow-hidden">
                          <span class="f-icon me-3"
                            ><i
                              class="f-icon f-icon-24 rounded"
                              :style="`background-color: ${item.badgeColour}`"
                            ></i
                          ></span>
                          <div class="media-body font-weight-middle">
                            {{ item.title }}
                          </div>
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </perfect-scrollbar>
            </div>
            <!-- end::search task types input -->

            <!-- start::search task types pagination footer -->
            <div class="d-flex align-items-center mt-3 position-relative">
              <div class="text-secondary f-size-13 position-absolute">
                11 results
              </div>

              <ul
                class="
                  pagination pagination-clear pagination-sm
                  mb-0
                  mx-auto
                  justify-content-center
                  font-weight-middle
                "
              >
                <li class="page-item">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(0)"
                    ><feather-chevrons-left class="f-icon-20" />
                  </span>
                </li>
                <li class="page-item">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    ><feather-chevrons-left class="f-icon-20"
                  /></span>
                </li>
                <li class="page-item page-num active">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    >1</span
                  >
                </li>
                <li class="page-item page-num">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    >2</span
                  >
                </li>
                <li class="page-item">
                  <span class="page-more"
                    ><feather-more-horizontal class="f-icon-20"
                  /></span>
                </li>
                <li class="page-item page-num">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    >7</span
                  >
                </li>
                <li class="page-item">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    ><feather-chevron-right class="f-icon-20"
                  /></span>
                </li>
                <li class="page-item">
                  <span
                    class="page-link on-hover"
                    @click="onSelectPagination(1)"
                    ><feather-chevrons-right class="f-icon-20" />
                  </span>
                </li>
              </ul>
            </div>
            <!-- end::search task types pagination footer -->
          </div>
        </div>

        <!-- start::search task types right drawer -->
        <div
          v-if="selectedTaskType"
          class="
            d-flex
            flex-column
            flex-slide-col
            flex-slide-col-right
            flex-slide-col-absolute
            bg-white
            ps-4
            shadow
            border-secondary-light border-left
            overflow-hidden
            f-col-mx
          "
          :class="selectedTaskType && 'show'"
        >
          <div class="flex-fill position-relative">
            <div
              class="
                d-flex
                flex-column
                h-100
                w-100
                position-absolute
                overflow-hidden
              "
            >
              <div class="mb-2 d-flex align-items-center">
                <span class="f-icon me-3"
                  ><i
                    class="f-icon f-icon-24 rounded"
                    :style="`background-color: ${selectedTaskType.badgeColour}`"
                  ></i
                ></span>
                <div class="overflow-hidden ms-n1">
                  <div class="text-truncate f-size-16 font-weight-middle">
                    {{ selectedTaskType.title }}
                  </div>
                </div>

                <button
                  class="btn btn-sm btn-secondary-light shadow-none ms-auto"
                  @click="onSelectTaskType(selectedTaskType)"
                >
                  <feather-x />
                </button>
              </div>

              <div class="d-flex flex-column flex-fill mt-3">
                <div
                  class="
                    position-relative
                    overflow-hidden
                    d-flex
                    flex-column flex-fill
                  "
                >
                  <task-type-definition-form />
                </div>
              </div>

              <div class="btn-group btn-group-sm mt-3">
                <button
                  type="button"
                  class="btn btn-sm rounded w-50 btn-primary me-4"
                >
                  Edit
                </button>
                <button type="button" class="btn btn-sm rounded w-50 btn-info">
                  Clone
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- start::search task types right drawer -->
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";
import FeatherChevronsLeft from "@/icons/FeatherChevronsLeft";
import FeatherChevronRight from "@/icons/FeatherChevronRight";
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";
import FeatherChevronsRight from "@/icons/FeatherChevronsRight";
import FeatherSearch from "@/icons/FeatherSearch";
import TaskTypeDefinitionForm from "@/components/settings/taskFlow/TaskTypeDefinitionForm";

export default {
  components: {
    TaskTypeDefinitionForm,
    FeatherSearch,
    FeatherChevronsRight,
    FeatherMoreHorizontal,
    FeatherChevronRight,
    FeatherChevronsLeft,
    FeatherX,
  },
  setup() {
    const store = useStore();
    const taskTypes = computed(() => store.getters.getTaskTypes);
    const selectedTaskType = computed(() => store.getters.getSelectedTaskType);

    const onSelectTaskType = (item) => {
      if (!selectedTaskType.value || selectedTaskType.value.id !== item.id) {
        store.commit(Mutations.setSelectedTaskType, item);
      } else {
        store.commit(Mutations.setSelectedTaskType, null);
      }
    };

    const onSelectPagination = (select) => {
      console.log(select);
    };

    const onSelectPerPage = (select) => {
      console.log(select);
    };

    return {
      selectedTaskType,
      taskTypes,
      onSelectPagination,
      onSelectTaskType,
      onSelectPerPage,
    };
  },
};
</script>
