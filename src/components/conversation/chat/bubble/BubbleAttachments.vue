<template>
  <div
    class="
      d-flex
      flex-wrap
      list-media-group
      table-todo-list
      select-action-group
    "
  >
    <template v-for="thumb of item.thumbnails" :key="thumb.id">
      <ChatAttachmentItem :item="thumb" />
    </template>
  </div>
</template>
<script>
import ChatAttachmentItem from "@/components/conversation/chat/input/ChatAttachmentItem";
export default {
  components: { ChatAttachmentItem },
  props: ["item"],
  setup() {
    return {};
  },
};
</script>
