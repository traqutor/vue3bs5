<template>
  <div
    ref="divElement"
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
    data-placeholder="Type a message"
    @input="onUpdate"
    @blur="onUpdate"
    @paste="onPaste"
    @keydown.enter="onEnterKey"
  ></div>
  <!-- start:: conversation users picker -->
  <!--    <button @click="addSpan">add</button>-->
  <!-- end:: conversation users picker -->
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  props: ["modelValue", "isUserTypingNotify"],
  emits: ["update:modelValue", "submitContent"],

  setup(props, { emit }) {
    const store = useStore();
    const divElement = ref();
    const toThrottle = ref(false);

    const onUpdate = (event) => {
      onUserIsTyping();
      emit("update:modelValue", event.target.innerHTML);
    };

    const onPaste = (event) => {
      event.preventDefault();
      let text = event.clipboardData.getData("text/plain");
      window.document.execCommand("insertText", false, text);
    };

    const onEnterKey = (event) => {
      if (event.shiftKey === true && event.key === "Enter") {
        divElement.value.focus();
      } else {
        divElement.value.blur();
        event.preventDefault();
        emit("submitContent", event);
      }
    };

    const onUserIsTyping = () => {
      if (props.isUserTypingNotify) {
        if (!toThrottle.value) {
          toThrottle.value = true;
          store.dispatch(Actions.onUserIsTyping);
          setTimeout(() => {
            toThrottle.value = false;
          }, 800);
        }
      }
    };

    watch(
      () => props.modelValue,
      (text) => {
        if (text) {
          onUserIsTyping();
        }
      }
    );

    return { divElement, onUpdate, onPaste, onEnterKey };
  },
};
</script>

<style scoped>
.editable:empty:before {
  content: attr(data-placeholder);
}
</style>
