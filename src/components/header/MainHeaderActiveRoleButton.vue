<template>
  <div
    v-if="loggedUser && loggedUser.SystemRoles"
    class="d-flex align-items-center me-4 dropdown"
  >
    <div
      class="d-flex align-items-center on-hover h-100 pe-1 dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div class="media-body role-label">
        <div class="font-weight-middle role-name">{{ activeRole.Name }}</div>
        <div class="text-secondary f-size-12 role-subname">Role</div>
      </div>

      <figure class="avatar avatar-lg me-1 ms-3 blinker-1 bg-danger">
        <feather-briefcase1 class="f-icon-22" />
      </figure>
    </div>

    <div
      v-if="loggedUser"
      id="toggleHeaderRole"
      class="dropdown-menu dropdown-menu-end"
    >
      <div
        class="dropdown-item role-item d-flex align-items-center on-hover py-2"
      >
        <figure class="avatar avatar-md bg-secondary-light me-3 shadow-none">
          <feather-layers class="f-icon-16" />
        </figure>

        <div class="media-body overflow-hidden me-4">
          <div class="text-truncate font-weight-middle">Show in all roles</div>
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <div class="dropdown-header d-flex align-items-center m-0 pt-0">
        <div class="media-body text-secondary">My Roles</div>
      </div>

      <div
        class="
          dropdown-item
          role-item
          d-flex
          align-items-center
          on-hover
          py-2
          active
        "
        v-for="role of loggedUser.SystemRoles"
        :key="role.Code"
        @click="onRoleSelect(role)"
      >
        <figure class="avatar avatar-md me-3 shadow-none">
          <feather-briefcase1 class="f-icon-18" />
        </figure>

        <div class="media-body overflow-hidden me-4">
          <div class="text-truncate font-weight-middle">{{ role.Name }}</div>
          <div class="text-truncate f-size-12">Role</div>
        </div>

        <div class="ms-3 role-item-badges on-hover">
          <div class="d-flex align-items-center">
            <div
              class="
                d-flex
                align-items-center
                rounded-pill
                ms-2
                alert alert-warning
                border-0
                on-hover
                p-0
                ps-2
                mb-0
              "
            >
              <div class="font-weight-middle f-size-13">1</div>
              <figure
                class="
                  avatar avatar-sx avatar-custom
                  text-dark
                  bg-warning
                  ms-1
                  shadow-none
                "
              >
                <feather-alert-triangle />
              </figure>
            </div>
            <div
              class="
                d-flex
                align-items-center
                rounded-pill
                ms-2
                alert alert-danger
                border-0
                on-hover
                p-0
                ps-2
                mb-0
              "
            >
              <div class="font-weight-middle f-size-13">1</div>
              <figure class="avatar avatar-sx bg-danger ms-1 shadow-none">
                <feather-flasher />
              </figure>
            </div>
            <div
              class="
                d-flex
                align-items-center
                rounded-pill
                ms-2
                alert alert-info
                border-0
                on-hover
                p-0
                ps-2
                mb-0
              "
            >
              <div class="font-weight-middle f-size-13">13</div>
              <figure class="avatar avatar-sx bg-info ms-1 shadow-none">
                <feather-clipboard-line />
              </figure>
            </div>
            <div
              class="
                d-flex
                align-items-center
                rounded-pill
                ms-2
                alert alert-primary
                border-0
                on-hover
                p-0
                ps-2
                mb-0
              "
            >
              <div class="font-weight-middle f-size-13">3</div>
              <figure
                class="avatar avatar-sx bg-primary-light ms-1 shadow-none"
              >
                <feather-message-square-line />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import FeatherBriefcase1 from "@/icons/FeatherBriefcase1";
import FeatherMessageSquareLine from "@/icons/FeatherMessageSquareLine";
import FeatherClipboardLine from "@/icons/FeatherClipboardLine";
import FeatherLayers from "@/icons/FeatherLayers";
import { Mutations } from "@/store/enums/EnumTypes";
import FeatherFlasher from "@/icons/FeatherFlasher";
import FeatherAlertTriangle from "@/icons/FeatherAlertTriangle";

export default {
  setup() {
    const store = useStore();

    function onUserLogOut() {
      store.dispatch("onSocketConnectionClose");
      store.commit("setLogOutUser");
    }

    const loggedUser = computed(() => store.getters.getLoggedUser);
    const activeRole = computed(() => store.getters.getLoggedUserActiveRole);

    const onRoleSelect = (role) => {
      store.commit(Mutations.setActiveRole, role);
    };

    return {
      activeRole,
      loggedUser,
      onRoleSelect,
      onUserLogOut,
    };
  },
  components: {
    FeatherAlertTriangle,
    FeatherFlasher,
    FeatherLayers,
    FeatherClipboardLine,
    FeatherMessageSquareLine,
    FeatherBriefcase1,
  },
};
</script>
