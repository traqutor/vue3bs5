<template>
  <router-view />
  <ToastNotifications />
</template>

<script>
import { defineComponent } from "vue";
import ToastNotifications from "@/views/toast/ToastNotifications";
import {Mutations} from "@/store/enums/EnumTypes";
import {useStore} from "vuex";

export default defineComponent({
  name: "app",
  components: { ToastNotifications },
  setup() {
    const store = useStore();
    store.commit(Mutations.prepareSoundEffect);

    window.addEventListener("online", function () {
      store.commit(Mutations.setIsSocketOnline);
    });

    window.addEventListener("offline", function () {
      store.commit(Mutations.setIsSocketOnline, false);
    });

  },
});
</script>

<style lang="scss">
@import "assets/scss/custom";
</style>
