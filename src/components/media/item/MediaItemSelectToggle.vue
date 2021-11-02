<template>
  <div
    class="
      btn
      border-0
      btn-circle
      p-0
      f-icon-24
      shadow-none
      bg-white
      position-absolute position-top-left
      m-2
    "
    @click.stop.prevent="onSelectItem"
  >
    <label class="m-0">
      <span class="input-icon m-0">
        <feather-check class="f-icon-24 text-success" v-if="isSelected" />
        <feather-circle v-else class="f-icon-24 text-secondary" />
      </span>
    </label>
  </div>
</template>
<script>
import { useStore } from "vuex";
import FeatherCheck from "@/icons/FeatherCheck";
import FeatherCircle from "@/icons/FeatherCircle";
import { computed } from "vue";
import { Mutations } from "@/store/enums/EnumTypes";
export default {
  props: ["item"],
  components: { FeatherCircle, FeatherCheck },
  setup(props) {
    const store = useStore();
    const isSelected = computed(() =>
      store.getters.getIsMediaItemSelected(props.item)
    );

    const onSelectItem = () => {
      console.log("onselect item", props.item);
      store.commit(Mutations.toggleMediaSelectedItem, props.item);
    };

    return {
      isSelected,
      onSelectItem,
    };
  },
};
</script>
