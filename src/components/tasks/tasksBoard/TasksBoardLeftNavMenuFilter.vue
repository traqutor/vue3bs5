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
      <div
        class="
          position-absolute
          h-100
          w-100
          ps-scrollbar
          pr-3
          media-type-group
          ps
        "
      >
        <a
          href="index.php?page=task&amp;type=1#main-nav-tab-1"
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
        </a>

        <a
          href="index.php?page=task&amp;type=2#main-nav-tab-1"
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
        </a>

        <a
          href="index.php?page=task&amp;type=3#main-nav-tab-1"
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
        </a>

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
    </div>
  </div>
</template>
