<template>
  <header class="header-navbar">
    <div class="main-header-logo">
      <img
        class="main-header-image"
        src="../../../public/images/logo.svg"
        alt=""
      />
    </div>

    <div class="d-flex align-items-center h5 my-0 px-4 me-auto">
      {{ $route.name }}
    </div>

    <main-header-user-button></main-header-user-button>
  </header>
</template>
<script>
import MainHeaderUserButton from "@/components/header/MainHeaderUserButton";

export default {
  components: {
    MainHeaderUserButton,
  },
};
</script>
<style>
.header-navbar {
  height: 64px;
  position: absolute;
  left: 0;
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
