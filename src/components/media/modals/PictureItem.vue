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
    <div v-if="item" class="position-relative, w-100 h-100">
      <img
        id="imgAnnotateId"
        draggable="false"
        class="picture-over-picture"
        :src="`data:svg;base64, ${item.fileDataBase64}`"
        crossorigin="anonymous"
      />
      <template v-if="showLayerIndex">
        <img
          v-for="(layer, index) of item.layers"
          :key="index"
          draggable="false"
          class="picture-over-picture"
          :src="`data:svg;base64, ${layer.data}`"
          crossorigin="anonymous"
        />
      </template>
    </div>
    <div v-else class="spinner-border text-light" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";

export default {
  props: ["showLayerIndex"],
  emits: ["fileLoaded"],
  setup() {
    const store = useStore();
    const selected = computed(() => store.getters.getMediaSelectedItem);
    const item = computed(() =>
      store.getters.getMediaItemById(selected.value.id)
    );

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
    };
  },
};
</script>
<style>
.picture-over-picture {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 80vw;
  max-height: 80vh;
  display: block;
  box-shadow: 0 5px 20px 2px rgb(0 0 0 / 70%);
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
}
</style>
