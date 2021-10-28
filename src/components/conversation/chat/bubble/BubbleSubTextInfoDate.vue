<template>
  <div class="dropdown">
    <feather-check-double
      v-if="isUserPost"
      class="me-1"
      :class="isAllParticipantsReadMessage ? 'text-lime' : 'text-white-75'"
    />

    <!-- start::readers counter -->
    <span
      v-if="isReaderCounterVisible"
      class="dialog-message-action ign-pointer"
      :id="`dropdownMenuBubbleWatchersId${item.id}`"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >{{ watchedMessageParticipants.length }}/<span v-if="item.isWhisper">{{
        whisperRecipients.length
      }}</span>
      <span v-else>{{ selectedConversationMessageParticipants.length }}</span>
    </span>
    <!-- end::readers counter -->

    <!-- start:: dropdown menu -->
    <div
      class="dropdown-menu dropdown-menu-sm p-0 shadow"
      :aria-labelledby="`dropdownMenuBubbleWatchersId${item.id}`"
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
        Read ({{ watchedMessageParticipants.length }})
        <feather-chevron-down class="ms-auto" />
      </button>

      <perfect-scrollbar
        v-if="item.isWhisper"
        class="dropdown-menu-scroll-list pe-3"
      >
        <div
          v-for="(item, index) of whisperRecipients"
          :key="index"
          class="dropdown-item d-flex align-items-center on-hover mb-1"
        >
          <ParticipantAvatarNameItem :participant-id="item.id">
            <template v-slot:secondary>
              <div
                class="
                  ms-auto
                  text-nowrap
                  ms-5
                  pt-1
                  text-muted
                  f-size-12
                  align-self-start
                "
              >
                <feather-check-double
                  class="ms-2"
                  :class="isMessageWatchedByUser(item.id) ? 'text-success' : ''"
                />
              </div>
            </template>
          </ParticipantAvatarNameItem>
        </div>
      </perfect-scrollbar>

      <perfect-scrollbar v-else class="dropdown-menu-scroll-list pe-3">
        <div
          v-for="(item, index) of selectedConversationMessageParticipants"
          :key="index"
          class="dropdown-item d-flex align-items-center on-hover mb-1"
        >
          <ParticipantAvatarNameItem :participant-id="item.id">
            <template v-slot:secondary>
              <div
                class="
                  ms-auto
                  text-nowrap
                  ms-5
                  pt-1
                  text-muted
                  f-size-12
                  align-self-start
                "
              >
                <feather-check-double
                  class="ms-2"
                  :class="isMessageWatchedByUser(item.id) ? 'text-success' : ''"
                />
              </div>
            </template>
          </ParticipantAvatarNameItem>
        </div>
      </perfect-scrollbar>

      <button
        class="
          dropdown-item-text
          py-2
          btn btn-light
          border-0
          d-flex
          align-items-center
          w-100
          text-secondary
          rounded-top-0
        "
        type="button"
        @click="onMessageOpen()"
      >
        Not read (<span v-if="item.isWhisper">{{
          whisperRecipients.length - watchedMessageParticipants.length
        }}</span>
        <span v-else>{{
          selectedConversationMessageParticipants.length -
          watchedMessageParticipants.length
        }}</span
        >)
        <feather-more-horizontal class="ms-auto" />
      </button>
    </div>
    <!-- end:: dropdown menu -->
  </div>

  <span
    class="ms-auto ps-3 ign-pointer"
    @click="onMessageOpen"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :title="timeHhMmaDotDdddFormat(item.createdTime.seconds)"
    >{{ timeOffsetFormat(item.createdTime.seconds) }}</span
  >
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { guidsAreEqual } from "@/services/guids.service";
import { sortByIsWatched } from "@/services/sort.service";
import {
  timeOffsetFormat,
  timeHhMmaDotDdddFormat,
} from "@/services/datetime.service";
import { Mutations } from "@/store/enums/EnumTypes";
import { CHAT_VIEW_MODES } from "@/const";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import FeatherChevronDown from "@/icons/FeatherChevronDown";
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";

export default {
  components: {
    FeatherMoreHorizontal,
    FeatherChevronDown,
    FeatherCheckDouble,
    ParticipantAvatarNameItem,
  },
  props: ["item", "selectedConversation", "isUserPost"],
  setup(props) {
    const store = useStore();
    const onMessageOpen = () => {
      store.commit(Mutations.setSelectedMessageId, props.item.id);
      store.commit(Mutations.setChatViewMode, CHAT_VIEW_MODES.MESSAGE);
    };

    const isReaderCounterVisible = computed(() => {
      return !props.selectedConversation.isDirect && props.selectedConversation.participants?.length > 2;
    });

    const watchedMessageParticipants = computed(() =>
      store.getters.getWatchedMessageParticipants(props.item)
    );

    const whisperRecipients = computed(() =>
      store.getters.getWhisperMessageParticipants(props.item)
    );

    const selectedConversationMessageParticipants = computed(() =>
      store.getters
        .getSelectedConversationMessageParticipants(props.item)
        .map((participant) => {
          return {
            ...participant,
            isWatched: isMessageWatchedByUser(participant.id),
          };
        })
        .sort(sortByIsWatched)
    );

    const isAllParticipantsReadMessage = computed(() => {
      if (props.item.isWhisper) {
        return (
          watchedMessageParticipants.value.length ===
          whisperRecipients.value.length
        );
      } else {
        return (
          watchedMessageParticipants.value.length ===
          selectedConversationMessageParticipants.value.length
        );
      }
    });

    const isMessageWatchedByUser = (id) => {
      return (
        props.item.watchedByUsers &&
        props.item.watchedByUsers.find((watch) => guidsAreEqual(watch.id, id))
      );
    };

    return {
      watchedMessageParticipants,
      whisperRecipients,
      isAllParticipantsReadMessage,
      isReaderCounterVisible,
      selectedConversationMessageParticipants,
      onMessageOpen,
      timeHhMmaDotDdddFormat,
      timeOffsetFormat,
      isMessageWatchedByUser,
    };
  },
};
</script>
