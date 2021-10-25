<template>
  <tr
    class="custom-table-row"
    :class="task.id === selectedTaskId && 'collapse-list-open'"
    @click="onTaskSelect(task)"
  >
    <td class="custom-td task-no">
      <span class="label">{{ task.id }}</span>
    </td>
    <td class="custom-td">
      <span class="label">{{ task.title }}</span>
    </td>
    <td class="custom-td">
      <span class="label">
        {{ task.fromLocation }}
        <feather-arrow-right class="f-icon-16" />
        {{ task.toLocation }}
      </span>
    </td>
    <td class="custom-td">
      <span class="label">
        {{ timeTaskCreationFormat(task.created.seconds) }}
      </span>
    </td>
    <td class="custom-td">
      <span class="label" v-if="task.taskRequiredParticipants">
        <ParticipantAvatar
          :participant-id="task.taskRequiredParticipants[0].userId"
        />
        {{ getParticipant(task.taskRequiredParticipants[0].userId).name }}
      </span>
    </td>
    <td class="custom-td">
      <span class="label">{{ task.taskStatus }}</span>
    </td>
  </tr>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { timeTaskCreationFormat } from "@/services/datetime.service";
import FeatherArrowRight from "@/icons/FeatherArrowRight";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  components: {
    ParticipantAvatar,
    FeatherArrowRight,
  },
  props: ["task"],
  setup() {
    const store = useStore();

    const selectedTaskId = computed(() => store.getters.getSelectedTaskId);
    const isDrawerVisible = computed(
      () => store.getters.getIsTaskDrawerVisible
    );

    const getParticipant = (id) => {
      return store.getters.getParticipantById(id);
    };

    const onTaskSelect = (task) => {
      if (selectedTaskId.value === task.id) {
        store.commit(Mutations.setIsTaskDrawerVisible, !isDrawerVisible.value);
      } else {
        store.commit(Mutations.setIsTaskDrawerVisible, true);
      }
      store.dispatch(Actions.onSelectTask, task.id);
    };

    return {
      selectedTaskId,
      getParticipant,
      onTaskSelect,
      timeTaskCreationFormat,
    };
  },
};
</script>

<style scoped lang="scss">
.custom-td {
  padding: 16px 12px;

  height: 54px;

  box-shadow: inset 0px -1px 0px #dde3e8;

  &.task-no {
    width: 80px;
  }
  .label {
    height: 22px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
  }
}
</style>
