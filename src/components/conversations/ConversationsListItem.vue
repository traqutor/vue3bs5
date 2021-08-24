<template>
  <a
    href="#"
    @click="onConversationSelect"
    class="
      list-group-item
      p-2
      mt-1
      rounded
      list-group-item-action list-group-dialog
      hover-action-group
      border-0
      has-new
      visible
    "
    :class="isConversationActive ? 'active' : ''"
  >
    <div class="d-flex list-item-media dialog-media">
      <conversations-list-item-avatar
        :conversation="conversation"
      ></conversations-list-item-avatar>

      <div class="media-body overflow-hidden is-filtered">
        <!-- start::first line-->
        <div class="d-flex">
          <div class="media-body overflow-hidden">
            <div
              v-if="conversation.isDirect"
              class="d-flex align-items-center overflow-hidden"
            >
              <div class="text-truncate f-size-15 text-dark font-weight-middle">
                <span
                  v-if="
                    getDirectParticipant(conversation) &&
                    getParticipantById(getDirectParticipant(conversation).id)
                  "
                  >{{
                    getParticipantById(getDirectParticipant(conversation).id)
                      .name
                  }}
                </span>
                <span class="text-secondary font-weight-normal f-size-14 ms-2"
                  >Shared role</span
                >
              </div>
              <div class="ms-2 text-nowrap">
                <feather-clock class="text-primary"></feather-clock>
              </div>
              <div
                class="
                  text-nowrap
                  ms-auto
                  ps-3
                  text-muted
                  is-filter-ignore
                  f-size-11
                "
              >
                <date-to-last-activity-label
                  :activity-date="
                    conversation.lastActivity
                      ? conversation.lastActivity
                      : conversation.createdTime
                  "
                />
              </div>
            </div>

            <div v-else class="d-flex align-items-center overflow-hidden">
              <div class="text-truncate f-size-15 text-dark font-weight-middle">
                {{ conversation.topic }}
              </div>

              <div
                class="
                  text-nowrap
                  ms-auto
                  ps-3
                  text-muted
                  is-filter-ignore
                  f-size-11
                "
              >
                <date-to-last-activity-label
                  :activity-date="
                    conversation.lastActivity
                      ? conversation.lastActivity
                      : conversation.createdTime
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <!-- end::first line-->

        <!-- star::second line-->
        <div
          v-if="
            !conversation.isDirect &&
            conversation.lastMessage &&
            isLoggedUserAuthorOfLastMessage
          "
          class="text-truncate f-size-13"
        >
          <span
            v-if="
              conversation.lastMessage.authorId &&
              getParticipantById(conversation.lastMessage.authorId)
            "
          >
            {{
              getParticipantById(conversation.lastMessage.authorId).name
            }}</span
          >
          <span class="text-secondary ms-2">{{
            getParticipantById(conversation.lastMessage.authorId) &&
            getRolesAsLabel(
              getParticipantById(conversation.lastMessage.authorId)
            )
          }}</span>
        </div>
        <!-- end::second line-->

        <!-- start::user is typing toggle with third line -->
        <div
          v-if="conversation.typingUsers && conversation.typingUsers.length > 0"
          class="d-flex justify-content-between align-items-center pt-1"
        >
          <div class="d-flex align-items-center dialog-msg overflow-hidden">
            <span class="typing-indicator"><i></i></span>
            <div class="media-body f-size-13 text-truncate ms-2">
              <em class="is-filter-ignore">
                {{
                  conversation.typingUsers
                    .map((user) => getParticipantById(user.userId).userName)
                    .join(", ")
                }}
              </em>
            </div>
          </div>
        </div>
        <!-- end::user is typing toggle with third line -->

        <!-- start::third line-->
        <div
          v-else
          class="d-flex justify-content-between align-items-center pt-1"
        >
          <div class="d-flex align-items-center dialog-msg overflow-hidden">
            <div
              v-if="conversation.lastMessage"
              class="media-body f-size-13 text-truncate"
              :class="!isWatchedByLoggedUser ? 'font-weight-middle' : ''"
            >
              <feather-check-double
                v-if="isLastMessageByLoggedUser"
                :class="isWatchedByAllParticipants ? 'text-success' : ''"
              />
              {{ getTextFromHtmlContent(conversation.lastMessage.text) }}
            </div>
          </div>
          <span
            v-if="conversation.unreadMessageCount"
            class="
              badge badge-primary badge-pill
              font-weight-normal
              f-size-11
              ml-2
              is-filter-ignore
            "
          >
            {{ conversation.unreadMessageCount }}
          </span>
        </div>
        <!-- end::third line-->
      </div>
    </div>

    <!-- start::hidden dropdown menu -->
    <div
      class="
        btn-group-sm btn-group-vertical
        rounded
        hover-action-control
        bg-light
        rounded
      "
    >
      <div class="btn-group dropleft dropdown flex-fill dropstart" role="group">
        <button
          type="button"
          class="btn btn-light p-1 shadow-none border-0 toggle-action-active"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <feather-more-vertical></feather-more-vertical>
        </button>

        <div
          class="
            dropdown-menu dropdown-menu-right dropdown-menu-sm
            shadow
            cursor-default
          "
          aria-labelledby="dropdownMenuButton1"
        >
          <button
            type="button"
            class="dropdown-item px-3 d-flex align-items-center"
          >
            <feather-message-square
              class="me-3 text-secondary f-icon-18"
            ></feather-message-square>
            <span class="ml-n1">Mark as Read</span>
          </button>
          <button
            type="button"
            class="
              dropdown-item
              px-3
              d-flex
              align-items-center
              dropdown-trigger-toggle
            "
            dropdown-trigger="qreply-5"
          >
            <feather-arrow-reply
              class="me-3 text-secondary f-icon-18"
            ></feather-arrow-reply>

            <span class="ml-n1">Quick Reply</span>
          </button>
          <button
            type="button"
            class="dropdown-item px-3 d-flex align-items-center"
          >
            <feather-whisper-message
              class="me-3 text-secondary f-icon-18"
            ></feather-whisper-message>

            <span class="ml-n1">Whisper</span>
          </button>
          <button
            type="button"
            class="
              dropdown-item
              px-3
              d-flex
              align-items-center
              toggle-item-hidden
            "
          >
            <feather-eye-off
              class="me-3 text-secondary f-icon-18"
            ></feather-eye-off>
            <span class="ml-n1">Hide</span>
          </button>
        </div>
      </div>
    </div>
    <!-- end::hidden dropdown menu -->
  </a>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";

