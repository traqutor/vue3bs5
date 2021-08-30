<template>
  <div
    v-if="mediaSelectedItems.length > 0 && shareGalleryItems.length > 0"
    class="d-flex border-top border-secondary-light mt-2 pt-2"
  >
    <button
      class="btn text-secondary border-0 shadow-none me-2"
      data-toggle="collapse"
      data-target="#chat-dialog-addmedia"
      aria-expanded="true"
      aria-controls="chat-dialog-addmedia"
    >
      <feather-x class="f-icon-24" />
    </button>
    <perfect-scrollbar>
      <div class="d-flex flex-nowrap mb-2">
        <template v-for="item of mediaSelectedItems" :key="item.id">
          <div class="me-25" style="max-height: 86px; max-width: 154px">
            <ChatAttachmentItem :thumbnail="item" />
          </div>
        </template>
      </div>
    </perfect-scrollbar>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import ChatAttachmentItem from "@/components/conversation/chat/input/ChatAttachmentItem";
import FeatherX from "@/icons/FeatherX";

export default {
  components: { FeatherX, ChatAttachmentItem },
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
