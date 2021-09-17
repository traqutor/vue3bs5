<template>
  <div class="d-flex mb-3">
    <feather-user-plus
      class="me-3 align-self-center f-icon-20 text-secondary"
    />

    <div class="media-body" :class="{ invalid: !isValid }">
      <div class="text-secondary mb-2">
        {{ label }} <span class="text-danger">*</span>
      </div>
      <div class="input-group input-group-sm border-0">
        <div
          class="
            d-flex
            flex-column
            form-select form-control form-control-sm
            bg-light
            shadow-none
            rounded-2
            field-require-validation
          "
          @click="onOpenModalSelector"
        >
          <template
            v-for="(participant, index) of selectedParticipants"
            :key="participant.userId"
          >
            <ParticipantAvatarNameItem
              class="pb-1"
              :participant-id="participant.userId"
            >
              <template v-slot:secondary>
                <feather-x
                  class="f-icon-20 text-secondary on-hover"
                  @click.stop="onRemoveParticipant(index)"
                />
              </template>
            </ParticipantAvatarNameItem>
          </template>
        </div>

        <ParticipantSelectorDialog
          ref="modalRef"
          v-model="selectedParticipants"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Modal } from "bootstrap";
import FeatherUserPlus from "@/icons/FeatherUserPlus";
import ParticipantSelectorDialog from "@/components/participant/ParticipantSelectorDialog";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";
import FeatherX from "@/icons/FeatherX";
export default {
  components: {
    FeatherX,
    ParticipantAvatarNameItem,
    ParticipantSelectorDialog,
    FeatherUserPlus,
  },
  props: ["modelValue", "label", "isValid"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let modalSelector;
    const selectedParticipants = ref(props.modelValue);
    const store = useStore();

    const systemUsers = computed(() =>
      store.getters.getSystemUsers.map((user) => {
        return { value: { ...user, isRole: false }, label: user.userName };
      })
    );

    const systemRoles = computed(() =>
      store.getters.getSystemRoles.map((role) => {
        return { value: { ...role, isRole: true }, label: role.name };
      })
    );

    const onOpenModalSelector = () => {
      modalSelector.toggle();
    };

    const onValueChange = (event) => {
      emit("update:modelValue", event);
    };

    const onRemoveParticipant = (index) => {
      selectedParticipants.value.splice(index, 1);
      onValueChange(selectedParticipants);
    };

    onMounted(() => {
      const modalEl = document.querySelector("#participantSelectorModal");
      modalSelector = Modal.getOrCreateInstance(modalEl);
    });

    return {
      selectedParticipants,
      systemUsers,
      systemRoles,
      onOpenModalSelector,
      onRemoveParticipant,
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
