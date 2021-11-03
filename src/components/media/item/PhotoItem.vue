<template>
  <div
    @click.self="onItemClick"
    class="bound-image"
    :style="{
      'background-image': `url(data:image/png;base64,${item.dataBase64})`,
    }"
  ></div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  props: {
    item: null,
  },
  setup(props) {
    const store = useStore();

    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    const onItemClick = () => {
      store.dispatch(Actions.onShowMediaFilesInLightBox, {
        media: thumbnails.value,
        item: props.item,
      });
    };

    return {
      onItemClick,
    };
  },
};
</script>
<style scoped lang="scss">
@import "src/assets/scss/constans";
.bound-image {
  max-width: 100%;
  background-color: $grey-empty;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  &:hover {
    border-radius: 0;
  }
}
</style>
