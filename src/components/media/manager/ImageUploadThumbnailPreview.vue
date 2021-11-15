<template>
  <div v-if="!isLoaded" class="media-grid-tile position-relative">
    <canvas ref="refCanvas" class="bound-canvas"></canvas>
    <div class="position-absolute position-top-right m-2">
      <div class="media-top-right-button" @click="onRemoveFile">
        <FeatherX class="f-icon-26 text-danger" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import {Actions, Mutations} from "@/store/enums/EnumTypes";
import { guidsGetOne } from "@/services/guids.service";
import FeatherX from "@/icons/FeatherX";

export default {
  components: { FeatherX },
  props: ["file", "index"],
  setup(props) {
    const refCanvas = ref();
    const progress = ref(0);
    const fileData = ref();
    const isUpLoading = ref();
    const isLoaded = ref();
    const store = useStore();

    const onRemoveFile = () => {
      store.commit(Mutations.removeTemporarySelectedFile, props.index);
    }

    const onFileUpload = () => {
      isUpLoading.value = true;
      const thumbnailData = refCanvas.value
        .toDataURL(props.file.type)
        .replace("data:", "")
        .replace(/^.+,/, "");

      const filePayload = {
        itemId: "",
        externalId: "string",
        subjectId: "",
        bodyMapData: "",
        blobType: "Picture",
        comment: "Comment ",
        file: {
          data: fileData.value,
          name: props.file.name,
          externalId: guidsGetOne(),
        },
        isGeneral: true,
        aspectRatio: 0,
        thumbnail: {
          data: thumbnailData,
          name: props.file.name,
          externalId: guidsGetOne(),
        },
        notes: [],
        layers: [],
      };

      store
        .dispatch(Actions.onStoreInGallery, filePayload)
        .then(() => {
          isUpLoading.value = false;
          isLoaded.value = true;
        })
        .catch(() => {
          isUpLoading.value = false;
        });
    };

    onMounted(() => {
      const reader = new FileReader();
      const ctx = refCanvas.value.getContext("2d");

      reader.onload = function (event) {
        const thumbnail = new Image();

        thumbnail.onload = function () {
          const w = 198;
          const h = 166;
          refCanvas.value.width = w;
          refCanvas.value.height = h;
          ctx.drawImage(thumbnail, 0, 0, w, h);
          refCanvas.value.toDataURL(props.file.type);
        };

        thumbnail.src = event.target.result;

        fileData.value = reader.result.replace("data:", "").replace(/^.+,/, "");
      };

      reader.onprogress = (data) => {
        if (data.lengthComputable) {
          progress.value = parseInt((data.loaded / data.total) * 100, 10);
          console.log(progress.value);
        }
      };

      reader.readAsDataURL(props.file);
    });

    return {
      refCanvas,
      progress,
      isUpLoading,
      isLoaded,
      onFileUpload,
      onRemoveFile,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/constans";
.image-load-button-loader {
  height: 48px;
  width: 48px;
  position: absolute;
  top: 0;
  right: 0;
}

.bound-canvas {
  height: 172px;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
}
</style>
