<template>
  <div class="row section-widget position-relative flex-fill mt-2">
    <MediaTypesList></MediaTypesList>
    <MediaContainer></MediaContainer>
  </div>
</template>
<script>
import MediaTypesList from "@/components/media/MediaTypesList";
import MediaContainer from "@/components/media/MediaContainer";
export default {
  components: {MediaContainer, MediaTypesList },
};
</script>
