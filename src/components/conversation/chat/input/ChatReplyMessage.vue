<template>
  <div
    v-if="replyMessage"
    class="d-flex align-items-center border-top border-secondary-light pt-25"
  >
    <button
      @click="onCancelReplyMessage"
      class="btn text-secondary text-dark-hover border-0 shadow-none f-icon-46"
    >
      <feather-x class="f-icon-24" />
    </button>

    <div class="media-body ps-2 overflow-hidden">
      <div class="text-truncate">
        <ParticipantNameAndRolesItem
          :participant-id="
            replyMessage.activeRoleId
              ? replyMessage.activeRoleId
              : replyMessage.authorId
          "
        />
      </div>
      <div class="f-size-13 text-truncate">
        {{ getTextFromHtmlContent(replyMessage.text) }}
      </div>
    </div>
  </div>
</template>
<script>
import FeatherX from "@/icons/FeatherX";
import { useStore } from "vuex";
import { computed } from "vue";
import { getTextFromHtmlContent } from "@/services/text.service";
import ParticipantNameAndRolesItem from "@/components/participant/ParticipantNameAndRolesItem";
import { Mutations } from "@/store/enums/EnumTypes";
export default {
  components: { ParticipantNameAndRolesItem, FeatherX },
  setup() {
    const store = useStore();

    const replyMessage = computed(() => store.getters.getSelectedReplyMessage);

    const onCancelReplyMessage = () => {
      store.commit(Mutations.setReplyMessage, null);
    };

    return { replyMessage, onCancelReplyMessage, getTextFromHtmlContent };
  },
};
</script>
