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
    @blur="onEdit"
    @input="onEdit"
    @keydown.enter="onEndEdit"
  ></div>
  <!-- start:: conversation users picker -->
  <!--  <button @click="addSpan">add</button>-->
  <!-- end:: conversation users picker -->
</template>
<script>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import useDebouncedRef from "@/services/debounc.services";
import { Dropdown } from "bootstrap";

export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],

  setup(props, context) {
    let emojiDropDownMenu;
    const divElement = ref();
    const store = useStore();
    const messageText = computed(() => store.getters.getMessageText);
    const text = useDebouncedRef(props.modelValue, 500);

    const addSpan = (event) => {
      event.stopPropagation();
      const src = divElement.value.innerHTML.concat(
        `<span contenteditable="false" class="px-1 fw-bold text-warning">@Span</span>&nbsp; `
      );

      divElement.value.innerHTML = src;
      text.value = src;
      // emojiDropDownMenu.show();
      console.log("emojiDropDownMenu", emojiDropDownMenu);
    };

    const onEdit = (evt) => {
      const src = evt.target.innerHTML;
      text.value = src;
      console.log("onEdit", text.value);
    };

    const onEndEdit = () => {
      console.log("onEndEdit", text);
      divElement.value.blur();
    };

    watch(text, (txt) => {
      context.emit("update:modelValue", txt);
    });

    watch(messageText, (value) => {
      if (!value) {
        divElement.value.innerHTML = "";
      }
    });

    onMounted(() => {
      emojiDropDownMenu = new Dropdown(
        document.getElementById("dropdownEmojiMenuButtonId")
      );
      var dropdownElementList = [].slice.call(
        document.querySelectorAll(".dropdown-toggle")
      );
      console.log("dropdownElementList", dropdownElementList);
    });

    return { addSpan, divElement, text, onEdit, onEndEdit };
  },
};
</script>

<style scoped>
.editable:empty:before {
  content: attr(data-placeholder);
}
</style>
