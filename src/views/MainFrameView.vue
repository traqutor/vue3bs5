<template>
  <div
    class="app header-fixed sidebar-fixed sidebar-footer-fixed bg-white"
    :class="getAsideLeftClass"
  >
    <aside-left />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AsideLeft from "@/components/aside/AsideLeft";

export default {
  setup() {
    const store = useStore();

    const getAsideLeftClass = computed(() => store.getters.getAsideLeftClass);

    return {
      getAsideLeftClass,
    };
  },
  name: "MainFrameView",
  components: {
    AsideLeft,
  },
};
</script>
