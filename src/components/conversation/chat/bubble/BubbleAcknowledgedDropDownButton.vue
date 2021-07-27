<template>
  <button
    class="btn btn-sm py-1 f-size-12 text-primary shadow-none"
    :class="background"
    :id="`dropdownMenuAcknowledgedId${item.id}`"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Acknowledged<span class="text-red ms-2">
      <span v-if="item.acknowledgedByUsers">{{
        item.acknowledgedByUsers.length
      }}</span
      ><span v-else>0</span>/<span v-if="item.isWhisper">
        <span v-if="item.whisperRecipients">{{
          item.whisperRecipients.length
        }}</span>
      </span>
      <span v-else>
        <span v-if="selectedConversation.participants">{{
          selectedConversation.participants.length
        }}</span>
      </span>
    </span>
  </button>

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
        item.acknowledgedByUsers ? item.acknowledgedByUsers.length : 0
      }})
      <feather-chevrons-right class="ms-auto" />
    </button>

    <perfect-scrollbar
      v-if="item.isWhisper"
      class="dropdown-menu-scroll-list mt-1 pe-3"
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
                class="ms-1"
                :class="
                  isMessageAcknowledgedByUser(item.id)
                    ? 'text-success'
                    : 'text-dark'
                "
              />
            </div>
          </template>
        </ParticipantAvatarNameItem>
      </div>
    </perfect-scrollbar>
    <perfect-scrollbar v-else class="dropdown-menu-scroll-list mt-1 pe-3">
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
                class="ms-1"
                :class="
                  isMessageAcknowledgedByUser(item.id)
                    ? 'text-success'
                    : 'text-dark'
                "
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
        text-nowrap
      "
      data-outside="true"
      type="button"
      @click="onMessageOpen"
    >
      Not acknowledged (<span v-if="item.isWhisper">{{
        item.whisperRecipients.length -
        (item.acknowledgedByUsers ? item.acknowledgedByUsers.length : 0)
      }}</span
      ><span v-else>{{
        selectedConversation.participants.length -
        (item.acknowledgedByUsers ? item.acknowledgedByUsers.length : 0)
      }}</span
      >) <feather-more-horizontal class="ms-auto ps-1" />
    </button>
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

    return { onMessageOpen, isMessageAcknowledgedByUser };
  },
};
</script>
