<template>
  <div
    v-if="item.quickReactions && item.quickReactions.length > 0"
    class="
      dialog-group-reactions
      position-absolute position-bottom-right
      me-1
      dropdown
    "
  >
    <div
      class="
        d-inline-flex
        align-items-center
        rounded-pill
        bg-white
        overflow-hidden
        on-hover
        px-1
      "
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <template
        v-for="reaction of emojiAndCounters"
        :key="reaction.participant.id"
      >
        <div class="dialog-reaction d-inline-flex align-items-center">
          <span class="f-size-16 joypixels-group">
            <span class="rounded-circle bg-white m-0 joypixels-icon on-hover"
              ><span class="joypixels"
                >{{ getReaction(reaction.reaction) }}
              </span>
            </span>
          </span>
          <span
            v-if="reaction.counter > 1"
            class="font-weight-middle f-size-13 text-secondary me-2"
            >{{ reaction.counter }}</span
          >
        </div>
      </template>
    </div>

    <div
      class="dropdown-menu dropdown-menu-sm pt-1 shadow cursor-default"
      x-placement="bottom-start"
      style="
        position: absolute;
        will-change: transform;
        top: 0px;
        left: 0px;
        transform: translate3d(0px, 26px, 0px);
      "
    >
      <div class="dropdown-item-text text-secondary">Reactions (3)</div>
      <perfect-scrollbar class="dropdown-menu-scroll-list mt-1">
        <template
          v-for="reaction of item.quickReactions"
          :key="reaction.participant.id"
        >
          <div
            class="dropdown-item d-flex align-items-center on-hover mb-1"
            @click="onRemoveReaction(reaction)"
          >
            <ParticipantAvatarNameItem
              :participant-id="reaction.participant.id"
            >
              <template v-slot:secondary>
                <div class="ms-5 f-size-16">
                  <span class="joypixels-icon on-hover">
                    {{ getReaction(reaction.reaction) }}
                  </span>
                </div>
              </template>
            </ParticipantAvatarNameItem>
          </div>
        </template>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Actions, QUICK_REACTIONS } from "@/store/enums/EnumTypes";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";

export default {
  components: { ParticipantAvatarNameItem },
  props: ["item"],
  setup(props) {
    const store = useStore();

    const emojiAndCounters = computed(() => {
      const reactions = [];
      props.item.quickReactions.forEach((quick) => {
        const idx = reactions.findIndex((r) => r.reaction === quick.reaction);
        if (idx === -1) {
          reactions.push({ ...quick, counter: 1 });
        } else {
          reactions[idx].counter++;
        }
      });
      return reactions;
    });

    const getReaction = (reaction) => {
      return QUICK_REACTIONS.find((r) => r.value === reaction).emoji;
    };

    const onRemoveReaction = (reaction) => {
      if (store.getters.getLoggedUser.id === reaction.participant.id) {
        store.dispatch(Actions.onRemoveQuickReaction, {
          messageId: props.item.id,
          quickReaction: reaction.reaction,
        });
      }
    };

    return { onRemoveReaction, emojiAndCounters, getReaction };
  },
};
</script>
