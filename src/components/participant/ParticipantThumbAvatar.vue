<template>
  <div class="list-contact list-contact-xm me-3 pt-2 hover-visible-group">
    <figure v-if="participant && participant.isRole" class="avatar avatar-lg">
      <feather-briefcase1 />
      <span
        class="
          avatar-icon avatar-icon-top
          bg-red
          whisper-item-remove
          on-hover-visible
        "
      >
        <feather-x class="f-icon-15 text-white" />
      </span>
    </figure>
    <figure
      v-else
      class="avatar avatar-lg"
      :data-initial="participant.name.substring(0, 1).toUpperCase()"
    >
      <img
        v-if="participant.avatar.includes('simona')"
        src="@/assets/images/simona.jpg"
        alt="S"
      />
      <span
        class="
          avatar-icon avatar-icon-top
          bg-red
          whisper-item-remove
          on-hover-visible
        "
      >
        <feather-x class="f-icon-15 text-white" />
      </span>
      <i v-if="isActiveIndicator" class="avatar-presence online"></i>
    </figure>

    <div class="text-truncate f-size-12 text-center pt-1 text-dark" :class="textClasses">
      {{ participant.name }}
    </div>
  </div>
</template>
<script>
import FeatherX from "@/icons/FeatherX";
import { useStore } from "vuex";
import { computed } from "vue";
import FeatherBriefcase1 from "@/icons/FeatherBriefcase1";
export default {
  props: {
    participantId: { type: String },
    isActiveIndicator: { true: Boolean },
    textClasses: { type: String },
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() =>
      store.getters.getParticipantById(props.participantId)
    );
    return { participant };
  },
  components: { FeatherBriefcase1, FeatherX },
};
</script>
