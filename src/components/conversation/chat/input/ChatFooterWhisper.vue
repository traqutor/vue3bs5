<template>
  <div
    v-if="whisperToParticipants.length > 0"
    class="d-flex align-items-center py-1 bg-grey rounded text-white mt-3"
  >
    <button
      class="btn text-white-75 text-white-hover border-0 shadow-none f-icon-46"
      @click="onCancelWhisper"
    >
      <feather-x class="f-icon-24" />
    </button>

    <div class="f-size-13 text-white-75 ps-2">Whispering to:</div>

    <div class="media-body overflow-hidden ms-3">
      <div
        v-if="toggleView"
        class="d-flex align-items-center overflow-hidden f-size-13"
      >
        <div class="media-body overflow-hidden d-flex align-items-center">
          <div class="text-truncate">
            {{
              whisperToParticipants
                .map((recipient) => recipient.name)
                .join(", ")
            }}
          </div>
          <div class="ms-2 text-nowrap">
            {{ whisperToParticipants.length }}
            {{
              whisperToParticipants.length === 1
                ? "participant"
                : "participants"
            }}
          </div>
        </div>

        <a
          class="
            btn
            text-white-75 text-white-hover
            border-0
            px-2
            shadow-none
            ms-5
          "
          @click="onToggleWhisperParticipantsView"
        >
          <feather-users class="f-icon-20" />
        </a>
      </div>

      <div v-else class="d-flex align-items-center">
        <perfect-scrollbar class="flex-grow-1">
          <div class="d-flex">
            <participant-thumb-avatar
              textClasses="text-white"
              v-for="participant of whisperToParticipants"
              :key="participant.id"
              :participant-id="participant.id"
              :is-active-indicator="true"
              @click="onToggleParticipant(participant.id)"
            />
          </div>
        </perfect-scrollbar>

        <a
          class="btn text-white border-0 px-2 shadow-none ms-5"
          @click="onToggleWhisperParticipantsView"
        >
          <feather-minimize class="f-icon-24" />
        </a>
      </div>
    </div>

    <label class="toggle-input toggle-input-lime m-0 ms-4">
      <input type="checkbox" checked="" />
      <span
        class="input-icon f-icon-26"
        data-alterclass="btn-secondary"
        data-alterclasstarget="#dialogSendControl"
      >
        <feather-whisper class="text-white-75" />
        <feather-whisper-message />
      </span>
    </label>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import {Actions, Mutations} from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";
import FeatherUsers from "@/icons/FeatherUsers";
import FeatherMinimize from "@/icons/FeatherMinimize";
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import FeatherWhisper from "@/icons/FeatherWhisper";
import ParticipantThumbAvatar from "@/components/participant/ParticipantThumbAvatar";

export default {
  components: {
    ParticipantThumbAvatar,
    FeatherWhisper,
    FeatherWhisperMessage,
    FeatherMinimize,
    FeatherUsers,
    FeatherX,
  },
  setup() {
    const store = useStore();
    const toggleView = ref(true);
    const whisperToParticipants = computed(
      () => store.getters.getWhisperToParticipants
    );

    const onCancelWhisper = () => {
      store.commit(Mutations.purgeWhisperParticipants);
    };

    const onToggleWhisperParticipantsView = () => {
      toggleView.value = !toggleView.value;
    };

    function onToggleParticipant(participantId) {
      store.dispatch(Actions.setToggleParticipantToWhisper, participantId);
    }

    return {
      toggleView,
      whisperToParticipants,
      onCancelWhisper,
      onToggleParticipant,
      onToggleWhisperParticipantsView,
    };
  },
};
</script>
