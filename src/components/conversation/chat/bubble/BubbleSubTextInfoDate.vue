<template>
  <div v-if="!selectedConversation.isDirect" class="dropdown">
    <feather-check-double
      v-if="isUserPost"
      class="me-1"
      :class="isAllParticipantsReadMessage ? 'text-lime' : 'text-white-75'"
    />

    <span
      class="dialog-message-action ign-pointer"
      :id="`dropdownMenuBubbleWatchersId${item.id}`"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >{{ item.watchedByUsers.length }}/<span v-if="item.isWhisper">{{
        item.whisperRecipients.length
      }}</span>
      <span v-else>{{ selectedConversation.participants.length }}</span>
    </span>

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
        Read ({{ item.watchedByUsers.length }})
        <feather-chevron-down class="ms-auto" />
      </button>

      <perfect-scrollbar
        v-if="item.isWhisper"
        class="dropdown-menu-scroll-list pe-3"
      >
        <div
          v-for="(item, index) of item.whisperRecipients"
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
                  class="me-1"
                  :class="isMessageWatchedByUser(item.id) ? 'text-success' : ''"
                />
              </div>
            </template>
          </ParticipantAvatarNameItem>
        </div>
      </perfect-scrollbar>

      <perfect-scrollbar v-else class="dropdown-menu-scroll-list pe-3">
        <div
          v-for="(item, index) of selectedConversation.participants"
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
                  class="me-1"
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
          item.whisperRecipients.length - item.watchedByUsers.length
        }}</span>
        <span v-else>{{
          selectedConversation.participants.length - item.watchedByUsers.length
        }}</span
        >)
        <feather-more-horizontal class="ms-auto" />
      </button>
    </div>
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
import { useStore } from "vuex";
import {
  timeOffsetFormat,
  timeHhMmaDotDdddFormat,
} from "@/services/datetime.service";
import { CHAT_VIEW_MODES } from "@/const";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import FeatherChevronDown from "@/icons/FeatherChevronDown";
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";
import { guidsAreEqual } from "@/services/guids.service";
import { computed } from "vue";

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
      store.commit("setSelectedMessageId", props.item.id);
      store.commit("setChatViewMode", CHAT_VIEW_MODES.MESSAGE);
    };

    const isAllParticipantsReadMessage = computed(() => {
      let isRead = false;
      if (
        props.item.isWhisper &&
        props.item.watchedByUsers.length === props.item.whisperRecipients.length
      ) {
        isRead = true;
      } else {
        if (
          props.selectedConversation.participants.length ===
          props.item.watchedByUsers.length
        ) {
          isRead = true;
        }
      }
      return isRead;
    });

    const isMessageWatchedByUser = (id) => {
      return (
        props.item.watchedByUsers &&
        props.item.watchedByUsers.find((watch) => guidsAreEqual(watch.id, id))
      );
    };

    return {
      isAllParticipantsReadMessage,
      onMessageOpen,
      timeHhMmaDotDdddFormat,
      timeOffsetFormat,
      isMessageWatchedByUser,
    };
  },
};
</script>
