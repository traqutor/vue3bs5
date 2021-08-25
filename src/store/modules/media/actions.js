import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetThumbnails]: ({ commit }) => {
    const itemsQuantity = 10;
    const isGeneral = true;
    const isMetadataRequest = false;

    const url = `${process.env.VUE_APP_BASE_URL}/api/Gallery/GetThumbnails?ItemsQuantity=${itemsQuantity}&isGeneral=${isGeneral}&isMedatadaRequest=${isMetadataRequest}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        console.log("Actions.onGetThumbnails response:", response);
        if (response.data.isOk) {
          commit(Mutations.setMediaThumbnails, response.data.thumbnails);
        } else {
          console.error("On onGetThumbnails error:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("On onGetThumbnails error:", error);
      });
  },

  [Actions.onGetAttachmentsThumbnails]: (_, requestQuery) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/Gallery/GetAttachmentsThumbnails?${requestQuery}`;

      axiosWebApiInstance
        .get(url)
        .then(function (response) {
          console.log("Actions.onGetAttachmentsThumbnails response:", response);
          if (response.data.isOk) {
            resolve(response.data.thumbnails);
          } else {
            console.error(
              "On onGetAttachmentsThumbnails error:",
              response.data.message
            );
          }
        })
        .catch((error) => {
          console.error("On onGetAttachmentsThumbnails error:", error);
        });
    });
  },

  [Actions.onGetItem]: ({ commit, getters }, itemId) => {
    if (!getters.getMediaItemById(itemId)) {
      const url = `${process.env.VUE_APP_BASE_URL}/api/Gallery/GetItem?itemId=${itemId}`;
      axiosWebApiInstance
        .get(url)
        .then(function (response) {
          console.log("Actions.onGetItem response:", response);
          if (response.data.isOk) {
            commit(Mutations.setMediaItem, response.data);
          } else {
            console.error("On onGetItem error:", response.data.message);
          }
        })
        .catch((error) => {
          console.error("On onGetItem error:", error);
        });
    }
  },

  [Actions.onShareGalleryItems]: ({ commit }, requestPayload) => {
    commit(Mutations.setIsMediaShareLoading, true);
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/api/Gallery/ShareGalleryItem`;

      axiosWebApiInstance
        .post(url, requestPayload)
        .then(function (response) {
          const share = response.data.galleryItems;
          commit(Mutations.setMediaShareGalleryItems, share);
          commit(Mutations.setIsMediaShareLoading, false);
          resolve();
        })
        .catch((error) => {
          commit(Mutations.setIsMediaShareLoading, false);
          console.error("On onShareGalleryItems error:", error);
        });
    });
  },

  [Actions.onShowMessageAttachments]: (
    { commit, dispatch },
    { message, index }
  ) => {
    message.thumbnails.forEach((thumb) => {
      dispatch(Actions.onGetItem, thumb.id);
    });
    commit(Mutations.setLightBoxViewFiles, message.thumbnails);
    commit(Mutations.setMediaIndex, index);
    commit(Mutations.setIsLightBoxVisible, true);
  },
};
