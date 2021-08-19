<template>
  <!--start::By logged User bubble-->
  <div
    v-if="isPostByLoggedUser"
    class="
      d-flex
      align-items-center
      justify-content-end
      hover-visible-group hover-action-group
      mb-5
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
        :id="`dropdownMenuMoreMessageUserActionsId${item.id}`"
        data-bs-toggle="dropdown"
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
        :aria-labelledby="`dropdownMenuMoreMessageUserActionsId${item.id}`"
      >
        <button
          class="dropdown-item px-3 d-flex align-items-center"
          @click="onMessageForward"
        >
          <feather-arrow-forward class="text-secondary f-icon-18 me-3" />
          <span class="">Forward</span>
        </button>
        <button
          class="dropdown-item px-3 d-flex align-items-center"
          @click="onMessageCopy"
        >
          <feather-copy class="text-secondary f-icon-18 me-3" />
          <span>Copy</span>
        </button>
        <button
          class="dropdown-item px-3 d-flex align-items-center"
          @click="onMessageEdit"
        >
          <feather-edit3 class="text-secondary f-icon-18 me-3" />
          <span>Edit message</span>
        </button>
        <button
          class="dropdown-item px-3 d-flex align-items-center"
          @click="onMessageOpen"
        >
          <feather-link2 class="text-secondary f-icon-18 me-3" />
          <span class="">Message details</span>
        </button>
      </div>
    </div>
    <!--end::message more-vertical dropdown menu -->

    <!--start::message quick reply emoji  -->
    <div class="on-hover-visible me-2 dropdown" role="group">
      <BubbleQuckReactionDropdown :item="item" />
    </div>
    <!--end::message quick reply emoji  -->

    <!--start::message reply button  -->
    <div
      class="on-hover-visible me-2"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Reply"
    >
      <button
        class="btn text-secondary text-dark-hover p-0 shadow-none"
        type="button"
        @click="onMessageReply"
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
        text-w
      "
      :class="getBubbleClass"
    >
      <!--start::reply text-->
      <BubbleReplyElement :item="item" loggedUserMessage="true" />
      <!--end::reply text-->

      <!--start::whisper over text -->
      <div class="d-flex" v-if="item.isWhisper">
        <BubbleWhisperHeaderDropdown :item="item" />
      </div>
      <!--end::whisper over text -->

      <!--start::message attachments -->
      <div
        v-if="
          item.attachments.length > 0 &&
          item.thumbnails &&
          item.thumbnails.length > 0
        "
        class="mw-55 position-relative"
      >
        <BubbleAttachments :item="item" />
      </div>
      <!--end::message attachments -->

      <!--start::message text -->
      <div class="d-inline show-white-space" v-html="item.text"></div>
      <!--end::message text -->

      <!--start::message sub text check and date-->
      <div class="d-flex align-items-center f-size-12 pt-1">
        <BubbleSubTextInfoDate
          :item="item"
          :selected-conversation="selectedConversation"
          :is-user-post="true"
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

    <!--start::message reactions -->
    <BubbleReactionDropdown :item="item" />
    <!--end::message reactions -->
  </div>
  <!--end::By logged User bubble-->

  <!--start::others Users bubble-->
  <div v-else class="d-flex pe-5 mt-3">
    <!--start::User avatar-->
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
    <!--end::User avatar-->

    <div class="media-body">
      <!--start::User name and roles-->
      <div
        v-if="isUserInfoToDisplay && !selectedConversation.isDirect"
        class="mb-2"
      >
        <ParticipantNameAndRolesItem
          :participant-id="
            item.activeRoleId ? item.activeRoleId : item.authorId
          "
        />
      </div>
      <!--end::User name and roles-->

      <div
        class="
          d-flex
          align-items-center
          hover-visible-group hover-action-group
          mb-4
        "
      >
        <!--start::message content -->
        <div class="mw-70 position-relative">
          <!--start::message -->
          <div
            class="dialog-group-message d-inline-block rounded pb-2"
            :class="getBubbleClass"
          >
            <!--start::reply text-->
            <BubbleReplyElement :item="item" />
            <!--end::reply text-->

            <!--start::whisper over text-->
            <div class="d-flex" v-if="item.isWhisper">
              <BubbleWhisperHeaderDropdown :item="item" />
            </div>
            <!--start::whisper over text-->

            <!--start::message attachments -->
            <div
              v-if="
                item.attachments.length > 0 &&
                item.thumbnails &&
                item.thumbnails.length > 0
              "
              class="mw-55 position-relative"
            >
              <BubbleAttachments :item="item" />
            </div>
            <!--end::message attachments -->

            <!--start::message text -->
            <div class="d-inline show-white-space" v-html="item.text"></div>
            <!--end::message text -->

            <!--start::message sub text check and date-->
            <div class="d-flex align-items-center f-size-12 pt-1">
              <BubbleSubTextInfoDate
                :item="item"
                :selected-conversation="selectedConversation"
                :is-user-post="false"
              />
            </div>
            <!--end::message sub text check and date-->

            <!--start::message button text acknowledge-->
            <div v-show="item.requiresAcknowledgement" class="mt-2 pb-1">
              <button
                v-if="!isMessageAcknowledgedByUser(item)"
                class="btn btn-sm btn-primary f-size-12 shadow-none"
                @click="onAcknowledgePost"
              >
                Acknowledge
              </button>

              <div v-show="isMessageAcknowledgedByUser(item)" class="dropdown">
                <BubbleAcknowledgedDropDownButton
                  :item="item"
                  :selected-conversation="selectedConversation"
                  :background="'bg-light'"
                />
              </div>
            </div>
            <!--end::message bub text acknowledge-->
          </div>
          <!--end::message -->

          <!--start::message reactions -->
          <BubbleReactionDropdown :item="item" />
          <!--end::message reactions -->
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
            @click="onMessageReply"
          >
            <FeatherArrowReplyDown class="f-icon-20" />
          </button>
        </div>
        <!--end::message reply button  -->

        <!--start::message quick reply emoji  -->
        <div class="on-hover-visible ms-2 dropdown" role="group">
          <BubbleQuckReactionDropdown :item="item" />
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
            :id="`dropdownMenuMoreMessageActionsId${item.id}`"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FeatherMoreVertical class="f-icon-20" />
          </button>

          <ul
            class="
              dropdown-menu dropdown-menu-sm dropdown-menu-right
              shadow
              cursor-default
            "
            :aria-labelledby="`dropdownMenuMoreMessageActionsId${item.id}`"
          >
            <li>
              <button class="dropdown-item px-3 d-flex align-items-center">
                <feather-message-circle class="me-3 text-secondary f-icon-18" />
                <span class="">Quick Reply</span>
                <FeatherChevronsRight class="ms-2" />
              </button>
              <ul class="submenu dropdown-menu">
                <li v-for="(text, index) of quickResponsesOptions" :key="index">
                  <button
                    class="dropdown-item px-3"
                    @click="onMessageQuickText(text)"
                  >
                    {{ text }}
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <button
                class="dropdown-item px-3 d-flex align-items-center"
                @click="onMessageForward"
              >
                <feather-arrow-forward class="me-3 text-secondary f-icon-18" />
                <span class="ms-n1">Forward</span>
              </button>
            </li>
            <li>
              <button
                class="dropdown-item px-3 d-flex align-items-center"
                @click="onMessageCopy"
              >
                <feather-copy class="me-3 text-secondary f-icon-18" />
                <span class="ms-n1">Copy</span>
              </button>
            </li>
            <li>
              <button
                class="
                  dropdown-item
                  px-3
                  d-flex
                  align-items-center
                  toggle-item-hidden
                "
                @click="onMessageOpen"
              >
                <feather-link2 class="me-3 text-secondary f-icon-18" />
                <span class="ms-n1">Message details</span>
              </button>
            </li>
          </ul>
        </div>
        <!--end::message more-vertical dropdown menu -->
      </div>
    </div>
  </div>
  <!--end::others Users bubble-->
