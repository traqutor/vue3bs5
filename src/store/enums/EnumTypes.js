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
  onLogOut: "onLogOut",
  onAppInitRecallLoggedUserData: "onAppInitRecallLoggedUserData",

  // conversations actions
  onGetConversations: "onGetConversations",
  onGetConversation: "onGetConversation",
  onCreateConversation: "onCreateConversation",
  onSelectConversation: "onSelectConversation",
  onDirectConversationUpdate: "onDirectConversationUpdate",
  onCheckConversationMessages: "onCheckConversationMessages",
  onGetDirectConversation: "onGetDirectConversation",

  onGetMessages: "onGetMessages",
  onAcknowledgeMessage: "onAcknowledgeMessage",
  onCreateMessage: "onCreateMessage",
  onQuickMessageResponse: "onQuickMessageResponse",
  onMessageQuickReaction: "onMessageQuickReaction",
  onRemoveQuickReaction: "onRemoveQuickReaction",
  onMarkMessagesAsRead: "onMarkMessagesAsRead",
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

  // layout actions

  // locations action types
  onGetLocations: "onGetLocations",

  // media actions
  onGetThumbnails: "onGetThumbnails",
  onShareGalleryItems: "onShareGalleryItems",
  onGetAttachmentsThumbnails: "onGetAttachmentsThumbnails",
  onGetItem: "onGetItem",
  onShowMediaFilesInLightBox: "onShowMediaFilesInLightBox",

  // patients action types
  onGetPatients: "onGetPatients",

  // settings actions

  // socket actions
  onCreateHubConnection: "onCreateHubConnection",
  onSocketConnectionClose: "onSocketConnectionClose",
  onMessageQuickReactionNotification: "onMessageQuickReactionNotification",
  onMessageQuickReactionRemovedNotification:
    "onMessageQuickReactionRemovedNotification",

  // sounds actions

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

  // templates actions

  // toast action types
  onDisplayNotification: "onDisplayNotification",
  onRemoveNotification: "onRemoveNotification",

  // users action types
  getUsers: "getUsers",
  setToggleParticipantSelected: "setToggleParticipantSelected",
  setToggleParticipantToWhisper: "setToggleParticipantToWhisper",
};

const Mutations = {
  //mutations of auth
  setLoggedError: "setLoggedError",
  setLoggedUser: "setLoggedUser",
  setLogOutUser: "setLogOutUser",
  setLoggedIsLoading: "setLoggedIsLoading",
  setActiveRole: "setActiveRole",
  setIsTypesLoading: "setIsTypesLoading",
  setIsTypePost: "setIsTypePost",
  onLogOut: "onLogOut",

  //mutations of conversations
  cleanConversationsState: "cleanConversationsState",
  setConversations: "setConversations",
  setConversation: "setConversation",
  setSelectedConversationId: "setSelectedConversationId",
  setPageOfConversations: "setPageOfConversations",
  setChatViewMode: "setChatViewMode",
  setConversationViewMode: "setConversationViewMode",
  setSelectedCreator: "setSelectedCreator",
  setConversationTopic: "setConversationTopic",
  setMessage: "setMessage",
  setMessages: "setMessages",
  setIsMessagesLoading: "setIsMessagesLoading",
  setIsMessageCreating: "setIsMessageCreating",
  setSelectedMessageId: "setSelectedMessageId",
  setMessageText: "setMessageText",
  setReplyMessage: "setReplyMessage",
  setTotalMissedCounter: "setTotalMissedCounter",
  setIsConversationsLoading: "setIsConversationsLoading",
  setIsConversationCreating: "setIsConversationCreating",
  purgeUserIsTyping: "purgeUserIsTyping",
  toggleQuickChatTextSelector: "toggleQuickChatTextSelector",

  // mutations of layout
  cleanLayoutState: "cleanLayoutState",

  // mutations of locations
  cleanLocationsState: "cleanLocationsState",
  cleanLocationState: "cleanLocationState",
  setLocations: "setLocations",

  // mutation of media
  cleanMediaState: "cleanMediaState",
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

  //mutations of patients
  cleanPatientsState: "cleanPatientsState",
  setPatients: "setPatients",

  // mutations of settings
  cleanSettingsState: "cleanSettingsState",

  //mutations of socket
  cleanSocketState: "cleanSocketState",
  setSocketHubConnection: "setSocketHubConnection",
  setIsSocketReconnecting: "setIsSocketReconnecting",
  setIsSocketOnline: "setIsSocketOnline",

  //mutations of sound
  prepareSoundEffect: "prepareSoundEffect",
  setSoundEffect: "setSoundEffect",
  setSoundWaterDrop: "setSoundWaterDrop",

  // mutations of tasks
  cleanTasksState: "cleanTasksState",
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

  // mutations of taskTypes
  cleanTaskTypesState: "cleanTaskTypesState",
  setTaskTypes: "setTaskTypes",
  setSelectedTaskType: "setSelectedTaskType",
  setTaskTypesViewMode: "setTaskTypesViewMode",
  setTaskTypesCustomFields: "setTaskTypesCustomFields",
  setTaskTypesRequiredActions: "setTaskTypesRequiredActions",

  // mutations of templates
  cleanTemplatesState: "cleanTemplatesState",
  setSelectedTemplateViewMode: "setSelectedTemplateViewMode",
  setSelectedTemplate: "setSelectedTemplate",

  //mutations of toast
  cleanToastState: "cleanToastState",
  displayNotification: "displayNotification",
  removeNotification: "removeNotification",

  //mutations of users
  cleanUsersState: "cleanUsersState",
  setUsers: "setUsers",
  setRoles: "setRoles",
  setIsLoadingUsers: "setIsLoadingUsers",
  setParticipantsSearchText: "setParticipantsSearchText",
  setSelectedParticipants: "setSelectedParticipants",
  setWhisperParticipants: "setWhisperParticipants",
  purgeSelectedParticipants: "purgeSelectedParticipants",
  purgeWhisperParticipants: "purgeWhisperParticipants",
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
