import {
  MEDIA_ITEM_SIZES,
  MEDIA_PATIENT_ITEM_SIZES,
  MEDIA_TYPES,
} from "@/store/enums/EnumTypes";
import { guidsAreEqual } from "@/services/guids.service";

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
  getMediaThumbnails: (state, getters) => {
    return state.mediaThumbnails
      .filter((thumb) =>
        getters.getMediaTypeSelected.type === MEDIA_TYPES.ALL
          ? true
          : thumb.blobType === getters.getMediaTypeSelected.type
      )
      .filter((thumb) =>
        getters.getMediaSearchText
          ? thumb.name.toLowerCase().includes(getters.getMediaSearchText)
          : true
      );
  },

  getMediaSelectedItems: (state) => {
    return state.mediaSelectedItems;
  },

  getMediaSearchText: (state) => {
    return state.mediaSearchText;
  },

  getIsMediaItemSelected: (state) => (item) => {
    return state.mediaSelectedItems.find(
      (selected) => selected.name === item.name
    );
  },

  getMediaShareGalleryItems: (state) => {
    return state.mediaShareGalleryItems;
  },

  getIsMediaShareLoading: (state) => {
    return state.isMediaShareLoading;
  },

  getIsLightBoxVisible: (state) => {
    return state.isLightBoxVisible;
  },

  getLightBoxViewFiles: (state) => {
    return state.lightBoxViewFiles;
  },

  getMediaSelectedItem: (state) => {
    return state.mediaSelectedItem;
  },

  getMediaItems: (state) => {
    return state.mediaItems;
  },

  getMediaItemById: (state) => (itemId) => {
    return state.mediaItems.find((item) => item.fileName.includes(itemId));
  },
};
