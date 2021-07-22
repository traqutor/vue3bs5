<template>
  <!--start::By logged User bubble-->
  <div
    v-if="isPostByLoggedUser"
    class="
      d-flex
      align-items-center
      justify-content-end
      hover-visible-group hover-action-group
      mb-4
    "
  >
    <!--start::message more-vertical dropdown menu -->
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
          <span class="">Forward</span>
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
          <span class="">Message details</span>
        </button>
      </div>
    </div>
    <!--end::message more-vertical dropdown menu -->

    <!--start::message quick reply emoji  -->
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
    <!--end::message quick reply emoji  -->

    <!--start::message reply button  -->
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
    <!--start::message reply button  -->

    <!--start::message content  -->
    <div
      class="
        dialog-group-message
        d-inline-block
        text-light
        bg-primary
        rounded
        pb-2
      "
      :class="getBubbleClass"
    >
      <!--start::whisper over text -->
      <div class="d-flex" v-if="item.isWhisper">
        <BubbleWhisperHeaderDropdown :item="item" />
      </div>
      <!--end::whisper over text -->

      <!--start::message text -->
      <div class="d-inline show-white-space" v-html="item.text"></div>
      <!--end::message text -->

      <!--start::message sub text check and date-->
      <div class="d-flex align-items-center f-size-12 pt-1">
        <feather-check-double class="me-1 text-white-75" />

        <BubbleSubTextinfoDate
          :item="item"
          :selected-conversation="selectedConversation"
        />
      </div>
      <!--end::message sub text check and date-->

      <!--start::message bub text acknowledge-->
      <div v-if="item.requiresAcknowledgement" class="mt-2 pb-1 text-right">
        <div class="dropdown">
          <BubbleAcknowledgedDropDownButton
            :item="item"
            :selected-conversation="selectedConversation"
            :background="'bg-blue-light'"
          />
        </div>
      </div>
      <!--end::message bub text acknowledge-->
    </div>
    <!--end::message content  -->
  </div>
  <!--end::By logged User bubble-->

  <!--start::others Users bubble-->
  <div v-else class="d-flex pe-5 mt-3">
    <figure
      v-if="isUserInfoToDisplay && getAuthor(item).user"
      class="avatar avatar-lg me-3 ms-1"
      :data-initial="getAuthor(item).user.userName.substr(0, 1).toUpperCase()"
    >
      <img
        v-if="getAuthor(item).user.avatar"
        :src="`images/${getAuthor(item).user.avatar}`"
        alt=""
      />
    </figure>
    <div v-else class="avatar-lg me-3 ms-1"></div>
    <div class="media-body">
      <div
        v-if="isUserInfoToDisplay && !selectedConversation.isDirect"
        class="mb-2"
      >
        <span v-if="getAuthor(item).user" class="font-weight-middle">{{
          getAuthor(item).user.userName
        }}</span>
        <span v-if="getAuthor(item).user" class="f-size-13 ms-2 text-secondary">{{
          getAuthor(item)
            .user.roles.map((rle) => rle.name)
            .join(", ")
        }}</span>
      </div>

      <div
        class="
          d-flex
          align-items-center
          hover-visible-group hover-action-group
          mb-4
        "
      >
        <!--start::message content  -->
        <div class="mw-70 position-relative">
          <div
            class="dialog-group-message d-inline-block rounded pb-2"
            :class="getBubbleClass"
          >
            <!--start::whisper over text-->
            <div class="d-flex" v-if="item.isWhisper">
              <BubbleWhisperHeaderDropdown :item="item" />
            </div>
            <!--start::whisper over text-->

            <!--start::message text -->
            <div class="d-inline show-white-space" v-html="item.text"></div>
            <!--end::message text -->

            <!--start::message sub text check and date-->
            <div class="d-flex align-items-center f-size-12 pt-1">
              <BubbleSubTextinfoDate
                :item="item"
                :selected-conversation="selectedConversation"
              />
            </div>
            <!--end::message sub text check and date-->

            <!--start::message button text acknowledge-->
            <div v-show="item.requiresAcknowledgement" class="mt-2 pb-1">
              <button
                v-if="!isMessageAcknowledgedByUser"
                class="btn btn-sm btn-primary f-size-12 shadow-none"
                @click="onAcknowledgePost"
              >
                Acknowledge
              </button>

              <div v-show="isMessageAcknowledgedByUser" class="dropdown">
                <BubbleAcknowledgedDropDownButton
                  :item="item"
                  :selected-conversation="selectedConversation"
                  :background="'bg-light'"
                />
              </div>
            </div>
            <!--end::message bub text acknowledge-->
          </div>
        </div>
        <!--end::message content  -->

        <!--start::message reply button  -->
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
        <!--end::message reply button  -->

        <!--start::message quick reply emoji  -->
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
        <!--end::message quick reply emoji  -->

        <!--start::message more-vertical dropdown menu -->
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
              <feather-link2 class="me-3 text-secondary f-icon-18" />
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
        <!--end::message more-vertical dropdown menu -->
      </div>
    </div>
  </div>
  <!--end::others Users bubble-->
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { guidsAreEqual } from "@/services/guids.service";
import FeatherArrowReplyDown from "@/icons/FeatherArrowReplyDown";
import FeatherSmile from "@/icons/FeatherSmile";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherArrowForward from "@/icons/FeatherArrowForward";
import FeatherCopy from "@/icons/FeatherCopy";
import FeatherEdit3 from "@/icons/FeatherEdit3";
import FeatherLink2 from "@/icons/FeatherLink2";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import FeatherArrowForwardDown from "@/icons/FeatherArrowForwardDown";
import FeatherMessageCircle from "@/icons/FeatherMessageCircle";
import {
  timeOffsetFormat,
  timeHhMmaDotDdddFormat,
} from "@/services/datetime.service";

