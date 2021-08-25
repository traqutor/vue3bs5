import { Mutations } from "@/store/enums/EnumTypes";

export default {
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
  [Mutations.setMediaIndex]: (state, index) => {
    state.mediaIndex = index;
  },
  [Mutations.setMediaItem]: (state, mediaItem) => {
    state.mediaItems.push(mediaItem);
  },
};
