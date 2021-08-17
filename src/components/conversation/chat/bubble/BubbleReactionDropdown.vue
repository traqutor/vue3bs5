<template>
  <div
      v-if="item.quickReactions"
    class="
      dialog-group-reactions
      position-absolute position-bottom-right
      mr-1
      dropdown
    "
  >
    <div
      class="
        d-inline-flex
        align-items-center
        rounded-pill
        bg-white
        overflow-hidden
        on-hover
      "
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="true"
    >
      <div class="dialog-reaction d-inline-flex align-items-center">
        <span class="f-size-13 joypixels-group">
          <i
            class="rounded-circle bg-white m-0 joypixels-icon on-hover"
            data-joypixels="thumbsup"
            ><img
              class="joypixels"
              alt="👍"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"
          /></i>
        </span>
        <span class="font-weight-middle f-size-13 text-secondary">2</span>
      </div>
      <div class="dialog-reaction d-inline-flex align-items-center">
        <span class="f-size-13 joypixels-group">
          <i
            class="rounded-circle bg-white m-0 joypixels-icon on-hover"
            data-joypixels="heart"
            ><img
              class="joypixels"
              alt="❤️"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2764.png"
          /></i>
        </span>
      </div>
    </div>

    <div
      class="dropdown-menu dropdown-menu-sm pt-1 shadow cursor-default"
      x-placement="bottom-start"
      style="
        position: absolute;
        will-change: transform;
        top: 0px;
        left: 0px;
        transform: translate3d(0px, 26px, 0px);
      "
    >
      <div class="dropdown-item-text text-secondary">Reactions (3)</div>
      <div class="dropdown-menu-scroll-list ps-scrollbar mt-1 ps">
        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure
            class="avatar avatar-lg mr-3 ml-n1 shadow-none"
            data-initial="RT"
          >
            <img src="images/avatar/2.jpg" alt="" />
          </figure>
          <div class="media-body ml-n1">
            <div class="font-weight-middle">Ruben Tillman</div>
            <div class="text-secondary f-size-12">Cardiology Doctor</div>
          </div>
          <div class="ml-5 mr-n1 f-size-14">
            <i data-joypixels="thumbsup" class="joypixels-icon on-hover"
              ><img
                class="joypixels"
                alt="👍"
                src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"
            /></i>
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure
            class="avatar avatar-lg mr-3 ml-n1 shadow-none"
            data-initial="RT"
          >
            <img src="images/avatar/3.jpg" alt="" />
          </figure>
          <div class="media-body ml-n1">
            <div class="font-weight-middle">Ruben Tillman</div>
            <div class="text-secondary f-size-12">Cardiology Doctor</div>
          </div>
          <div class="ml-5 mr-n1 f-size-14">
            <i data-joypixels="thumbsup" class="joypixels-icon on-hover"
              ><img
                class="joypixels"
                alt="👍"
                src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"
            /></i>
          </div>
        </div>

        <div class="dropdown-item media align-items-center on-hover mb-1">
          <figure
            class="avatar avatar-lg mr-3 ml-n1 shadow-none"
            data-initial="RT"
          >
            <img src="images/avatar/4.jpg" alt="" />
          </figure>
          <div class="media-body ml-n1">
            <div class="font-weight-middle">Ruben Tillman</div>
            <div class="text-secondary f-size-12">Cardiology Doctor</div>
          </div>
          <div class="ml-5 mr-n1 f-size-14">
            <i data-joypixels="heart" class="joypixels-icon on-hover"
              ><img
                class="joypixels"
                alt="❤️"
                src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2764.png"
            /></i>
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
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
