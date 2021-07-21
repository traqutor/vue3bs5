<template>
  <div class="dropdown">
    <a
      href="#"
      class="dialog-message-action"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      >{{ item.watchedByUsers.length }}/{{
        selectedConversation.participants.length
      }}
    </a>

    <div class="dropdown-menu dropdown-menu-sm p-0 shadow">
      <button
        class="
          dropdown-item-text
          py-2
          btn btn-white
          border-0
          d-flex
          align-items-center
          w-100
          text-secondary
          rounded-bottom-0
          step-tabpanel-open
        "
        data-outside="true"
        href="#dialog-content-section-3, #header-btn-group-2"
        type="button"
      >
        Read (4)<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down ms-auto"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div class="dropdown-menu-scroll-list ps-scrollbar mt-1 ps">
        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure class="avatar avatar-lg me-3 shadow-none" data-initial="RT">
            <img src="images/avatar/2.jpg" alt="" />
          </figure>
          <div class="media-body">
            <div class="font-weight-middle">Ruben Tillman</div>
            <div class="text-secondary f-size-12">Cardiology Doctor</div>
          </div>
          <div
            class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
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
              class="feather feather-check-double text-success me-1"
            >
              <polyline points="22.158 6 11.158 17 10.882 16.724"></polyline>
              <polyline
                points="16.771 5.999 5.771 16.999 1.731 13.265"
              ></polyline>
            </svg>
            30 min ago
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure
            class="avatar avatar-lg me-3 shadow-none"
            data-initial="JD"
          ></figure>
          <div class="media-body">
            <div class="font-weight-middle">Josephin Doe</div>
            <div class="text-secondary f-size-12">Doctor</div>
          </div>
          <div
            class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
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
              class="feather feather-check-double text-success me-1"
            >
              <polyline points="22.158 6 11.158 17 10.882 16.724"></polyline>
              <polyline
                points="16.771 5.999 5.771 16.999 1.731 13.265"
              ></polyline>
            </svg>
            11:23 am
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure class="avatar avatar-lg me-3 shadow-none" data-initial="SA">
            <img src="images/avatar/3.jpg" alt="..." />
          </figure>
          <div class="media-body">
            <div class="font-weight-middle">Steve Arnott</div>
            <div class="text-secondary f-size-12">Doctor</div>
          </div>
          <div
            class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
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
              class="feather feather-check-double text-success me-1"
            >
              <polyline points="22.158 6 11.158 17 10.882 16.724"></polyline>
              <polyline
                points="16.771 5.999 5.771 16.999 1.731 13.265"
              ></polyline>
            </svg>
            11:23 am
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure class="avatar avatar-lg me-3 shadow-none" data-initial="GB">
            <img src="images/avatar/4.jpg" alt="..." />
          </figure>
          <div class="media-body">
            <div class="font-weight-middle">Gerald Baker</div>
            <div class="text-secondary f-size-12">Doctor</div>
          </div>
          <div
            class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
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
              class="feather feather-check-double text-success me-1"
            >
              <polyline points="22.158 6 11.158 17 10.882 16.724"></polyline>
              <polyline
                points="16.771 5.999 5.771 16.999 1.731 13.265"
              ></polyline>
            </svg>
            11:23 am
          </div>
        </div>

        <div class="ps__rail-x" style="left: 0px; bottom: 0px">
          <div
            class="ps__thumb-x"
            tabindex="0"
            style="left: 0px; width: 0px"
          ></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; right: 0px">
          <div
            class="ps__thumb-y"
            tabindex="0"
            style="top: 0px; height: 0px"
          ></div>
        </div>
      </div>

      <button
        class="
          dropdown-item-text
          py-2
          btn btn-light
          border-0
          d-flex
          align-items-center
          w-100
          text-secondary
          rounded-top-0
          step-tabpanel-open
        "
        data-outside="true"
        href="#dialog-content-section-3, #header-btn-group-2"
        type="button"
      >
        Not read (8)<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-more-horizontal ms-auto"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </button>
    </div>
  </div>

  <span
    class="ms-auto ps-3"
    @click="onMessageOpen"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :title="timeHhMmaDotDdddFormat(item.createdTime.seconds)"
    >{{ timeOffsetFormat(item.createdTime.seconds) }}</span
  >
</template>
<script>
import { useStore } from "vuex";
import { timeOffsetFormat, timeHhMmaDotDdddFormat } from "@/services/datetime.service";
import { CHAT_VIEW_MODES } from "@/const";

export default {
  props: ["item", "selectedConversation"],
  setup(props) {
    const store = useStore();
    const onMessageOpen = () => {
      store.commit("setSelectedMessageId", props.item.id);
      store.commit("setChatViewMode", CHAT_VIEW_MODES.MESSAGE);
    };
    return { onMessageOpen, timeHhMmaDotDdddFormat, timeOffsetFormat };
  },
};
</script>
