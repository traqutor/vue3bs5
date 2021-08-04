<template>
  <div
    contenteditable="true"
    class="
      form-control
      dialog-input-textarea
      bg-transparent
      border-0
      shadow-none
      ps-2
      editable
    "
    ref="text"
    data-placeholder="Type a message"
    @blur="onEdit"
    @input="onEdit"
    @keydown.enter="onEndEdit"
  ></div>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],

  setup(props, context) {
    const text = ref(props.modelValue);

    const onEdit = (evt) => {
      const src = evt.target.innerHTML;
      text.value = src;
      context.emit("update:modelValue", text.value);
    };

    const onEndEdit = () => {
      console.log("onEndEdit", text);
      // this.$el.querySelector(".editme").blur();
    };

    return { onEdit, onEndEdit };
  },
};
</script>
<style scoped>
.editable:empty:before {
  content: attr(data-placeholder);
}
</style>
