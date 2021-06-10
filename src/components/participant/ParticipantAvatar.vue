<template>
  <figure v-if="participant && participant.isRole" class="avatar avatar-lg me-3">
    <feather-briefcase></feather-briefcase>
  </figure>
  <figure v-else class="avatar avatar-lg me-3"
          :data-initial="participant.name.substring(0, 1).toUpperCase()"
  >
    <div v-if="participant.isRole">
      <feather-briefcase></feather-briefcase>
    </div>
    <img
        v-if="participant.avatar.includes('simona')"
        src="@/assets/images/simona.jpg"
        alt="S"
    />
    <i class="avatar-presence online"></i>
  </figure>
</template>
<script>
import {computed} from "vue";
import {useStore} from "vuex";
import FeatherBriefcase from "@/icons/FeatherBriefcase";

export default {
  components: {FeatherBriefcase},
  props: {
    participantId: {type: String}
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() => store.getters.getParticipantById(props.participantId));
    return {participant}
  }
}
</script>
