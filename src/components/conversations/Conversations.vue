<template>
  <div class="col f-col-xl d-flex flex-column pe-2 overflow-hidden">
    <conversations-list-header></conversations-list-header>
    <conversations-list></conversations-list>
  </div>
</template>
<script>
import ConversationsListHeader from "@/components/conversations/ConversationsListHeader";
import ConversationsList from "@/components/conversations/ConversationsList";
export default {
  components: { ConversationsList, ConversationsListHeader },
};
</script>
