<template>
  <div class="flex-slide-content row">
    <div class="col d-flex flex-column">
      <div class="row mb-5">
        <div class="col f-col-s me-auto">
          <div
            class="input-group form-control-date-visible  border-bottom"
          >
            <div class="input-group-prepend" data-bs-toggle="">
              <span
                class="
                  input-group-text
                  text-primary
                  p-0
                  border-0
                  bg-transparent
                  me-25
                  on-hover
                "
              >
                <feather-calendar class="f-icon-22" />
              </span>
            </div>

            <input
              type="text"
              class="
                form-control
                shadow-none
                text-dark
                f-size-18
                font-weight-middle
                border-0
                p-0
                line-height-1
                form-control-plaintext
                on-hover
                flatpickr-input
              "
              data-input=""
              placeholder="Select Date"
            />
          </div>
        </div>
        <div class="col f-col-sm">
          <div class="input-group input-group-sm">
            <input
              type="text"
              class="form-control bg-light shadow-none"
              placeholder="Search"
            />
            <div class="input-group-append">
              <button
                class="
                  btn btn-light
                  border-left-0
                  text-secondary text-dark-hover
                "
                type="button"
              >
                <feather-search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import FeatherSearch from "@/icons/FeatherSearch";
import FeatherCalendar from "@/icons/FeatherCalendar";
export default {
  components: {
    FeatherCalendar,
    FeatherSearch,
  },
  setup() {
    const store = useStore();
    const getList = (status) => {
      return store.getters.getTasks.filter(
        (task) => task.taskStatus === status
      );
    };

    return {
      getList,
    };
  },
};
</script>
