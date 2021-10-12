<template>
  <textarea
    ref="areaRef"
    class="
      form-control
      f-size-14
      bg-transparent
      border-0
      shadow-none
      ps-2
      no-resize
    "
    rows="1"
    placeholder="Type a message ..."
    v-model="content"
    @input="onUpdate"
    @keydown.enter.prevent="onEnterKey"
  ></textarea>
</template>
<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  props: ["modelValue", "isUserTypingNotify"],
  emits: ["update:modelValue", "submitContent"],
  setup(props, { emit }) {
    const store = useStore();
    const content = ref(props.modelValue);
    const areaRef = ref(null);
    const toThrottle = ref(false);

    const onUpdate = (event) => {
      onUserIsTyping();
      emit("update:modelValue", event.target.value);
    };

    const onEnterKey = (event) => {
      if (event.key === "Enter" && event.shiftKey === true) {
        content.value = content.value + "\n";
        resizeTextArea();
      } else {
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

    const resizeTextArea = () => {
      if (content.value.length === 0) return;
      areaRef.value.rows = 1;
      const styles = window.getComputedStyle(areaRef.value);
      const paddingTop = parseInt(styles.paddingTop);
      const paddingBottom = parseInt(styles.paddingBottom);
      const padding = paddingTop + paddingBottom;
      const initialHeight =
        (parseInt(styles.height) - padding) / areaRef.value.rows;
      const scrollHeight = areaRef.value.scrollHeight - padding;
      const newRows = Math.ceil(scrollHeight / initialHeight);
      areaRef.value.rows = newRows;
    };

    watch(
      () => props.modelValue,
      (text) => {
        if (text) {
          onUserIsTyping();
        }
        content.value = text;
        resizeTextArea();
      }
    );

    return {
      areaRef,
      content,
      onUpdate,
      onEnterKey,
    };
  },
};
</script>
