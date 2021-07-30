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
};
