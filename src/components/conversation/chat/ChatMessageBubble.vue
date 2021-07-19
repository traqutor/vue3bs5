<template>
  <div
    v-if="isPostByLoggedUser"
    class="
      d-flex
      align-items-center
      justify-content-end
      hover-visible-group hover-action-group
      mb-1
    "
  >
    <div class="on-hover-visible me-1 dropdown" role="group">
      <button
        type="button"
        class="
          btn
          p-0
          shadow-none
          text-secondary text-dark-hover
          toggle-action-active
        "
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <feather-more-vertical class="f-icon-20" />
      </button>

      <div
        class="
          dropdown-menu dropdown-menu-sm dropdown-menu-right
          shadow
          cursor-default
        "
      >
        <button class="dropdown-item px-3 d-flex align-items-center">
          <feather-arrow-forward class="text-secondary f-icon-18" />
          <span class="ml-n1">Forward</span>
        </button>
        <button class="dropdown-item px-3 d-flex align-items-center">
          <feather-copy class="text-secondary f-icon-18" />
          <span>Copy</span>
        </button>
        <button class="dropdown-item px-3 d-flex align-items-center">
          <feather-edit3 class="text-secondary f-icon-18" />
          <span>Edit message</span>
        </button>
        <button class="dropdown-item px-3 d-flex align-items-center">
          <feather-link2 class="text-secondary f-icon-18" />
          <span class="ml-n1">Message details</span>
        </button>
      </div>
    </div>

    <div class="on-hover-visible me-2 dropdown" role="group">
      <button
        type="button"
        class="
          btn
          p-0
          shadow-none
          text-secondary text-dark-hover
          toggle-action-active
        "
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <feather-smile class="f-icon-20" />
      </button>

      <div
        class="
          dropdown-menu dropdown-menu-sm dropdown-menu-right
          shadow
          cursor-default
        "
      >
        <div
          class="
            dropdown-item-text
            px-2
            py-0
            f-size-16
            joypixels-group
            text-nowrap
          "
        >
          <i data-joypixels="thumbsup" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="👍"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"
          /></i>
          <i data-joypixels="thumbsdown" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="👎"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44e.png"
          /></i>
          <i data-joypixels="heart" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="❤️"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2764.png"
          /></i>
          <i data-joypixels="slight_smile" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="🙂"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f642.png"
          /></i>
          <i data-joypixels="frowning2" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="☹️"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2639.png"
          /></i>
          <i data-joypixels="question" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="❓"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2753.png"
          /></i>
          <i data-joypixels="bangbang" class="joypixels-icon on-hover"
            ><img
              class="joypixels"
              alt="‼️"
              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/203c.png"
          /></i>
        </div>
      </div>
    </div>

    <div
      class="on-hover-visible me-2"
      data-toggle="tooltip"
      data-placement="top"
      title=""
      data-original-title="Reply"
    >
      <button
        class="btn text-secondary text-dark-hover p-0 shadow-none"
        type="button"
        data-toggle="collapse"
        data-target="#replyMessage"
        aria-expanded="false"
        aria-controls="replyMessage"
      >
        <feather-arrow-forward-down class="f-icon-20" />
      </button>
    </div>
    <div class="mw-70 position-relative">
      <div
        class="
          dialog-group-message
          d-inline-block
          text-light
          bg-primary
          rounded
          pb-2
        "
      >
        Duis aute irure dolor in reprehenderit
        <div class="d-flex align-items-center f-size-12 pt-1">
          <feather-check-double class="me-1 text-slime" />

          <a
            class="dialog-message-action step-tabpanel-open"
            data-outside="true"
            href="#dialog-content-section-3, #header-btn-group-2"
            >12/12</a
          >

          <a
            class="ml-auto dialog-message-action step-tabpanel-open"
            data-outside="true"
            href="#dialog-content-section-3, #header-btn-group-2"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="10:11 pm • Yesterday"
            >10:11</a
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else class="d-flex pr-5 mt-3">
    <figure class="avatar avatar-lg me-3 ms-1" data-initial="BC">
      <img src="images/avatar/5.jpg" alt="" />
    </figure>
    <div class="media-body">
      <div class="mb-2">
        <span class="font-weight-middle">Betty Collings</span>
        <span class="f-size-13 ms-2 text-secondary">Neurology Consultant</span>
      </div>

      <div
        class="
          d-flex
          align-items-center
          hover-visible-group hover-action-group
          mb-1
        "
      >
        <div class="mw-70 position-relative">
          <div
            class="dialog-group-message d-inline-block bg-grey-light rounded"
          >
            {{ item.text }}
            <div
              class="
                dialog-message-status
                d-inline-flex
                align-items-center
                f-size-12
                ms-3
                float-right
              "
            >
              <a
                class="ms-auto dialog-message-action step-tabpanel-open"
                data-outside="true"
                href="#dialog-content-section-3, #header-btn-group-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="09:11 am • Yesterday"
                >09:11</a
              >
            </div>
          </div>
        </div>

        <div
          class="on-hover-visible ms-2"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Reply"
        >
          <button
            class="btn text-secondary text-dark-hover p-0 shadow-none"
            type="button"
            data-toggle="collapse"
            data-target="#replyMessage"
            aria-expanded="false"
            aria-controls="replyMessage"
          >
            <FeatherArrowReplyDown class="f-icon-20" />
          </button>
        </div>

        <div class="on-hover-visible ms-2 dropdown" role="group">
          <button
            type="button"
            class="
              btn
              p-0
              shadow-none
              text-secondary text-dark-hover
              toggle-action-active
            "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FeatherSmile class="f-icon-20" />
          </button>

          <div
            class="
              dropdown-menu dropdown-menu-sm dropdown-menu-right
              shadow
              cursor-default
            "
          >
            <div
              class="
                dropdown-item-text
                px-2
                py-0
                f-size-16
                joypixels-group
                text-nowrap
              "
            >
              <i data-joypixels="thumbsup" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="👍"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"
              /></i>
              <i data-joypixels="thumbsdown" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="👎"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44e.png"
              /></i>
              <i data-joypixels="heart" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="❤️"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2764.png"
              /></i>
              <i data-joypixels="slight_smile" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="🙂"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f642.png"
              /></i>
              <i data-joypixels="frowning2" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="☹️"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2639.png"
              /></i>
              <i data-joypixels="question" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="❓"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2753.png"
              /></i>
              <i data-joypixels="bangbang" class="joypixels-icon on-hover"
                ><img
                  class="joypixels"
                  alt="‼️"
                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/203c.png"
              /></i>
            </div>
          </div>
        </div>

        <div class="on-hover-visible ms-1 dropdown" role="group">
          <button
            type="button"
            class="
              btn
              p-0
              shadow-none
              text-secondary text-dark-hover
              toggle-action-active
            "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FeatherMoreVertical class="f-icon-20" />
          </button>

          <div
            class="
              dropdown-menu dropdown-menu-sm dropdown-menu-right
              shadow
              cursor-default
            "
          >
            <button
              class="
                dropdown-item
                px-3
                d-flex
                align-items-center
                dropdown-trigger-toggle
              "
              dropdown-trigger=".mqreply-1"
            >
              <feather-message-circle class="me-3 text-secondary f-icon-18" />
              <span class="ms-n1">Quick Reply</span>
            </button>
            <button class="dropdown-item px-3 d-flex align-items-center">
              <feather-arrow-forward class="me-3 text-secondary f-icon-18" />
              <span class="ms-n1">Forward</span>
            </button>
            <button class="dropdown-item px-3 d-flex align-items-center">
              <feather-copy class="me-3 text-secondary f-icon-18" />
              <span class="ms-n1">Copy</span>
            </button>
            <button
              class="
                dropdown-item
                px-3
                d-flex
                align-items-center
                toggle-item-hidden
              "
            >
              <feather-link-2 class="me-3 text-secondary f-icon-18" />
              <span class="ms-n1">Message details</span>
            </button>
          </div>

          <div class="dropdown">
            <div
              class="toggle-action-active mqreply-1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></div>
            <div
              class="
                dropdown-menu dropdown-menu-sm dropdown-menu-right
                shadow
                cursor-default
              "
            >
              <div class="dropdown-item-text text-secondary text-center px-3">
                Quick Reply
              </div>
              <button class="dropdown-item px-3">Call me later, please</button>
              <button class="dropdown-item px-3">I’m on my way</button>
              <button class="dropdown-item px-3">I’ll call you ASAP</button>
              <button class="dropdown-item px-3">
                I’m not available right now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatherArrowReplyDown from "@/icons/FeatherArrowReplyDown";
