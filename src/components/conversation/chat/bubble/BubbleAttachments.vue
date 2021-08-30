<template>
  <div class="image-figure-grid mb-2">
    <template v-for="(thumb) of item.thumbnails" :key="thumb.id">
      <ChatAttachmentItem
        :thumbnail="thumb"
        @click="onShowAttachments(thumb)"
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
    const onShowAttachments = (item) => {
      store.dispatch(Actions.onShowMediaFilesInLightBox, {
        media: props.item.thumbnails,
        item,
      });
    };
    return { onShowAttachments };
  },
};
</script>
