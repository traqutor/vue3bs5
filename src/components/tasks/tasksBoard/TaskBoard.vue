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
          <!-- start::task column Unassigned -->
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
              <TasksBoardColumnHeader
                title="Unassigned"
                :counter="getList('New').length"
                background-class="bg-task-new"
              />

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
          <!-- end::task column Unassigned -->

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
              <TasksBoardColumnHeader
                title="Started"
                :counter="getList('InProgress').length"
                background-class="bg-task-start"
              />

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
              <TasksBoardColumnHeader
                title="Started"
                :counter="getList('InProgress').length"
                background-class="bg-task-queue"
              />

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
              <TasksBoardColumnHeader
                title="Completed"
                :counter="getList('Completed').length"
                background-class="bg-task-complete"
              />

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
import { Mutations, TASKS_BOARD_VIEW_MODES } from "@/store/enums/EnumTypes";
import TasksBoardColumnHeader from "@/components/tasks/tasksBoard/TasksBoardColumnHeader";

export default {
  components: {
    TasksBoardColumnHeader,
    TaskBoardItem,
  },
  setup() {
    const store = useStore();
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const boardViewMode = computed(() => store.getters.getTasksBoardViewMode);

    const getList = (status) => {
      let tasks = store.getters.getUnassignedTasks.filter(
        (task) => task.taskStatus === status
      );
      if (boardViewMode.value === TASKS_BOARD_VIEW_MODES.MY_REQUESTS) {
        tasks = tasks.concat(
          store.getters.getRequestedTasks.filter(
            (task) =>
              task.taskStatus === status &&
              loggedUser.value &&
              task.creatorId === loggedUser.value.id
          )
        );
      } else {
        tasks = tasks.concat(
          store.getters.getMyTasks.filter((task) => task.taskStatus === status)
        );
      }
      return tasks;
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
      const task = await store.getters.getUnassignedTasks.find(
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
