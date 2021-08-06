<template>
  <div class="btn-group btn-group-sm">
    <button
      class="
        btn
        text-secondary text-dark-hover
        border-0
        p-0
        shadow-none
        rounded
      "
    >
      <FeatherMoreVertical class="f-icon-20" />
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>Attach to patient</li>
      <li>Share in conversation</li>
      <li><hr class="dropdown-divider" /></li>
      <li>Delete</li>
    </ul>
  </div>
</template>
<script>
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
export default {
  name: "MediaItemDropDown",
  components: { FeatherMoreVertical },
  props: {
    item: null,
  },
};
</script>
