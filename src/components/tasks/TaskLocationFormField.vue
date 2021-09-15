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
          :selected="modelValue === item"
          :key="item"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import FeatherMapPin from "@/icons/FeatherMapPin";
export default {
  components: { FeatherMapPin },
  props: ["modelValue", "label", "isValid"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const locations = computed(() => {
      return ["Room IPC.001", "Room IPC.002", "Room IPC.003", "Room IPC.004"];
    });

    const onUpdateValue = (event) => {
      console.log(event.target.value);
      emit("update:modelValue", event.target.value);
    };
    return { locations, onUpdateValue };
  },
};
</script>
