<template>
  <div>
    <input
      ref="buttonClickFileSelectorInput"
      style="display: none"
      type="file"
      accept="image/*"
      multiple
      @change="onFileSelected"
    />

    <Button v-if="route.path.toLowerCase().includes('task')" @click="onNewTask">
      <FeatherPlusCircle class="me-2" /> New task
    </Button>
    <Button
      v-else-if="route.path.includes('conversation')"
      @click="onNewConversation"
    >
      <FeatherPlusCircle class="me-2" /> New message
    </Button>
    <Button v-if="route.path.includes('media')" @click="onNewMediaFile">
      <FeatherPlusCircle class="me-2" /> New media file
    </Button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import Button from "@/components/common/buttons/Button";
import FeatherPlusCircle from "@/icons/FeatherPlusCircle";
import { Mutations } from "@/store/enums/EnumTypes";
import { CONVERSATION_VIEW_MODES } from "@/const";
export default {
  components: { FeatherPlusCircle, Button },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const buttonClickFileSelectorInput = ref();

    const onFileSelected = (event) => {
      store.commit(
        Mutations.setTemporarySelectedFilesToUpload,
        event.target.files
      );
    };

    const onNewMediaFile = () => {
      buttonClickFileSelectorInput.value.click();
    };

    const onNewTask = () => {
      router.push({ path: "/tasks/taskRaise" });
    };

    const onNewConversation = () => {
      store.commit(
        Mutations.setConversationViewMode,
        CONVERSATION_VIEW_MODES.NEW
      );
    };

    return {
      buttonClickFileSelectorInput,
      route,
      onFileSelected,
      onNewMediaFile,
      onNewTask,
      onNewConversation,
    };
  },
};
</script>
