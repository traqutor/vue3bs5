<template>
  <div class="flex-fill position-relative">
    <div class="d-flex flex-column position-absolute w-100 h-100">
      <perfect-scrollbar class="pe-3">
        <div class="row">
          <div class="col-7">
            <div class="text-secondary my-3 f-size-15">Message</div>

            <div class="d-flex pb-2">
              <ParticipantAvatarNameItem
                v-if="getAuthor.user"
                :participant-id="getAuthor.user.userId"
              >
              </ParticipantAvatarNameItem>
              <ParticipantAvatarNameItem
                v-if="getAuthor.role"
                :participant-id="getAuthor.role.id"
              >
              </ParticipantAvatarNameItem>
            </div>

            <div
              class="d-flex media-body flex-column align-items-start ms-5 ps-1"
            >
              <div
                class="
                  dialog-group-message
                  d-inline-block
                  bg-grey-light
                  rounded
                "
              >
                <!--start::message text -->
                <div
                  class="d-inline show-white-space"
                  v-html="selectedMessage.text"
                ></div>
                <!--end::message text -->
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
                Recipients ({{ watchedMessageParticipants.length }}/{{
                  selectedConversationParticipants.length
                }})
              </span>
            </div>

            <div class="list-group list-group-flush overflow-hidden">
              <div
                v-for="(item, index) of selectedConversationParticipants"
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
                            v-if="item.isAcknowledged"
                            class="text-primary me-2 f-size-12"
                            >Acknowledged</span
                          >
                          <feather-check-double
                            class="me-1"
                            :class="
                              item.isWatched ? 'text-success' : 'text-dark'
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
                    id="dropdownMessageDetailsParticipantsMenuButtonId"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <feather-more-vertical class="f-icon-18" />
                  </button>
                  <div
                    class="
                      dropdown-menu dropdown-menu-right dropdown-menu-sm
                      shadow
                    "
                    aria-labelledby="dropdownMessageDetailsParticipantsMenuButtonId"
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
import { sortByIsAcknowledged, sortByIsWatched } from "@/services/sort.service";

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

    const watchedMessageParticipants = computed(() =>
      store.getters.getWatchedMessageParticipants(selectedMessage.value)
    );

    const whisperRecipients = computed(() =>
      store.getters
        .getWhisperMessageParticipants(selectedMessage.value)
        .map((participant) => {
          return {
            ...participant,
            isWatched: isMessageWatchedByUser(participant.id),
            isAcknowledged: isMessageAcknowledgedByUser(participant.id),
          };
        })
        .sort(sortByIsAcknowledged)
        .sort(sortByIsWatched)
    );

    const selectedConversationMessageParticipants = computed(() =>
      store.getters
        .getSelectedConversationMessageParticipants(selectedMessage.value)
        .map((participant) => {
          return {
            ...participant,
            isWatched: isMessageWatchedByUser(participant.id),
            isAcknowledged: isMessageAcknowledgedByUser(participant.id),
          };
        })
        .sort(sortByIsAcknowledged)
        .sort(sortByIsWatched)
    );

    const selectedConversationParticipants = computed(() => {
      if (selectedMessage.value.isWhisper) {
        return whisperRecipients.value;
      } else {
        return selectedConversationMessageParticipants.value;
      }
    });

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
      watchedMessageParticipants,
      whisperRecipients,
      getAuthor,
      selectedConversationParticipants,
      timeHhMmaDotDdddFormat,
      timeOffsetFormat,
      timeMessagesDividerFormat,
    };
  },
};
</script>
