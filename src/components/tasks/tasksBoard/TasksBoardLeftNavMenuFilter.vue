<template>
  <div
    class="
      col
      f-col-xxs
      pr-2
      d-flex
      flex-column
      overflow-hidden
      border-right border-secondary-light
    "
  >
    <div class="d-flex flex-column flex-fill position-relative">
      <perfect-scrollbar
        class="position-absolute h-100 w-100 pr-3 media-type-group"
      >
        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            bg-primary
            text-white
            active
            shadow-none
          "
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              Tasks
            </div>
          </div>
        </button>

        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            shadow-none
          "
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              My requests
            </div>
          </div>
        </button>

        <button
          class="
            media-type-item
            btn btn-block
            mb-3
            f-size-15
            pl-3
            pr-2
            py-3
            shadow-none
          "
        >
          <div class="media align-items-center overflow-hidden">
            <div class="media-body text-truncate font-weight-middle text-left">
              Scheduled
            </div>
          </div>
        </button>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
