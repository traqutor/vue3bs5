<template>
  <header class="header-navbar">
    <div class="d-flex align-items-center h5 my-0 px-4 me-auto">
      {{ $route.name }}
    </div>

    <main-header-active-role-button></main-header-active-role-button>
    <main-header-user-button></main-header-user-button>
    <main-header-right-aside-button></main-header-right-aside-button>
  </header>
</template>
<script>
import MainHeaderActiveRoleButton from "@/components/header/MainHeaderActiveRoleButton";
import MainHeaderUserButton from "@/components/header/MainHeaderUserButton";
import MainHeaderRightAsideButton from "@/components/header/MainHeaderRightAsideButton";

export default {
  components: {
    MainHeaderActiveRoleButton,
    MainHeaderRightAsideButton,
    MainHeaderUserButton,
  },
};
</script>
<style>
.header-navbar {
  height: 3.75rem;
  position: absolute;
  left: 3.75rem;
  right: 0;
  top: 0;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 -1px 0 #dde3e8;
  z-index: 999;
}
</style>
