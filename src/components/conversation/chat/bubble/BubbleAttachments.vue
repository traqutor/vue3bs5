<template>
  <div class="image-figure-grid mb-2">
    <template v-for="(thumb, index) of item.thumbnails" :key="thumb.id">
      <ChatAttachmentItem
        :thumbnail="thumb"
        @click="onShowAttachments(index)"
      />
    </template>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";
import ChatAttachmentItem from "@/components/conversation/chat/input/ChatAttachmentItem";
export default {
  components: { ChatAttachmentItem },
  props: ["item"],
  setup(props) {
    const store = useStore();
    const onShowAttachments = (index) => {
      store.dispatch(Actions.onShowMessageAttachments, {
        message: props.item,
        index,
      });
    };
    return { onShowAttachments };
  },
};
</script>
