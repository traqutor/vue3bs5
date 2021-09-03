<template>
  <div class="row section-widget position-relative flex-fill mt-2">
    <SettingsLeftNavMenuSelector />
    <SettingsSelectionContainer />
  </div>
</template>
<script>
import SettingsLeftNavMenuSelector from "@/views/settings/SettingsLeftNavMenuSelector";
import SettingsSelectionContainer from "@/views/settings/SettingsSelectionContainer";
export default {
  components: { SettingsSelectionContainer, SettingsLeftNavMenuSelector },
};
</script>
