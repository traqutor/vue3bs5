<template>
  <div class="border-top border-secondary-light f-col-2x my-3"></div>

  <!-- start:: collapse operations -->
  <div
    data-bs-toggle="collapse"
    data-bs-target="#collapseTypeOperations"
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
    Operation names
    <feather-chevron-down class="text-secondary" />
  </div>
  <div class="collapse" id="collapseTypeOperations">
    <div
      class="d-flex mt-3"
      v-for="(action, index) of taskType.requiredActions"
      :key="action.id"
    >
      <div class="d-flex align-items-center w-100 f-col-2x">
        <feather-phone
          class="me-3 align-self-center f-icon-20 text-secondary"
        />
        <div class="media-body">
          <div class="text-secondary mb-2">{{ action.title }}</div>
        </div>
        <feather-move class="f-icon-18 cursor-move" />
        <feather-trash2
          class="f-icon-18 mx-3 on-hover text-danger"
          @click="onRemoveActionFromType(index)"
        />
      </div>
    </div>

    <!-- start:: add required actions dropdown-->
    <div class="my-3 text-right f-col-2x dropup">
      <span class="text-primary on-hover" data-bs-toggle="dropdown">
        <div
          v-if="isAddingAction"
          class="spinner-border spinner-border-sm"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <span>
          <feather-plus class="f-icon-18 me-1" />
          <span>Add action</span>
        </span>
      </span>
      <ul class="dropdown-menu">
        <li v-for="action of requiredActions" :key="action.id">
          <button
            class="dropdown-item"
            type="button"
            :disabled="
              taskType.requiredActions.find(
                (required) => required.id === action.id
              )
            "
            @click="onAddActionToType(action)"
          >
            {{ action.title }}
          </button>
        </li>
      </ul>
    </div>
    <!-- end:: add required actions dropdown-->
  </div>
  <!-- end:: collapse operations -->
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
    const isAddingAction = ref(false);

    const store = useStore();
    const requiredActions = computed(() => store.getters.getRequiredActions);

    const onAddActionToType = (action) => {
      isAddingAction.value = true;
      const form = { ...props.taskType };
      form.requiredActions.push(action);
      store
        .dispatch(Actions.onAddRequiredActionsToType, {
          typeId: +props.taskType.id,
          ids: props.taskType.requiredActions.map((action) => action.id),
        })
        .then(() => {
          isAddingAction.value = false;
        })
        .catch(() => {
          isAddingAction.value = false;
        });
    };

    const onRemoveActionFromType = (index) => {
      isAddingAction.value = true;
      const form = { ...props.taskType };
      form.requiredActions.splice(index, 1);
      store
        .dispatch(Actions.onRemoveRequiredActionsFromType, {
          typeId: +props.taskType.id,
          ids: props.taskType.requiredActions.map((action) => action.id),
        })
        .then(() => {
          isAddingAction.value = false;
        })
        .catch(() => {
          isAddingAction.value = false;
        });
    };

    return {
      isAddingAction,
      requiredActions,
      onAddActionToType,
      onRemoveActionFromType,
    };
  },
};
</script>
