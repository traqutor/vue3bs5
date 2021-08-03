import { Actions, Mutations } from "@/store/enums/EnumTypes";
import { axiosWebApiInstance } from "@/services/axios.service";

export default {
  [Actions.onGetThumbnails]: ({ commit }) => {
    const itemsQuantity = 10;
    const isGeneral = true;
    const isMedatadaRequest = false;

    const url = `${process.env.VUE_APP_BASE_URL}/api/Gallery/GetThumbnails?ItemsQuantity=${itemsQuantity}&isGeneral=${isGeneral}&isMedatadaRequest=${isMedatadaRequest}`;

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
};
