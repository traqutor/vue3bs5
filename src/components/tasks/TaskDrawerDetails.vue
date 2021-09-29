<template>
  <div v-if="task" class="flex-fill position-relative">
    <div
      class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden"
    >
      <!-- start::task details header -->
      <div class="mb-2 d-flex align-items-center">
        <TaskColorIndicator :color="task.badgeColour" />
        <div class="overflow-hidden">
          <div class="text-truncate f-size-16 font-weight-middle">
            {{ task.title }}
          </div>
        </div>
        <div class="d-flex align-items-center me-auto ms-2">
          <TaskStatusBadge class="ms-1" :task="task" />
          <TaskDueTimeBadge class="ms-1" :task="task" />
        </div>
        <div class="d-flex align-items-center ms-2">
          <button
            class="btn btn-sm btn-secondary-light shadow-none ms-2"
            @click="onCloseDrawer"
          >
            <feather-x />
          </button>
        </div>
      </div>
      <!-- end::task details header -->

      <!-- start::task detail navigation -->
      <nav class="side-nav-line">
        <div
          class="nav nav-tabs border-bottom border-secondary-light"
          style="min-height: 38px"
        >
          <a
            class="nav-item nav-link"
            :class="drawerViewMode === 'Details' && 'active'"
            @click="drawerViewMode = 'Details'"
            >Details</a
          >

          <a
            v-if="task.conversationId"
            class="nav-item nav-link"
            :class="drawerViewMode === 'Conversation' && 'active'"
            @click="drawerViewMode = 'Conversation'"
          >
            Conversation
            <span class="badge badge-pill ms-2 badge-primary"> 7</span>
          </a>

          <a
            v-if="task.fromLocation || task.toLocation"
            class="nav-item nav-link"
            :class="drawerViewMode === 'Location' && 'active'"
            @click="drawerViewMode = 'Location'"
            >Location</a
          >

          <div
            v-if="drawerViewMode === 'Conversation'"
            class="btn-toolbar ms-auto"
          >
            <div class="btn-group">
              <button
                type="button"
                class="
                  btn
                  shadow-none
                  btn-dark
                  bg-transparent
                  pl-3
                  pr-1
                  nav-item nav-link
                "
                data-bs-toggle="dropdown"
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
                  class="feather feather-more-horizontal f-icon-26"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
              <div
                class="
                  dropdown-menu dropdown-menu-sm dropdown-menu-right
                  shadow
                "
              >
                <button
                  class="dropdown-item step-tabpanel-open"
                  data-outside="true"
                  href="#dialog-content-section-2, #header-details-btn-group-2"
                >
                  Information
                </button>
                <button
                  type="button"
                  class="dropdown-item"
                  data-toggle="modal"
                  data-target="#ModalParticipantsAdd"
                >
                  Add participants
                </button>
                <a
                  class="dropdown-item step-tabpanel-open"
                  data-outside="true"
                  href="#dialog-content-section-5, #header-details-btn-group-2"
                  >Whisper to someone</a
                >
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- start::task detail navigation -->

      <!-- start::task details content -->
      <TaskDrawerDetailsContent
        v-if="drawerViewMode === 'Details'"
        :task="task"
      />
      <!-- end::task details content -->

      <!-- start::task details conversation -->
      <TaskDrawerDetailsConversation v-if="drawerViewMode === 'Conversation'" />
      <!-- end::task details conversation -->

      <!-- start::task details location -->
      <TaskDrawerDetailsLocation v-if="drawerViewMode === 'Location'" />
      <!-- end::task details location -->
    </div>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import TaskStatusBadge from "@/components/tasks/TaskStatusBadge";
import TaskDueTimeBadge from "@/components/tasks/TaskDueTimeBadge";
import FeatherX from "@/icons/FeatherX";
import { Mutations } from "@/store/enums/EnumTypes";
import TaskColorIndicator from "@/components/tasks/TaskColorIndicator";
import TaskDrawerDetailsContent from "@/components/tasks/tasksBoard/TaskDrawerDetailsContent";
import TaskDrawerDetailsConversation from "@/components/tasks/tasksBoard/TaskDrawerDetailsConversation";
import TaskDrawerDetailsLocation from "@/components/tasks/tasksBoard/TaskDrawerDetailsLocation";

export default {
  components: {
    TaskDrawerDetailsLocation,
    TaskDrawerDetailsConversation,
    TaskDrawerDetailsContent,

    TaskColorIndicator,
    FeatherX,
    TaskDueTimeBadge,
    TaskStatusBadge,
  },
  setup() {
    const drawerViewMode = ref("Details");

    const store = useStore();
    const task = computed(() => store.getters.getSelectedTask);

    const onCloseDrawer = () => {
      store.commit(Mutations.setIsTaskDrawerVisible, false);
    };

    watch(task, () => {
      drawerViewMode.value = "Details";
    });

    return {
      drawerViewMode,
      task,
      onCloseDrawer,
    };
  },
};
</script>
