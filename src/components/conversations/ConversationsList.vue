<template>
  <div class="d-flex flex-column flex-fill steps-section">
    <div class="step-tabpanel flex-fill position-relative active show">
      <div class="d-flex flex-column h-100 w-100 position-absolute">

        <nav class="side-nav-line pe-3 d-flex w-100">
          <div class="nav nav-tabs border-bottom border-secondary-light flex-fill flex-nowrap" style="min-height: 38px;"
               id="chatNavTab" role="tablist">

            <a class="nav-item nav-link nav-filter-control shadow-none active">
              Conversations
              <span class="badge badge-primary badge-pill ms-2">12</span>
            </a>

            <div class="btn-toolbar ms-auto">
              <div class="btn-group dropdown">

                <button id="navTabListOption"
                        data-bs-toggle="dropdown"
                        type="button"
                        class="btn shadow-none btn-dark bg-transparent ps-3 pe-1 nav-item nav-link"
                        aria-expanded="false">
                  <feather-more-horizontal class=" f-icon-26"/>
                </button>

                <ul class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow"
                    aria-labelledby="navTabListOption">
                  <li><a class="dropdown-item" href="#">Mark as Read</a></li>
                  <li><a class="dropdown-item" href="#">Hide Selected</a></li>
                  <li class="dropdown-divider"></li>
                  <li>
                    <button class="dropdown-item px-3 nav-tab-toggle">
                      Show hidden
                      <span class="badge badge-secondary badge-pill ms-2">2</span>
                    </button>
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </nav>

        <div class="tab-content d-flex flex-column flex-fill">
          <div class="tab-pane flex-fill position-relative fade show active">
            <div class="d-flex flex-column h-100 w-100 position-absolute">
              <div class="d-flex flex-column flex-fill position-relative">
                <div class="d-flex flex-column position-absolute w-100 h-100 overflow-hidden">

                  <perfect-scrollbar>
                    <div
                        class="list-group list-group-dialogs list-group-flush me-3 overflow-hidden select-action-group mt-2">

                      <conversations-list-item
                          v-for="conversation of conversations"
                          :key="conversation.id"
                          :conversation="conversation"
                      ></conversations-list-item>

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
import {computed} from "vue";
import {useStore} from "vuex";
import ConversationsListItem from "@/components/conversations/ConversationsListItem";
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";

export default {
  setup() {
    const store = useStore();
    const conversations = computed(() => store.getters.getConversations);
    return {conversations}
  },
  components: {FeatherMoreHorizontal, ConversationsListItem}
}
</script>
