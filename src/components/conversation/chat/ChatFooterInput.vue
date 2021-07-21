<template>
  <div class="chat-section-footer mt-2">
    <div class="steps-section">
      <div id="chat-footer-input-textarea">
        <div class="d-flex">
          <div class="media-body me-3">
            <div
              class="
                input-group
                h-100
                position-relative
                dialog-input-group
                has-transition
                border border-grey-middle
                rounded
                bg-light
              "
            >
              <div class="input-group-prepend">
                <div
                  class="btn-group dropup bg-transparent dropdown"
                  role="group"
                >
                  <button
                    type="button"
                    class="
                      btn
                      d-inline-flex
                      align-items-center
                      text-secondary text-dark-hover
                      border-0
                      pb-10px
                      btn-options
                      shadow-none
                    "
                    id="dropdownMenuChatInputTextAreaAppendMenu"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <feather-more-vertical class="f-icon-22" />
                  </button>
                  <div
                    class="dropdown-menu dropdown-menu-sm shadow"
                    aria-labelledby="dropdownMenuChatInputTextAreaAppendMenu"
                  >
                    <button
                      class="dropdown-item"
                      onclick="document.querySelector('.inputFile').click();"
                    >
                      Add Media
                    </button>
                    <input class="inputFile d-none" type="file" />

                    <button class="dropdown-item">Add Body Map</button>
                    <button
                      class="dropdown-item"
                      @click="toggleRequestAcknowledgement"
                    >
                      Request Acknowledgement
                    </button>
                  </div>
                </div>
              </div>

              <textarea
                class="
                  form-control
                  dialog-input-textarea
                  chat-textarea-control
                  f-size-14
                  bg-transparent
                  border-0
                  rounded-0
                  is-keyup-group-control
                  shadow-none
                  ps-2
                  autoresize-textarea
                  no-resize
                "
                rows="1"
                placeholder="Type a message ..."
                style="height: 42px; overflow-y: hidden"
                v-model="messageText"
              ></textarea>

              <div
                class="
                  input-group-append
                  bg-transparent
                  input-acknowledgement
                  is-hidden
                "
              >
                <button
                  v-if="requiresAcknowledgement"
                  class="
                    btn
                    text-primary
                    px-2
                    d-inline-flex
                    align-items-end
                    pb-2
                    text-primary-hover
                    border-0
                    dialog-ack-contol
                    shadow-none
                    rounded-0
                  "
                  type="button"
                  @click="toggleRequestAcknowledgement()"
                >
                  <feather-point-square class="f-icon-26" />
                </button>
              </div>
              <div class="input-group-append bg-transparent">
                <div class="btn-group dropdown">
                  <button
                    type="button"
                    class="
                      btn
                      text-secondary
                      px-2
                      d-inline-flex
                      align-items-end
                      pb-2
                      text-dark-hover
                      border-0
                      shadow-none
                      rounded-0
                    "
                    id="dropdownEmojiMenuButtonId"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <feather-smile class="f-icon-26" />
                  </button>
                  <EmojiPicker @onInsert="insertEmoji" />
                </div>
              </div>

              <div class="input-group-append bg-transparent">
                <button
                  class="
                    btn
                    text-secondary
                    ps-2
                    d-inline-flex
                    align-items-end
                    pb-2
                    text-primary-hover
                    border-0
                    shadow-none
                    rounded-0
                  "
                  @click="onShowTemplatesAndQuickMessages"
                >
                  <feather-paper class="f-icon-24" />
                </button>
              </div>
            </div>
          </div>

          <div class="align-self-end btn-group-send">
            <div>
              <button
                id="dialogSendControl"
                class="
                  btn btn-circle
                  rounded
                  f-icon-42
                  btn-primary
                  border-0
                  shadow-none
                "
                type="button"
                @click="onSubmit"
                :disabled="!messageText"
              >
                <feather-arrow-up class="f-icon-22" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <chat-record-message v-if="false"></chat-record-message>
      <chat-play-message v-if="false"></chat-play-message>
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import FeatherPointSquare from "@/icons/FeatherPointSquare";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherSmile from "@/icons/FeatherSmile";
import FeatherArrowUp from "@/icons/FeatherArrowUp";
import FeatherPaper from "@/icons/FeatherPaper";
import ChatRecordMessage from "@/components/conversation/chat/ChatRecordMessage";
import ChatPlayMessage from "@/components/conversation/chat/ChatPlayMessage";
import { CONVERSATION_VIEW_MODES } from "@/const";
import EmojiPicker from "@/components/conversation/chat/chat-text-selector/EmojiPicker";

export default {
  components: {
    EmojiPicker,
    ChatPlayMessage,
    ChatRecordMessage,
    FeatherPaper,
    FeatherArrowUp,
    FeatherSmile,
    FeatherMoreVertical,
    FeatherPointSquare,
  },
  setup() {
    const store = useStore();
    const messageText = ref("");
    const requiresAcknowledgement = ref(false);
    const selectedSender = ref();
    const placeholder = ref("Enter a message...");
    const selectedConversation = computed(
      () => store.getters.getSelectedConversation
    );

    function insertEmoji(emoji) {
      messageText.value = messageText.value ? messageText.value + emoji : emoji;
    }

    function onShowTemplatesAndQuickMessages() {
      store.commit("toggleQuickChatTextSelector");
    }

    function onSenderSelect(sender) {
      selectedSender.value = sender;
    }

    function onSubmit(event) {
      if (event.shiftKey === true && event.key === "Enter") {
        messageText.value = messageText.value + `\n`;
      } else {
        if (messageText.value) {
          const activeRoleId = selectedSender.value.isRole
            ? selectedSender.value.id.toLowerCase()
            : null;
          const payload = {
            requiresAcknowledgement: requiresAcknowledgement.value,
            messageText: messageText.value,
            activeRoleId: activeRoleId,
          };
          store.dispatch("onCreateMessage", payload).then(() => {
            requiresAcknowledgement.value = false;
          });
        }
      }
    }

    function toggleParticipant(participant) {
      store.commit("toggleWhisperParticipants", participant);
    }

    function toggleRequestAcknowledgement() {
      requiresAcknowledgement.value = !requiresAcknowledgement.value;
      placeholder.value = requiresAcknowledgement.value
        ? "Requires Acknowledgement"
        : "Enter a message...";
    }

    function onAcknowledgePost(message) {
      const whoCanAcknowledge =
        store.getters.getConversationAvailableCreationRoles;
      let data = {
        conversationId: selectedConversation.value.id,
        messageId: message.id,
        aciveRoleId: null,
      };
      whoCanAcknowledge.forEach((who) => {
        if (who.isRole) {
          // acknowledge as Role in the conversation
          data = {
            ...data,
            aciveRoleId: who.id.toLowerCase(),
          };
        } else {
          // acknowledge as User
          data = {
            ...data,
            aciveRoleId: null,
          };
        }
        this.$store.dispatch("onAcknowledgeMessage", data);
      });
    }

    onMounted(() => {
      selectedSender.value =
        store.getters.getConversationAvailableCreationRoles[0];
    });

    return {
      messageText,
      selectedSender,
      placeholder,
      requiresAcknowledgement,
      onShowTemplatesAndQuickMessages,
      insertEmoji,
      onSenderSelect,
      onSubmit,
      toggleParticipant,
      toggleRequestAcknowledgement,
      onAcknowledgePost,
      CONVERSATION_VIEW_MODES,
    };
  },
};
</script>
