<template>
  <div
    class="modal fade"
    id="participantSelectorModal"
    tabindex="-1"
    aria-labelledby="participantSelectorModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div
        class="
          modal-content
          mt-5
          bg-grey-light
          border-secondary-light
          shadow-lg
        "
      >
        <div class="modal-header border-0">
          <h6 class="modal-title">Available To</h6>
          <button
            type="button"
            class="btn btn-sm btn-secondary-light shadow-none ml-auto"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <feather-x />
          </button>
        </div>
        <div class="modal-header border-0 pt-0 pb-2">
          <div class="input-group input-group-sm filter-control-group">
            <input
              type="text"
              class="form-control is-filter-control bg-light shadow-none"
              placeholder="Search"
              v-model="searchText"
            />
            <div class="input-group-append">
              <button
                class="
                  btn btn-light
                  border-left-0
                  btn-filter-control
                  text-secondary text-dark-hover
                "
                type="button"
              >
                <feather-search />
              </button>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div
            class="
              list-group list-group-flush
              overflow-hidden
              select-action-group
            "
          >
            <template
              v-for="participant of systemParticipants"
              :key="participant.id"
            >
              <button
                type="button"
                class="
                  btn
                  shadow-none
                  btn-sm
                  py-2
                  list-group-item list-group-item-action
                  border-0
                  rounded
                  hover-action-group
                  toggle-item-check toggle-action-show
                  list-item-check
                  visible
                "
                @click="onToggleParticipant(participant)"
              >
                <div class="toggle-action-control align-self-center">
                  <feather-check-circle
                    class="f-icon-20 text-success"
                    v-if="
                      participants.find((item) => item.id === participant.id)
                    "
                  />
                  <feather-circle v-else class="f-icon-20" />
                </div>
                <ParticipantAvatarNameItem :participant-id="participant.id" />
              </button>
            </template>
          </div>
        </div>

        <!-- start::empty users and roles info -->
        <div class="is-hidden" id="GroupItemsSelected">
          <div
            class="d-flex align-items-center pt-2 px-3 chat-section-footer-md"
          >
            <perfect-scrollbar class="flex-grow-1">
              <div id="listGroupSelected" class="d-flex"></div>
            </perfect-scrollbar>
          </div>
        </div>
        <!-- end::empty users and roles info -->

        <div class="modal-footer border-0">
          <button
            type="button"
            class="btn btn-sm btn-primary btn-block"
            @click="onConfirm"
            data-bs-dismiss="modal"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import FeatherX from "@/icons/FeatherX";
import FeatherSearch from "@/icons/FeatherSearch";
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
export default {
  components: {
    ParticipantAvatarNameItem,
    FeatherCheckCircle,
    FeatherCircle,
    FeatherSearch,
    FeatherX,
  },
  props: ["selectedParticipants", "selectionChange"],
  setup(props) {
    const searchText = ref();
    const store = useStore();
    const participants = ref([...props.selectedParticipants]);

    const systemParticipants = computed(() =>
      searchText.value
        ? store.getters.getAllPossibleParticipants.filter((participant) =>
            participant.name
              .toLowerCase()
              .includes(searchText.value.toLowerCase())
          )
        : store.getters.getAllPossibleParticipants
    );

    const onToggleParticipant = (participant) => {
      const idx = participants.value.findIndex(
        (item) =>
          (item.userId && item.userId === participant.userId) ||
          (item.id && item.id === participant.userId)
      );

      if (idx !== -1) {
        participants.value.splice(idx, 1);
      } else {
        participants.value.push(participant);
      }
    };

    const onConfirm = () => {
      props.selectionChange([...participants.value]);
    };

    return {
      searchText,
      systemParticipants,
      participants,
      onConfirm,
      onToggleParticipant,
    };
  },
};
</script>
