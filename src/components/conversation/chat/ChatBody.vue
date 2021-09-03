<template>
  <div class="flex-slide-content">
    <div class="d-flex flex-column h-100 w-100 position-absolute">
      <template v-if="isLoading">
        <div
          class="d-flex justify-content-center align-content-center fs-5 mt-3"
        >
          Is loading...
        </div>
      </template>
      <template v-else>
        <div
          ref="chatContainer"
          class="h-100 mh-100 pe-3 ign-scroll-smooth"
          style="display: flex; flex-direction: column-reverse"
        >
          <div v-for="(msg, idx) of messages" :key="msg.id">
            <!-- time divider-->
            <div
              v-if="idx === 0 || getIfPeriodToDisplay(idx)"
              class="dialog-group-strip text-primary"
            >
              {{ timeMessagesDividerFormat(msg.createdTime.seconds) }}
            </div>
            <chat-message-bubble :item="msg"></chat-message-bubble>
          </div>
          <div
            v-if="
              !isLoading && !messages.length && !getIfUserIsConversationAuthor
            "
            class="d-flex justify-content-center align-content-center fs-5 mt-3"
          >
            You were added to the conversation
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { timeMessagesDividerFormat } from "@/services/datetime.service";
import { guidsAreEqual } from "@/services/guids.service";
import ChatMessageBubble from "@/components/conversation/chat/bubble/ChatMessageBubble";
import { Actions } from "@/store/enums/EnumTypes";
export default {
  name: "ign-chat-mode",
  components: {
    ChatMessageBubble,
  },

  setup() {
    const store = useStore();
    const chatContainer = ref();
    const isScrollUp = ref(false);
    const tmpScrollTop = ref(0);

    const messages = computed(() => store.getters.getMessages);

    const isLoading = computed(() => store.getters.getIsMessagesLoading);

    const selectedConversation = computed(
      () => store.getters.getSelectedConversation
    );
    const isMessagesLoading = computed(
      () => store.getters.getIsMessagesLoading
    );
    const loggedUser = computed(() => store.getters.getLoggedUser);

    const getIfUserIsConversationAuthor = computed(() => {
      return (
        (selectedConversation.value &&
          selectedConversation.value.creatorId === loggedUser.value.id) ||
        loggedUser.value.SystemRoles.some(
          (role) => role.Id === selectedConversation.value.creatorId
        )
      );
    });

    const isRoleById = (id) =>
      computed(() => {
        let isRole = false;
        store.getters.getSystemRoles.forEach((rle) => {
          if (guidsAreEqual(rle.id, id)) {
            isRole = true;
          }
        });
        return isRole;
      });

    const onScroll = (e) => {
      const container = this.$refs.chatContainer.$el;

      if (tmpScrollTop.value > e.target.scrollTop) {
        isScrollUp.value = true;
        if (!isMessagesLoading.value && e.target.scrollTop <= 200) {
          const { id } = selectedConversation;
          store.dispatch("onGetMessages", { conversationId: id });
        }
      } else if (
        container.clientHeight + e.target.scrollTop >=
        container.scrollHeight - 50
      ) {
        this.isScrollUp = false;
      }
      this.tmpScrollTop = e.target.scrollTop;
    };

    const getIfPeriodToDisplay = (index) => {
      return (
        timeMessagesDividerFormat(messages.value[index].createdTime.seconds) !==
        timeMessagesDividerFormat(messages.value[index - 1].createdTime.seconds)
      );
    };

    const getIfUserInfoToDisplay = (index) => {
      return (
        index === 0 ||
        messages.value[index].authorId !== messages.value[index - 1].authorId ||
        messages.value[index].activeRoleId !==
          messages.value[index - 1].activeRoleId
      );
    };

    const onSendMessage = (msg) => {
      this.$store
        .dispatch("onGetDirectConversation", {
          user: {
            isRole: false,
            id: loggedUser.value.id,
          },
          recipient: {
            isRole: isRoleById(msg.authorId),
            id: msg.authorId,
          },
        })
        .then((conversation) => {
          this.$store.dispatch(Actions.onSelectConversation, conversation);
        });
    };

    return {
      chatContainer,
      messages,
      isScrollUp,
      isLoading,
      tmpScrollTop,
      onScroll,
      onSendMessage,
      getIfPeriodToDisplay,
      getIfUserInfoToDisplay,
      timeMessagesDividerFormat,
      getIfUserIsConversationAuthor,
    };
  },
};
</script>
