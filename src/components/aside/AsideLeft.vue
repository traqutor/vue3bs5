<template>
  <aside
      class="sidebar sidebar-left bg-white d-flex flex-column"
      @mouseover="onLeftAsideMouse(visibilities.HOVER)"
      @mouseleave="onLeftAsideMouse(visibilities.SET)"
  >
    <nav class="navbar bg-light p-0 shadow">
      <div class="navbar-brand w-100">
        <div class="d-flex align-items-center text-decoration-none main-logo">
          <img class="main-logo-image" src="../../assets/logo.svg" alt=""/>
          <img
              class="main-logo-title ms-2"
              src="../../assets/meddy-dark.svg"
              alt=""
          />
          <button
              type="button"
              class="btn btn-sidebar-fixed left-sidebar-toggle text-secondary"
              @click="onToggleLeftAsideFixed()"
          >
            <feather-sidebar/>
          </button>
        </div>
      </div>
    </nav>

    <nav class="nav flex-column mt-3">
      <router-link
          class="nav-link"
          :to="{ path: '/tasks' }"
          :class="$route.path === '/tasks' ? 'active' : ''"
      >
        <feather-clipboard-line class="nav-link-icon"/>
        <span class="nav-link-text">Tasks</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/conversations' }"
          :class="$route.path === '/conversations' ? 'active' : ''"
      >
        <span
            class="
            badge badge-danger
            position-absolute
            badge-pill
            font-weight-normal
          "
        >12</span
        >
        <feather-message-square-line class="nav-link-icon"/>
        <span class="nav-link-text">Conversations</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/incidents' }"
          :class="$route.path === '/incidents' ? 'active' : ''"
      >
        <span
            class="
            badge badge-danger
            position-absolute
            badge-pill
            font-weight-normal
            d-none
          "
        >1</span
        >
        <feather-flasher class="nav-link-icon"/>
        <span class="nav-link-text">Incidents</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/locate' }"
          :class="$route.path === '/locate' ? 'active' : ''"
      >
        <feather-map-pin class="nav-link-icon"/>
        <span class="nav-link-text">Locate</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/alarms' }"
          :class="$route.path === '/alarms' ? 'active' : ''"
      >
        <span
            class="
            badge badge-danger
            position-absolute
            badge-pill
            font-weight-normal
          "
        >4</span
        >
        <feather-alert-triangle class="nav-link-icon"/>
        <span class="nav-link-text">Alarms</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/media' }"
          :class="$route.path === '/media' ? 'active' : ''"
      >
        <feather-play class="nav-link-icon"/>
        <span class="nav-link-text">Media</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/patients' }"
          :class="$route.path === '/patients' ? 'active' : ''"
      >
        <feather-patient class="nav-link-icon"/>
        <span class="nav-link-text">Patients</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/sentinel' }"
          :class="$route.path === '/sentinel' ? 'active' : ''"
      >
        <feather-shield class="nav-link-icon"/>
        <span class="nav-link-text">Sentinel</span>
      </router-link>
    </nav>

    <nav class="nav flex-column mt-auto">
      <router-link
          class="nav-link"
          :to="{ path: '/switchboard' }"
          :class="$route.path === '/switchboard' ? 'active' : ''"
      >
        <feather-headphones-mic class="nav-link-icon"/>
        <span class="nav-link-text">Switchboard</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/role_management' }"
          :class="$route.path === '/role_management' ? 'active' : ''"
      >
        <feather-user-check class="nav-link-icon"/>
        <span class="nav-link-text">Role Management</span>
      </router-link>

      <router-link
          class="nav-link"
          :to="{ path: '/settings' }"
          :class="$route.path === '/settings' ? 'active' : ''"
      >
        <feather-settings class="nav-link-icon"/>
        <span class="nav-link-text">Settings</span>
      </router-link>
    </nav>

  </aside>
</template>
<script>
import {useStore} from "vuex";

import {VISIBILITIES} from "@/const";
import FeatherSidebar from "@/icons/FeatherSidebar";
import FeatherClipboardLine from "@/icons/FeatherClipboardLine";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import FeatherFlasher from "@/icons/FeatherFlasher";
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherAlertTriangle from "@/icons/FeatherAlertTriangle";
import FeatherPatient from "@/icons/FeatherPatient";
import FeatherShield from "@/icons/FeatherShield";
import FeatherHeadphonesMic from "@/icons/FeatherHeadphonesMic";
import FeatherUserCheck from "@/icons/FeatherUserCheck";
import FeatherSettings from "@/icons/FeatherSettings";
import FeatherPlay from "@/icons/FeatherPlay";

export default {
  components: {
    FeatherPlay,
    FeatherSettings,
    FeatherUserCheck,
    FeatherHeadphonesMic,
    FeatherShield,
    FeatherPatient,
    FeatherAlertTriangle,
    FeatherMapPin, FeatherFlasher, FeatherMessageSquareLine, FeatherClipboardLine, FeatherSidebar
  },
  setup() {
    const store = useStore();
    const visibilities = VISIBILITIES;

    const onLeftAsideMouse = (visibility) => {
      if (store.getters.getAsideLeftVisibility !== visibilities.FIXED) {
        store.commit("setAsideLeftVisibility", visibility);
      }
    };

    const onToggleLeftAsideFixed = () => {
      if (store.getters.getAsideLeftVisibility !== visibilities.FIXED) {
        store.commit("setAsideLeftVisibility", visibilities.FIXED);
      } else {
        store.commit("setAsideLeftVisibility", visibilities.SET);
      }
    };

    return {
      visibilities,
      onToggleLeftAsideFixed,
      onLeftAsideMouse,
    };
  },
};
</script>
