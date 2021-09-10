<template>
  <div class="border-top border-secondary-light f-col-2x my-3"></div>

  <!-- start:: collapse custom fields -->
  <div
    data-bs-toggle="collapse"
    data-bs-target="#collapseTypeCustomFields"
    aria-expanded="true"
    class="
      d-flex
      align-self-center
      justify-content-between
      text-primary
      on-hover
      f-size-15
      font-weight-middle
      f-col-2x
    "
  >
    Custom Fields
    <feather-chevron-down class="text-secondary" />
  </div>
  <div class="collapse" id="collapseTypeCustomFields">
    <div
      class="d-flex mt-3"
      v-for="(field, index) of taskType.customFields"
      :key="field.id"
    >
      <div class="d-flex align-items-center w-100 f-col-2x">
        <feather-phone
          class="me-3 align-self-center f-icon-20 text-secondary"
        />
        <div class="media-body">
          <div class="text-secondary mb-2">{{ field.title }}</div>
        </div>
        <feather-move class="f-icon-18 cursor-move" />

        <feather-trash2
          class="f-icon-18 mx-3 text-danger"
          :disabled="isAddingField"
          @click="onRemoveFieldFromType(index)"
        />
      </div>
    </div>

    <!-- start:: add custom fields dropdown-->
    <div class="my-3 text-right f-col-2x dropup">
      <span class="text-primary on-hover" data-bs-toggle="dropdown">
        <div
          v-if="isAddingField"
          class="spinner-border spinner-border-sm"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <span>
          <feather-plus class="f-icon-18 me-1" />
          <span>Add field</span>
        </span></span
      >

      <ul class="dropdown-menu">
        <li v-for="field of customFields" :key="field.id">
          <button
            class="dropdown-item"
            type="button"
            :disabled="
              taskType.customFields.find((custom) => custom.id === field.id)
            "
            @click="onAddFieldToType(field)"
          >
            {{ field.title }}
          </button>
        </li>
      </ul>
    </div>
    <!-- end:: add custom fields dropdown-->
  </div>
  <!-- end:: collapse custom fields -->
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";
import FeatherPlus from "@/icons/FeatherPlus";
import FeatherTrash2 from "@/icons/FeatherTrash2";
import FeatherMove from "@/icons/FeatherMove";
import FeatherPhone from "@/icons/FeatherPhone";
import FeatherChevronDown from "@/icons/FeatherChevronDown";

export default {
  components: {
    FeatherChevronDown,
    FeatherPhone,
    FeatherMove,
    FeatherTrash2,
    FeatherPlus,
  },
  props: ["taskType"],

  setup(props) {
    const isAddingField = ref(false);

    const store = useStore();
    const customFields = computed(() => store.getters.getCustomFields);

    const onAddFieldToType = (field) => {
      isAddingField.value = true;
      const form = { ...props.taskType };
      form.customFields.push(field);
      store
        .dispatch(Actions.onAddCustomFieldsToType, {
          typeId: +props.taskType.id,
          ids: props.taskType.customFields.map((field) => field.id),
        })
        .then(() => {
          isAddingField.value = false;
        })
        .catch(() => {
          isAddingField.value = false;
        });
    };

    const onRemoveFieldFromType = (index) => {
      const form = { ...props.taskType };
      form.customFields.splice(index, 1);
      store
        .dispatch(Actions.onRemoveCustomFieldsFromType, {
          typeId: +props.taskType.id,
          ids: props.taskType.customFields.map((field) => field.id),
        })
        .then(() => {
          isAddingField.value = false;
        })
        .catch(() => {
          isAddingField.value = false;
        });
    };

    return {
      isAddingField,
      customFields,
      onAddFieldToType,
      onRemoveFieldFromType,
    };
  },
};
</script>
