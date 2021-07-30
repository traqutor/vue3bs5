<template>
  <figure class="image-figure mb-1 alert alert-primary bg-media-type-2 p-0">
    <div class="image-figure-wrap">
      <div class="image-figure-inner">
        <div class="image-inner-content">
          <div class="flex-fill position-relative">
            <div
              class="
                image-inner-content image-inner-group
                has-inner-icon
                px-3
                image-inner-content
                overflow-hidden
              "
            >
              <img src="../../../assets/files/voice.svg" class="w-75" />

              <figure
                class="
                  avatar avatar-lg avatar-custom
                  text-white
                  bg-media-1
                  image-inner-icon
                  position-index
                "
              >
                <FeatherPlay />
              </figure>
            </div>
          </div>
        </div>

        <div class="position-absolute position-bottom-right m-2">
          <span class="badge badge-pill bg-white font-weight-middle f-size-11"
            >02:30</span
          >
        </div>

        <MediaListItemDropDown :item="item" />
      </div>
    </div>
  </figure>
</template>
<script>
import FeatherPlay from "@/icons/FeatherPlay";
import MediaListItemDropDown from "@/components/media/gridItem/MediaListItemDropDown";
export default {
  name: "AudioListItem",
  props: {
    item: null,
  },
  components: {
    MediaListItemDropDown,
    FeatherPlay,
  },
};
</script>
