<template>
  <header
    class="
      navbar
      header
      navbar-expand-lg
      bg-light
      p-0
      shadow
      d-flex
      align-items-stretch
    "
  >
    <div class="d-flex align-items-center h5 my-0 px-4 me-auto">
      {{ $route.name }}
    </div>

    <main-header-user-button></main-header-user-button>
    <main-header-right-aside-button></main-header-right-aside-button>
  </header>
</template>
<script>
import MainHeaderUserButton from "@/components/header/MainHeaderUserButton";
import MainHeaderRightAsideButton from "@/components/header/MainHeaderRightAsideButton";

export default {
  components: {
    MainHeaderRightAsideButton,
    MainHeaderUserButton,
  },
};
</script>
