<template>
  <div id="dialog-input-audio-2">
    <div class="d-flex">
      <div class="media-body">
        <div
            class="input-group h-100 position-relative alert alert-primary rounded rounded-pill p-0 m-0 border-left-0">
          <div class="input-group-prepend d-flex align-items-center">
            <button
                class="btn btn-circle rounded-circle f-icon-42 btn-primary bg-media-1 border-0 me-2 shadow-none">
              <feather-play class="f-icon-20 ms-1"/>
            </button>
          </div>
          <div class="dialog-input-area flex-grow-1 d-flex align-items-center ps-1">
            <div class="dialog-time-group font-weight-middle f-size-15">00:00</div>

            <!--
                    <div class="progress play-ground bg-white flex-grow-1 mx-3 on-hover">
                              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 35%"></div>
                            </div>
            -->

            <div class="progress record-progress position-relative flex-grow-1 mx-2 bg-white on-hover">
              <div class="progress-bar progress-bar-striped progress-bar-animated rounded" role="progressbar"></div>
              <figure class="progress-icon record-progress-control shadow-sm f-icon-20"></figure>
            </div>

            <div class="dialog-time-group font-weight-middle f-size-15 text-right">00:33</div>
          </div>
          <div class="input-group-append px-1">
            <button class="btn text-danger text-dark-hover border-0 shadow-none step-tabpanel-open"
                    data-outside="true" href="#dialog-input-textarea">
              <feather-trash2 class="f-icon-22"/>
            </button>
          </div>
        </div>
      </div>

      <div class="align-self-end ms-3">
        <button class="btn btn-circle rounded f-icon-42 btn-primary border-0 shadow-none step-tabpanel-open"
                data-outside="true" href="#dialog-input-textarea">
          <feather-arrow-up class="f-icon-22"/>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherPlay from "@/icons/FeatherPlay";
import FeatherTrash2 from "@/icons/FeatherTrash2";
import FeatherArrowUp from "@/icons/FeatherArrowUp";
export default {
  components: {FeatherArrowUp, FeatherTrash2, FeatherPlay}
}
</script>
