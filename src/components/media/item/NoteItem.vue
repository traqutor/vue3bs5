<template>
  <div class="image-inner-content">
    <div class="media pe-4 pt-2">
      <div class="media-body overflow-hidden px-3 pt-1">
        <div class="text-truncate font-weight-middle text-dark">Note</div>
      </div>
    </div>
    <div class="flex-fill position-relative f-size-13">
      <div class="image-inner-content p-3">
        <div class="truncate-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
          luctus accumsan tortor posuere. Feugiat scelerisque varius morbi enim
          nunc faucibus. Eu ultrices vitae auctor eu augue ut lectus arcu. Nec
          tincidunt praesent semper feugiat nibh sed pulvinar.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NoteItem",
  props: {
    item: null,
  },
};
</script>
