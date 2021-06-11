<template>
  <div class="d-flex flex-column flex-fill steps-section">
    <div class="step-tabpanel flex-fill position-relative active show">
      <div class="d-flex flex-column h-100 w-100 position-absolute">

        <nav class="side-nav-line pe-3 d-flex w-100">
          <div
              class="nav nav-tabs border-bottom border-secondary-light flex-fill flex-nowrap toggle-filter-group btn-group-sm"
              style="min-height: 38px;">

            <button
                class="btn nav-item nav-link shadow-none toggle-filter-control"
                :class="activeTab === 'all' ? 'active' : ''"
                @click="activeTab = 'all'"
            >
              All List
            </button>

            <button
                class="btn nav-item nav-link shadow-none toggle-filter-control"
                :class="activeTab === 'users' ? 'active' : ''"
                @click="activeTab = 'users'"
            >
              Users
            </button>

            <button
                class="btn nav-item nav-link shadow-none toggle-filter-control"
                :class="activeTab === 'roles' ? 'active' : ''"
                @click="activeTab = 'roles'"
            >
              Roles
            </button>

            <button
                class="btn nav-item nav-link shadow-none toggle-filter-control"
                :class="activeTab === 'onDuty' ? 'active' : ''"
                @click="activeTab = 'onDuty'"
            >
              On Duty
            </button>

            <button
                class="btn nav-item nav-link shadow-none toggle-filter-control"
                :class="activeTab === 'onCall' ? 'active' : ''"
                @click="activeTab = 'onCall'"
            >
              On Call
            </button>
          </div>
        </nav>

        <div class="tab-content d-flex flex-column flex-fill">
          <div class="tab-pane flex-fill position-relative fade show active">
            <div class="d-flex flex-column h-100 w-100 position-absolute">
              <div class="d-flex flex-column flex-fill position-relative">
                <div class="d-flex flex-column position-absolute w-100 h-100 overflow-hidden">

                  <perfect-scrollbar>
                    <div class="me-3 mt-3">
                      <div
                          v-show="activeTab === 'all' || activeTab === 'users'"
                          class="list-group list-group-dialogs list-group-flush me-3 overflow-hidden select-action-group mt-2">

                        <conversations-participants-list-item
                            v-for="user of systemUsers"
                            :key="user.userId"
                            :participant-id="user.userId"
                            :is-selected="isParticipantSelected(user.userId)"
                            :is-highlighted="true"
                            :on-select="onSelect"
                        ></conversations-participants-list-item>
                      </div>
                      <div
                          v-show="activeTab === 'all' || activeTab === 'roles'"
                          class="list-group list-group-dialogs list-group-flush me-3 overflow-hidden select-action-group mt-2">

                        <conversations-participants-list-item
                            v-for="role of systemRoles"
                            :key="role.id"
                            :participant-id="role.id"
                            :is-selected="isParticipantSelected(role.id)"
                            :is-highlighted="true"
                            :on-select="onSelect"
                        ></conversations-participants-list-item>


                      </div>
                    </div>
                  </perfect-scrollbar>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

import ConversationsParticipantsListItem from "@/components/conversations/ConversationsParticipantsListItem";

export default {
  setup() {
    const store = useStore();
    const systemUsers = computed(() => store.getters.getSystemUsers);
    const systemRoles = computed(() => store.getters.getSystemRoles);
    const isParticipantSelected = computed(() => store.getters.isParticipantSelected)
    const activeTab = ref("all");

    function onSelect(id) {
      store.dispatch("setToggleParticipantSelected", id)
    }

    return {
      systemUsers,
      systemRoles,
      activeTab,
      isParticipantSelected,
      onSelect,
    }
  },
  components: {ConversationsParticipantsListItem}
}
</script>
