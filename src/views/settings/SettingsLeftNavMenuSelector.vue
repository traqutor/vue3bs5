<template>
  <div
    class="
      col
      f-col-sm
      pe-2
      d-flex
      flex-column
      overflow-hidden
      border-right border-secondary-light
    "
  >
    <div class="d-flex flex-column flex-fill position-relative">
      <perfect-scrollbar class="position-absolute h-100 w-100 pe-3">
        <ul class="nav flex-column base-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">
              <feather-monitor class="nav-link-icon me-3 f-icon-20" />
              <span class="ml-n1">System</span>
            </router-link>
          </li>
          <li
            class="nav-item has-subnav is-open"
            :class="isActiveClass(['roles', 'users']) && 'has-active'"
          >
            <router-link class="nav-link" to="/settings/roles">
              <feather-command class="nav-link-icon me-3 f-icon-20" />
              <span class="ml-n1">Organisation</span>
            </router-link>
            <ul class="subnav" style="display: block">
              <li
                class="nav-item"
                :class="isActiveClass(['roles']) && 'active'"
              >
                <router-link class="nav-link" to="/settings/roles"
                  >Roles</router-link
                >
              </li>
              <li
                class="nav-item"
                :class="isActiveClass(['users']) && 'active'"
              >
                <router-link class="nav-link" to="/settings/users"
                  >Users</router-link
                >
              </li>
            </ul>
          </li>
          <li
            class="nav-item has-subnav is-open"
            :class="isActiveClass(['taskTypes', 'locations']) && 'has-active'"
          >
            <router-link class="nav-link" to="/settings/taskTypes">
              <feather-clipboard class="nav-link-icon me-3 f-icon-20" />

              <span class="ml-n1">Task Flow</span>
            </router-link>
            <ul class="subnav" style="display: block">
              <li
                class="nav-item"
                :class="isActiveClass(['taskTypes']) && 'active'"
              >
                <router-link class="nav-link" to="/settings/taskTypes"
                  >Task types</router-link
                >
              </li>
              <li
                class="nav-item"
                :class="isActiveClass(['locations']) && 'active'"
              >
                <router-link class="nav-link" to="/settings/locations"
                  >Locations</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">
              <feather-flasher nav-link-icon class="me-3 f-icon-20" />
              <span class="ml-n1">Incident Types</span>
            </router-link>
          </li>
        </ul>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import FeatherFlasher from "@/icons/FeatherFlasher";
import FeatherClipboard from "@/icons/FeatherClipboard";
import FeatherCommand from "@/icons/FeatherCommand";
import FeatherMonitor from "@/icons/FeatherMonitor";
export default {
  components: {
    FeatherMonitor,
    FeatherCommand,
    FeatherClipboard,
    FeatherFlasher,
  },
  setup() {
    const router = useRouter();
    const isActiveClass = (paths) => {
      return paths.some((path) =>
        router.currentRoute.value.path.includes(path)
      );
    };

    return { isActiveClass };
  },
};
</script>
