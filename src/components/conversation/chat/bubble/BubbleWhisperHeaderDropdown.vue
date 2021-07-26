<template>
  <div class="flex-grow-1 position-relative">
    <div class="position-absolute text-nowrap overflow-hidden w-100">
      <div class="text-truncate w-100 d-inline-block text-white-75 f-size-12">
        Whispered to
        {{
          item.whisperRecipients.map((recipient) => recipient.name).join(", ")
        }}
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
      <div class="dropdown-item-text text-secondary text-nowrap">
        Whisper to ({{ item.whisperRecipients.length }})
      </div>

      <perfect-scrollbar class="dropdown-menu-scroll-list pe-3">
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
    </div>
  </div>
</template>

<script>
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import { guidsAreEqual } from "@/services/guids.service";
export default {
  components: {
    FeatherCheckDouble,
    ParticipantAvatarNameItem,
    FeatherWhisperMessage,
  },
  props: ["item"],

  setup(props) {
    const isMessageWatchedByUser = (id) => {
      return (
        props.item.watchedByUsers &&
        props.item.watchedByUsers.find((watch) => guidsAreEqual(watch.id, id))
      );
    };

    return { isMessageWatchedByUser };
  },
};
</script>
