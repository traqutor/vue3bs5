<template>
  <div v-if="item.repliedId" class="d-flex f-col-sm on-hover pb-1">
    <div class="me-2 mt-1 text-primary">
      <feather-corner-down-right />
    </div>
    <div class="media-body overflow-hidden">
      <div class="text-truncate">
        <span class="text-primary font-weight-middle"
          >Reply: {{ repliedBy }}</span
        >
      </div>
      <div class="text-truncate text-secondary">
        {{ item.replyText }}
      </div>
    </div>
  </div>
  <div
    v-if="item.repliedId"
    class="border-top border-secondary-light my-2"
  ></div>
</template>
<script>
import FeatherCornerDownRight from "@/icons/FeatherCornerDownRight";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: ["item"],
  components: {
    FeatherCornerDownRight,
  },
  setup(props) {
    const store = useStore();

    const repliedBy = computed(() => {
      return store.getters.getParticipantById(props.item.repliedFrom).name;
    });

    return { repliedBy };
  },
};
</script>
