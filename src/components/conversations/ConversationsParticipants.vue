<template>
  <div class="col f-col-xl d-flex flex-column pr-2 overflow-hidden">
    <conversations-participants-list-header></conversations-participants-list-header>
    <conversations-participants-list></conversations-participants-list>
  </div>
</template>
<script>
import ConversationsParticipantsListHeader from "@/components/conversations/ConversationsParticipantsListHeader";
import ConversationsParticipantsList from "@/components/conversations/ConversationsParticipantsList";

export default {
  name: "conversation-participants-list",
  components: {
    ConversationsParticipantsList,
    ConversationsParticipantsListHeader,
  }
}
</script>

