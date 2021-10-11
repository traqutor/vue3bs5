<template>
  <div class="d-flex mb-3 w-100">
    <feather-user class="me-3 align-self-center f-icon-20 text-secondary" />

    <div class="d-flex flex-column w-100">
      <div class="media-body mb-3" :class="{ invalid: !isValid }">
        <div class="text-secondary mb-2">
          Patient name <span class="text-danger">*</span>
        </div>
        <div class="input-group input-group-sm border-0">
          <div
            class="
              d-flex
              form-select form-control form-control-sm
              bg-light
              shadow-none
              rounded-2
              field-require-validation
            "
            @click="onOpenModalSelector"
          >
            <span class="text-dark w-50"
              >{{ selectedPatient.firstName }}
              {{ selectedPatient.lastName }}</span
            >
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="media-body me-2" :class="{ invalid: !isValid }">
          <div class="text-secondary mb-2">UR number</div>
          <div class="input-group input-group-sm border-0">
            <div
              class="
                d-flex
                form-control form-control-sm
                bg-light
                shadow-none
                rounded-2
                field-require-validation
              "
              @click="onOpenModalSelector"
            >
              <span class="text-dark w-50">{{ selectedPatient.urNumber }}</span>
            </div>
          </div>
        </div>
        <div class="media-body" :class="{ invalid: !isValid }">
          <div class="text-secondary mb-2">Date of birth</div>
          <div class="input-group input-group-sm border-0">
            <div
              class="
                d-flex
                form-control form-control-sm
                bg-light
                shadow-none
                rounded-2
                field-require-validation
              "
              @click="onOpenModalSelector"
            >
              <span class="text-dark w-50">{{
                selectedPatient.birthDate
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PatientSelectorDialog
      :selected-participants="selectedPatient"
      @selectionChange="onValueChange"
    />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Modal } from "bootstrap";
import FeatherUser from "@/icons/FeatherUser";
import PatientSelectorDialog from "@/components/patients/PatientSelectorDialog";

export default {
  components: {
    PatientSelectorDialog,
    FeatherUser,
  },
  props: ["modelValue", "isValid"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let modalSelector;
    const store = useStore();
    const selectedPatient = ref({
      ...store.getters.getPatientById(props.modelValue),
    });

    const onOpenModalSelector = () => {
      modalSelector.toggle();
    };

    const onValueChange = (patient) => {
      console.log("onValueChange", patient);
      selectedPatient.value = patient;
      emit("update:modelValue", patient.id);
    };

    onMounted(() => {
      const modalEl = document.querySelector("#patientSelectorModal");
      modalSelector = Modal.getOrCreateInstance(modalEl);
    });

    return {
      selectedPatient,
      onOpenModalSelector,
      onValueChange,
    };
  },
};
</script>
<style lang="css" scoped>
@import "~@vueform/multiselect/themes/default.css";

.multiselect-blue {
  --ms-tag-bg: #dbeafe;
  --ms-tag-color: #2563eb;

  --ms-font-size: 1rem;
  --ms-line-height: 1;
  --ms-bg: #ffffff;
  --ms-bg-disabled: #f3f4f6;
  --ms-border-color: #d1d5db;
  --ms-border-width: 1px;
  --ms-radius: 4px;
  --ms-py: 0.5rem;
  --ms-px: 0.875rem;
  --ms-ring-width: 3px;
  --ms-ring-color: rgba(16, 89, 185, 0.19);
  --ms-placeholder-color: #9ca3af;
  --ms-max-height: 10rem;
}
</style>
