<template>
  <div @wheel="onScrollZoom">
    <div ref="locationPanZoomRef" id="panzoom-element">
      <Plan3dIso></Plan3dIso>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PlanAlexa3d from "@/components/locations/plans/PlanAlexa3d";
import Panzoom from "@panzoom/panzoom";
import Plan3dIso from "@/components/locations/plans/Plan3dIso";
export default {
  components: {Plan3dIso, PlanAlexa3d },
  setup() {
    const locationPanZoomRef = ref();
    let panzoom = null;

    const onScrollZoom = (e) => {
      panzoom.zoomWithWheel(e);
    };

    onMounted(() => {
      panzoom = Panzoom(locationPanZoomRef.value, { maxScale: 5 });
    });

    return {
      locationPanZoomRef,
      onScrollZoom,
    };
  },
};
</script>
