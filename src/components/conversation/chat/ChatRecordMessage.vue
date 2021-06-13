<template>
  <div id="chat-footer-input-audio">
    <div class="d-flex">
      <div class="media-body">
        <div
          class="
            input-group
            h-100
            position-relative
            alert alert-primary
            rounded rounded-pill
            p-0
            m-0
            border-left-0
          "
        >
          <div class="input-group-prepend d-flex align-items-center">
            <button
              class="
                btn btn-circle
                rounded-circle
                f-icon-42
                btn-danger
                border-0
                me-2
                shadow-none
              "
            >
              <feather-mic class="f-icon-20 blinker-3" />
            </button>
          </div>

          <div
            class="dialog-input-area flex-grow-1 d-flex align-items-center ps-1"
          >
            <div class="dialog-time-group font-weight-middle f-size-16">
              00:23
            </div>

            <div
              class="flex-grow-1 ms-3 overflow-hidden d-flex align-items-center"
            >
              <figure
                data-height="42"
                class="w-75 audio-wave m-0"
                data-url="files/demo-06.wav"
              ></figure>
            </div>
          </div>
          <div class="input-group-append">
            <button
              class="
                btn
                text-secondary
                pe-2
                pb-1
                text-dark-hover
                border-0
                shadow-none
                step-tabpanel-open
              "
              data-outside="true"
              href="#dialog-input-textarea"
            >
              <feather-x-circle class="f-icon-28" />
            </button>
          </div>
        </div>
      </div>

      <div class="align-self-end ms-3">
        <button
          class="
            btn btn-circle
            f-icon-42
            btn-primary
            border-0
            shadow-none
            step-tabpanel-open
          "
          data-outside="true"
          href="#dialog-input-audio-2"
        >
          <feather-square class="f-icon-18" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherMic from "@/icons/FeatherMic";
import FeatherXCircle from "@/icons/FeatherXCircle";
import FeatherSquare from "@/icons/FeatherSquare";
export default {
  components: { FeatherSquare, FeatherXCircle, FeatherMic },
};
</script>
