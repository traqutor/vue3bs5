<template>
  <div
    class="vel-img-wrapper"
    style="
      cursor: grab;
      top: calc(50% + 0px);
      left: calc(50% + 0px);
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    "
  >
    <img
      v-if="item"
      id="imgAnnotateId"
      ref="imgRef"
      draggable="false"
      class="vel-img"
      :src="`data:svg;base64, ${item}`"
      crossorigin="anonymous"
      @click="showMarkerArea"
    />
    <div v-else class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import * as markerjs2 from "markerjs2";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  setup() {
    const isShowLayer = ref(true);
    const store = useStore();
    const selected = computed(() => store.getters.getMediaSelectedItem);
    const item = computed(
      () =>
        store.getters.getMediaItemById(selected.value.id) &&
        store.getters.getMediaItemById(selected.value.id).fileDataBase64
    );

    const showMarkerArea = () => {
      const markerArea = new markerjs2.MarkerArea(
        document.getElementById("imgAnnotateId")
      );
      // markerArea.settings.displayMode = 'popup';
      markerArea.addRenderEventListener((imgURL) => {
        this.$refs.imgRef.src = imgURL;
      });
      markerArea.show();
    };

    watch(
      () => selected.value,
      (value) => {
        store.dispatch(Actions.onGetItem, value.id);
      }
    );

    onMounted(() => {
      store.dispatch(Actions.onGetItem, selected.value.id);
    });

    return {
      item,
      isShowLayer,
      showMarkerArea,
    };
  },
};
</script>
