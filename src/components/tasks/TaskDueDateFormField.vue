<template>
  <div class="d-flex mt-3">
    <feather-clock class="me-3 align-self-center f-icon-20 text-secondary" />

    <div class="media-body" :class="{ invalid: !isValid }">
      <div class="text-secondary mb-2">Due Time</div>
      <div class="input-group input-group-sm border-0">
        <date-picker v-model="dueDate" mode="dateTime">
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="d-flex form-control form-control-sm bg-light shadow-none"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </date-picker>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { DatePicker } from "v-calendar";
import FeatherClock from "@/icons/FeatherClock";

export default {
  props: ["modelValue", "isValid"],
  emits: ["update:modelValue"],
  components: {
    DatePicker,
    FeatherClock,
  },
  setup(props, { emit }) {
    const dueDate = ref(props.modelValue);
    const timezone = ref("");

    watch(dueDate, (value) => {
      console.log(value);
      emit("update:modelValue", value);
    });
    return {
      dueDate,
      timezone,
    };
  },
};
</script>
