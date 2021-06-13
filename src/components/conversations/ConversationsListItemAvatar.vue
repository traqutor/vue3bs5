<template>
  <participant-avatar
    v-if="conversation.isDirect"
    class="avatar-xm me-3"
    :participant-id="getDirectParticipant(conversation).id"
  />

  <figure v-else class="avatar avatar-xm me-3">
    <feather-user-group class="f-icon-24"></feather-user-group>
    <participant-avatar
      v-if="showAuthorOfLastMessage"
      class="avatar-icon"
      :participant-id="conversation.lastMessage.authorId"
    />
  </figure>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

import FeatherUserGroup from "@/icons/FeatherUserGroup";
import { guidsAreEqual } from "@/services/guids.service";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  components: { ParticipantAvatar, FeatherUserGroup },
  props: {
    conversation: { type: Object },
  },
  setup(props) {
    const store = useStore();
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const showAuthorOfLastMessage = computed(() => {
      return (
        props.conversation.lastMessage &&
        !guidsAreEqual(
          props.conversation.lastMessage.authorId,
          loggedUser.value.id
        )
      );
    });

    const getDirectParticipant = computed(
      () => store.getters.getDirectParticipant
    );

    return {
      getDirectParticipant,
      showAuthorOfLastMessage,
    };
  },
};
</script>
