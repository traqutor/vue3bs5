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

const Actions = {
  // conversations actions
  onCreateMessage: "onCreateMessage",
  onQuickMessageResponse: "onQuickMessageResponse",
  onMessageQuickReaction: "onMessageQuickReaction",
  onSelectConversation: "onSelectConversation",
  onRemoveQuickReaction: "onRemoveQuickReaction",

  // media actions
  onGetThumbnails: "onGetThumbnails",
  onShareGalleryItems: "onShareGalleryItems",
  onGetAttachmentsThumbnails: "onGetAttachmentsThumbnails",
  onGetItem: "onGetItem",
  onShowMessageAttachments: "onShowMessageAttachments",

  // socket actions
  onMessageQuickReactionNotification: "onMessageQuickReactionNotification",
  onMessageQuickReactionRemovedNotification:
    "onMessageQuickReactionRemovedNotification",
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

  //conversation mutation types
  setMessage: "setMessage",
  setReplyMessage: "setReplyMessage",
  setTotalMissedCounter: "setTotalMissedCounter",

  // media mutation types
  setMediaTypeSelected: "setMediaTypeSelected",
  setMediaNavTabSelected: "setMediaNavTabSelected",
  setMediaViewMode: "setMediaViewMode",
  setMediaDrawerViewMode: "setMediaDrawerViewMode",
  setMediaItemSize: "setMediaItemSize",
  setMediaPatientItemSize: "setMediaPatientItemSize",
  setMediaPatientSelected: "setMediaPatientSelected",
  setMediaItem: "setMediaItem",
  setMediaIndex: "setMediaIndex",
  setMediaThumbnails: "setMediaThumbnails",

  toggleMediaSelectedItem: "toggleMediaSelectedItem",
  setMediaSelectedItems: "setMediaSelectedItems",
  setMediaShareGalleryItems: "setMediaShareGalleryItems",

  setIsMediaShareLoading: "setIsMediaShareLoading",

  setIsLightBoxVisible: "setIsLightBoxVisible",
  setLightBoxViewFiles: "setLightBoxViewFiles",
};

//messages
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
  "Ready To Make The World A Better Place?",
  "Good Morning!",
];

const QUICK_REACTIONS = [
  { value: "Like", emoji: "👍" },
  { value: "Dislike", emoji: "👎" },
  { value: "Love", emoji: "💗" },
  { value: "SmileyFace", emoji: "😄" },
  { value: "SadFace", emoji: "😞" },
  { value: "Question", emoji: "❓" },
  { value: "Exclamation", emoji: "❗❗" },
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

// media
const MEDIA_VIEW_MODES = { GRID: "GRID", TABLE: "TABLE" };
const MEDIA_DRAWER_VIEW_MODES = {
  CLOSED: "Closed",
  PATIENT: "Patient",
};
const MEDIA_ITEM_SIZES = {
  DEFAULT: "Default",
  MEDIUM: "Medium",
  LARGE: "Large",
};
const MEDIA_PATIENT_ITEM_SIZES = {
  DEFAULT: "Default",
  SMALL: "Small",
  LARGE: "Large",
};
const MEDIA_TYPES = {
  ALL: "all",
  AUDIO: "audio",
  PHOTO: "Picture",
  VIDEO: "video",
  DOC: "doc",
  NOTE: "note",
};
const MEDIA_NAV_TABS = {
  RECENT: "Recent",
  GENERAL: "General",
  PATIENTS: "Patients",
  UNDEFINED: "Unidentified",
};

//patients
const PATIENTS_VIEW_MODES = { GRID: "GRID", TABLE: "TABLE" };
const PATIENT_DRAWER_VIEW_MODES = {
  CLOSED: "Closed",
  PATIENT: "Patient",
  FILTER: "Filter",
};
const PATIENTS_ITEM_SIZES = {
  DEFAULT: "Default",
  SMALL: "Small",
  MEDIUM: "Medium",
  LARGE: "Large",
};

export {
  Actions,
  Mutations,
  SocketReceivers,
  TEMPLATE_VIEW_MODES,
  TEMPLATES,
  QUICK_MESSAGES,
  QUICK_REACTIONS,
  MEDIA_VIEW_MODES,
  MEDIA_DRAWER_VIEW_MODES,
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
  MEDIA_TYPES,
  MEDIA_NAV_TABS,
  PATIENTS_VIEW_MODES,
  PATIENT_DRAWER_VIEW_MODES,
  PATIENTS_ITEM_SIZES,
};
