const Actions = {};

const SocketReceivers = {
  ReceivedMessageNotification: "ReceivedMessageNotification",
  UserAddedToConversationNotification: "UserAddedToConversationNotification",
  UserLeaveConversationNotification: "UserLeaveConversationNotification",
  UserIsTypingNotification: "UserIsTypingNotification",
  MessageReadNotification: "MessageReadNotification",
  MessageUpdatedNotification: "MessageUpdatedNotification",
  MessageAcknowledgedNotification: "MessageAcknowledgedNotification",
  MessageQuickReactionNotification: "MessageQuickReactionNotification",
  MessageQuickReactionRemovedNotification:
    "MessageQuickReactionRemovedNotification",
  ConversationCreatedNotification: "ConversationCreatedNotification",
  ConversationTopicChangedNotification: "ConversationTopicChangedNotification",
};

const Mutations = {
  // auth mutation types
  setLoggedError: "setLoggedError",
  setLoggedUser: "setLoggedUser",
  setLogOutUser: "setLogOutUser",
  setLoggedIsLoading: "setLoggedIsLoading",
  setActiveRole: "setActiveRole",

  // templates mutation types
  setSelectedTemplateViewMode: "setSelectedTemplateViewMode",
  setSelectedTemplate: "setSelectedTemplate",
};

const TEMPLATE_VIEW_MODES = {
  QUICK_MESSAGE: "Quick messages",
  TEMPLATES: "Templates",
  TEMPLATE_VIEW: "Template",
  TEMPLATE_ADD_NEW: "New template",
  QUICK_MESSAGE_ADD_NEW: "Add new quick message",
};

const QUICK_MESSAGES = [
  "Are you available for a consultation?",
  "Please call me ASAP",
  "Need the whole team in consulting room",
  "Rise And Shine Sunshine!",
  "Ready To Make The World A Better Place?",
  "The Whole World Is Ours",
  "So Let’s Rock It",
  "Good Morning!",
  "What Was The Last Time You Worked Incredibly Hard?",
  "What Is The Most Useful App On Your Phone?",
  "What Is A Controversial Opinion You Have?",
];

const TEMPLATES = {
  ISBAR: {
    name: "ISBAR Report",
    isDeteriorationPatient: {
      type: "boolean",
      name: "Deterioration Patient",
      value: false,
    },
    introduction: { type: "text", name: "Introduction", value: "" },
    situation: { type: "text", name: "Situation", value: "" },
    background: { type: "text", name: "Background", value: "" },
    assessment: { type: "text", name: "Assessment", value: "" },
    recommendation: { type: "text", name: "Recomendation", value: "" },
  },
};

export {
  Actions,
  Mutations,
  SocketReceivers,
  TEMPLATE_VIEW_MODES,
  TEMPLATES,
  QUICK_MESSAGES,
};
