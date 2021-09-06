<template>
  <div v-if="conversation" class="flex-fill position-relative pt-2">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div
        class="d-flex flex-column position-absolute w-100 h-100 overflow-hidden"
      >
        <perfect-scrollbar class="pe-3">
          <div class="row">
            <div class="col-7">
              <div class="text-secondary my-3 f-size-15">
                <div
                  v-if="conversation.isDirect"
                  class="
                    d-flex
                    align-items-center
                    text-secondary
                    mt-3
                    mb-2
                    f-size-15
                  "
                >
                  Information
                  <div
                    class="btn-group btn-group-sm ms-auto"
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <a @click="onAddParticipant" class="btn btn-primary">
                      <feather-user-plus />
                    </a>
                  </div>
                </div>
                <span v-else>Administrator</span>
              </div>

              <div
                v-if="!conversation.isDirect"
                class="d-flex align-content-center"
              >
                <participant-avatar
                  class="avatar-xm me-3"
                  :participant-id="conversation.creatorId"
                  :is-active-indicator="true"
                />
                <div class="media-body ml-n1">
                  <div class="f-size-15 text-dark">
                    {{ getParticipantById(conversation.creatorId).name }}
                  </div>
                  <div class="f-size-12 text-secondary">
                    {{
                      getRolesAsLabel(
                        getParticipantById(conversation.creatorId).roles
                      )
                    }}
                  </div>
                </div>

                <button
                  class="btn btn-primary btn-circle btn-sm f-icon-28 me-2"
                  @click="onShowUserInfo"
                >
                  <feather-message-square-line class="f-icon-18" />
                </button>
              </div>

              <div id="participantsChatList" class="mt-4">
                <div
                  v-if="!conversation.isDirect"
                  class="
                    d-flex
                    align-items-center
                    text-secondary
                    mb-2
                    f-size-15
                  "
                >
                  Participants<span class="ms-2"
                    >({{ conversation.participants.length }})</span
                  >

                  <div class="steps-section ms-auto">
                    <div
                      v-if="!participantsEditMode"
                      class="btn-group btn-group-sm"
                    >
                      <a
                        class="
                          btn
                          text-secondary
                          border-0
                          px-2
                          shadow-none
                          rounded
                        "
                        @click="onParticipantsEditModeChange('delete')"
                      >
                        <feather-user-edit class="f-icon-22" />
                      </a>

                      <a
                        class="
                          btn
                          text-secondary
                          border-0
                          px-2
                          shadow-none
                          rounded
                        "
                        @click="onAddParticipant"
                      >
                        <feather-user-plus class="f-icon-22" />
                      </a>
                    </div>

                    <div v-else class="btn-group btn-group-sm">
                      <a
                        class="
                          btn btn-white
                          shadow-none
                          border-0
                          rounded
                          f-size-12
                        "
                        @click="onParticipantsEditModeChange(null)"
                      >
                        Cancel
                      </a>

                      <button
                        type="button"
                        class="
                          btn btn-sm btn-primary
                          border-0
                          rounded
                          ms-2
                          shadow-none
                        "
                        :disabled="!isAnyParticipantsToDeleteSelected"
                        @click="onRemoveParticipants()"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    list-group list-group-flush
                    overflow-hidden
                    select-action-group
                  "
                >
                  <conversations-participants-list-item
                    v-for="participant of participants"
                    :key="participant.id"
                    :is-toggle-action="participantsEditMode === 'delete'"
                    :participant-id="participant.id"
                    :is-removable="participant.isToRemove"
                    :on-select="
                      () => {
                        participant.isToRemove = participantsEditMode
                          ? !participant.isToRemove
                          : false;
                      }
                    "
                  >
                    <template v-slot:append>
                      <div class="text-nowrap ml-3 text-success f-size-12">
                        Available
                      </div>
                    </template>
                  </conversations-participants-list-item>
                </div>
              </div>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";
import FeatherUserEdit from "@/icons/FeatherUserEdit";
import FeatherUserPlus from "@/icons/FeatherUserPlus";
import { CHAT_VIEW_MODES } from "@/const";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import { guidsAreEqual } from "@/services/guids.service";
import {Actions} from "@/store/enums/EnumTypes";

export default {
  setup() {
    const chatViewModes = CHAT_VIEW_MODES;
    const store = useStore();
    const conversation = computed(() => store.getters.getSelectedConversation);
    const participants = computed(() =>
      conversation.value.participants.filter(
        (participant) =>
          !guidsAreEqual(participant.id, conversation.value.creatorId)
      )
    );

    const participantsEditMode = ref();
    const selectedParticipantsToDelete = ref([]);

    function getParticipantById(id) {
      return computed(() => store.getters.getParticipantById(id)).value;
    }

    function getRolesAsLabel(roles) {
      if (roles) {
        return roles.map((role) => role.name).join(", ");
      }
    }

    const isAnyParticipantsToDeleteSelected = computed(() =>
      conversation.value.participants.some((p) => p.isToRemove)
    );

    function onAddParticipant() {
      store.commit("setChatViewMode", chatViewModes.ADD_PARTICIPANTS);
    }

    function onRemoveParticipants() {
      const participants = conversation.value.participants
        .filter((p) => p.isToRemove)
        .map((p) => {
          return { id: p.id.toLowerCase(), isRole: p.isRole };
        });
      store.dispatch(Actions.onRemoveUsersFromConversation, participants);
    }

    function onParticipantsEditModeChange(mode) {
      conversation.value.participants.map((p) => {
        p.isToRemove = false;
        return p;
      });
      participantsEditMode.value = mode;
    }

    function onShowUserInfo() {
      // todo navigator to user info component
    }

    return {
      conversation,
      participants,
      getParticipantById,
      getRolesAsLabel,
      onAddParticipant,
      onRemoveParticipants,
      onShowUserInfo,
      participantsEditMode,
      onParticipantsEditModeChange,
      selectedParticipantsToDelete,
      isAnyParticipantsToDeleteSelected,
    };
  },
  components: {
    FeatherMessageSquareLine,
    ParticipantAvatar,
    FeatherUserPlus,
    FeatherUserEdit,
    ConversationsParticipantsListItem,
  },
};
</script>
