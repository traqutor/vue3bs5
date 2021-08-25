<template>
  <vue-easy-lightbox
    scrollDisabled
    escDisabled
    moveDisabled
    :visible="visible"
    :imgs="files"
    :index="index"
    @hide="handleHide"
  ></vue-easy-lightbox>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";

export default {
  setup() {
    const store = useStore();

    const visible = computed(() => store.getters.getIsLightBoxVisible);
    const index = computed(() => store.getters.getMediaIndex);
    const files = computed(() =>
      store.getters.getMediaItems.map((item) => {
        return {
          src: `data:image/jpeg;base64, ${item.fileDataBase64}`,
          title: item.fileName,
        };
      })
    );

    const handleHide = () => {
      store.commit(Mutations.setIsLightBoxVisible, false);
    };

    return {
      visible,
      index,
      files,
      handleHide,
    };
  },
};
</script>
