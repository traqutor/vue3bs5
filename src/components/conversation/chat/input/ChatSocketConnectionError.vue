<template>
  <div v-if="isReconnecting">
    <span class="label-error">Network Connection Lost</span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const isReconnecting = computed(
      () => store.getters.getIsSocketReconnecting
    );

    return {
      isReconnecting,
    };
  },
};
</script>
