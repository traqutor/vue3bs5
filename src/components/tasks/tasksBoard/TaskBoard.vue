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
                "
              >
                <Container
                  @drop="(e) => onDrop(e, 'New')"
                  @drag-start="(e) => console.log('drag start', e)"
                  @drag-end="(e) => console.log('drag end', e)"
                  :get-child-payload="getTaskPayload('taskId')"
                  drag-class="card-ghost"
                  drop-class="card-ghost-drop"
                  :drop-placeholder="dropPlaceholderOptions"
                >
                  <Draggable v-for="task of getList('New')" :key="task.id">
                    <TaskBoardItem :task="task" />
                  </Draggable>
                </Container>
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
                "
              >
                <Container @drop="onDrop($event, 'InProgress')">
                  <!-- start:task drag element -->
                  <Draggable
                    v-for="task of getList('InProgress')"
                    :key="task.id"
                  >
                    <TaskBoardItem :task="task" />
                  </Draggable>
                  <!-- end:task drag element -->
                </Container>
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
                "
              >
                <Container @drop="onDrop($event, 'Queued')">
                  <!-- start:task drag element -->
                  <Draggable v-for="task of getList('Queued')" :key="task.id">
                    <TaskBoardItem :task="task" />
                  </Draggable>
                  <!-- end:task drag element -->
                </Container>
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
                "
              >
                <Container @drop="onDrop($event, 'Completed')">
                  <!-- start:task drag element -->
                  <Draggable
                    v-for="task of getList('Completed')"
                    :key="task.id"
                  >
                    <TaskBoardItem :task="task" />
                  </Draggable>
                  <!-- end:task drag element -->
                </Container>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { Container, Draggable } from "vue-dndrop";
import TaskBoardItem from "@/components/tasks/tasksBoard/TaskBoardItem";
import { Mutations, TASKS_BOARD_VIEW_MODES } from "@/store/enums/EnumTypes";
import TasksBoardColumnHeader from "@/components/tasks/tasksBoard/TasksBoardColumnHeader";

export default {
  components: {
    TasksBoardColumnHeader,
    Container,
    Draggable,
    TaskBoardItem,
  },
  setup() {
    const store = useStore();
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const boardViewMode = computed(() => store.getters.getTasksBoardViewMode);
    const dropPlaceholderOptions = ref({
      className: "drop-preview",
      animationDuration: "150",
      showOnTop: true,
    });

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

    const getTaskPayload = (taskId) => {
      return (index) => {
        return taskId + index;
      };
    };

    const startDrag = (event, item) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskId", item.id);
      const el = document.getElementById(`${item.id}`);
      event.dataTransfer.setDragImage(el, 50, 50);
    };

    const onDrop = async (event, status) => {
      console.log("On drop", event);
      console.log("On drop", status);
      //
      // const taskId = event.dataTransfer.getData("taskId");
      // const task = await store.getters.getTasks.find(
      //   (item) => +item.id === +taskId
      // );
      // store.commit(Mutations.setUpdatedTask, { ...task, taskStatus: status });
    };

    return {
      dropPlaceholderOptions,
      getList,
      getTaskPayload,
      startDrag,
      onDrop,
    };
  },
};
</script>
