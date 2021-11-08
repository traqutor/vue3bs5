<template>
  <!-- template for the modal component -->
  <transition name="modal">
    <div v-if="showModal" class="modal-box">
      <div class="modal-thumbs--drawer" :style="modalBoxDrawerStyle">
        <div class="modal-box--list">
          <button
            type="button"
            class="modal-box--thumb modal-box--button"
            v-for="(thumb, index) of thumbnailsOfViewFiles"
            :key="index"
            @click="onSelectPicture(thumb)"
          >
            <!---->
            <img :src="`data:image/jpeg;base64, ${thumb.dataBase64}`" alt="" />
          </button>
        </div>
      </div>

      <div class="modal-box--inner" :style="modalBoxInnerStyle">
        <div class="d-flex align-items-center justify-content-center mt-1">
          <button @click="onToggleShowLayers" class="fancybox-button mr-3">
            <feather-eye-open v-if="isShowLayer" class="f-icon-24" />
            <feather-eye-off v-else class="f-icon-24" />
          </button>

          <button class="fancybox-button" title="Zoom" disabled="">
            <feather-zoom-in class="f-icon-24" />
          </button>

          <button
            class="fancybox-button"
            title="Thumbnails"
            @click="onToggleGalleryView"
          >
            <feather-grid class="f-icon-24" />
          </button>

          <button
            class="fancybox-button position-absolute position-right mr-2"
            title="Close"
            @click="onCloseModal"
          >
            <feather-x class="f-icon-24" />
          </button>
        </div>

        <div class="fancybox-navigation">
          <button
            v-if="isPreviousPicture"
            class="fancybox-button fancybox-button--arrow_left"
            title="Previous"
            @click="onPreviousPicture"
          >
            <feather-arrow-left class="f-icon-24" />
          </button>

          <button
            v-if="isNextPicture"
            class="fancybox-button fancybox-button--arrow_right"
            title="Next"
            @click="onNextPicture"
          >
            <feather-arrow-right class="f-icon-24" />
          </button>
        </div>

        <PictureItem :showLayerIndex="isShowLayer" />
      </div>
    </div>
  </transition>
</template>
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";
import PictureItem from "@/components/media/modals/PictureItem";
import FeatherZoomIn from "@/icons/FeatherZoomIn";
import FeatherGrid from "@/icons/FeatherGrid";
import FeatherEyeOpen from "@/icons/FeatherEyeOpen";
import FeatherEyeOff from "@/icons/FeatherEyeOff";
import FeatherArrowLeft from "@/icons/FeatherArrowLeft";
import FeatherArrowRight from "@/icons/FeatherArrowRight";

export default {
  components: {
    FeatherArrowRight,
    FeatherArrowLeft,
    FeatherEyeOff,
    FeatherEyeOpen,
    FeatherGrid,
    FeatherZoomIn,
    PictureItem,
    FeatherX,
  },
  setup() {
    const store = useStore();

    const isGalleryVisible = ref(true);
    const isShowLayer = ref(true);

    const thumbnailsOfViewFiles = computed(
      () => store.getters.getLightBoxViewFiles
    );

    const selectedItem = computed(() => store.getters.getMediaSelectedItem);

    const currentIndex = computed(() =>
      store.getters.getLightBoxViewFiles.findIndex(
        (item) => item.id === selectedItem.value.id
      )
    );

    const isPreviousPicture = computed(() => {
      return thumbnailsOfViewFiles.value.length >= 1 && currentIndex.value > 0;
    });

    const isNextPicture = computed(() => {
      return (
        thumbnailsOfViewFiles.value.length >= 1 &&
        currentIndex.value < thumbnailsOfViewFiles.value.length - 1
      );
    });

    const showModal = computed(() => store.getters.getIsLightBoxVisible);

    const modalBoxInnerStyle = computed(() => {
      const value =
        isGalleryVisible.value && thumbnailsOfViewFiles.value.length > 0
          ? 212
          : 0;
      return {
        right: `${value}px`,
      };
    });

    const modalBoxDrawerStyle = computed(() => {
      const value =
        isGalleryVisible.value && thumbnailsOfViewFiles.value.length > 0
          ? 0
          : -212;
      return {
        right: `${value}px`,
      };
    });

    const onSelectPicture = (item) => {
      store.commit(Mutations.setMediaSelectedItem, item);
    };

    const onPreviousPicture = () => {
      const item = thumbnailsOfViewFiles.value[currentIndex.value - 1];
      store.commit(Mutations.setMediaSelectedItem, item);
    };

    const onNextPicture = () => {
      const item = thumbnailsOfViewFiles.value[currentIndex.value + 1];
      store.commit(Mutations.setMediaSelectedItem, item);
    };

    const onCloseModal = () => {
      store.commit(Mutations.setIsLightBoxVisible, false);
    };

    const onToggleGalleryView = () => {
      isGalleryVisible.value = !isGalleryVisible.value;
    };

    const onToggleShowLayers = () => {
      isShowLayer.value = !isShowLayer.value;
    };

    return {
      showModal,
      thumbnailsOfViewFiles,
      modalBoxInnerStyle,
      modalBoxDrawerStyle,
      isShowLayer,
      isPreviousPicture,
      isNextPicture,
      onToggleGalleryView,
      onToggleShowLayers,
      onSelectPicture,
      onPreviousPicture,
      onNextPicture,
      onCloseModal,
    };
  },
};
</script>
<style scoped>
.modal-box {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background: rgba(30, 30, 30, 0.9);
  transition: opacity 0.3s ease;
}

.modal-thumbs--drawer {
  position: absolute;
  height: 100vh;
  width: 212px;
  overflow-y: auto;
  right: 0px;
  top: 0;
  overflow-x: hidden;
  transition: none;
  background-color: #ddd;
}

.modal-box--inner {
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  -webkit-transition: none;
  transition: none;
}

.modal-box--list {
  display: flex;
  flex-wrap: wrap;
  padding: 2px 0 2px 2px;
}

.modal-box--thumb {
  background-color: #000;
  width: calc(50% - 2px);
  margin-right: 2px;
  margin-bottom: 2px;
  display: block;
  height: 75px;
  position: relative;
  padding: 0;
}

.modal-box--button {
  background: 0 0;
  border: none;
  cursor: pointer;
  outline: 0;
}

.modal-box--thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/**

*/
.fancybox-button {
  background: rgba(30, 30, 30, 0.6);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  height: 54px;
  margin: 0;
  padding: 12px;
  position: relative;
  transition: color 0.2s;
  vertical-align: top;
  visibility: inherit;
  width: 54px;
  font-weight: bold;
}

.fancybox-button,
.fancybox-button:link,
.fancybox-button:visited {
  color: #ccc;
}

.fancybox-navigation .fancybox-button {
  height: 64px;
  width: 64px;
  position: absolute;
  top: calc(50% - 50px);
}

.fancybox-navigation .fancybox-button--arrow_left {
  left: 0;
}

.fancybox-navigation .fancybox-button--arrow_right {
  right: 0;
}
</style>
