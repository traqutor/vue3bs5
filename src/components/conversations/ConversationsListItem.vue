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

        <!-- start::third line last message-->
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
            <div v-else class="media-body f-size-13 text-truncate">
              You were added to the conversation
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
  </a>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Actions, Mutations } from "@/store/enums/EnumTypes";

import ConversationsListItemAvatar from "@/components/conversations/ConversationsListItemAvatar";
import DateToLastActivityLabel from "@/components/date/DateToLastActivityLabel";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import { guidsAreEqual } from "@/services/guids.service";
import { getTextFromHtmlContent } from "@/services/text.service";

export default {
  components: {
    FeatherCheckDouble,
    DateToLastActivityLabel,
    ConversationsListItemAvatar,
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
      store.commit(Mutations.setSoundEffect);
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
