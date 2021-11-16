<template>
  <router-view />
  <ToastNotifications />
</template>

<script>
import { defineComponent } from "vue";
import ToastNotifications from "@/views/toast/ToastNotifications";

export default defineComponent({
  name: "app",
  components: { ToastNotifications },
});
</script>

<style lang="scss">
@import "assets/scss/custom";
</style>
