<template>
  <div class="flex-fill position-relative">
    <div
      class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden"
    >
      <!-- start::filter task types -->
      <div class="d-flex align-items-center pe-3">
        <div class="media-body d-flex">
          <div
            class="input-group input-group-sm flex-grow-1 filter-control-group"
          >
            <input
              type="text"
              v-model="searchText"
              class="form-control is-filter-control bg-light shadow-none"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button
                class="
                  btn btn-light
                  border-left-0
                  text-secondary text-dark-hover
                  btn-filter-control
                "
                type="button"
              >
                <feather-search />
              </button>
            </div>
          </div>

          <!-- start::task types filter categories dropdown -->
          <div class="dropdown ms-3" role="group">
            <button
              type="button"
              class="btn btn-sm btn-primary rounded shadow-none"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <feather-filter />
            </button>
            <div
              class="
                dropdown-menu dropdown-menu-sm dropdown-menu-right
                shadow
                dropdown-insert-click
                toggle-filter-group
              "
            >
              <div class="dropdown-header text-secondary pt-0 pb-1">
                Filter by Type
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
                  name="filter-type"
                  checked=""
                  class="toggle-filter-control"
                  value="all"
                />
                <span class="input-icon f-icon-20">
                  <feather-circle />
                  <feather-check-circle /> </span
                >All
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
                  name="filter-type"
                  class="toggle-filter-control"
                  value="type1"
                />
                <span class="input-icon f-icon-20"
                  ><feather-circle /> <feather-check-circle /></span
                >Clinical
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
                  name="filter-type"
                  class="toggle-filter-control"
                  value="type2"
                />
                <span class="input-icon f-icon-20"
                  ><feather-circle /> <feather-check-circle /></span
                >Maintenance
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
                  name="filter-type"
                  class="toggle-filter-control"
                  value="type3"
                />
                <span class="input-icon f-icon-20"
                  ><feather-circle /> <feather-check-circle /></span
                >Porter
              </label>
            </div>
          </div>
          <!-- end::task types filter categories dropdown -->
        </div>
        <!-- start::display task types as grid or list -->
        <div class="side-nav-line ms-3">
          <nav
            class="nav nav-inline nav-tabs border-0 align-items-center d-flex"
          >
            <a
              class="btn border-0 nav-link shadow-none p-0"
              :class="!isListMode && 'active'"
              @click="isListMode = false"
            >
              <feather-grid class="f-icon-24" />
            </a>
            <a
              class="btn border-0 nav-link ms-2 shadow-none p-0"
              :class="isListMode && 'active'"
              @click="isListMode = true"
            >
              <feather-list class="f-icon-30" />
            </a>
          </nav>
        </div>
        <!-- end::display task types as grid or list -->
      </div>
      <!-- end::filter task types -->

      <!-- start::task types list -->
      <div class="d-flex flex-column flex-fill mt-3">
        <div
          class="position-relative overflow-hidden d-flex flex-column flex-fill"
        >
          <perfect-scrollbar
            class="
              tab-content
              d-flex
              flex-column
              position-absolute
              h-100
              w-100
              pe-3
            "
          >
            <!-- start::list mode -->
            <div
              v-if="isListMode"
              class="list-group list-group-flush"
              id="task-group-type"
            >
              <button
                v-for="taskType of taskTypes"
                :key="taskType.id"
                @click="onTaskTypeSelect(taskType)"
                class="
                  list-group-item
                  rounded
                  list-group-item-action
                  border-0
                  p-2
                "
              >
                <div class="d-flex align-items-center overflow-hidden">
                  <TaskColorIndicator :color="taskType.badgeColour" />

                  <div class="media-body">
                    <span class="me-auto is-filtered text-truncate">{{
                      taskType.title
                    }}</span>
                    <span class="ms-3 text-secondary is-hidden filter-label"
                      >Clinical</span
                    >
                  </div>
                </div>
              </button>
              <div
                v-if="taskTypes.length <= 0"
                class="no-filter-results py-3 h6"
              >
                No results
              </div>
            </div>
            <!-- end::list mode -->

            <!-- start::grid mode -->
            <div
              v-else
              class="
                d-flex
                flex-wrap
                list-media-group list-group-lg
                table-todo-list
                mt-3
              "
            >
              <div
                v-for="taskType of taskTypes"
                :key="taskType.id"
                @click="onTaskTypeSelect(taskType)"
                class="
                  list-media-item
                  alert
                  border-secondary-light
                  bg-grey-light
                  on-hover
                  d-flex
                  align-items-center
                  ps-2
                  py-2
                "
              >
                <TaskColorIndicator :color="taskType.badgeColour" />

                <div class="media-body ms-n1 text-dark font-weight-middle">
                  {{ taskType.title }}
                </div>
              </div>

              <div
                v-if="taskTypes.length <= 0"
                class="no-filter-results py-3 h6"
              >
                No results
              </div>
            </div>
            <!-- end::grid mode -->
          </perfect-scrollbar>
        </div>
      </div>
      <!-- end::task types list -->
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import FeatherGrid from "@/icons/FeatherGrid";
import FeatherList from "@/icons/FeatherList";
import { Mutations } from "@/store/enums/EnumTypes";
import TaskColorIndicator from "@/components/tasks/TaskColorIndicator";
import FeatherFilter from "@/icons/FeatherFilter";
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";
import FeatherSearch from "@/icons/FeatherSearch";

export default {
  components: {
    FeatherSearch,
    FeatherCheckCircle,
    FeatherCircle,
    FeatherFilter,
    TaskColorIndicator,
    FeatherList,
    FeatherGrid,
  },
  setup() {
    const isListMode = ref();
    const searchText = ref();
    const store = useStore();
    const taskTypes = computed(() => {
      console.log("searchText.value", searchText.value);

      return searchText.value
        ? store.getters.getTaskTypes.filter((type) => {
            return type.title.toLowerCase().includes(searchText.value.toLowerCase());
          })
        : store.getters.getTaskTypes;
    });

    const onTaskTypeSelect = (type) => {
      store.commit(Mutations.setSelectedTaskTypeCreation, type);
    };

    return {
      isListMode,
      searchText,
      taskTypes,
      onTaskTypeSelect,
    };
  },
};
</script>
