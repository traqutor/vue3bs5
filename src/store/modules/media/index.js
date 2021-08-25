import Mutations from "./mutations";
import Getters from "./getters";
import Actions from "./actions";
import {
  MEDIA_DRAWER_VIEW_MODES,
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
  MEDIA_TYPES,
  MEDIA_VIEW_MODES,
} from "@/store/enums/EnumTypes";

const tmpMediaTypes = [
  { id: 0, type: MEDIA_TYPES.ALL, name: "All files", itemsCount: 0 },
  { id: 1, type: MEDIA_TYPES.AUDIO, name: "Audio", itemsCount: 0 },
  { id: 2, type: MEDIA_TYPES.DOC, name: "Documents", itemsCount: 0 },
  { id: 3, type: MEDIA_TYPES.NOTE, name: "Notes", itemsCount: 0 },
  { id: 4, type: MEDIA_TYPES.PHOTO, name: "Photos", itemsCount: 0 },
  { id: 5, type: MEDIA_TYPES.VIDEO, name: "Videos", itemsCount: 0 },
];

const mediaModule = {
  state() {
    return {
      mediaNavTabSelected: "Recent",
      mediaPatientSelected: null,
      mediaTypeSelected: tmpMediaTypes[0],
      mediaTypes: tmpMediaTypes,
      mediaViewMode: MEDIA_VIEW_MODES.GRID,
      mediaDrawerViewMode: MEDIA_DRAWER_VIEW_MODES.CLOSED,
      mediaItemSize: MEDIA_ITEM_SIZES.DEFAULT,
      mediaPatientItemSize: MEDIA_PATIENT_ITEM_SIZES.DEFAULT,
      mediaThumbnails: [],
      mediaItems: [],
      mediaIndex: null,
      mediaSelectedItems: [],
      mediaShareGalleryItems: [],
      isMediaShareLoading: false,
      isLightBoxVisible: false,
      lightBoxViewFiles: [],
    };
  },
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
};

export default mediaModule;
