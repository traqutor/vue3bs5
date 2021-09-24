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
    <MediaLightBoxModal v-if="false" />
    <ModalMediaViewBox v-if="true" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";
import AppHeader from "@/components/header/MainHeader";
import AsideLeft from "@/components/aside/AsideLeft";
import ModalMediaSelectionManager from "@/components/media/manager/ModalMediaSelectionManager";
import MediaLightBoxModal from "@/components/media/modals/MediaLightBoxModal";
import ModalMediaViewBox from "@/components/media/modals/ModalMediaViewBox";

export default {
  setup() {
    const store = useStore();
    const getAsideLeftClass = computed(() => store.getters.getAsideLeftClass);

    store.dispatch(Actions.onAppInitRecallLoggedUserData);
    store.dispatch("onCreateHubConnection");

    return {
      getAsideLeftClass,
    };
  },
  name: "MainFrameView",
  components: {
    MediaLightBoxModal,
    ModalMediaViewBox,
    ModalMediaSelectionManager,
    AppHeader,
    AsideLeft,
  },
};
</script>
