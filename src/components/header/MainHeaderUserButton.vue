<template>
  <div class="d-flex align-items-center mx-3 dropdown">

    <div v-if="loggedUser" class="d-flex align-items-center on-hover h-100 dropdown-toggle pr-2"
         id="dropdownMenuButton1"
         data-bs-toggle="dropdown"
         aria-expanded="false"
    >
      <figure
          class="avatar avatar-lg me-3"
          :data-initial="loggedUser.name.substring(0, 1).toUpperCase()"
          id="mainAvatar">
        <i class="avatar-presence away text-light"></i>
      </figure>

      <div class="media-body font-weight-middle pr-1">{{loggedUser.name}}</div>
    </div>

    <ul class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow dropdown-insert-click">

      <li class="dropdown-header text-secondary pt-0 pb-1">My Status</li>

      <li class="toggle-input toggle-input-success m-0 font-weight-middle dropdown-item">
        <input type="radio" name="user-status" checked="" class="toggle-user-status" value="true">
        <span class="input-icon f-icon-20"><feather-circle/> <feather-disc/></span>Available
      </li>

      <li class="toggle-input toggle-input-orange m-0 font-weight-middle dropdown-item">
        <input type="radio" name="user-status" class="toggle-user-status" value="false">
          <span class="input-icon f-icon-20"><feather-circle/> <feather-disc/></span>Do not disturb
      </li>

      <li class="dropdown-divider"></li>

      <li class="toggle-input toggle-input-success m-0 font-weight-middle dropdown-item">
        <input type="checkbox" checked="">
        <span class="input-icon f-icon-20"><feather-toggle-left /> <feather-toggle-right /></span>On Duty
      </li>

      <li class="dropdown-divider"></li>

      <li><a class="dropdown-item" href="#">My Profile</a></li>
      <li><a class="dropdown-item" href="#" @click="onUserLogOut()">Log Out</a></li>

    </ul>

  </div>
</template>
<script>
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherDisc from "@/icons/FeatherDisc";
import FeatherToggleLeft from "@/icons/FeatherToggleLeft";
import FeatherToggleRight from "@/icons/FeatherToggleRight";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore();

    function onUserLogOut() {
      store.dispatch('onSocketConnectionClose');
      store.commit('setLogOutUser');
    }

    const loggedUser = computed(() => store.getters.getLoggedUser);

    return {
      loggedUser,
      onUserLogOut,
    };
  },
  components: {FeatherToggleRight, FeatherToggleLeft, FeatherDisc, FeatherCircle}
}
</script>
