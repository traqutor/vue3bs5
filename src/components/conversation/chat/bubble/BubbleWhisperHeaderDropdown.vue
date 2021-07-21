<template>
  <div class="flex-grow-1 position-relative">
    <div class="position-absolute text-nowrap overflow-hidden w-100">
      <div class="text-truncate w-100 d-inline-block text-white-75 f-size-12">
        Whispered to Chad Evans (Cardiology Registrar), William Foster (Pharmacy
        Manager) and 1 other
      </div>
    </div>
  </div>

  <div class="dropdown ms-2 on-hover-visible me-n1 mt-n1">
    <button
      class="btn btn-secondary btn-circle btn-sm shadow-none f-icon-28"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <feather-whisper-message class="text-white f-icon-16" />
    </button>

    <div
      class="dropdown-menu dropdown-menu-right dropdown-menu-sm pt-1 shadow"
      x-placement="bottom-end"
      style="
        position: absolute;
        transform: translate3d(-184px, 28px, 0px);
        top: 0px;
        left: 0px;
        will-change: transform;
      "
    >
      <div class="dropdown-item-text text-secondary text-nowrap">
        Whisper to someone (3)
      </div>

      <div class="dropdown-menu-scroll-list ps-scrollbar mt-1 ps">
        <div class="dropdown-item media align-items-center on-hover mb-1 me-4">
          <figure
            class="avatar avatar-lg me-3 ms-n1 shadow-none"
            data-initial="RT"
          >
            <img src="images/avatar/2.jpg" alt="" />
          </figure>
          <div class="media-body ms-n1">
            <div class="font-weight-middle">Chad Evans</div>
            <div class="text-secondary f-size-12">Cardiology Registrar</div>
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1 me-4">
          <figure
            class="avatar avatar-lg me-3 ms-n1 shadow-none"
            data-initial="WF"
          ></figure>
          <div class="media-body ms-n1">
            <div class="font-weight-middle">William Foster</div>
            <div class="text-secondary f-size-12">Pharmacy Manager</div>
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1 me-4">
          <figure
            class="avatar avatar-lg me-3 ms-n1 shadow-none"
            data-initial="JD"
          ></figure>
          <div class="media-body ms-n1">
            <div class="font-weight-middle">Amanda Pit</div>
            <div class="text-secondary f-size-12">Doctor</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatherWhisperMessage from "@/icons/FeatherWhisperMessage";
export default {
  components: { FeatherWhisperMessage },
  props: ["item"],
  setup() {
    return {};
  },
};
</script>
