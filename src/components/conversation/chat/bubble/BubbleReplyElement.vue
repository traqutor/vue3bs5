<template>
  <div v-if="item.repliedId" class="d-flex f-col-sm on-hover pb-1">
    <div class="me-2 mt-1 text-primary"
         :class="loggedUserMessage ? 'text-white-75' : 'text-primary'"
    >
      <feather-corner-down-right />
    </div>
    <div class="media-body overflow-hidden">
      <div class="text-truncate">
        <span
          class="font-weight-middle"
          :class="loggedUserMessage ? 'text-light' : 'text-primary'"
          >{{ repliedBy }}</span
        >
      </div>
      <div
        class="text-truncate"
        :class="loggedUserMessage ? 'text-white-75' : 'text-secondary'"
        v-html="item.replyText"
      >
      </div>
    </div>
  </div>
  <div
    v-if="item.repliedId"
    class="border-top my-2"
    :class="loggedUserMessage ? 'border-white' : 'border-secondary-light'"
  ></div>
</template>
<script>
import FeatherCornerDownRight from "@/icons/FeatherCornerDownRight";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: ["item", "loggedUserMessage"],
  components: {
    FeatherCornerDownRight,
  },
  setup(props) {
    const store = useStore();

    const repliedBy = computed(() => {
      if (store.getters.getLoggedUser.id === props.item.repliedFrom) {
        return "Reply: Me";
      } else {
        return store.getters.getParticipantById(props.item.repliedFrom).name;
      }
    });

    return { repliedBy };
  },
};
</script>
