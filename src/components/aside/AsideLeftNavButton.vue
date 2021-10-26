<template>
  <router-link class="aside-nav-link" :to="{ path }" @click="onButtonNavigate">
    <div class="d-inline-block position-relative">
      <span
        v-if="badgeNumber > 0"
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          badge
          rounded-pill
          bg-danger
        "
      >
        {{ badgeNumber > 99 ? "+99" : badgeNumber }}
        <span class="visually-hidden"></span>
      </span>
      <slot></slot>
    </div>
    <span class="aside-nav-link-text">{{ title }}</span>
  </router-link>
</template>

<script>
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  props: ["title", "path", "badgeNumber"],
  setup() {
    const store = useStore();
    const onButtonNavigate = () => {
      store.commit(Mutations.setSoundEffect);
    };
    return {
      onButtonNavigate,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/constans";

.aside-left {
  width: 72px;
  box-shadow: inset 0 -1px 0 #dde3e8;
}

.aside-nav-link {
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $grey;
}

.aside-nav-link-text {
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  text-decoration: none;
}

.aside-nav-link:hover,
.aside-nav-link:visited,
.aside-nav-link:link,
.aside-nav-link:active {
  text-decoration: none;
}

.aside-nav-link:hover {
  color: $primary-black;
  background-color: $grey-hover;
}
.aside-nav-link.router-link-active {
  color: $orange;
  background-color: rgba($orange, 0.1);
}
</style>
