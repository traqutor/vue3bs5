<template>
  <div
    v-if="messagesToAcknowledge.length > 0"
    class="
      d-flex
      align-items-center
      border-top border-secondary-light
      pt-2
      mt-2
    "
  >
    <div
      class="d-flex align-items-center flex-grow-1"
      v-for="(message, index) of messagesToAcknowledge"
      :key="index"
    >
      <div class="flex-fill">
        <div class="d-flex align-items-center">
          <div class="d-flex media-body me-3 on-hover align-items-center">
            <figure class="avatar avatar-lg me-3 ms-1" data-initial="BC">
              <img src="images/avatar/5.jpg" alt="" />
            </figure>

            <div class="media-body f-col-2x">
              <ParticipantNameAndRolesItem
                :participant-id="
                  message.activeRoleId ? message.activeRoleId : message.authorId
                "
              />
              <div class="text-truncate text-secondary f-size-13">
                <!--start::message text -->
                <div
                  class="d-inline show-white-space"
                  v-html="message.text"
                ></div>
                <!--end::message text -->
              </div>
            </div>
          </div>

          <button
            type="button"
            class="
              btn btn-sm btn-primary
              f-size-12
              step-tabpanel-open
              shadow-none
            "
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>

    <div class="dropdown dropup ms-3 badge-acknowledgement">
      <button
        class="btn btn-sm badge-pill btn-secondary shadow-none w-100 f-size-12"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        +{{ numberOfMessagesToAcknowledge }}
      </button>

      <div
        class="dropdown-menu dropdown-menu-right dropdown-menu-sm shadow pt-0"
        aria-labelledby="dropdownMenuButton"
      >
        <div class="dropdown-header text-secondary">
          Request Acknowledgement (4)
        </div>

        <perfect-scrollbar class="dropdown-menu-scroll-list f-col-lg">
          <div class="d-flex dropdown-item align-items-center on-hover mb-1">
            <figure class="avatar avatar-lg me-3 shadow-none">
              <img src="images/avatar/2.jpg" alt="" />
            </figure>
            <div class="media-body overflow-hidden">
              <div class="d-flex align-items-center">
                <div class="text-truncate me-4">
                  <span class="text-dark font-weight-middle"
                    >Ruben Tillman</span
                  >
                  <span class="text-secondary ms-2 f-size-13">Doctor</span>
                </div>
                <span class="ms-auto text-muted f-size-12">11:23 am</span>
              </div>

              <div class="text-truncate text-secondary f-size-13 me-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla
              </div>
            </div>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ParticipantNameAndRolesItem from "@/components/participant/ParticipantNameAndRolesItem";

export default {
  components: { ParticipantNameAndRolesItem },
  setup() {
    const store = useStore();
    const messagesToAcknowledge = computed(() =>
      store.getters.getMessagesToAcknowledge.slice(0, 1)
    );

    const numberOfMessagesToAcknowledge = computed(
      () => store.getters.getMessagesToAcknowledge.length
    );

    return { messagesToAcknowledge, numberOfMessagesToAcknowledge };
  },
};
</script>
