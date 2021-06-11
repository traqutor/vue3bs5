<template>
  <a href="#"
     @click="onConversationSelect"
     class="list-group-item p-2 mt-1 rounded list-group-item-action list-group-dialog hover-action-group border-0 has-new visible"
     :class="isConversationActive ? 'active' : ''"
  >

    <div class="d-flex list-item-media dialog-media">

      <conversations-list-item-avatar :conversation="conversation"></conversations-list-item-avatar>

      <div class="media-body overflow-hidden is-filtered">

        <!-- first line-->
        <div class="d-flex">
          <div class="media-body overflow-hidden">
            <div v-if="conversation.isDirect" class="d-flex align-items-center overflow-hidden">
              <div class="text-truncate f-size-15 text-dark font-weight-middle">{{
                  getParticipantById(getDirectParticipant(conversation).id).name
                }}<span
                    class="text-secondary font-weight-normal f-size-14 ms-2">Shared role</span></div>
              <div class="ms-2 text-nowrap">
                <feather-clock class="text-primary"></feather-clock>
              </div>
              <div class="text-nowrap ms-auto ps-3 text-muted is-filter-ignore f-size-11">
                <date-to-last-activity-label :activity-date="conversation.lastActivity ? conversation.lastActivity : conversation.createdTime"/>
              </div>
            </div>

            <div v-else class="d-flex align-items-center overflow-hidden">
              <div class="text-truncate f-size-15 text-dark font-weight-middle">{{ conversation.topic }}</div>

              <div class="text-nowrap ms-auto ps-3 text-muted is-filter-ignore f-size-11">
                <date-to-last-activity-label :activity-date="conversation.lastActivity ? conversation.lastActivity : conversation.createdTime"/>
              </div>
            </div>
          </div>
        </div>

        <!-- second line-->
        <div
            v-if="!conversation.isDirect && conversation.lastMessage && isLoggedUserAuthorOfLastMessage"
            class="text-truncate f-size-13">
          {{ getParticipantById(conversation.lastMessage.authorId).name }}
          <span class="text-secondary ms-2">{{
              getRolesAsLabel(getParticipantById(conversation.lastMessage.authorId))
            }}</span>
        </div>

        <!-- third line-->
        <div class="d-flex justify-content-between align-items-center pt-1">
          <div class="d-flex align-items-center dialog-msg overflow-hidden">
            <div v-if="conversation.lastMessage"
                 class="media-body f-size-13 text-truncate"
                 :class="!isWatchedByLoggedUser ? 'font-weight-middle': ''"
            >
              <feather-check-double :class="isWatchedByAllParticipants ? 'text-success' : ''"/>
              {{ conversation.lastMessage.text }}
            </div>
          </div>
          <span
              v-if="conversation.unreadMessageCount"
              class="badge badge-primary badge-pill font-weight-normal f-size-11 ml-2 is-filter-ignore">
            {{ conversation.unreadMessageCount }}
          </span>
        </div>
      </div>
    </div>

    <div class="btn-group-sm btn-group-vertical rounded hover-action-control bg-light rounded">

      <div class="btn-group dropleft dropdown flex-fill dropstart" role="group">

        <button type="button"
                class="btn btn-light p-1 shadow-none border-0 toggle-action-active"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          <feather-more-vertical></feather-more-vertical>
        </button>

        <div
            class="dropdown-menu dropdown-menu-right dropdown-menu-sm shadow cursor-default"
            aria-labelledby="dropdownMenuButton1"
        >
          <button type="button" class="dropdown-item px-3 d-flex align-items-center">
            <feather-message-square class="me-3 text-secondary f-icon-18"></feather-message-square>
            <span class="ml-n1">Mark as Read</span>
          </button>
          <button type="button"
                  class="dropdown-item px-3 d-flex align-items-center dropdown-trigger-toggle"
                  dropdown-trigger="qreply-5">
            <feather-arrow-reply class=" me-3 text-secondary f-icon-18"></feather-arrow-reply>

            <span class="ml-n1">Quick Reply</span>
          </button>
          <button type="button" class="dropdown-item px-3 d-flex align-items-center">
            <feather-whisper-message class="me-3 text-secondary f-icon-18"></feather-whisper-message>

            <span class="ml-n1">Whisper</span>
          </button>
          <button type="button"
                  class="dropdown-item px-3 d-flex align-items-center toggle-item-hidden">
            <feather-eye-off class="me-3 text-secondary f-icon-18"></feather-eye-off>
            <span class="ml-n1">Hide</span>
          </button>
        </div>
      </div>

    </div>

  </a>
</template>
<script>
import {useStore} from "vuex";
import {computed} from "vue";

import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherClock from "@/icons/FeatherClock";
import ConversationsListItemAvatar from "@/components/conversations/ConversationsListItemAvatar";
import FeatherMessageSquare from "@/icons/FeatherMessageSquare";
import FeatherArrowReply from "@/icons/FeatherArrowReply";
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import FeatherEyeOff from "@/icons/FeatherEyeOff";
import DateToLastActivityLabel from "@/components/date/DateToLastActivityLabel";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import {guidsAreEqual} from "@/services/guids.service";

export default {
  components: {
    FeatherCheckDouble,
    DateToLastActivityLabel,
    FeatherEyeOff,
    FeatherWhisperMessage,
    FeatherArrowReply, FeatherMessageSquare, ConversationsListItemAvatar, FeatherClock, FeatherMoreVertical
  },
  props: {
    conversation: Object
  },
  setup(props) {
    const store = useStore();

    const loggedUser = computed(() => store.getters.getLoggedUser);
    const getParticipantById = computed(() => store.getters.getParticipantById)
    const getDirectParticipant = computed(() => store.getters.getDirectParticipant);
    const isConversationActive = computed(() => {
      return guidsAreEqual(store.getters.getSelectedConversationId, props.conversation.id);
    })

    const isLoggedUserAuthorOfLastMessage = computed(() => {
      return props.conversation.lastMessage && guidsAreEqual(props.conversation.lastMessage.authorId, loggedUser.value.id);
    });
    const isWatchedByLoggedUser = computed(() => {
      return props.conversation.lastMessage.watchedByUsers.some(usr => guidsAreEqual(usr.id, loggedUser.value.id));
    })
    const isWatchedByAllParticipants = computed(() => {
      return ((props.conversation.lastMessage.watchedByUsers &&
          props.conversation.lastMessage.watchedByUsers.length) ===
          (props.conversation.participants &&
              props.conversation.participants.length));
    });

    function getRolesAsLabel(participant) {
      if (participant.roles) {
        return participant.roles.map(role => role.name).join(", ");
      }
    }

    function onConversationSelect() {
      store.dispatch("onSelectConversation", props.conversation.id)
    }


    return {
      getDirectParticipant,
      getParticipantById,
      getRolesAsLabel,
      isConversationActive,
      isLoggedUserAuthorOfLastMessage,
      isWatchedByAllParticipants,
      isWatchedByLoggedUser,
      onConversationSelect,
    }

  }
}
</script>
