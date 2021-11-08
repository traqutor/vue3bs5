import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetThumbnails]: ({ commit }) => {
    const itemsQuantity = 100;
    const isGeneral = true;
    const isMetadataRequest = false;

    const url = `${process.env.VUE_APP_BASE_URL}/Gallery/GetThumbnails?ItemsQuantity=${itemsQuantity}&isGeneral=${isGeneral}&isMedatadaRequest=${isMetadataRequest}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
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

  [Actions.onGetRecentThumbnails]: ({ commit }) => {
    const itemsQuantity = 100;
    const isGeneral = false;
    const isMetadataRequest = false;

    const url = `${process.env.VUE_APP_BASE_URL}/Gallery/GetThumbnails?ItemsQuantity=${itemsQuantity}&isGeneral=${isGeneral}&isMedatadaRequest=${isMetadataRequest}`;

    axiosWebApiInstance
      .get(url)
      .then(function (response) {
        if (response.data.isOk) {
          commit(Mutations.setMediaRecentThumbnails, response.data.thumbnails);
        } else {
          console.error(
            "On onGetRecentThumbnails error:",
            response.data.message
          );
        }
      })
      .catch((error) => {
        console.error("On onGetRecentThumbnails error:", error);
      });
  },

  [Actions.onGetAttachmentsThumbnails]: (_, requestQuery) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/GetAttachmentsThumbnails?${requestQuery}`;

      axiosWebApiInstance
        .get(url)
        .then(function (response) {
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
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/GetItem?itemId=${itemId}`;
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
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/ShareGalleryItem`;

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

  [Actions.onShowMediaFilesInLightBox]: ({ commit }, { media, item }) => {
    commit(Mutations.setMediaSelectedItem, item);
    commit(Mutations.setLightBoxViewFiles, media);
    commit(Mutations.setIsLightBoxVisible, true);
  },

  [Actions.onStoreInGallery]: ({ dispatch, getters }, filePayload) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/storeInGallery`;

      const payload = { ...filePayload, isGeneral: getters.getMediaNavTabSelected === "General" };

      axiosWebApiInstance
        .post(url, payload)
        .then(function (response) {
          console.log(response);

          dispatch(Actions.onGetThumbnails);
          dispatch(Actions.onGetRecentThumbnails);

          resolve();
        })
        .catch((error) => {
          console.error("On onStoreInGallery error:", error);
        });
    });
  },

  [Actions.onGalleryDelete]: ({ dispatch }, deletePayload) => {
    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/Delete`;

      axiosWebApiInstance
        .delete(url, { data: deletePayload })
        .then(function (response) {
          console.log(response);

          dispatch(Actions.onGetThumbnails);

          resolve();
        })
        .catch((error) => {
          console.error("On onGalleryDelete error:", error);
        });
    });
  },
};
