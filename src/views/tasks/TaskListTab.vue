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
                <template v-for="task of tasks" :key="task.id">
                  <tr
                    class="task-item on-hover hover-action-group"
                    @click="onTaskSelect(task)"
                  >
                    <td class="ps-2">
                      <div class="d-flex align-items-center overflow-hidden">
                        <span class="f-icon me-3"
                          ><i
                            class="f-icon f-icon-24 rounded"
                            :style="`background-color: #${task.badgeColour}`"
                          ></i
                        ></span>
                        <div
                          class="
                            media-body
                            d-flex
                            align-items-center
                            font-weight-middle
                          "
                        >
                          {{ task.title }}
                        </div>
                        <div class="text-secondary f-size-13 ms-3">
                          #{{ task.id }}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="open-map text-primary-hover on-hover">
                        {{ task.fromLocation }}
                        <feather-arrow-right
                          class="text-muted mx-1 f-icon-16 opacity-75"
                        />
                        {{ task.toLocation }}
                      </div>
                    </td>
                    <td>
                      <span class="text-nowrap pe-5">
                        {{ timeTaskCreationFormat(task.created.seconds) }}
                      </span>
                    </td>
                    <td>
                      <span>{{ task.taskRequiredParticipants.length }}</span>
                    </td>
                    <td>
                      <div class="dropdown mw-6xl">
                        <span
                          class="
                            text-white
                            px-2
                            py-1
                            f-size-12
                            badge badge-pill
                            bg-task-new
                            shadow-none
                            font-weight-middle
                          "
                        >
                          New
                        </span>
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
                          >{{ dueTime(task.dateDeadline.seconds) }}</span
                        >
                      </div>
                    </td>
                  </tr>
                </template>
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
import { computed } from "vue";
import { useStore } from "vuex";
import {
  timeTaskCreationFormat,
  timeTaskDueFormat,
} from "@/services/datetime.service";
import FeatherRefreshCw from "@/icons/FeatherRefreshCw";
import FeatherFilter from "@/icons/FeatherFilter";
import FeatherArrowRight from "@/icons/FeatherArrowRight";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  components: {
    FeatherArrowRight,
    FeatherFilter,
    FeatherRefreshCw,
  },
  setup() {
    const store = useStore();
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const tasks = computed(() => store.getters.getTasks);

    const dueTime = (time) => timeTaskDueFormat(time);

    const onTaskSelect = (task) => {
      store.commit(Mutations.setSelectedTask, task);
      store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
    };

    return {
      isDrawerVisible,
      tasks,
      dueTime,
      timeTaskCreationFormat,
      onTaskSelect,
    };
  },
};
</script>
