<template>
  <div
    class="app header-fixed sidebar-fixed sidebar-footer-fixed bg-white"
    :class="getAsideLeftClass"
  >
    <app-header></app-header>
    <aside-left></aside-left>
    <main class="content">
      <router-view></router-view>
    </main>
    <ModalMediaSelectionManager />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import AppHeader from "@/components/header/MainHeader";
import AsideLeft from "@/components/aside/AsideLeft";
import ModalMediaSelectionManager from "@/components/media/modals/ModalMediaSelectionManager";

export default {
  setup() {
    const store = useStore();
    const getAsideLeftClass = computed(() => store.getters.getAsideLeftClass);

    store.dispatch("onAppInitRecallLoggedUserData");
    store.dispatch("onCreateHubConnection");

    return {
      getAsideLeftClass,
    };
  },
  name: "MainFrameView",
  components: {
    ModalMediaSelectionManager,
    AppHeader,
    AsideLeft,
  },
};
</script>
