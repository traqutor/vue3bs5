<template>
  <div
    class="
      col
      d-flex
      flex-column
      ps-4
      border-left border-secondary-light
      steps-section
      overflow-hidden
    "
  >
    <div class="flex-fill chat-section-content position-relative">
      <div
        class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden"
      >
        <!-- start::conversation header-->
        <div
          class="
            chat-section-header
            d-flex
            justify-content-between
            align-items-center
            pb-2
            border-bottom border-secondary-light
          "
        >
          <div class="d-flex align-content-center">
            <figure class="avatar avatar-xm me-3">
              <feather-message-square-group></feather-message-square-group>
            </figure>
            <div class="media-body overflow-hidden">
              <div
                class="text-truncate f-size-18 font-weight-middle m-0 text-dark"
              >
                New conversation
              </div>
            </div>
          </div>

          <div class="dropdown me-1">
            <button
              class="
                btn btn-sm
                pe-0
                btn-link
                text-decoration-none
                dropdown-toggle
                role-dropdown-toggle
              "
              type="button"
              id="newConversationCreatorMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Creator:<span class="ms-1 role-name">
                {{ selectedCreator.name }}</span
              >
            </button>

            <ul
              class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow"
              aria-labelledby="newConversationCreatorMenuButton1"
            >
              <div
                class="
                  dropdown-item
                  role-item
                  d-flex
                  align-items-center
                  on-hover
                  py-2
                "
                @click="onSelectCreator(loggedUser.id)"
              >
                <participant-avatar-name-item
                  :participant-id="loggedUser.id"
                ></participant-avatar-name-item>
              </div>

              <div
                v-for="role of loggedUser.SystemRoles"
                :key="role.Id"
                class="
                  dropdown-item
                  role-item
                  d-flex
                  align-items-center
                  on-hover
                  py-2
                "
                @click="onSelectCreator(role.Id)"
              >
                <participant-avatar-name-item
                  :participant-id="role.Id"
                ></participant-avatar-name-item>
              </div>
            </ul>
          </div>
        </div>
        <!-- end:: conversation header -->

        <!-- start:: conversation participants-->
        <div class="pt-3">
          <div class="d-flex align-items-center text-secondary f-size-15">
            Participants<span class="ms-2" id="participantsGroup-cnt"></span>
          </div>
        </div>

        <div
          class="
            chat-section-body
            d-flex
            flex-column flex-fill
            py-2
            position-relative
          "
        >
          <div
            class="
              d-flex
              flex-column
              position-absolute
              w-100
              h-100
              overflow-hidden
            "
          >
            <perfect-scrollbar class="pe-3">
              <div
                class="
                  list-group
                  chat-list-dialog
                  list-group-flush
                  overflow-hidden
                  select-action-group
                "
              >
                <conversations-participants-list-item
                  v-for="participant of getSelectedParticipants"
                  :key="participant.id"
                  :participant-id="participant.id"
                  :is-toggle-action="true"
                  :is-removable="true"
                  :on-select="onSelect"
                >
                </conversations-participants-list-item>
              </div>
            </perfect-scrollbar>
          </div>
        </div>
        <!-- end::conversations participants-->

        <!-- start::input text -->
        <div v-if="isCreationStep === 0" class="d-flex">
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
              <!-- start::message text area -->
              <TextAreaAutoresizeContent
                v-model="messageText"
                @submitContent="onSubmitFirstStep"
              />
              <!-- end::message text area -->

              <!-- start:: emoji dropdown -->
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
                    data-bs-auto-close="false"
                    aria-expanded="false"
                  >
                    <feather-smile class="f-icon-26" />
                  </button>
                  <EmojiPicker @onInsert="insertEmoji" />
                </div>
              </div>
              <!-- end:: emoji dropdown -->

              <!-- start:: quick messages -->
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
              <!-- end:: quick messages -->
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
                @click="onSubmitFirstStep"
                :disabled="getSelectedParticipants.length <= 0"
              >
                <feather-arrow-up class="f-icon-22" />
              </button>
            </div>
          </div>
        </div>
        <!-- end::input text -->

        <!-- start::make decision create new open existing conversation -->
        <div v-if="isCreationStep === 1">
          <div class="border-top border-secondary-light"></div>

          <div
            class="
              text-dark text-center
              font-weight-middle
              f-size-16
              px-5
              position-relative
              my-4
            "
          >
            A conversation with
            <span
              v-if="getSelectedParticipants[0].isRole"
              class="text-primary"
              >{{ getSelectedParticipants[0].name }}</span
            >
            <span v-else class="text-primary">{{
              getSelectedParticipants[0].userName
            }}</span>
            already exists

            <span
              class="
                text-decoration-none
                position-absolute position-left-center
                f-size-14
                font-weight-normal
                ign-pointer
              "
              @click="isCreationStep = 0"
              >Cancel</span
            >
          </div>

          <div class="btn-group btn-group-sm w-100">
            <button
              type="button"
              class="btn btn-secondary-light rounded shadow-none me-4"
              @click="onDirectConversationUpdate"
            >
              Open the existing conversation
            </button>
            <button
              type="button"
              class="btn btn-success rounded shadow-none"
              @click="onSubmitSecondStep"
            >
              Start a new conversation
            </button>
          </div>
        </div>
        <!-- end::make decision create new open existing conversation -->

        <!-- start::enter the topic broadcast and create conversation -->
        <div v-if="isCreationStep === 2">
          <div class="border-top border-secondary-light"></div>

          <div
            class="
              text-dark text-center
              font-weight-middle
              f-size-16
              px-5
              position-relative
              my-4
            "
          >
            Enter a topic

            <span
              class="
                ign-pointer
                text-decoration-none
                position-absolute position-left-center
                f-size-14
                font-weight-normal
              "
              @click="isCreationStep = 0"
              >Cancel</span
            >
          </div>

          <input
            type="text"
            class="
              form-control form-control-sm
              bg-light
              shadow-none
              is-keyup-form-control
              my-4
            "
            v-model="conversationTopic"
            placeholder="Conversation topic"
          />

          <div class="d-flex align-items-center justify-content-between">
            <label class="toggle-input toggle-input-success m-0">
              <input type="checkbox" />
              <span class="input-icon f-icon-20">
                <feather-square />
                <feather-check-square /> </span
              >Broadcast conversation
            </label>

            <button
              type="button"
              class="btn btn-primary btn-sm px-5 shadow-none"
              :disabled="!conversationTopic"
              @click="onCreateConversation"
            >
              Go to conversation
            </button>
          </div>
        </div>

        <!-- end::enter the topic broadcast and create conversation -->
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { CONVERSATION_VIEW_MODES } from "@/const";
import FeatherSquare from "@/icons/FeatherSquare";
import FeatherCheckSquare from "@/icons/FeatherCheckSquare";
import FeatherMessageSquareGroup from "@/icons/FeatherMessageSquareGroup";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";

