<template>
  <button
    class="btn btn-sm py-1 f-size-12 text-primary shadow-none"
    :class="background"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Acknowledged<span v-if="item.acknowledgedByUsers && selectedConversation.participants" class="text-red ms-2">
      {{ item.acknowledgedByUsers.length }}/{{
        selectedConversation.participants.length - 1
      }}
    </span>
  </button>

  <div
    class="dropdown-menu dropdown-menu-sm dropdown-menu-right p-0 shadow"
    aria-labelledby="dropdownMenuButton1"
  >
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
      "
      type="button"
    >
      Acknowledged (2)
      <feather-chevron-down class="ms-auto" />
    </button>

    <div class="dropdown-menu-scroll-list mt-1">
      <div class="dropdown-item d-flex align-items-center on-hover mb-1">
        <figure
          class="avatar avatar-lg me-3 ms-n1 shadow-none"
          data-initial="RT"
        >
          <img src="images/avatar/2.jpg" alt="" />
        </figure>
        <div class="media-body ms-n1">
          <div class="font-weight-middle">Ruben Tillman</div>
          <div class="text-secondary f-size-12">Cardiology Doctor</div>
        </div>
        <div
          class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
        >
          <feather-check-double class="text-success me-1" />
          30 min ago
        </div>
      </div>
      <div class="dropdown-item d-flex align-items-center on-hover mb-1">
        <figure
          class="avatar avatar-lg me-3 ms-n1 shadow-none"
          data-initial="JD"
        ></figure>
        <div class="media-body ms-n1">
          <div class="font-weight-middle">Josephin Doe</div>
          <div class="text-secondary f-size-12">Doctor</div>
        </div>
        <div
          class="text-nowrap ms-5 pt-1 text-muted f-size-12 align-self-start"
        >
          <feather-check-double class="text-success me-1" />
          11:23 am
        </div>
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
      type="button"
    >
      Not acknowledged (10) <feather-more-horizontal class="ms-auto" />
    </button>
  </div>
</template>
<script>
import FeatherMoreHorizontal from "@/icons/FeatherMoreHorizontal";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import FeatherChevronDown from "@/icons/FeatherChevronDown";
export default {
  components: { FeatherChevronDown, FeatherCheckDouble, FeatherMoreHorizontal },
  props: ["item", "selectedConversation", "background"],
  setup() {
    return {};
  },
};
</script>
