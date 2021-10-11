<template>
  <div class="d-flex mt-3">
    <feather-clock class="me-3 align-self-center f-icon-20 text-secondary" />

    <div class="media-body" :class="{ invalid: !isValid }">
      <div class="text-secondary mb-2">Due In</div>
      <div class="d-flex">
        <template v-for="(option, index) of predefinedOptions" :key="option.id">
          <button
            v-if="option.isButton"
            @click="(e) => onDueInPreSelect(e, option, index)"
            type="button btn-small"
            class="btn me-1"
            :class="
              option.isSelected ? 'btn-secondary' : 'btn-outline-secondary'
            "
          >
            {{ option.label }}
          </button>

          <div v-else @click="(e) => onDueInPreSelect(e, option, index)">
            <DateButton
              :is-active="option.isSelected"
              :button-classes="
                option.isSelected ? 'btn-secondary' : 'btn-outline-secondary'
              "
              v-model="dueDate"
            ></DateButton>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import moment from "moment";
import FeatherClock from "@/icons/FeatherClock";
import DateButton from "@/components/common/dateTime/DateButton";

export default {
  props: ["modelValue", "isValid", "name", "clearValidity"],
  emits: ["update:modelValue"],
  components: {
    DateButton,
    FeatherClock,
  },
  setup(props, { emit }) {
    const nDate = ref(new Date());
    const dueDate = ref(props.modelValue);
    const timezone = ref("");

    const predefinedOptions = ref([
      { id: 0, value: null, label: "N/A", isSelected: true, isButton: true },
      { id: 1, value: 15, label: "15 min", isSelected: false, isButton: true },
      { id: 2, value: 30, label: "30 min", isSelected: false, isButton: true },
      { id: 3, value: 60, label: "60 min", isSelected: false, isButton: true },
      { id: 4, value: moment().toDate(), label: "Custom", isSelected: false },
    ]);

    const onDueInPreSelect = (event, option, index) => {
      predefinedOptions.value.forEach((item) => (item.isSelected = false));
      predefinedOptions.value[index].isSelected = true;

      if (option.isButton) {
        event.preventDefault();
        const due = option.value
          ? moment().add(option.value, "minutes").toDate()
          : null;
        dueDate.value = due;
      }
    };

    watch(dueDate, (value) => {
      props.clearValidity(props.name);
      emit("update:modelValue", value);
    });

    return {
      predefinedOptions,
      nDate,
      dueDate,
      onDueInPreSelect,
      timezone,
      moment,
    };
  },
};
</script>