import FeatherArrowUp from "@/icons/FeatherArrowUp";
import FeatherSmile from "@/icons/FeatherSmile";
import EmojiPicker from "@/components/conversation/chat/chat-text-selector/EmojiPicker";
import FeatherPaper from "@/icons/FeatherPaper";
import TextAreaAutoresizeContent from "@/components/common/textarea/TextAreaAutoresizeContent";

export default {
  setup() {
    const conversationViewModes = CONVERSATION_VIEW_MODES;
    const store = useStore();
    const selectedCreator = ref(
      store.getters.getParticipantById(store.getters.getLoggedUser.id)
    );
    const isCreationStep = ref(0);
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const getSelectedParticipants = computed(
      () => store.getters.getSelectedParticipants
    );

    const conversationTopic = computed({
      get: () => {
        return store.getters.getConversationTopic;
      },
      set: (value) => {
        store.commit(Mutations.setConversationTopic, value);
      },
    });

    const messageText = computed({
      get: () => {
        return store.state.conversations.messageText;
      },
      set: (value) => {
        store.commit(Mutations.setMessageText, value);
      },
    });

    function onSubmitFirstStep(event) {
      if (event.shiftKey === true && event.key === "Enter") {
        messageText.value = messageText.value + `\n`;
      } else {
        if (getSelectedParticipants.value.length === 1) {
          if (getSelectedParticipants.value.length === 1) {
            const params = {
              user: selectedCreator.value,
              recipient: getSelectedParticipants.value[0],
            };
            store
              .dispatch(Actions.onGetDirectConversation, params)
              .then((response) => {
                store
                  .dispatch(Actions.onCheckConversationMessages, response.id)
                  .then((messages) => {
                    if (messages && messages.length > 0) {
                      isCreationStep.value = 1;
                    } else {
                      isCreationStep.value = 1;
                    }
                  });
              });
          }
        } else {
          isCreationStep.value = 2;
        }
      }
    }

    function onSubmitSecondStep() {
      isCreationStep.value = 2;
    }

    function insertEmoji(emoji) {
      const txt = messageText.value ? messageText.value + emoji : emoji;
      store.commit(Mutations.setMessageText, txt);
    }

    function onSelectCreator(id) {
      selectedCreator.value = store.getters.getParticipantById(id);
    }

    function onSelect(id) {
      store.dispatch(Actions.setToggleParticipantSelected, id);
    }

    function onCreateConversation() {
      store.dispatch(Actions.onCreateConversation).then(() => {
        store.commit(Mutations.setMessageText, null);
        store.commit(Mutations.setConversationTopic, null);
        store.commit(Mutations.setConversationViewMode, conversationViewModes.VIEW);
      });
    }

    function onDirectConversationUpdate() {
      store.dispatch(Actions.onDirectConversationUpdate).then(() => {
        store.commit(Mutations.setConversationViewMode, conversationViewModes.VIEW);
      });
    }

    function onShowTemplatesAndQuickMessages() {
      store.commit(Mutations.toggleQuickChatTextSelector);
    }

    watch(
      () => getSelectedParticipants.value,
      (after) => {
        if (isCreationStep.value === 1) {
          isCreationStep.value = 0;
        }
        if (isCreationStep.value === 2 && after.length <= 0) {
          isCreationStep.value = 0;
        }
      }
    );

    return {
      isCreationStep,
      messageText,
      conversationTopic,
      insertEmoji,
      onSubmitFirstStep,
      onSubmitSecondStep,
      conversationViewModes,
      loggedUser,
      selectedCreator,
      getSelectedParticipants,
      onSelect,
      onCreateConversation,
      onDirectConversationUpdate,
      onSelectCreator,
      onShowTemplatesAndQuickMessages,
    };
  },
  components: {
    TextAreaAutoresizeContent,
    FeatherPaper,
    EmojiPicker,
    FeatherSmile,
    FeatherArrowUp,
    ConversationsParticipantsListItem,
    ParticipantAvatarNameItem,
    FeatherMessageSquareGroup,
    FeatherCheckSquare,
    FeatherSquare,
  },
};
</script>
