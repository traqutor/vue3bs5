<template>
  <figure v-if="participant && participant.isRole" class="avatar avatar-lg">
    <feather-briefcase1></feather-briefcase1>
  </figure>
  <figure v-else class="avatar avatar-lg"
          :data-initial="participant.name.substring(0, 1).toUpperCase()"
  >
    <img
        v-if="participant.avatar.includes('simona')"
        src="@/assets/images/simona.jpg"
        alt="S"
    />
    <i v-if="isActiveIndicator" class="avatar-presence online"></i>
  </figure>
</template>
<script>
import {computed} from "vue";
import {useStore} from "vuex";
import FeatherBriefcase1 from "@/icons/FeatherBriefcase1";

export default {
  components: {FeatherBriefcase1},
  props: {
    participantId: {type: String},
    isActiveIndicator: {true: Boolean}
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() => store.getters.getParticipantById(props.participantId));
    return {participant}
  }
}
</script>
