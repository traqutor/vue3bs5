<template>
  <div class="d-flex align-items-center me-2">
    <div
      v-if="loggedUser"
      class="d-flex align-items-center on-hover h-100 me-1"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <ParticipantAvatar
        class="avatar avatar-lg"
        :participant-id="loggedUser.id"
      ></ParticipantAvatar>
    </div>

    <ul class="dropdown-menu dropdown-menu-end">
      <li class="dropdown-header text-secondary pt-0 pb-1">My Status</li>

      <li
        class="
          toggle-input toggle-input-success
          m-0
          font-weight-middle
          dropdown-item
        "
      >
        <input
          type="radio"
          name="user-status"
          checked=""
          class="toggle-user-status"
          value="true"
        />
        <span class="input-icon f-icon-20"
          ><feather-circle /> <feather-disc /></span
        >Available
      </li>

      <li
        class="
          toggle-input toggle-input-orange
          m-0
          font-weight-middle
          dropdown-item
        "
      >
        <input
          type="radio"
          name="user-status"
          class="toggle-user-status"
          value="false"
        />
        <span class="input-icon f-icon-20"
          ><feather-circle /> <feather-disc /></span
        >Do not disturb
      </li>

      <li class="dropdown-divider"></li>

      <li
        class="
          toggle-input toggle-input-success
          m-0
          font-weight-middle
          dropdown-item
        "
      >
        <input type="checkbox" checked="" />
        <span class="input-icon f-icon-20"
          ><feather-toggle-left /> <feather-toggle-right /></span
        >On Duty
      </li>

      <li class="dropdown-divider"></li>

      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li>
        <a class="dropdown-item" href="#" @click="onUserLogOut()">Log Out</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherDisc from "@/icons/FeatherDisc";
import FeatherToggleLeft from "@/icons/FeatherToggleLeft";
import FeatherToggleRight from "@/icons/FeatherToggleRight";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  setup() {
    const store = useStore();

    function onUserLogOut() {
      store.dispatch(Actions.onSocketConnectionClose);
      store.commit(Mutations.setLogOutUser);
      store.commit(Mutations.setConversations, []);
    }

    const loggedUser = computed(() => store.getters.getLoggedUser);

    return {
      loggedUser,
      onUserLogOut,
    };
  },
  components: {
    ParticipantAvatar,
    FeatherToggleRight,
    FeatherToggleLeft,
    FeatherDisc,
    FeatherCircle,
  },
};
</script>
