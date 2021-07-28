<template>
  <div class="flex-slide-content">
    <div class="d-flex flex-column h-100 w-100 position-absolute">
      <perfect-scrollbar ref="chatContainer" class="pe-3 ign-scroll-smooth">
        <div v-for="(msg, idx) of messages" :key="msg.id">
          <!-- time divider-->
          <div
            v-if="idx === 0 || getIfPeriodToDisplay(idx)"
            class="dialog-group-strip text-primary"
          >
            {{ timeMessagesDividerFormat(msg.createdTime.seconds) }}
          </div>
          <ign-chat-message-bubble :item="msg"></ign-chat-message-bubble>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch, nextTick } from "vue";
import { useStore } from "vuex";
import { timeMessagesDividerFormat } from "@/services/datetime.service";
import { guidsAreEqual } from "@/services/guids.service";
import IgnChatMessageBubble from "@/components/conversation/chat/bubble/ChatMessageBubble";
export default {
  name: "ign-chat-mode",
  components: {
    IgnChatMessageBubble,
  },

  setup() {
    const store = useStore();
    const chatContainer = ref();
    const isScrollUp = ref(false);
    const tmpScrollTop = ref(0);

    const messages = computed(() => store.getters.getMessages);

    const selectedConversation = computed(
      () => store.getters.getSelectedConversation
    );
    const isMessagesLoading = computed(
      () => store.getters.getIsMessagesLoading
    );
    const loggedUser = computed(() => store.getters.getLoggedUser);

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

    const scrollToEnd = () => {
      if (!isScrollUp.value) {
        const container = chatContainer.value.$el;
        for (let i = container.scrollTop; i < container.scrollHeight; i++) {
          container.scrollTop = i;
        }
      }
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
          this.$store.dispatch("onSelectConversation", conversation);
        });
    };

    watch(
      () => messages.value.length,
      (after, before) => {
        if (after > before && !isScrollUp.value) {
          nextTick(() => {
            scrollToEnd();
          });
        }
        store.dispatch("onMarkMessagesAsRead");
      }
    );

    return {
      chatContainer,
      messages,
      isScrollUp,
      tmpScrollTop,
      onScroll,
      onSendMessage,
      scrollToEnd,
      getIfPeriodToDisplay,
      getIfUserInfoToDisplay,
      timeMessagesDividerFormat,
    };
  },
};
</script>
