<template>
  <div
    v-if="mediaSelectedItems.length > 0 && shareGalleryItems.length > 0"
    class="d-flex"
  >
    <div
      class="
        d-flex
        flex-wrap
        list-media-group
        table-todo-list
        select-action-group
      "
    >
      <template v-for="item of mediaSelectedItems" :key="item.id">
        <ChatAttachmentItem :item="item" :is-select="true" />
      </template>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ChatAttachmentItem from "@/components/conversation/chat/input/ChatAttachmentItem";

export default {
  components: { ChatAttachmentItem },
  setup() {
    const store = useStore();
    const shareGalleryItems = computed(
      () => store.getters.getMediaShareGalleryItems
    );
    const mediaSelectedItems = computed(
      () => store.getters.getMediaSelectedItems
    );
    return {
      shareGalleryItems,
      mediaSelectedItems,
    };
  },
};
</script>
