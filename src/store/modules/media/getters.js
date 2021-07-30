import {
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
} from "@/store/enums/EnumTypes";

export default {
  getMediaNavTabSelected: (state) => {
    return state.mediaNavTabSelected;
  },
  getMediaPatientSelected: (state) => {
    return state.mediaPatientSelected;
  },
  getMediaTypeSelected: (state) => {
    return state.mediaTypeSelected;
  },
  getMediaTypes: (state) => {
    return state.mediaTypes;
  },
  getMediaViewMode: (state) => {
    return state.mediaViewMode;
  },
  getMediaDrawerViewMode: (state) => {
    return state.mediaDrawerViewMode;
  },
  getMediaItemSize: (state) => {
    return state.mediaItemSize;
  },
  getMediaPatientItemSize: (state) => {
    return state.mediaPatientItemSize;
  },
  getMediaItemClass: (state) => {
    switch (state.mediaItemSize) {
      case MEDIA_ITEM_SIZES.LARGE:
        return "list-group-md";
      case MEDIA_ITEM_SIZES.MEDIUM:
        return "";
      default:
        return "list-group-sm";
    }
  },
  getMediaPatientItemClass: (state) => {
    switch (state.mediaPatientItemSize) {
      case MEDIA_PATIENT_ITEM_SIZES.LARGE:
        return "list-group-lg";
      case MEDIA_PATIENT_ITEM_SIZES.SMALL:
        return "";
      default:
        return "list-group-md";
    }
  },
};
