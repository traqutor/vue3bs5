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
  },
});
</script>

<style lang="scss">
@import "assets/scss/custom";
</style>