</template>
<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";

import { guidsAreEqual } from "@/services/guids.service";
import FeatherArrowReplyDown from "@/icons/FeatherArrowReplyDown";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherArrowForward from "@/icons/FeatherArrowForward";
import FeatherCopy from "@/icons/FeatherCopy";
import FeatherEdit3 from "@/icons/FeatherEdit3";
import FeatherLink2 from "@/icons/FeatherLink2";
import FeatherArrowForwardDown from "@/icons/FeatherArrowForwardDown";
import FeatherMessageCircle from "@/icons/FeatherMessageCircle";
import {
  timeOffsetFormat,
  timeHhMmaDotDdddFormat,
} from "@/services/datetime.service";

import BubbleAcknowledgedDropDownButton from "@/components/conversation/chat/bubble/BubbleAcknowledgedDropDownButton";
import BubbleWhisperHeaderDropdown from "@/components/conversation/chat/bubble/BubbleWhisperHeaderDropdown";
import BubbleSubTextInfoDate from "@/components/conversation/chat/bubble/BubbleSubTextInfoDate";
import { CHAT_VIEW_MODES } from "@/const";
import FeatherChevronsRight from "@/icons/FeatherChevronsRight";
import ParticipantNameAndRolesItem from "@/components/participant/ParticipantNameAndRolesItem";
import { Actions, Mutations } from "@/store/enums/EnumTypes";
import BubbleAttachments from "@/components/conversation/chat/bubble/BubbleAttachments";
import BubbleReactionDropdown from "@/components/conversation/chat/bubble/BubbleReactionDropdown";
import BubbleQuckReactionDropdown from "@/components/conversation/chat/bubble/BubbleQuckReactionDropdown";
import BubbleReplyElement from "@/components/conversation/chat/bubble/BubbleReplyElement";

