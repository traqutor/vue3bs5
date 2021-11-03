<template>
  <div
    class="
      list-media-item list-media-card
      on-hover
      position-relative
      mb-3
      hover-action-group
    "
    @click="onFileUpload"
  >
    <canvas ref="refCanvas" class="image-load-thumbnail"></canvas>
    <div class="progress me-2">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        :style="{ width: `${progress}%` }"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/EnumTypes";
import { guidsGetOne } from "@/services/guids.service";

export default {
  props: ["file"],
  setup(props) {
    const refCanvas = ref();
    const progress = ref(0);
    const fileData = ref();
    const store = useStore();

    const onFileUpload = () => {
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

      store.dispatch(Actions.onStoreInGallery, filePayload);
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
      onFileUpload,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/constans";
.image-load-thumbnail {
  width: 198px;
  height: 166px;
  background: $grey-box-shadow;
}
</style>
