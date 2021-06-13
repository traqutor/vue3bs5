<template>
  <div class="col d-flex flex-column ps-4 border-left border-secondary-light steps-section overflow-hidden">
    <div class="flex-fill chat-section-content position-relative">
      <div class="d-flex flex-column h-100 w-100 position-absolute overflow-hidden">

        <div
            class="chat-section-header d-flex justify-content-between align-items-center pb-2 border-bottom border-secondary-light">
          <div class="d-flex align-content-center flex-grow-1">
            <figure class="avatar avatar-xm">
              <feather-message-square-group></feather-message-square-group>
            </figure>

            <div class="flex-fill me-5">
              <input type="text"
                     class="form-control form-control-lg bg-transparent shadow-none border-0 m-0 pl-3 is-keyup-form-control"
                     v-model="conversationTopic"
                     placeholder="Enter a topic">
            </div>
          </div>

          <div class="dropdown me-1">

            <button
                class="btn btn-sm pr-0 btn-link text-decoration-none dropdown-toggle role-dropdown-toggle"
                type="button"
                id="newConversationCreatorMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
              Creator:<span class="ms-1 role-name"> {{ getSelectedCreator.name }}</span>
            </button>

            <ul
                class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow"
                aria-labelledby="newConversationCreatorMenuButton1"
            >

              <div
                  class="dropdown-item role-item media align-items-center on-hover py-2"
                  @click="onSelectCreator(getLoggedUser.id)"
              >
                <participant-avatar-name-item :participant-id="getLoggedUser.id"></participant-avatar-name-item>
              </div>

              <div
                  v-for="role of getLoggedUser.SystemRoles"
                  :key="role.Id"
                  class="dropdown-item role-item media align-items-center on-hover py-2"
                  @click="onSelectCreator(role.Id)"
              >
                <participant-avatar-name-item :participant-id="role.Id"></participant-avatar-name-item>
              </div>


            </ul>
          </div>
        </div>

        <div class="pt-3">
          <div class="d-flex align-items-center text-secondary f-size-15">Participants<span class="ml-2"
                                                                                            id="participantsGroup-cnt"></span>
          </div>
        </div>

        <div class="chat-section-body d-flex flex-column flex-fill py-2 position-relative">
          <div class="d-flex flex-column position-absolute w-100 h-100 overflow-hidden">
            <perfect-scrollbar class="pr-3">
              <div class="list-group chat-list-dialog list-group-flush overflow-hidden select-action-group">
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

        <div class="chat-section-footer mt-auto pt-3">
          <div class="input-group chat-msg-input-group mb-0 h-100">
            <textarea
                class="form-control h-100 bg-light pl-3 shadow-none f-size-14 chat-textarea-control"
                v-model="messageText"
                rows="2"
                placeholder="Enter a message ..."></textarea>
          </div>
        </div>

        <div class="mt-3 d-flex">

          <label class="toggle-input toggle-input-success m-0">
            <input
                type="checkbox"
                checked="">
            <span class="input-icon f-icon-20">
              <feather-square></feather-square>
              <feather-check-square></feather-check-square>
            </span>Broadcast conversation
          </label>

          <div class="flex-fill text-right">
            <button
                class="btn btn-sm btn-primary shadow-none px-5"
                @click="onCreateConversation()"
                :disabled="!conversationTopic && getSelectedParticipants.length <= 0"
                type="button">
              Go to conversation
            </button>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>
<script>
import {mapGetters} from "vuex";

import FeatherSquare from "@/icons/FeatherSquare";
import FeatherCheckSquare from "@/icons/FeatherCheckSquare";
import FeatherMessageSquareGroup from "@/icons/FeatherMessageSquareGroup";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";
import {CONVERSATION_VIEW_MODES} from "@/const";

export default {
  data() {
    return {
      messageText: null,
      conversationViewModes: CONVERSATION_VIEW_MODES,
    }
  },
  methods: {
    onSelectCreator(id) {
      const creator = this.getParticipantById(id);
      this.$store.commit("setSelectedCreator", creator);
    },
    onSelect(id) {
      this.$store.dispatch("setToggleParticipantSelected", id)
    },
    onCreateConversation() {
      this.$store.dispatch("onCreateConversation", {messageText: this.messageText})
          .then(() => {
            this.messageText = null;
            this.$store.commit("setConversationViewMode", this.conversationViewModes.VIEW);
          });
    }
  },
  computed: {
    ...mapGetters([
      "getLoggedUser",
      "getParticipantById",
      "getSelectedParticipants",
      "getSelectedCreator"]),
    conversationTopic: {
      get() {
        return this.$store.getters.conversationTopic;
      },
      set(value) {
        this.$store.commit("setConversationTopic", value);
      }
    }
  },
  components: {
    ConversationsParticipantsListItem,
    ParticipantAvatarNameItem, FeatherMessageSquareGroup, FeatherCheckSquare, FeatherSquare
  }
}
</script>
