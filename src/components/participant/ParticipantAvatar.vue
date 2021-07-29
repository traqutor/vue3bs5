<template>
  <figure
    v-if="participant"
    class="avatar"
    :class="avatarClasses"
    :data-initial="participant.name.substring(0, 1).toUpperCase()"
  >
    <feather-briefcase1 v-if="participant.isRole" />
    <img
      v-else-if="participant.avatar.includes('simona')"
      src="@/assets/images/simona.jpg"
      alt="S"
    />
    <i v-if="isActiveIndicator" class="avatar-presence online"></i>
  </figure>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FeatherBriefcase1 from "@/icons/FeatherBriefcase1";

export default {
  components: { FeatherBriefcase1 },
  props: {
    participantId: { type: String },
    isActiveIndicator: { true: Boolean },
    avatarClasses: { type: String },
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() =>
      store.getters.getParticipantById(props.participantId)
    );
    return { participant };
  },
};
</script>
