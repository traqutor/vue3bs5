<template>
  <div
    class="dropdown custom-dropdown position-absolute position-top-right m-2"
  >
    <ButtonIcon data-bs-toggle="dropdown" class="media-more-drop-menu">
      <FeatherMoreVertical class="f-icon-18" />
    </ButtonIcon>

    <ul class="dropdown-menu custom-dropdown-menu">
      <li
        class="dropdown-item custom-dropdown-item"
        @click="onClickAttachToParent"
      >
        Attach to patient
      </li>
      <li
        class="dropdown-item custom-dropdown-item"
        @click="onClickShareInConversation"
      >
        Share in conversation
      </li>
      <li class="dropdown-item custom-dropdown-item" @click="onClickDelete">
        Delete
      </li>
    </ul>
  </div>
</template>
<script>
import FeatherMoreVertical from "@/icons/FeatherMoreVertical";
import ButtonIcon from "@/components/common/buttons/ButtonIcon";

export default {
  name: "MediaListItemDropDown",

  props: ["item"],

  setup(props) {
    const onClickAttachToParent = () => {
      console.log("onClickAttachToParent", props);
    };
    const onClickShareInConversation = () => {
      console.log("onClickShareInConversation", props);
    };
    const onClickDelete = () => {
      console.log("onClickDelete", props);
    };

    return {
      onClickAttachToParent,
      onClickShareInConversation,
      onClickDelete,
    };
  },

  components: {
    ButtonIcon,
    FeatherMoreVertical,
  },
};
</script>
<style>
.media-more-drop-menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;

  width: 32px !important;
  height: 32px !important;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}
</style>
