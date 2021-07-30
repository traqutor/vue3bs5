<template>
  <div class="btn-group btn-group-sm mr-n3">
    <b-dropdown
      variant="link"
      dropleft
      toggle-class="text-decoration-none shadow-none text-secondary text-dark-hover"
      no-caret
    >
      <template #button-content>
        <b-icon icon="three-dots-vertical" />
      </template>
      <b-dropdown-item>Attach to patient</b-dropdown-item>
      <b-dropdown-item>Share in conversation</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item>Delete</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
export default {
  name: "MediaItemDropDown",
  props: {
    item: null
  }
};
</script>
