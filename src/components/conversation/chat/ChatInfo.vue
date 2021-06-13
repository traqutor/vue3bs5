<template>
  <div v-if="conversation" class="flex-fill position-relative pt-2">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <div class="d-flex flex-column position-absolute w-100 h-100 overflow-hidden">
        <perfect-scrollbar class="pe-3">
          <div class="row">
            <div class="col-7">
              <div class="text-secondary my-3 f-size-15">Administrator</div>
              <div class="d-flex align-content-center">
                <participant-avatar
                    class="avatar-xm me-3"
                    :participant-id="conversation.creatorId"
                    :is-active-indicator="true"
                />
                <div class="media-body ml-n1">
                  <div class="f-size-15 text-dark">Josephin Doe</div>
                  <div class="f-size-12 text-secondary">Doctor</div>
                </div>
                <button class="btn btn-primary btn-circle btn-sm f-icon-28 mr-2">
                  <feather-message-square-line class="f-icon-18" />
                </button>
              </div>

              <div id="participantsChatList" class="mt-4">
                <div class="d-flex align-items-center text-secondary mb-2 f-size-15">
                  Participants<span class="ms-2">({{ conversation.participants.length }})</span>

                  <div class="steps-section ms-auto">
                    <div v-if="!participantsEditMode" class="btn-group btn-group-sm">

                      <a class="btn text-secondary border-0 px-2 shadow-none rounded"
                         @click="onParticipantsEditModeChange('delete')"
                      >
                        <feather-user-edit class="f-icon-22"/>
                      </a>

                      <a class="btn text-secondary border-0 px-2 shadow-none rounded"
                         @click="onAddParticipant"
                      >
                        <feather-user-plus class="f-icon-22"/>
                      </a>
                    </div>

                    <div v-else class="btn-group btn-group-sm">
                      <a class="btn btn-white shadow-none border-0 rounded f-size-12"
                         @click="onParticipantsEditModeChange(null)"
                      >
                        Cancel
                      </a>

                      <button type="button" class="btn btn-sm btn-primary border-0 rounded ms-2 shadow-none"

                              :disabled="!selectedParticipantsToDelete">Delete
                      </button>
                    </div>
                  </div>

                </div>

                <div
                    class="list-group list-group-flush overflow-hidden select-action-group"
                >
                  <conversations-participants-list-item
                      v-for="participant of conversation.participants"
                      :key="participant.id"
                      :is-toggle-action="participantsEditMode === 'delete'"
                      :participant-id="participant.id"
                      :is-removable="isParticipantsToDeleteSelected"
                      :on-select="onToggleSelectedParticipantsToDelete"
                  >
                    <template v-slot:append>
                      <div class="text-nowrap ml-3 text-success f-size-12">Available</div>
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
import {computed, ref} from "vue";
import {useStore} from "vuex";
import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";
import FeatherUserEdit from "@/icons/FeatherUserEdit";
import FeatherUserPlus from "@/icons/FeatherUserPlus";
import {CHAT_VIEW_MODES} from "@/const";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";

export default {
  setup() {
    const chatViewModes = CHAT_VIEW_MODES;
    const participantsEditMode = ref();
    const selectedParticipantsToDelete = ref([]);
    const store = useStore();
    const conversation = computed(() => store.getters.getSelectedConversation);
    const isParticipantsToDeleteSelected = computed((id) => {
      console.log("selectedParticipantsToDelete", selectedParticipantsToDelete);
      return selectedParticipantsToDelete.value.find(participant => participant === id)
    })

    function onAddParticipant() {
      store.commit("setChatViewMode", chatViewModes.ADD_PARTICIPANTS);
    }

    function onParticipantsEditModeChange(mode) {
      participantsEditMode.value = mode;
    }

    function onToggleSelectedParticipantsToDelete(participant) {
      selectedParticipantsToDelete.value.push(participant);
      console.log("selectedParticipantsToDelete", selectedParticipantsToDelete);
    }



    return {
      conversation,
      onAddParticipant,
      participantsEditMode,
      onParticipantsEditModeChange,
      selectedParticipantsToDelete,
      isParticipantsToDeleteSelected,
      onToggleSelectedParticipantsToDelete
    }
  },
  components: {
    FeatherMessageSquareLine,
    ParticipantAvatar,
    FeatherUserPlus, FeatherUserEdit, ConversationsParticipantsListItem
  }
}
</script>
