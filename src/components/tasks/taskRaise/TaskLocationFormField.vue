<template>
  <div class="d-flex my-3 align-items-center">
    <feather-map-pin class="me-3 f-icon-20 text-secondary" />

    <div class="media-body" :class="{ invalid: !isValid }">
      <div class="text-secondary mb-2">
        {{ label }} <span class="text-danger">*</span>
      </div>
      <select
        class="form-select form-select-sm bg-light"
        :value="modelValue"
        @change="onUpdateValue"
      >
        <option
          v-for="item of locations"
          :selected="modelValue === item.title"
          :key="item.title"
        >
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FeatherMapPin from "@/icons/FeatherMapPin";

export default {
  components: { FeatherMapPin },
  props: [
    "modelValue",
    "name",
    "label",
    "isValid",
    "clearValidity",
    "exceptLocationId",
  ],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const store = useStore();
    const locations = computed(() => {
      return store.getters.getLocationExceptId(props.exceptLocationId);
    });

    const onUpdateValue = (event) => {
      props.clearValidity(props.name);
      console.log(event.target.value);
      emit("update:modelValue", event.target.value);
    };
    return { locations, onUpdateValue };
  },
};
</script>
