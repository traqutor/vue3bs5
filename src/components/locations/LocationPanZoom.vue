<template>
  <div @wheel="onScrollZoom">
    <div ref="locationPanZoomRef" id="panzoom-element">
      <PlanAlexa3d></PlanAlexa3d>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PlanAlexa3d from "@/components/locations/plans/PlanAlexa3d";
import Panzoom from "@panzoom/panzoom";
export default {
  components: { PlanAlexa3d },
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
