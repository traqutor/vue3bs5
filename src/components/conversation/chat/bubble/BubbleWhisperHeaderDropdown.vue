<template>
  <div class="flex-grow-1 position-relative">
    <div class="position-absolute text-nowrap overflow-hidden w-100">
      <div class="text-truncate w-100 d-inline-block text-white-75 f-size-12">
        Whispered to {{ whisperedTo }}
      </div>
    </div>
  </div>

  <div class="dropdown ms-2 on-hover-visible me-n1 mt-n1">
    <button
      class="btn btn-secondary btn-circle btn-sm shadow-none f-icon-28"
      :id="`dropdownMenuBubbleWhispersId${item.id}`"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <feather-whisper-message class="text-white f-icon-16" />
    </button>
    <!-- start:: dropdown menu -->
    <div
      class="dropdown-menu dropdown-menu-right dropdown-menu-sm pt-1 shadow"
      :aria-labelledby="`dropdownMenuBubbleWhispersId${item.id}`"
      x-placement="bottom-end"
      style="
        position: absolute;
        transform: translate3d(-184px, 28px, 0px);
        top: 0px;
        left: 0px;
        will-change: transform;
      "
    >
      <button
        class="
          dropdown-item-text
          py-2
          btn btn-white
          border-0
          d-flex
          align-items-center
          w-100
          text-secondary
          rounded-bottom-0
        "
        type="button"
        @click="onMessageOpen"
      >
        Whisper to ({{ whisperRecipients.length }})
        <feather-chevrons-right class="ms-auto" />
      </button>

      <perfect-scrollbar class="dropdown-menu-scroll-list pe-3">
        <div
          v-for="(item, index) of whisperRecipients"
          :key="index"
          class="dropdown-item d-flex align-items-center on-hover mb-1"
        >
          <ParticipantAvatarNameItem :participant-id="item.id">
          </ParticipantAvatarNameItem>
        </div>
      </perfect-scrollbar>
    </div>
    <!-- end:: dropdown menu -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/EnumTypes";
import { guidsAreEqual } from "@/services/guids.service";
import { CHAT_VIEW_MODES } from "@/const";
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherChevronsRight from "@/icons/FeatherChevronsRight";

export default {
  components: {
    FeatherChevronsRight,
    ParticipantAvatarNameItem,
    FeatherWhisperMessage,
  },
  props: ["item"],

  setup(props) {
    const store = useStore();

    const whisperRecipients = computed(() =>
      store.getters.getWhisperMessageParticipants(props.item)
    );

    const whisperedTo = computed(() => {
      return whisperRecipients.value
        .map((recipient) => store.getters.getParticipantById(recipient.id).name)
        .join(", ");
    });

    const isMessageWatchedByUser = (id) => {
      return (
        props.item.watchedByUsers &&
        props.item.watchedByUsers.find((watch) => guidsAreEqual(watch.id, id))
      );
    };

    const onMessageOpen = () => {
      store.commit(Mutations.setSelectedMessageId, props.item.id);
      store.commit(Mutations.setChatViewMode, CHAT_VIEW_MODES.MESSAGE);
    };

    return {
      whisperRecipients,
      whisperedTo,
      onMessageOpen,
      isMessageWatchedByUser,
    };
  },
};
</script>