export default {
  name: "ign-chat-message-bubble",
  components: {
    BubbleReplyElement,
    BubbleQuckReactionDropdown,
    BubbleReactionDropdown,
    BubbleAttachments,
    ParticipantNameAndRolesItem,
    FeatherChevronsRight,
    BubbleSubTextInfoDate,
    BubbleWhisperHeaderDropdown,
    BubbleAcknowledgedDropDownButton,
    FeatherMessageCircle,
    FeatherArrowForwardDown,
    FeatherLink2,
    FeatherEdit3,
    FeatherCopy,
    FeatherArrowForward,
    FeatherMoreVertical,
    FeatherArrowReplyDown,
  },
  props: ["item"],
  setup(props) {
    const store = useStore();
    const quickResponsesOptions = ref([
      "Call me later, please",
      "I'm on my way",
      "I'll call you ASAP",
      "I'm not available right now",
    ]);
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
      let visible = false;

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

    const isMessageAcknowledgedByUser = computed(
      () => store.getters.getIsMessageAcknowledged
    );

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

    const onMessageOpen = () => {
      store.commit("setSelectedMessageId", props.item.id);
      store.commit("setChatViewMode", CHAT_VIEW_MODES.MESSAGE);
    };

    const onMessageForward = () => {
      console.log("onMessageForward", props.item);
    };

    const onMessageCopy = () => {
      console.log("onMessageCopy", props.item);
    };

    const onMessageEdit = () => {
      console.log("onMessageEdit", props.item);
    };

    const onMessageReply = () => {
      console.log("onMessageReply", props.item);
      store.commit(Mutations.setReplyMessage, props.item);
    };

    const onMessageQuickText = (text) => {
      console.log("onMessageQuickText", props.item, text);
      const payload = {
        quickMessageText: text,
        message: props.item,
      };
      store.dispatch(Actions.onQuickMessageResponse, payload);
    };

    const onAcknowledgePost = () => {
      store.dispatch("onAcknowledgeMessage", props.item.id);
    };

    onMounted(() => {
      if (props.item.attachments.length > 0 && !props.item.thumbnails) {
        const requestQuery = props.item.attachments
          .map((atta) => `thumbnailsIds=${atta.id}`)
          .join("&");
        store
          .dispatch(Actions.onGetAttachmentsThumbnails, requestQuery)
          .then((response) => {
            const msg = { ...props.item, thumbnails: response };
            store.commit(Mutations.setMessage, msg);
          });
      }
    });

    return {
      quickResponsesOptions,
      selectedConversation,
      selectedCreator,
      getConversationAvailableCreationRoles,
      isMessageAcknowledged,
      isPostByLoggedUser,
      getWhisperedRecipients,
      getBubbleClass,
      isUserInfoToDisplay,
      getAuthor,
      onMessageCopy,
      onMessageEdit,
      onMessageForward,
      onMessageOpen,
      onMessageReply,
      onMessageQuickText,
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
