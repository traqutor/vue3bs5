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
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import AppHeader from "@/components/header/MainHeader";
import AsideLeft from "@/components/aside/AsideLeft";

export default {
  setup() {
    const store = useStore();
    console.log("app store", store);
    const getAsideLeftClass = computed(() => store.getters.getAsideLeftClass);

    store.dispatch("onAppInitRecallLoggedUserData");
    store.dispatch("onCreateHubConnection");

    return {
      getAsideLeftClass,
    };
  },
  name: "MainFrameView",
  components: {
    AppHeader,
    AsideLeft,
  },
};
</script>
