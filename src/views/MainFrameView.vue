<template>
  <div class="app header-fixed sidebar-fixed sidebar-footer-fixed bg-white">
    <app-header></app-header>
    <aside-left></aside-left>
    <main class="content">
      <router-view></router-view>
    </main>
    <ModalMediaSelectionManager />
    <ModalConversationAttachmentViewBox />
    <MediaLightBoxModal v-if="false" />
    <ModalMediaViewBox v-if="false" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";
import AppHeader from "@/components/header/MainHeader";
import AsideLeft from "@/components/aside/AsideLeft";
import ModalMediaSelectionManager from "@/components/media/manager/ModalMediaSelectionManager";
import MediaLightBoxModal from "@/components/media/modals/MediaLightBoxModal";
import ModalMediaViewBox from "@/components/media/modals/ModalMediaViewBox";
import ModalConversationAttachmentViewBox from "@/components/media/modals/ModalConversationAttachmentViewBox";

export default {
  setup() {
    const store = useStore();

    store.dispatch(Actions.onAppInitRecallLoggedUserData);
    store.dispatch(Actions.onCreateHubConnection);

    return {};
  },
  name: "MainFrameView",
  components: {
    ModalConversationAttachmentViewBox,
    MediaLightBoxModal,
    ModalMediaViewBox,
    ModalMediaSelectionManager,
    AppHeader,
    AsideLeft,
  },
};
</script>
