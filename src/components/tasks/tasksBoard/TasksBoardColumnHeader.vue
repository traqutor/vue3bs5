<template>
  <!-- start::column header -->
  <div class="list-header-board pe-3 sortable-ignore">
    <div
      class="
        d-flex
        align-items-center
        flex-fill
        rounded
        ps-3
        pe-0
        py-2
        text-white
      "
      :class="backgroundClass"
    >
      {{ title
      }}<span class="f-size-20 font-weight-middle ms-auto sortable-counter">{{
        counter
      }}</span>

      <div class="btn-group btn-group-sm">
        <button
          type="button"
          class="
            btn
            text-white-75 text-white-hover
            border-0
            px-2
            shadow-none
            rounded
          "
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <feather-more-vertical class="f-icon-20" />
        </button>
        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right shadow">
          <button class="dropdown-item px-3 d-flex align-items-center">
            <feather-arrow-sort-vertical
              class="text-secondary f-icon-18 me-3"
            />
            <span class="ms-n1">Show newest</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end::column header -->
</template>
<script>
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import FeatherArrowSortVertical from "@/icons/FeatherArrowSortVertical";
export default {
  components: { FeatherArrowSortVertical, FeatherMoreVertical },
  props: ["title", "counter", "backgroundClass"],
};
</script>
