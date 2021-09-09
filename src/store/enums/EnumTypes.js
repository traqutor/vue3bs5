import { guidsGetOne } from "@/services/guids.service";

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
  onGetConversations: "onGetConversations",
  onCreateConversation: "onCreateConversation",
  onDirectConversationUpdate: "onDirectConversationUpdate",
  onCheckConversationMessages: "onCheckConversationMessages",
  onGetDirectConversation: "onGetDirectConversation",
  onAcknowledgeMessage: "onAcknowledgeMessage",
  onCreateMessage: "onCreateMessage",
  onQuickMessageResponse: "onQuickMessageResponse",
  onMessageQuickReaction: "onMessageQuickReaction",
  onSelectConversation: "onSelectConversation",
  onRemoveQuickReaction: "onRemoveQuickReaction",
  onMarkMessagesAsRead: "onMarkMessagesAsRead",
  onGetMessages: "onGetMessages",
  onUserIsTyping: "onUserIsTyping",
  onUserAddedToConversationNotification:
    "onUserAddedToConversationNotification",
  onConversationCreatedNotification: "onConversationCreatedNotification",
  onMessageAcknowledgedNotification: "onMessageAcknowledgedNotification",
  onReceivedMessageNotification: "onReceivedMessageNotification",
  onMessageReadNotification: "onMessageReadNotification",
  onUserIsTypingNotification: "onUserIsTypingNotification",
  onAddUsersToConversation: "onAddUsersToConversation",
  onRemoveUsersFromConversation: "onRemoveUsersFromConversation",

  // media actions
  onGetThumbnails: "onGetThumbnails",
  onShareGalleryItems: "onShareGalleryItems",
  onGetAttachmentsThumbnails: "onGetAttachmentsThumbnails",
  onGetItem: "onGetItem",
  onShowMediaFilesInLightBox: "onShowMediaFilesInLightBox",

  // socket actions
  onMessageQuickReactionNotification: "onMessageQuickReactionNotification",
  onMessageQuickReactionRemovedNotification:
    "onMessageQuickReactionRemovedNotification",

  // taskTypes actions types
  onGetTypes: "onGetTypes",
  onCreateType: "onCreateType",
  onUpdateType: "onUpdateType",
  onSearchTypes: "onSearchTypes",
  onDeleteTypes: "onDeleteTypes",
  onUpdateRequiredParticipantsToType: "onUpdateRequiredParticipantsToType",
  onAddCustomFieldsToType: "onAddCustomFieldsToType",
  onAddRequiredActionsToType: "onAddRequiredActionsToType",
  onAddRequiredActions: "onAddRequiredActions",
  onAddCustomFields: "onAddCustomFields",
  onRemoveRequiredParticipantsFromType: "onRemoveRequiredParticipantsFromType",
  onRemoveCustomFieldsFromType: "onRemoveCustomFieldsFromType",
  onRemoveRequiredActionsFromType: "onRemoveRequiredActionsFromType",
  onDeleteRequiredActions: "onDeleteRequiredActions",
  onDeleteCustomFields: "onDeleteCustomFields",
  onSearchRequiredActions: "onSearchRequiredActions",
  onSearchCustomFields: "onSearchCustomFields",
  onGetCustomFields: "onGetCustomFields",
  onGetRequiredActions: "onGetRequiredActions",
};

const Mutations = {
  // auth mutation types
  setLoggedError: "setLoggedError",
  setLoggedUser: "setLoggedUser",
  setLogOutUser: "setLogOutUser",
  setLoggedIsLoading: "setLoggedIsLoading",
  setActiveRole: "setActiveRole",
  setIsTypesLoading: "setIsTypesLoading",
  setIsTypePost: "setIsTypePost",

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
  setMediaSelectedItem: "setMediaSelectedItem",
  setMediaThumbnails: "setMediaThumbnails",

  toggleMediaSelectedItem: "toggleMediaSelectedItem",
  setMediaSelectedItems: "setMediaSelectedItems",
  setMediaShareGalleryItems: "setMediaShareGalleryItems",

  setIsMediaShareLoading: "setIsMediaShareLoading",

  setIsLightBoxVisible: "setIsLightBoxVisible",
  setLightBoxViewFiles: "setLightBoxViewFiles",

  // taskTypes mutations types
  setTaskTypes: "setTaskTypes",
  setSelectedTaskType: "setSelectedTaskType",
  setTaskTypesViewMode: "setTaskTypesViewMode",
  setTaskTypesCustomFields: "setTaskTypesCustomFields",
  setTaskTypesRequiredActions: "setTaskTypesRequiredActions",
};

//taskTypes
const TASK_TYPES_VIEW_MODES = {
  LIST: "List",
  ADD_NEW: "Add ",
};
const TASK_TYPE_EMPTY = {
  id: guidsGetOne(),
  minimumRequiredParticipants: 0,
  deadlineCountdownInterval: 0,
  locationId: "",
  title: "",
  badgeColour: "751dc4",
  allowUserToChooseParticipantsOnTaskCreation: true,
  isIncident: false,
  isLocationRequired: false,
  isDeadlineRequired: true,
  allowRisingOffDuty: true,
  createConversationOnRising: true,
  sendNotificationOnRising: true,
  sendNotificationOnChangeStatus: true,
  sendNotificationOnDeadlinePassed: true,
  sendNotificationOnCountdownStarted: true,
  requiredActions: [],
  customFields: [],
  requiredParticipants: [],
};

const SWATCH_COLORS = [
  { color: "417505", className: "todo-label-1" },
  { color: "f5a623", className: "todo-label-2" },
  { color: "751dc4", className: "todo-label-3" },
  { color: "d0021b", className: "todo-label-4" },
  { color: "4df6d0", className: "todo-label-5" },
  { color: "f2f81b", className: "todo-label-6" },
  { color: "1c2ef8", className: "todo-label-7" },
];

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
  TASK_TYPES_VIEW_MODES,
  TASK_TYPE_EMPTY,
  SWATCH_COLORS,
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