import FeatherSmile from "@/icons/FeatherSmile";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import { useStore } from "vuex";
import { computed } from "vue";
import { guidsAreEqual } from "@/services/guids.service";
import FeatherArrowForward from "@/icons/FeatherArrowForward";
import FeatherCopy from "@/icons/FeatherCopy";
import FeatherEdit3 from "@/icons/FeatherEdit3";
import FeatherLink2 from "@/icons/FeatherLink2";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import FeatherArrowForwardDown from "@/icons/FeatherArrowForwardDown";
import FeatherMessageCircle from "@/icons/FeatherMessageCircle";
export default {
  name: "ign-chat-message-bubble",
  components: {
    FeatherMessageCircle,
    FeatherArrowForwardDown,
    FeatherCheckDouble,
    FeatherLink2,
    FeatherEdit3,
    FeatherCopy,
    FeatherArrowForward,
    FeatherMoreVertical,
    FeatherSmile,
    FeatherArrowReplyDown,
  },
  props: ["item"],
  setup(props) {
    const store = useStore();
    const isPostByLoggedUser = computed(() => {
      return (
        (store.getters.getLoggedUser &&
          guidsAreEqual(store.getters.getLoggedUser.id, props.item.authorId)) ||
        (store.getters.getLoggedUser &&
          store.getters.getLoggedUser.SystemRoles &&
          store.getters.getLoggedUser.SystemRoles.some((rle) =>
            guidsAreEqual(rle.Id, props.item.authorId)
          ))
      );
    });

    return {
      isPostByLoggedUser,
    };
  },
};
</script>
