<template>
  <div class="flex-slide-content row">
    <div class="col d-flex flex-column">
      <div class="flex-fill position-relative overflow-hidden">
        <perfect-scrollbar
          class="
            position-absolute
            h-100
            w-100
            pb-3
            section-todo-board
            table-todo-list
          "
        >
          <!-- start::task column New -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-new
                    text-white
                  "
                >
                  New<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("New").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />
                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'New')"
                @dragenter.prevent
                @dragover.prevent
              >
                <template v-for="task of getList('New')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    draggable="true"
                    :task="task"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column New -->

          <!-- start::task column InProgress -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-start
                    text-white
                  "
                >
                  Started<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("InProgress").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />

                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'InProgress')"
                @dragenter.prevent
                @dragover.prevent
              >
                <!-- start:task drag element -->
                <template v-for="task of getList('InProgress')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    :task="task"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column InProgress -->

          <!-- start::task column Queued -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-queue
                    text-white
                  "
                >
                  Queued<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("Queued").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />

                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'Queued')"
                @dragenter.prevent
                @dragover.prevent
              >
                <!-- start:task drag element -->
                <template v-for="task of getList('Queued')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    :task="task"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column Queued -->

          <!-- start::task column OnHold -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-hold
                    text-white
                  "
                >
                  On Hold<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("OnHold").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />

                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'OnHold')"
                @dragenter.prevent
                @dragover.prevent
              >
                <!-- start:task drag element -->
                <template v-for="task of getList('OnHold')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    :task="task"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column OnHold -->

          <!-- start::task column Overdue -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-overdue
                    text-white
                  "
                >
                  Overdue<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("Overdue").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />

                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'Overdue')"
                @dragenter.prevent
                @dragover.prevent
              >
                <!-- start:task drag element -->
                <template v-for="task of getList('Overdue')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    :task="task"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column Overdue -->

          <!-- start::task column Completed -->
          <div
            class="
              group-todo-board
              position-relative
              d-inline-block
              sortable-group
              me-2
            "
          >
            <div
              class="d-flex flex-column list-group-board sortable-group-content"
            >
              <!-- start::column header -->
              <div class="list-header-board pe-3 sortable-ignore">
                <div
                  class="
                    d-flex
                    align-items-center
                    flex-fill
                    rounded
                    ps-3
                    pe-0
                    py-2
                    bg-task-complete
                    text-white
                  "
                >
                  Completed<span
                    class="
                      f-size-20
                      font-weight-middle
                      ms-auto
                      sortable-counter
                    "
                    >{{ getList("Completed").length }}</span
                  >

                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="
                        btn
                        text-white-75 text-white-hover
                        border-0
                        px-2
                        shadow-none
                        rounded
                      "
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <feather-more-vertical class="f-icon-20" />
                    </button>
                    <div
                      class="
                        dropdown-menu dropdown-menu-sm dropdown-menu-right
                        shadow
                      "
                    >
                      <button
                        class="dropdown-item px-3 d-flex align-items-center"
                      >
                        <feather-arrow-sort-vertical
                          class="text-secondary f-icon-18 me-3"
                        />

                        <span class="ms-n1">Show newest</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end::column header -->

              <!-- start::column scroll -->
              <perfect-scrollbar
                class="
                  list-content-board
                  sortable-group-list
                  flex-fill
                  pe-3
                  mt-1
                  drop-zone
                "
                @drop="onDrop($event, 'Completed')"
                @dragenter.prevent
                @dragover.prevent
              >
                <!-- start:task drag element -->
                <template v-for="task of getList('Completed')" :key="task.id">
                  <TaskBoardItem
                    :id="task.id"
                    :task="task"
                    draggable="true"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column Completed -->
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskBoardItem from "@/components/tasks/tasksBoard/TaskBoardItem";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherArrowSortVertical from "@/icons/FeatherArrowSortVertical";
import { Mutations, TASKS_BOARD_VIEW_MODES } from "@/store/enums/EnumTypes";

export default {
  components: { FeatherArrowSortVertical, FeatherMoreVertical, TaskBoardItem },
  setup() {
    const store = useStore();
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const boardViewMode = computed(() => store.getters.getTasksBoardViewMode);

    const getList = (status) => {
      if (boardViewMode.value === TASKS_BOARD_VIEW_MODES.MY_REQUESTS) {
        return store.getters.getRequestedTasks.filter(
          (task) =>
            task.taskStatus === status &&
            loggedUser.value &&
            task.creatorId === loggedUser.value.id
        );
      } else {
        return store.getters.getMyTasks.filter(
          (task) => task.taskStatus === status
        );
      }
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskId", item.id);
      const el = document.getElementById(`${item.id}`);
      event.dataTransfer.setDragImage(el, 50, 50);
    };

    const onDrop = async (event, status) => {
      const taskId = event.dataTransfer.getData("taskId");
      const task = await store.getters.getTasks.find(
        (item) => +item.id === +taskId
      );
      store.commit(Mutations.setUpdatedTask, { ...task, taskStatus: status });
    };

    return {
      getList,
      startDrag,
      onDrop,
    };
  },
};
</script>
