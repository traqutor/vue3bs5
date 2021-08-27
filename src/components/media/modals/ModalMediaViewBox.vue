<template>
  <!-- template for the modal component -->
  <transition name="modal">
    <div v-if="showModal" class="modal-mask">
      <button
        class="fancybox-button position-absolute position-right m-2"
        title="Close"
        @click="onCloseModal"
      >
        <feather-x class="f-icon-24" />
      </button>

      <div class="vel-img-wrapper" style="cursor: grab; top: calc(50% + 0px); left: calc(50% + 0px); transform: translate(-50%, -50%) scale(1) rotate(0deg);"><img draggable="false" class="vel-img" src="data:image/jpeg;base64, "></div>
    </div>
  </transition>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
import FeatherX from "@/icons/FeatherX";

export default {
  components: { FeatherX },
  setup() {
    const store = useStore();

    const showModal = computed(() => store.getters.getIsLightBoxVisible);
    const index = computed(() => store.getters.getMediaIndex);
    const files = computed(() =>
      store.getters.getMediaItems.map((item) => {
        return {
          src: `data:image/jpeg;base64, ${item.fileDataBase64}`,
          title: item.fileName,
        };
      })
    );

    const onCloseModal = () => {
      store.commit(Mutations.setIsLightBoxVisible, false);
    };

    return {
      showModal,
      index,
      files,
      onCloseModal,
    };
  },
};
</script>
<style scoped>
.modal-mask {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: table;
  background: rgba(30, 30, 30, 0.9);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  background-color: rgba(0, 0, 0, 0.33);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
}

.fancybox-button,
.fancybox-button:link,
.fancybox-button:visited {
  color: #ccc;
}
</style>
