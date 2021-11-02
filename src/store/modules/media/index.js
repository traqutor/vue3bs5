import Mutations from "./mediaMutations";
import Getters from "./mediaGetters";
import Actions from "./mediaActions";
import {
  MEDIA_DRAWER_VIEW_MODES,
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
  MEDIA_TYPES,
  MEDIA_VIEW_MODES,
} from "@/store/enums/EnumTypes";

const tmpMediaTypes = [
  { id: 0, type: MEDIA_TYPES.ALL, name: "All", itemsCount: 0 },
  { id: 1, type: MEDIA_TYPES.AUDIO, name: "Audio", itemsCount: 0 },
  { id: 2, type: MEDIA_TYPES.DOC, name: "Documents", itemsCount: 0 },
  { id: 3, type: MEDIA_TYPES.NOTE, name: "Notes", itemsCount: 0 },
  { id: 4, type: MEDIA_TYPES.PHOTO, name: "Photos", itemsCount: 0 },
  { id: 5, type: MEDIA_TYPES.VIDEO, name: "Videos", itemsCount: 0 },
];

export const initialState = () => ({
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
  mediaSelectedItem: null,
  mediaSelectedItems: [],
  mediaSearchText: null,
  mediaShareGalleryItems: [],
  isMediaShareLoading: false,
  isLightBoxVisible: false,
  lightBoxViewFiles: [],
});

const mediaModule = {
  state: initialState(),
  mutations: Mutations,
  getters: Getters,
  actions: Actions,
};

export default mediaModule;
