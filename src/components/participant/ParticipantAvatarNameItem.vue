<template>
  <div class="d-flex align-items-center user-item-details">

    <participant-avatar
        :participantId="participantId"
      class="me-3"
    ></participant-avatar>

    <div class="media-body overflow-hidden is-filtered">
      <div class="d-flex align-items-center overflow-hidden">
        <div class="text-truncate text-dark font-weight-middle f-size-15">
          <span v-if="isHighlighted">
            <text-highlight :text="participant.name"></text-highlight>
          </span>
          <span v-else>{{participant.name}}</span>
        </div>
      </div>
      <div class="text-truncate text-secondary f-size-13">
        <span v-if="isHighlighted">
            <text-highlight :text="getRolesAsLabel()"></text-highlight>
          </span>
        <span v-else>{{ getRolesAsLabel() }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from "vuex";
import {computed} from "vue";
import TextHighlight from "@/components/text/TextHighlight";
import ParticipantAvatar from "@/components/participant/ParticipantAvatar";

export default {
  components: {ParticipantAvatar, TextHighlight},
  props: {
    participantId: {type: String},
    isHighlighted: {type: Boolean},
    onSelect: {type: Function},
  },
  setup(props) {
    const store = useStore();
    const participant = computed(() => store.getters.getParticipantById(props.participantId));
    const getTextToSearchParticipants = computed(() => store.getters.getTextToSearchParticipants);

    function getRolesAsLabel() {
      if (participant.value.roles) {
        return participant.value.roles.map(role => role.name).join(", ");
      }
    }

    return {participant, getTextToSearchParticipants, getRolesAsLabel}
  },
}
</script>
