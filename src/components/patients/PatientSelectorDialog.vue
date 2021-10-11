<template>
  <div
    class="modal fade"
    id="patientSelectorModal"
    tabindex="-1"
    aria-labelledby="patientSelectorModal"
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
          <h6 class="modal-title">Patients</h6>
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
            <div class="d-flex">
              <span class="text-dark w-50">Name</span>
              <span class="text-secondary w-25 ms-3">UR number </span>
              <span class="text-secondary w-25 ms-3"> Date of birth</span>
            </div>
            <template v-for="patient of systemPatients" :key="patient.id">
              <button
                type="button"
                class="
                  btn
                  shadow-none
                  btn-sm
                  p-2
                  list-group-item list-group-item-action
                  border-0
                  rounded
                  hover-action-group
                  toggle-item-check toggle-action-show
                  list-item-check
                  visible
                "
                @click="onSelectPatient(patient)"
              >
                <div class="d-flex">
                  <span class="text-dark w-50"
                    >{{ patient.firstName }} {{ patient.lastName }}</span
                  >
                  <span class="text-secondary w-25 ms-3"
                    >{{ patient.urNumber }}
                  </span>
                  <span class="text-secondary w-25 ms-3">
                    {{ patient.birthDate }}</span
                  >
                </div>
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
            :disabled="!patient"
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import FeatherX from "@/icons/FeatherX";
import FeatherSearch from "@/icons/FeatherSearch";

export default {
  components: {
    FeatherSearch,
    FeatherX,
  },
  props: ["selectedPatient"],
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const searchText = ref();
    const store = useStore();
    const patient = ref(props.selectedPatient);

    const systemPatients = computed(() =>
      searchText.value
        ? store.getters.getPatients.filter(
            (participant) =>
              participant.firstName
                .toLowerCase()
                .includes(searchText.value.toLowerCase()) ||
              participant.lastName
                .toLowerCase()
                .includes(searchText.value.toLowerCase())
          )
        : store.getters.getPatients
    );

    const onSelectPatient = (selected) => {
      console.log("onSelectPatient", selected.firstName);
      patient.value = selected;
    };

    const onConfirm = () => {
      console.log("onConfirm", patient.value);
      emit("selectionChange", patient.value);
    };

    return {
      searchText,
      systemPatients,
      patient,
      onConfirm,
      onSelectPatient,
    };
  },
};
</script>
