<template>
  <figure class="image-figure mb-1 alert alert-success bg-media-type-6 p-0">
    <div class="image-figure-wrap">
      <div class="image-figure-inner">
        <a
          @click="index = 1"
          class="image-inner-content image-inner-img text-white"
        >
          <img src="../../../assets/files/video1.png" />
          <FeatherPlay class="f-icon-34 image-inner-icon" />
        </a>

        <figcaption>
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
          <div>12:48 <small>am</small> • Today</div>
        </figcaption>

        <div class="position-absolute position-bottom-right m-2 position-index">
          <span class="badge badge-pill bg-white font-weight-middle f-size-11"
            >0:11</span
          >
        </div>

        <MediaListItemDropDown :item="item" />
      </div>
    </div>
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>
  </figure>
</template>
<script>
import FeatherPlay from "@/icons/FeatherPlay";
import MediaListItemDropDown from "@/components/media/gridItem/MediaListItemDropDown";

export default {
  name: "VideoListItem",
  components: { MediaListItemDropDown, FeatherPlay },
  data: function () {
    return {
      items: [
        {
          title: "In nature, nothing is perfect and everything is perfect",
          description: "Photo by Lucas",
          thumb:
            "https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835",
          src: "https://www.youtube.com/watch?v=d0tU18Ybcvk",
        },
        {
          title: "A beautiful mountain view",
          description: "Photo by Facundo",
          src: "https://vimeo.com/43338103",
          thumb:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
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
