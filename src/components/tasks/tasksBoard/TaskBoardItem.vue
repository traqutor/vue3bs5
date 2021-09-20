<template>
  <div
    class="
      card
      bg-grey-light
      mt-3
      sortable-item
      hover-visible-group
      collapse-list-open
    "
  >
    <div
      class="d-flex px-3 py-2 align-items-center dropdown hover-action-group"
    >
      <div class="d-flex align-items-center overflow-hidden me-auto">
        <span class="f-icon me-3"
          ><i class="f-icon f-icon-24 rounded todo-label-6"></i
        ></span>
        <div
          class="
            media-body
            font-weight-middle
            ms-n1
            f-size-15
            text-dark text-truncate
          "
        >
          Patient Transfer
        </div>
      </div>

      <div
        class="
          d-inline-flex
          align-items-center
          position-absolute position-right-center
          me-1
        "
      >
        <div class="bg-grey-light p-2 on-hover-visible">
          <button
            class="btn btn-primary btn-circle btn-sm shadow-none f-icon-24"
          >
            <feather-map-pin class="f-icon-18" />
          </button>
        </div>
      </div>
    </div>

    <div class="px-3 pb-2 f-size-13">
      <div class="position-relative mt-1">
        <i
          class="
            f-icon
            position-absolute position-left-center
            h-20
            border-left border-grey
            ms-25
            opacity-50
          "
        ></i>

        <div class="d-flex align-items-center">
          <feather-map-pin class="me-2 ms-1 text-secondary" />
          <div class="media-body">ICU Pod 1, Bed 5</div>
        </div>
        <div class="d-flex align-items-center mt-2">
          <feather-map-pin class="me-2 ms-1 text-secondary" />
          <div class="media-body">Bed 1, Oxley South</div>
        </div>
      </div>

      <div class="d-flex align-items-center mt-2">
        <div class="d-flex align-items-center">
          <feather-clock class="me-2 ms-1 text-secondary" />

          <div class="media-body text-nowrap">
            Raised 2 <small>min ago</small>
          </div>
        </div>

        <div class="d-flex align-items-center ms-auto">
          <span class="text-secondary ms-2">#121</span>
        </div>
      </div>

      <div class="border-top border-secondary-light my-25"></div>

      <div class="d-flex">
        <div class="media-body">
          <div class="d-inline-flex dropdown hover-action-group">
            <div
              class="
                d-flex
                align-items-center
                on-hover
                opacity-50 opacity-hover-1
              "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <figure class="avatar avatar-md me-3" data-initial="YZ">
                <img src="images/avatar/2.jpg" alt="..." draggable="false" />
              </figure>
              <div class="media-body overflow-hidden ms-n1">
                <div class="text-truncate font-weight-middle">James Dean</div>
                <div class="text-truncate text-secondary f-size-12">
                  Porter #2
                </div>
              </div>
            </div>
            <div
              class="dropdown-menu dropdown-menu-sm shadow pt-0 cursor-default"
            >
              <div class="d-flex align-items-center dropdown-item-text py-2">
                <div class="avatar avatar-lg me-3 ms-n1 shadow-none">
                  <img src="images/avatar/2.jpg" alt="" draggable="false" />
                </div>
                <div class="media-body ms-n1">
                  <div class="font-weight-middle text-nowrap">James Dean</div>
                  <div class="text-secondary f-size-12 text-nowrap">
                    Porter #2
                  </div>
                </div>
              </div>
              <button class="dropdown-item" type="button">Send Message</button>
              <button class="dropdown-item" type="button">Information</button>
            </div>
          </div>
        </div>

        <div class="text-right">
          <div class="f-size-10 text-uppercase text-secondary mb-1">
            Time Remaining
          </div>
          <span
            class="
              badge badge-pill badge-danger
              px-2
              py-1
              f-size-12
              font-weight-middle
              text-spacing text-monospace
              timer
            "
            data-starttimer="10"
            >09:11</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherMapPin from "@/icons/FeatherMapPin";
import FeatherClock from "@/icons/FeatherClock";
export default {
  components: { FeatherClock, FeatherMapPin },
};
</script>
