import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetThumbnails]: ({ commit }) => {
    commit(Mutations.setIsThumbnailsLoading, true);

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
        commit(Mutations.setIsThumbnailsLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsThumbnailsLoading, false);
        console.error("On onGetThumbnails error:", error);
      });
  },

  [Actions.onGetRecentThumbnails]: ({ commit }) => {
    commit(Mutations.setIsRecentThumbnailsLoading, true);

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
        commit(Mutations.setIsRecentThumbnailsLoading, false);
      })
      .catch((error) => {
        commit(Mutations.setIsRecentThumbnailsLoading, false);
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

      const payload = {
        ...filePayload,
        isGeneral: getters.getMediaNavTabSelected === "General",
      };

      axiosWebApiInstance
        .post(url, payload)
        .then(() => {
          dispatch(Actions.onGetThumbnails);
          dispatch(Actions.onGetRecentThumbnails);

          resolve();
        })
        .catch((error) => {
          console.error("On onStoreInGallery error:", error);
        });
    });
  },

  [Actions.onGalleryDelete]: ({ getters, commit }, deletePayload) => {
    const general = getters.getMediaThumbnails;
    const recent = getters.getMediaRecentThumbnails;

    deletePayload.ids.forEach((id) => {
      const idx = general.findIndex((item) => item.id === id);
      if (idx !== -1) {
        general.splice(idx, 1);
      }

      const ridx = recent.findIndex((item) => item.id === id);
      if (ridx !== -1) {
        recent.splice(ridx, 1);
      }
    });

    return new Promise((resolve) => {
      const url = `${process.env.VUE_APP_BASE_URL}/Gallery/Delete`;

      axiosWebApiInstance
        .delete(url, { data: deletePayload })
        .then(function () {
          commit(Mutations.setMediaThumbnails, general);
          commit(Mutations.setMediaRecentThumbnails, recent);

          resolve();
        })
        .catch((error) => {
          console.error("On onGalleryDelete error:", error);
        });
    });
  },
};
