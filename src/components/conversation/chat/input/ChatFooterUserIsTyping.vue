<template>
  <div
    v-if="conversation.typingUsers && conversation.typingUsers.length > 0"
    class="d-flex my-2"
  >
    <div class="avatar-group avatar-group-move me-3">
      <participant-avatar
        v-for="user of conversation.typingUsers"
        :key="user.userId"
        :participant-id="user.userId"
      />
    </div>

    <div class="typing-indicator-group px-2 mb-2">
      <span class="typing-indicator"><i></i></span>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  components: { ParticipantAvatar },
  setup() {
    const store = useStore();
    const conversation = computed(() => store.getters.getSelectedConversation);
    return {
      conversation,
    };
  },
};
</script>
