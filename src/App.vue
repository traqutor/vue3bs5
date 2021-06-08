<template>
  <router-view />
</template>
<script>
import {useStore} from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("onCreateHubConnection");
  }
}
</script>
<style lang="scss">
@import "assets/scss/custom";
</style>
