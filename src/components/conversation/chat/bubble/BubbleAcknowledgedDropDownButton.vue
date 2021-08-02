<template>
  <button
    class="btn btn-sm py-1 f-size-12 text-primary shadow-none"
    :class="background"
    :id="`dropdownMenuAcknowledgedId${item.id}`"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Acknowledged<span class="text-red ms-2">
      <span v-if="acknowledgedByMessageParticipants">{{
        acknowledgedByMessageParticipants.length
      }}</span
      ><span v-else>0</span>/<span v-if="item.isWhisper">
        <span v-if="whisperRecipients">{{ whisperRecipients.length }}</span>
      </span>
      <span v-else>
        <span v-if="selectedConversationMessageParticipants">{{
          selectedConversationMessageParticipants.length
        }}</span>
      </span>
    </span>
  </button>

  <!-- start:: dropdown menu -->
  <div
    class="dropdown-menu dropdown-menu-sm dropdown-menu-right p-0 shadow"
    :aria-labelledby="`dropdownMenuAcknowledgedId${item.id}`"
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
      Acknowledged ({{
        acknowledgedByMessageParticipants
          ? acknowledgedByMessageParticipants.length
          : 0
      }})
      <feather-chevrons-right class="ms-auto" />
    </button>

    <!-- start:: dropdown menu for whisper message -->
    <perfect-scrollbar
      v-if="item.isWhisper"
      class="dropdown-menu-scroll-list mt-1 pe-3"
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
                class="ms-1"
                :class="item.isAcknowledged ? 'text-success' : 'text-dark'"
              />
            </div>
          </template>
        </ParticipantAvatarNameItem>
      </div>
    </perfect-scrollbar>
    <!-- end:: dropdown menu for whisper message -->

    <!-- start:: dropdown menu for all conversation participants message -->
    <perfect-scrollbar v-else class="dropdown-menu-scroll-list mt-1 pe-3">
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
                class="ms-1"
                :class="item.isAcknowledged ? 'text-success' : 'text-dark'"
              />
            </div>
          </template>
        </ParticipantAvatarNameItem>
      </div>
    </perfect-scrollbar>
    <!-- end:: dropdown menu for all conversation participants message -->

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
        text-nowrap
      "
      data-outside="true"
      type="button"
      @click="onMessageOpen"
    >
      Not acknowledged (<span v-if="item.isWhisper">{{
        whisperRecipients.length -
        (acknowledgedByUsers ? acknowledgedByUsers.length : 0)
      }}</span
      ><span v-else>{{
        selectedConversationMessageParticipants.length -
        (acknowledgedByUsers ? acknowledgedByUsers.length : 0)
      }}</span
      >) <feather-more-horizontal class="ms-auto ps-1" />
    </button>
    <!-- end:: dropdown menu -->
  </div>
</template>
<script>
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import { CHAT_VIEW_MODES } from "@/const";
import { useStore } from "vuex";
import FeatherChevronsRight from "@/icons/FeatherChevronsRight";
import { guidsAreEqual } from "@/services/guids.service";
import { computed } from "vue";
import { sortByIsAcknowledged } from "@/services/sort.service";
export default {
  components: {
    FeatherChevronsRight,
    ParticipantAvatarNameItem,
    FeatherCheckDouble,
    FeatherMoreHorizontal,
  },
  props: ["item", "selectedConversation", "background"],
  setup(props) {
    const store = useStore();

    const selectedConversationMessageParticipants = computed(() =>
      store.getters
        .getSelectedConversationMessageParticipants(props.item)
        .map((participant) => {
          return {
            ...participant,
            isAcknowledged: isMessageAcknowledgedByUser(participant.id),
          };
        })
        .sort(sortByIsAcknowledged)
    );

    const whisperRecipients = computed(() =>
      store.getters
        .getWhisperMessageParticipants(props.item)
        .map((participant) => {
          return {
            ...participant,
            isAcknowledged: isMessageAcknowledgedByUser(participant.id),
          };
        })
        .sort(sortByIsAcknowledged)
    );

    const acknowledgedByMessageParticipants = computed(() =>
      store.getters.getAcknowledgedByMessageParticipants(props.item)
    );

    const onMessageOpen = () => {
      store.commit("setSelectedMessageId", props.item.id);
      store.commit("setChatViewMode", CHAT_VIEW_MODES.MESSAGE);
    };

    const isMessageAcknowledgedByUser = (id) => {
      return (
        props.item.acknowledgedByUsers &&
        props.item.acknowledgedByUsers.find((watch) =>
          guidsAreEqual(watch.id, id)
        )
      );
    };

    return {
      acknowledgedByMessageParticipants,
      selectedConversationMessageParticipants,
      whisperRecipients,
      onMessageOpen,
      isMessageAcknowledgedByUser,
    };
  },
};
</script>
