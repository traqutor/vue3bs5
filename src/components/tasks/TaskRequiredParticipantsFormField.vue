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
        <Multiselect
          class="multiselect-blue"
          v-model="fieldValue"
          @change="onValueChange"
          mode="tags"
          :closeOnSelect="false"
          :searchable="true"
          :createTag="true"
          :groups="true"
          :options="[
            {
              label: 'Users',
              options: systemUsers,
            },
            {
              label: 'Roles',
              options: systemRoles,
            },
          ]"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import Multiselect from "@vueform/multiselect";
import FeatherUserPlus from "@/icons/FeatherUserPlus";
import { useStore } from "vuex";
export default {
  components: { FeatherUserPlus, Multiselect },
  props: ["modelValue", "label", "isValid"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const fieldValue = ref(props.modelValue);
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
    const onValueChange = (event) => {
      console.log(event);
      emit("update:modelValue", event);
    };

    return { fieldValue, systemUsers, systemRoles, onValueChange };
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
