import { Mutations } from "@/store/enums/EnumTypes";
import { guidsAreEqual } from "@/services/guids.service";
import { initialState } from "@/store/modules/media";

export default {
  [Mutations.cleanMediaState]: (state) => {
    const initial = initialState();
    Object.keys(initial).forEach((key) => {
      state[key] = initial[key];
    });
  },

  [Mutations.setMediaNavTabSelected]: (state, nav) => {
    state.mediaNavTabSelected = nav;
  },

  [Mutations.setMediaPatientSelected]: (state, patient) => {
    state.mediaPatientSelected = patient;
  },

  [Mutations.setMediaTypeSelected]: (state, type) => {
    state.mediaTypeSelected = type;
  },

  [Mutations.setMediaViewMode]: (state, mode) => {
    state.mediaViewMode = mode;
  },

  [Mutations.setMediaDrawerViewMode]: (state, mode) => {
    state.mediaDrawerViewMode = mode;
  },

  [Mutations.setMediaItemSize]: (state, size) => {
    state.mediaItemSize = size;
  },

  [Mutations.setMediaPatientItemSize]: (state, size) => {
    state.mediaPatientItemSize = size;
  },

  [Mutations.setMediaThumbnails]: (state, thumbnails) => {
    state.mediaThumbnails = thumbnails;
  },

  [Mutations.toggleMediaSelectedItem]: (state, item) => {
    const idx = state.mediaSelectedItems.findIndex(
      (selected) => selected.name === item.name
    );
    if (idx !== -1) {
      state.mediaSelectedItems.splice(idx, 1);
    } else {
      state.mediaSelectedItems.push(item);
    }
  },

  [Mutations.setMediaSelectedItems]: (state, items) => {
    state.mediaSelectedItems = items;
  },

  [Mutations.setMediaSearchText]: (state, text) => {
    state.mediaSearchText = text;
  },

  [Mutations.setMediaShareGalleryItems]: (state, share) => {
    state.mediaShareGalleryItems = share;
  },

  [Mutations.setIsMediaShareLoading]: (state, flag) => {
    state.isMediaShareLoading = flag;
  },

  [Mutations.setIsLightBoxVisible]: (state, flag) => {
    state.isLightBoxVisible = flag;
  },

  [Mutations.setLightBoxViewFiles]: (state, files) => {
    state.lightBoxViewFiles = files;
  },

  [Mutations.setMediaSelectedItem]: (state, item) => {
    state.mediaSelectedItem = item;
  },

  [Mutations.setMediaItem]: (state, mediaItem) => {
    const items = [...state.mediaItems];
    const idx = items.findIndex((item) =>
      guidsAreEqual(item.fileName, mediaItem.fileName)
    );
    if (idx !== -1) {
      items.splice(idx, 1);
    }
    items.push(mediaItem);
    state.mediaItems = [...items];
  },
};
