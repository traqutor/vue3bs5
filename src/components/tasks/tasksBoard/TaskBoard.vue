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
                    class="drag-el"
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
                    class="drag-el"
                    draggable="true"
                    :task="task"
                    @dragstart="startDrag($event, task)"
                  />
                </template>
                <!-- end:task drag element -->
              </perfect-scrollbar>
              <!-- end::column scroll -->
            </div>
          </div>
          <!-- end::task column InProgress -->
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import TaskBoardItem from "@/components/tasks/tasksBoard/TaskBoardItem";
import { useStore } from "vuex";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherArrowSortVertical from "@/icons/FeatherArrowSortVertical";
import { Mutations } from "@/store/enums/EnumTypes";
export default {
  components: { FeatherArrowSortVertical, FeatherMoreVertical, TaskBoardItem },
  setup() {
    const store = useStore();
    const getList = (status) => {
      return store.getters.getTasks.filter(
        (task) => task.taskStatus === status
      );
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskId", item.id);
    };

    const onDrop = (event, status) => {
      const taskId = event.dataTransfer.getData("taskId");
      const task = store.getters.getTasks.find((item) => item.id === taskId);
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
<style>
.drop-zone {
  padding-top: 12px;
  padding-bottom: 24px;
  min-height: 24px;
}
.drag-el {
  transform: rotate(3deg);
  -moz-transform: rotate(3deg);
  -webkit-transform: rotate(3deg);
}
</style>
