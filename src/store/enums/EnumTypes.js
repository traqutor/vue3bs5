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

  TaskCreated: "TaskCreatedNotification",
  TaskStatusChanged: "TaskStatusChangedNotification",
  TaskDeadlineCountdownStarted: "TaskDeadlineCountdownStartedNotification",
  TaskDeadlinePassed: "TaskDeadlinePassedNotification",
  GroupTaskUpdate: "GroupTaskUpdateNotification",
  TaskDeleted: "TaskDeletedNotification",
};

const Actions = {
  // auth actions
  onLogin: "onLogin",
  onAppInitRecallLoggedUserData: "onAppInitRecallLoggedUserData",

  // conversations actions
  onGetConversations: "onGetConversations",
  onGetConversation: "onGetConversation",
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

  // tasks actions types
  onSelectTask: "onSelectTask",
  onGetRequestedTasks: "onGetRequestedTasks",
  onGetMyTasks: "onGetMyTasks",
  onGetUnassignedTasks: "onGetUnassignedTasks",
  onGetMyCompletedTasks: "onGetMyCompletedTasks",
  onGetRequestedCompletedTasks: "onGetRequestedCompletedTasks",
  onCreateTask: "onCreateTask",
  onStartTask: "onStartTask",
  onOnHoldTask: "onOnHoldTask",
  onQueueTask: "onQueueTask",
  onCompleteTask: "onCompleteTask",
  onReturnTask: "onReturnTask",

  onTaskCreatedNotification: "onTaskCreatedNotification",
  onTaskStatusChangedNotification: "onTaskStatusChangedNotification",
  onTaskDeadlineCountdownStartedNotification:
    "onTaskDeadlineCountdownStartedNotification",
  onTaskDeadlinePassedNotification: "onTaskDeadlinePassedNotification",
  onGroupTaskUpdateNotification: "onGroupTaskUpdateNotification",
  onTaskDeletedNotification: "onTaskDeletedNotification",

  // toast action types
  onDisplayNotification: "onDisplayNotification",
  onRemoveNotification: "onRemoveNotification",

  // locations action types
  onGetLocations: "onGetLocations",

  // patients action types
  onGetPatients: "onGetPatients",
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
  setConversations: "setConversations",
  setMessage: "setMessage",
  setReplyMessage: "setReplyMessage",
  setTotalMissedCounter: "setTotalMissedCounter",
  setIsConversationsLoading: "setIsConversationsLoading",

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
  setMediaSearchText: "setMediaSearchText",
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

  // tasks mutation types
  setRequestedTasks: "setRequestedTasks",
  setMyTasks: "setMyTasks",
  setUnassignedTasks: "setUnassignedTasks",
  setMyCompletedTasks: "setMyCompletedTasks",
  setRequestedCompletedTasks: "setRequestedCompletedTasks",

  setIsRequestedTasksLoading: "setIsRequestedTasksLoading",
  setIsMyTasksLoading: "setIsMyTasksLoading",
  setIsUnassignedTasksLoading: "setIsUnassignedTasksLoading",
  setIsMyCompletedTasksLoading: "setIsMyCompletedTasksLoading",
  setIsRequestedCompletedTasksLoading: "setIsRequestedCompletedTasksLoading",

  setTasksViewMode: "setTasksViewMode",
  setTasksBoardViewMode: "setTasksBoardViewMode",
  setIsTaskDrawerVisible: "setIsTaskDrawerVisible",
  setSelectedTaskTypeCreation: "selectedTaskTypeCreation",
  setSelectedTaskId: "setSelectedTaskId",
  setUpdatedTask: "setUpdatedTask",

  // toast mutation types
  displayNotification: "displayNotification",
  removeNotification: "removeNotification",

  // locations mutation types
  setLocations: "setLocations",

  // patients mutation types
  setPatients: "setPatients",
};

//taskTypes
const TASK_TYPES_VIEW_MODES = {
  LIST: "List",
  ADD_NEW: "Add ",
};
const TASK_TYPE_EMPTY = {
  id: 0,
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

const TASK_IN_PROCESS_TARGET_STATES = {
  New: {
    availableStatuses: ["InProgress"],
    actions: { InProgress: "onStartTask" },
  },
  InProgress: {
    availableStatuses: ["New", "Queued", "Completed"],
    actions: {
      New: "onReturnTask",
      Queued: "onQueueTask",
      Completed: "onCompleteTask",
    },
  },
  Queued: {
    availableStatuses: ["New"],
    actions: { New: "onReturnTask" },
  },
  Completed: {
    availableStatuses: [],
    actions: {},
  },
};

const SWATCH_COLORS = [
  { color: "#417505", className: "todo-label-1" },
  { color: "#f5a623", className: "todo-label-2" },
  { color: "#751dc4", className: "todo-label-3" },
  { color: "#d0021b", className: "todo-label-4" },
  { color: "#4df6d0", className: "todo-label-5" },
  { color: "#f2f81b", className: "todo-label-6" },
  { color: "#1c2ef8", className: "todo-label-7" },
];

const TASK_ACTION_STATUSES = [
  {
    id: "Unassigned",
    label: "Unassigned",
    isActive: false,
    isFilterable: true,
    class: "bg-task-new",
  },
  {
    id: "InProgress",
    label: "Started",
    isActive: false,
    isFilterable: true,
    class: "bg-task-start",
  },
  {
    id: "Queued",
    label: "Queued",
    isActive: false,
    isFilterable: true,
    class: "bg-task-queue",
  },
  // {
  //   id: "OnHold",
  //   label: "On Hold",
  //   isActive: false,
  //   isFilterable: true,
  //   class: "bg-task-hold",
  // },
  // {
  //   id: "Overdue",
  //   label: "Overdue",
  //   isActive: false,
  //   isFilterable: false,
  //   class: "bg-task-overdue",
  // },
  {
    id: "Completed",
    label: "Completed",
    isActive: false,
    isFilterable: false,
    class: "bg-task-complete",
  },
];

//taskTypes
const TASKS_VIEW_MODES = {
  LIST: "List",
  BOARD: "Board",
  MAP: "Map",
  RAISE: "Raise",
  MANAGE: "Manage",
  PROGRESS: "Progress",
};

const TASKS_BOARD_VIEW_MODES = {
  TASKS: "Tasks",
  MY_REQUESTS: "MyRequests",
  SCHEDULED: "Scheduled",
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
  ALL: "All",
  AUDIO: "Audio",
  PHOTO: "Picture",
  VIDEO: "Videos",
  DOC: "Document",
  NOTE: "Notes",
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
  TASK_ACTION_STATUSES,
  TASKS_VIEW_MODES,
  TASKS_BOARD_VIEW_MODES,
  TASK_IN_PROCESS_TARGET_STATES,
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
