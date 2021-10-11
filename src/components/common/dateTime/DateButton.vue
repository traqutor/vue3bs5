<template>
  <v-date-picker
    mode="dateTime"
    is24hr
    class="inline-block h-full"
    v-model="lDate"
    :min-date="nowDate"
    :popover="{ placement: 'bottom-end' }"
  >
    <template #default="{ inputValue, togglePopover }">
      <div class="flex">
        <button
          class="btn"
          :class="buttonClasses"
          ref="button"
          @click.prevent="togglePopover()"
        >
          {{ isActive && inputValue ? inputValue : "Custom" }}
        </button>
      </div>
    </template>
  </v-date-picker>
</template>
<script>
import { ref, watch, onMounted } from "vue";
import moment from "moment";

export default {
  props: ["modelValue", "buttonClasses", "isActive"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const nowDate = ref(moment().toDate());
    const lDate = ref();

    const onSetDate = () => {
      lDate.value = moment().toDate();
    };

    watch(lDate, (value) => {
      emit("update:modelValue", value);
    });

    watch(
      () => props.modelValue,
      (date) => {
        lDate.value = date;
      }
    );

    onMounted(() => {
      if (props.modelValue) {
        lDate.value = props.modelValue;
      }
    });

    return {
      nowDate,
      lDate,
      onSetDate,
    };
  },
};
</script>
