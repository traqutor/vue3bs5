<template>
  <figure class="image-figure mb-1 alert alert-wait bg-media-type-5 p-0">
    <div class="image-figure-wrap">
      <div class="image-figure-inner">
        <a
          @click="index = 0"
          class="image-inner-content image-inner-img text-white"
        >
          <img :src="`data:image/png;base64,${item.dataBase64}`" />
          <FeatherZoomIn />
        </a>

        <figcaption>
          <h6>{{ item.name }}</h6>
          <div>
            {{ timeHhMmaDotDdddFormat(item.created) }}
          </div>
        </figcaption>

        <MediaListItemDropDown :item="item" />
      </div>
    </div>
  </figure>
</template>
<script>
import FeatherZoomIn from "@/icons/FeatherZoomIn";
import MediaListItemDropDown from "@/components/media/gridItem/MediaListItemDropDown";
import { timeHhMmaDotDdddFormat } from "@/services/datetime.service";

export default {
  name: "PhotoListItem",
  components: { MediaListItemDropDown, FeatherZoomIn },
  setup() {
    return {
      timeHhMmaDotDdddFormat,
    };
  },
  data: function () {
    return {
      items: [
        {
          title: "In nature, nothing is perfect and everything is perfect",
          description: "Photo by Lucas",
          src: "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
        },
        {
          title: "a beautiful mountain view",
          description: "Photo by Facundo",
          src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        },
      ],
      index: null,
    };
  },
  props: {
    item: null,
  },
};
</script>
