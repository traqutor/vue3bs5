<template>
  <div class="flex-fill position-relative">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <perfect-scrollbar class="pe-3">
        <div class="row">
          <div class="col-7">
            <div class="text-secondary my-3 f-size-15">Message</div>

            <div class="d-flex">
              <figure
                v-if="getAuthor.user"
                class="avatar avatar-lg me-3 ms-1"
                :data-initial="
                  getAuthor.user.userName.substr(0, 1).toUpperCase()
                "
              >
                <img
                  v-if="getAuthor.user.avatar"
                  :src="`images/${getAuthor.user.avatar}`"
                  alt=""
                />
              </figure>

              <div class="media-body d-flex flex-column align-items-start">
                <div class="mb-2">
                  <div class="font-weight-middle">
                    <span v-if="getAuthor.user">{{
                      getAuthor.user.userName
                    }}</span>
                  </div>
                  <div class="f-size-13 text-secondary">
                    <span v-if="getAuthor.user">{{
                      getAuthor.user.roles.map((rle) => rle.name).join(", ")
                    }}</span>
                  </div>
                </div>
                <div
                  class="
                    dialog-group-message
                    d-inline-block
                    bg-grey-light
                    rounded
                  "
                >
                  {{ selectedMessage.text }}
                </div>
              </div>
            </div>

            <div class="d-flex mt-2">
              Sent<span class="ms-auto f-size-13">
                {{
                  timeHhMmaDotDdddFormat(selectedMessage.createdTime.seconds)
                }}</span
              >
            </div>
            <div class="d-flex mt-2">
              Acknowledgement requested?
              <span
                v-if="selectedMessage.requiresAcknowledgement"
                class="ms-auto text-success"
                >Yes</span
              >
              <span v-else class="ms-auto text-orange">No</span>
            </div>

            <div
              class="
                d-flex
                align-items-center
                text-secondary
                mt-4
                mb-2
                f-size-15
              "
            >
              <span v-if="selectedConversation.isDirect"> Recipient </span>
              <span v-else>
                Recipients ({{ selectedMessage.watchedByUsers.length }}/{{
                  selectedConversation.participants.length
                }})
              </span>
            </div>

            <div class="list-group list-group-flush overflow-hidden">
              <div
                v-for="(item, index) of selectedConversation.participants"
                :key="index"
                class="
                  list-group-item
                  p-2
                  rounded
                  list-group-item-action
                  hover-action-group
                  border-0
                "
              >
                <div class="d-flex">
                  <ParticipantAvatarNameItem :participant-id="item.id">
                    <template v-slot:secondary>
                      <div class="text-right ms-auto">
                        <div class="text-nowrap f-size-13 text-dark">
                          <span
                            v-if="isMessageAcknowledgedByUser(item.id)"
                            class="text-primary me-2 f-size-12"
                            >Acknowledged</span
                          >
                          <feather-check-double
                            class="mr-1"
                            :class="
                              isMessageAcknowledgedByUser(item.id)
                                ? 'text-success'
                                : 'text-dark'
                            "
                          />
                          {{
                            timeOffsetFormat(
                              selectedMessage.createdTime.seconds
                            )
                          }}
                        </div>
                        <div class="f-size-12 text-muted">
                          {{
                            timeMessagesDividerFormat(
                              selectedMessage.createdTime.seconds
                            )
                          }}
                        </div>
                      </div>
                    </template>
                  </ParticipantAvatarNameItem>
                </div>

                <div
                  class="btn-group dropleft btn-group-sm hover-action-control"
                >
                  <button
                    type="button"
                    class="btn btn-light px-1 shadow-none rounded"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <feather-more-vertical class="f-icon-18" />
                  </button>
                  <div
                    class="
                      dropdown-menu dropdown-menu-right dropdown-menu-sm
                      shadow
                    "
                    x-placement="left-start"
                    style="
                      position: absolute;
                      will-change: transform;
                      top: 0px;
                      left: 0px;
                      transform: translate3d(-2px, 0px, 0px);
                    "
                  >
                    <button type="button" class="dropdown-item px-3">
                      Whisper
                    </button>
                    <button type="button" class="dropdown-item px-3">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { guidsAreEqual } from "@/services/guids.service";
import {
  timeHhMmaDotDdddFormat,
  timeOffsetFormat,
  timeMessagesDividerFormat,
} from "@/services/datetime.service";
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherCheckDouble from "@/icons/FeatherCheckDouble";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";

export default {
  components: {
    ParticipantAvatarNameItem,
    FeatherCheckDouble,
    FeatherMoreVertical,
  },
  setup() {
    const store = useStore();
    const selectedConversation = computed(
      () => store.getters.getSelectedConversation
    );
    const selectedMessage = computed(() => store.getters.getSelectedMessage);
    const getAuthor = computed(() =>
      store.getters.getMessageAuthor(selectedMessage.value)
    );

    const isRoleById = (id) => {
      let isRole = false;
      store.getters.getSystemRoles.forEach((rle) => {
        if (guidsAreEqual(rle.id, id)) {
          isRole = true;
        }
      });
      return isRole;
    };

    const isMessageWatchedByUser = (id) => {
      return (
        selectedMessage.value.watchedByUsers &&
        selectedMessage.value.watchedByUsers.find((watch) =>
          guidsAreEqual(watch.id, id)
        )
      );
    };

    const isMessageAcknowledgedByUser = (id) => {
      return (
        selectedMessage.value.acknowledgedByUsers &&
        selectedMessage.value.acknowledgedByUsers.find((watch) =>
          guidsAreEqual(watch.id, id)
        )
      );
    };

    return {
      selectedConversation,
      selectedMessage,
      getAuthor,
      isMessageWatchedByUser,
      isMessageAcknowledgedByUser,
      isRoleById,
      timeHhMmaDotDdddFormat,
      timeOffsetFormat,
      timeMessagesDividerFormat,
    };
  },
};
</script>
