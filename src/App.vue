<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();
    console.log(store);
  },
});
</script>

<style lang="scss">
@import "assets/scss/custom";
</style>
