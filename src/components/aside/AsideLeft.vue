<template>
  <aside
    class="sidebar sidebar-left bg-white d-flex flex-column"
    @mouseover="onLeftAsideMouse(visibilities.HOVER)"
    @mouseleave="onLeftAsideMouse(visibilities.SET)"
  >
    <nav class="navbar bg-light p-0 shadow">
      <div class="navbar-brand w-100">
        <div class="d-flex align-items-center text-decoration-none main-logo">
          <img class="main-logo-image" src="../../assets/logo.svg" alt="" />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-sidebar"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <nav class="nav flex-column mt-3">
      <a class="nav-link" href="index.php?page=task">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-clipboard-line nav-link-icon"
        >
          <path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          ></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M8,15 L16,15"></path>
          <path d="M8,11 L16,11"></path>
        </svg>
        <span class="nav-link-text">Tasks</span>
      </a>
      <a class="nav-link" href="index.php?page=chat">
        <span
          class="
            badge badge-danger
            position-absolute
            badge-pill
            font-weight-normal
          "
          >12</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-message-square-line nav-link-icon"
        >
          <path
            d="M 21 15 C 21 16.105 20.105 17 19 17 L 7 17 L 3 21 L 3 5 C 3 3.895 3.895 3 5 3 L 19 3 C 20.105 3 21 3.895 21 5 L 21 15 Z M 7 12 L 17.132 12 L 7 12 Z M 7 8 L 17.132 8 L 7 8 Z"
          ></path>
        </svg>
        <span class="nav-link-text">Conversations</span>
      </a>
      <a class="nav-link" href="index.php?page=incident">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-flasher nav-link-icon"
        >
          <path
            d="M 3.2 22.6 L 21.2 22.6 L 21.2 19.3 C 21.2 18.6 20.7 18.3 19.4 18.3 L 18.1 18.3 L 18.1 11.1 C 18.1 7.9 15.5 5.4 12.2 5.4 C 8.9 5.4 6.2 7.9 6.2 11.1 L 6.2 18.3 L 4.7 18.3 C 3.5 18.3 3.2 18.5 3.2 19.3 L 3.2 22.6 Z"
          ></path>
          <path d="M 6.1 18.3 L 18.1 18.3"></path>
          <path
            d="M 12.2 3.1 C 12.4 3.1 12.5 3 12.5 2.8 L 12.5 1.1 C 12.5 1 12.4 0.8 12.2 0.8 C 12 0.8 11.9 1 11.9 1.1 L 11.9 2.8 C 11.9 3 12 3.1 12.2 3.1 Z"
          ></path>
          <path
            d="M 5.9 5.5 C 6 5.6 6.1 5.6 6.2 5.6 C 6.3 5.6 6.3 5.6 6.4 5.5 C 6.5 5.4 6.5 5.2 6.4 5.1 L 5.2 3.9 C 5.1 3.8 4.9 3.8 4.8 3.9 C 4.7 4 4.7 4.2 4.8 4.4 L 5.9 5.5 Z"
          ></path>
          <path
            d="M 18 5.6 C 18.1 5.6 18.2 5.6 18.2 5.5 L 19.4 4.4 C 19.5 4.2 19.5 4 19.4 3.9 C 19.3 3.8 19.1 3.8 18.9 3.9 L 17.8 5.1 C 17.7 5.2 17.7 5.4 17.8 5.5 C 17.8 5.6 17.9 5.6 18 5.6 Z"
          ></path>
          <path
            d="M 11.8 8.8 C 10.1 8.8 8.7 10.2 8.7 11.9 C 8.7 12.1 8.8 12.2 9 12.2 C 9.2 12.2 9.3 12.1 9.3 11.9 C 9.3 10.6 10.4 9.5 11.8 9.5 C 11.9 9.5 12.1 9.3 12.1 9.1 C 12.1 9 11.9 8.8 11.8 8.8 Z"
          ></path>
        </svg>
        <span class="nav-link-text">Incidents</span>
      </a>
      <a class="nav-link" href="index.php?page=locate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-map-pin nav-link-icon"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span class="nav-link-text">Locate</span>
      </a>
      <a class="nav-link" href="index.php?page=alarm">
        <span
          class="
            badge badge-danger
            position-absolute
            badge-pill
            font-weight-normal
          "
          >4</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-alert-triangle nav-link-icon"
        >
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          ></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <span class="nav-link-text">Alarms</span>
      </a>
      <a class="nav-link" href="index.php?page=media">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-play nav-link-icon"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span class="nav-link-text">Media</span>
      </a>
      <a class="nav-link" href="index.php?page=patient">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-patient nav-link-icon"
        >
          <path
            d="M20.9971 19.8334V17.5001C20.9971 16.2624 20.523 15.0754 19.6791 14.2002C18.8352 13.3251 17.6906 12.8334 16.4971 12.8334H7.49713C6.30366 12.8334 5.15907 13.3251 4.31515 14.2002C3.47124 15.0754 2.99713 16.2624 2.99713 17.5001V19.8334"
          ></path>
          <path
            d="M12.55 18H10.2351C9.00253 18 8 18.896 8 20C8 21.104 9.00253 22 10.2351 22H18.0746C19.5 22 21 21.5 21 19.5"
          ></path>
          <path d="M12 22.0004H17L15.5 14H13.5L12 22.0004Z"></path>
          <path
            d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
          ></path>
        </svg>
        <span class="nav-link-text">Patients</span>
      </a>
      <a class="nav-link" href="index.php?page=sentinel">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-shield nav-link-icon"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <span class="nav-link-text">Sentinel</span>
      </a>
    </nav>
    <nav class="nav flex-column mt-auto">
      <a class="nav-link" href="index.php?page=switchboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-headphones-mic nav-link-icon"
        >
          <path
            d="M 3.463 10.709 L 3.463 9.044 C 3.463 3.277 10.606 -0.328 16.32 2.556 C 18.973 3.894 20.606 6.368 20.606 9.044 L 20.606 10.709"
          ></path>
          <path
            d="M 21.494 14.872 C 21.494 15.792 20.749 16.537 19.829 16.537 L 18.997 16.537 C 18.077 16.537 17.332 15.792 17.332 14.872 L 17.332 12.374 C 17.332 11.454 18.077 10.709 18.997 10.709 L 21.494 10.709 L 21.494 14.872 Z"
          ></path>
          <path
            d="M 19.494 19.211 L 19.494 20.161 C 19.494 21.11 18.725 21.88 17.776 21.88 L 14.711 21.88"
          ></path>
          <circle
            cx="10.066"
            cy="16.386"
            r="1.7"
            transform="matrix(0.999999, 0, 0, 0.999998, 2.944995, 4.525012)"
          ></circle>
          <path
            d="M 2.509 14.872 C 2.509 15.792 3.254 16.537 4.174 16.537 L 5.007 16.537 C 5.926 16.537 6.672 15.792 6.672 14.872 L 6.672 12.374 C 6.672 11.454 5.926 10.709 5.007 10.709 L 2.509 10.709 L 2.509 14.872 Z"
          ></path>
        </svg>
        <span class="nav-link-text">Switchboard</span>
      </a>
      <a class="nav-link" href="index.php?page=roles">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-user-check nav-link-icon"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </svg>
        <span class="nav-link-text">Role Management</span>
      </a>
      <a class="nav-link active" href="index.php?page=settings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-settings nav-link-icon"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          ></path>
        </svg>
        <span class="nav-link-text">Settings</span>
      </a>
    </nav>

  </aside>
</template>
<script>
import { useStore } from "vuex";

import { VISIBILITIES } from "@/const";

export default {
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
