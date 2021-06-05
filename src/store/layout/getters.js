import { VISIBILITIES } from '@/const';

export default {
  getAsideLeftVisibility: (state) => {
    return state.asideLeftVisibility;
  },

  getAsideLeftClass: (state) => {
    switch (state.asideLeftVisibility) {
      case VISIBILITIES.FIXED:
        return 'sidebar-left-fixed';
      case VISIBILITIES.HOVER:
        return 'sidebar-left-hover';
      default:
        return '';
    }
  },

  getAsideRightVisibility: (state) => {
    return state.asideRightVisibility;
  },

  getAsideRightClass: (state) => {
    switch (state.asideRightVisibility) {
      case VISIBILITIES.FIXED:
        return 'sidebar-right-fixed';
      case VISIBILITIES.HOVER:
        return 'sidebar-right-hover';
      default:
        return '';
    }
  },
};
