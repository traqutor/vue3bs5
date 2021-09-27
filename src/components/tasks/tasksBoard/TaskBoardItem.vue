<template>
  <div
    class="card bg-grey-light mt-3 sortable-item hover-visible-group on-hover"
    :class="selectedTaskId === task.id && 'collapse-list-open'"
    @click="onTaskSelect"
  >
    <div
      class="d-flex px-3 py-2 align-items-center dropdown hover-action-group"
    >
      <div class="d-flex align-items-center overflow-hidden me-auto">
        <task-color-indicator :task="task" />
        <div
          class="
            media-body
            font-weight-middle
            ms-n1
            f-size-15
            text-dark text-truncate
          "
        >
          {{ task.title }}
        </div>
      </div>

      <div
        class="
          d-inline-flex
          align-items-center
          position-absolute position-right-center
          me-1
        "
      >
        <div class="bg-grey-light p-2 on-hover-visible">
          <button
            class="btn btn-primary btn-circle btn-sm shadow-none f-icon-24"
          >
            <feather-map-pin class="f-icon-18" />
          </button>
        </div>
      </div>
    </div>

    <div class="px-3 pb-2 f-size-13">
      <div class="position-relative mt-1">
        <i
          class="
            f-icon
            position-absolute position-left-center
            h-20
            border-left border-grey
            ms-25
            opacity-50
          "
        ></i>

        <div class="d-flex align-items-center">
          <feather-map-pin class="me-2 ms-1 text-secondary" />
          <div class="media-body">{{ task.fromLocation }}</div>
        </div>
        <div class="d-flex align-items-center mt-2">
          <feather-map-pin class="me-2 ms-1 text-secondary" />
          <div class="media-body">{{ task.toLocation }}</div>
        </div>
      </div>

      <div class="d-flex align-items-center mt-2">
        <div class="d-flex align-items-center">
          <feather-clock class="me-2 ms-1 text-secondary" />

          <div class="media-body text-nowrap">
            Raised {{ timeTaskCreationFormat(task.created.seconds) }}
          </div>
        </div>

        <div class="d-flex align-items-center ms-auto">
          <span class="text-secondary ms-2">#{{ task.id }}</span>
        </div>
      </div>

      <div class="border-top border-secondary-light my-25"></div>

      <div class="d-flex">
        <div class="media-body">
          <div class="d-inline-flex dropdown hover-action-group">
            <div
              class="
                d-flex
                align-items-center
                on-hover
                opacity-50 opacity-hover-1
              "
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <template v-if="task.taskRequiredParticipants.length === 1">
                <ParticipantAvatarNameItem
                  :participant-id="task.taskRequiredParticipants[0].userId"
                />
              </template>
              <template v-if="task.taskRequiredParticipants.length > 1">
                <div class="avatar-group avatar-group-move me-2">
                  <ParticipantAvatar
                    class="avatar-lg"
                    v-for="participant of task.taskRequiredParticipants.slice(
                      0,
                      4
                    )"
                    :key="participant.userId"
                    :participant-id="participant.userId"
                  />
                  <a
                    v-if="task.taskRequiredParticipants.length > 4"
                    class="avatar avatar-lg btn bg-primary"
                  >
                    <small
                      >+{{ task.taskRequiredParticipants.length - 4 }}</small
                    >
                  </a>
                </div>
              </template>
            </div>
            <div
              class="dropdown-menu dropdown-menu-sm shadow pt-0 cursor-default"
            >
              <div class="d-flex align-items-center dropdown-item-text py-2">
                <div class="avatar avatar-lg me-3 ms-n1 shadow-none">
                  <img src="images/avatar/2.jpg" alt="" draggable="false" />
                </div>
                <div class="media-body ms-n1">
                  <div class="font-weight-middle text-nowrap">James Dean</div>
                  <div class="text-secondary f-size-12 text-nowrap">
                    Porter #2
                  </div>
                </div>
              </div>
              <button class="dropdown-item" type="button">Send Message</button>
              <button class="dropdown-item" type="button">Information</button>
            </div>
          </div>
        </div>

        <div class="text-right">
          <div class="f-size-10 text-uppercase text-secondary mb-1">
            Time Remaining
          </div>
          <TaskDueTimeBadge class="me-0" :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherClock from "@/icons/FeatherClock";
import TaskColorIndicator from "@/components/tasks/TaskColorIndicator";
import TaskDueTimeBadge from "@/components/tasks/TaskDueTimeBadge";
import { timeTaskCreationFormat } from "@/services/datetime.service";
import {Actions, Mutations} from "@/store/enums/EnumTypes";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  props: ["task"],
  components: {
    ParticipantAvatar,
    ParticipantAvatarNameItem,
    TaskDueTimeBadge,
    TaskColorIndicator,
    FeatherClock,
    FeatherMapPin,
  },
  setup(props) {
    const store = useStore();
    const selectedTaskId = computed(() => store.getters.getSelectedTaskId);
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const onTaskSelect = () => {
      if (selectedTaskId.value === props.task.id) {
        store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
      } else {
        store.commit(Mutations.setIsTaskDrawerVisible, true);
      }
      store.dispatch(Actions.onSelectTask, props.task.id);
    };

    return {
      selectedTaskId,
      onTaskSelect,
      timeTaskCreationFormat,
    };
  },
};
</script>