import { CHAT_VIEW_MODES } from "@/const";
import BubbleAcknowledgedDropDownButton from "@/components/conversation/chat/bubble/BubbleAcknowledgedDropDownButton";
import BubbleWhisperHeaderDropdown from "@/components/conversation/chat/bubble/BubbleWhisperHeaderDropdown";
import BubbleSubTextinfoDate from "@/components/conversation/chat/bubble/BubbleSubTextinfoDate";

export default {
  name: "ign-chat-message-bubble",
  components: {
    BubbleSubTextinfoDate,
    BubbleWhisperHeaderDropdown,
    BubbleAcknowledgedDropDownButton,
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
    const loggedUser = computed(() => store.getters.getLoggedUser);
    const getAuthor = computed(() => store.getters.getMessageAuthor);
    const selectedConversation = computed(
      () => store.getters.getSelectedConversation
    );

    const selectedCreator = computed(() => store.getters.getSelectedCreator);

    const getConversationAvailableCreationRoles = computed(
      () => store.getters.getConversationAvailableCreationRoles
    );

    const isMessageAcknowledged = computed(() => {
      let visible = null;
      const whoCanAcknowledge =
        store.getters.getConversationAvailableCreationRoles;
      if (whoCanAcknowledge && props.item.acknowledgedByUsers) {
        whoCanAcknowledge.forEach((who) => {
          props.item.acknowledgedByUsers.forEach((ack) => {
            if (guidsAreEqual(who.id, ack.id)) {
              visible = true;
            }
          });
        });
      }
      return visible;
    });

    const isUserInfoToDisplay = computed(() => {
      const messages = store.getters.getMessages;
      const index = messages.findIndex((msg) => msg.id === props.item.id);
      return (
        index === 0 ||
        messages[index].authorId !== messages[index - 1].authorId ||
        messages[index].activeRoleId !== messages[index - 1].activeRoleId
      );
    });

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

    const getWhisperedRecipients = computed(() => {
      return props.item.whisperRecipients
        .map((rcp) => {
          if (rcp.isRole) {
            return store.getters.getSystemRoles
              .filter((rle) => guidsAreEqual(rle.id, rcp.id))
              .map((rle) => rle.name);
          }
          return store.getters.getSystemUsers
            .filter((usr) => guidsAreEqual(usr.id, rcp.id))
            .map((usr) => usr.userName);
        })
        .join(", ");
    });

    const getBubbleClass = computed(() => {
      if (isPostByLoggedUser.value)
        if (props.item.isWhisper) {
          return "bg-grey";
        } else if (props.item.requiresAcknowledgement) {
          return "text-white bg-blue-dark";
        } else {
          return "bg-darker-blue text-light";
        }
      else {
        if (props.item.isWhisper) {
          return "text-white bg-grey-medium";
        } else if (props.item.requiresAcknowledgement) {
          return "bg-blue-light";
        } else {
          return "bg-grey-light";
        }
      }
    });

    const isMessageAcknowledgedByUser = computed(() => {
      return (
        props.item.acknowledgedByUsers &&
        props.item.acknowledgedByUsers.find((ack) =>
          guidsAreEqual(ack.id, loggedUser.value.id)
        )
      );
    });

    const isWatchedByAllParticipants = computed(() => {
      return (
        (props.item.watchedByUsers && props.item.watchedByUsers.length) ===
        (selectedConversation.value.participants &&
          selectedConversation.value.participants.length)
      );
    });

    const isMessageWatchedByUser = computed(() => {
      return (
        props.item.watchedByUsers &&
        props.item.watchedByUsers.find((watch) =>
          guidsAreEqual(watch.id, loggedUser.value.id)
        )
      );
    });

    const onMessageOpen = () => {
      store.commit("setSelectedMessageId", props.item.id);
      store.commit("setChatViewMode", CHAT_VIEW_MODES.MESSAGE);
    };

    const onAcknowledgePost = () => {
      const whoCanAcknowledge =
        store.getters.getConversationAvailableCreationRoles;
      let data = {
        conversationId: selectedConversation.value.id,
        messageId: props.item.id,
        aciveRoleId: null,
      };
      whoCanAcknowledge.forEach((who) => {
        if (who.isRole) {
          // acknowledge as Role in the conversation
          data = {
            ...data,
            aciveRoleId: who.id.toLowerCase(),
          };
        } else {
          // acknowledge as User
          data = {
            ...data,
            aciveRoleId: null,
          };
        }
        store.dispatch("onAcknowledgeMessage", data);
      });
    };

    onMounted(() => {
      if (!isPostByLoggedUser.value) {
        const isWatched = props.item.watchedByUsers.some((watched) => {
          return (
            guidsAreEqual(watched.id, loggedUser.value.id) ||
            loggedUser.value.SystemRoles.some((role) => {
              return guidsAreEqual(role.Id, watched.id);
            })
          );
        });
        if (!isWatched) {
          store.dispatch("onMessageIsRead", props.item);
        }
      }
    });

    return {
      selectedConversation,
      selectedCreator,
      getConversationAvailableCreationRoles,
      isMessageAcknowledged,
      isPostByLoggedUser,
      getWhisperedRecipients,
      getBubbleClass,
      isUserInfoToDisplay,
      getAuthor,
      onMessageOpen,
      isWatchedByAllParticipants,
      isMessageWatchedByUser,
      isMessageAcknowledgedByUser,
      onAcknowledgePost,
      timeOffsetFormat,
      timeHhMmaDotDdddFormat,
      CHAT_VIEW_MODES,
    };
  },
};
</script>
