<template>
  <button
    type="button"
    class="
      btn
      p-0
      shadow-none
      text-secondary text-dark-hover
      toggle-action-active
    "
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <feather-smile class="f-icon-20" />
  </button>

  <div
    class="
      dropdown-menu dropdown-menu-sm dropdown-menu-right
      shadow
      cursor-default
    "
  >
    <div
      class="dropdown-item-text px-2 py-0 f-size-16 joypixels-group text-nowrap"
    >
      <template v-for="reaction in frequentlyUsedEmojis" :key="reaction.value">
        <span
          class="f-size-26 on-hover"
          @click="onMessageQuickReaction(reaction)"
          >{{ reaction.emoji }}
        </span>
      </template>
    </div>
  </div>
</template>
<script>
import FeatherSmile from "@/icons/FeatherSmile";
import { ref } from "vue";
import { Actions, QUICK_REACTIONS } from "@/store/enums/EnumTypes";
import { useStore } from "vuex";
export default {
  props: ["item"],
  components: { FeatherSmile },
  setup(props) {
    const store = useStore();
    const onMessageQuickReaction = (reactionEmoji) => {
      store.dispatch(Actions.onMessageQuickReaction, {
        messageId: props.item.id,
        quickReaction: reactionEmoji.value,
      });
    };

    const frequentlyUsedEmojis = ref(QUICK_REACTIONS);

    return { frequentlyUsedEmojis, onMessageQuickReaction };
  },
};
</script>