import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherClock from "@/icons/FeatherClock";
import ConversationsListItemAvatar from "@/components/conversations/ConversationsListItemAvatar";
import FeatherMessageSquare from "@/icons/FeatherMessageSquare";
import FeatherArrowReply from "@/icons/FeatherArrowReply";
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import FeatherEyeOff from "@/icons/FeatherEyeOff";
import DateToLastActivityLabel from "@/components/date/DateToLastActivityLabel";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import { guidsAreEqual } from "@/services/guids.service";
import { getTextFromHtmlContent } from "@/services/text.service";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  components: {
    FeatherCheckDouble,
    DateToLastActivityLabel,
    FeatherEyeOff,
    FeatherWhisperMessage,
    FeatherArrowReply,
    FeatherMessageSquare,
    ConversationsListItemAvatar,
    FeatherClock,
    FeatherMoreVertical,
  },
  props: {
    conversation: Object,
  },
  setup(props) {
    const store = useStore();

    const loggedUser = computed(() => store.getters.getLoggedUser);
    const getParticipantById = computed(() => store.getters.getParticipantById);
    const getDirectParticipant = computed(
      () => store.getters.getDirectParticipant
    );
    const isConversationActive = computed(() => {
      return guidsAreEqual(
        store.getters.getSelectedConversationId,
        props.conversation.id
      );
    });

    const isLoggedUserAuthorOfLastMessage = computed(() => {
      return (
        props.conversation.lastMessage &&
        loggedUser.value &&
        guidsAreEqual(
          props.conversation.lastMessage.authorId,
          loggedUser.value.id
        )
      );
    });

    const isWatchedByLoggedUser = computed(() => {
      return props.conversation.lastMessage.watchedByUsers.some(
        (usr) => loggedUser.value && guidsAreEqual(usr.id, loggedUser.value.id)
      );
    });

    const isWatchedByAllParticipants = computed(() => {
      return (
        (props.conversation.lastMessage.watchedByUsers &&
          props.conversation.lastMessage.watchedByUsers.length) ===
        (props.conversation.participants &&
          props.conversation.participants.length)
      );
    });

    const isLastMessageByLoggedUser = computed(() => {
      return (
        props.conversation.lastMessage &&
        loggedUser.value &&
        guidsAreEqual(
          props.conversation.lastMessage.authorId,
          loggedUser.value.id
        )
      );
    });

    function getRolesAsLabel(participant) {
      if (participant.roles) {
        return participant.roles.map((role) => role.name).join(", ");
      }
    }

    function onConversationSelect() {
      store.dispatch(Actions.onSelectConversation, props.conversation.id);
    }

    return {
      getDirectParticipant,
      getParticipantById,
      getRolesAsLabel,
      isConversationActive,
      isLoggedUserAuthorOfLastMessage,
      isWatchedByAllParticipants,
      isLastMessageByLoggedUser,
      isWatchedByLoggedUser,
      onConversationSelect,
      getTextFromHtmlContent,
    };
  },
};
</script>
