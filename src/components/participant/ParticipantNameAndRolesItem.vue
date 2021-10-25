<template>
  <span class="text-truncate">
    <span class="text-dark font-weight-middle">{{ participant.name }}</span
    ><span class="text-secondary ms-2 f-size-13">{{ getRolesAsLabel() }}</span>
  </span>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  props: {
    participantId: { type: String },
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() =>
      store.getters.getParticipantById(props.participantId)
    );


    function getRolesAsLabel() {
      if (participant.value.roles) {
        return participant.value.roles.map((role) => role.name).join(", ");
      }
    }

    return { participant, getRolesAsLabel };
  },
};
</script>
