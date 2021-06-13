<template>
  <div
    class="
      list-group-item
      p-2
      list-group-item-action
      border-0
      rounded
      on-hover
      hover-action-group
    "
    :class="isToggleAction ? 'toggle-action-show' : ''"
    @click.prevent="onSelect(participantId)"
  >
    <div v-if="isToggleAction" class="toggle-action-control pt-3 h-100">
      <label class="m-0 mt-1">
        <span class="is-select-item">
          <span class="input-icon">
            <feather-check-circle
              class="f-icon-22 text-success"
              v-if="isSelected"
            />
            <feather-minus-circle
              class="f-icon-22 text-danger"
              v-else-if="isRemovable"
            />
            <feather-circle class="f-icon-22" v-else />
          </span>
        </span>
      </label>
    </div>
    <participant-avatar-name-item
      :participant-id="participantId"
      :is-highlighted="true"
    >
      <template v-slot:secondary>
        <slot name="append"></slot>
      </template>
    </participant-avatar-name-item>
  </div>
</template>
<script>
import FeatherCircle from "@/icons/FeatherCircle";
import FeatherCheckCircle from "@/icons/FeatherCheckCircle";
import FeatherMinusCircle from "@/icons/FeatherMinusCircle";
import ParticipantAvatarNameItem from "@/components/participant/ParticipantAvatarNameItem";

export default {
  props: {
    participantId: { type: String },
    isToggleAction: { type: Boolean },
    isDisabled: { type: Boolean },
    isSelected: { type: Boolean },
    isRemovable: { type: Boolean },
    isHighlighted: { type: Boolean },
    onSelect: { type: Function },
  },
  components: {
    ParticipantAvatarNameItem,
    FeatherMinusCircle,
    FeatherCheckCircle,
    FeatherCircle,
  },
};
</script>
