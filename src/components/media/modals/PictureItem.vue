<template>
  <div
    class="vel-img-wrapper"
    style="
      cursor: grab;
      top: calc(50% + 0px);
      left: calc(50% + 0px);
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    "
  >
    <img
      v-if="item"
      draggable="false"
      class="vel-img"
      :src="`data:image/jpeg;base64, ${item.dataBase64}`"
    />
    <div v-else class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const item = computed(() => store.getters.getMediaSelectedItem);

    return {
      item,
    };
  },
};
</script>
