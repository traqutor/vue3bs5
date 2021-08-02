<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <table
        class="
          table
          table-hover
          table-head-sticky
          table-self-middle
          table-collapse-list
          table-todo-list
        "
      >
        <thead>
          <tr class="bg-white">
            <th scope="col" class="pt-1 text-nowrap border-0">Name</th>
            <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
            <th scope="col" class="pt-1 text-nowrap border-0">File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="media align-items-center on-hover">
                <figure
                  class="
                    avatar avatar-md
                    rounded
                    avatar-custom
                    text-white
                    bg-media-2
                    me-3
                  "
                >
                  <FeatherFileText />
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    Examination result
                  </div>
                </div>
              </div>
            </td>
            <td class="text-nowrap">7:53 am 01/06/2000</td>
            <td>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">PDF</div>

                <media-item-drop-down :item="null" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="media align-items-center on-hover">
                <figure
                  class="
                    avatar avatar-md avatar-custom
                    text-white
                    bg-media-1
                    me-3
                  "
                >
                  <FeatherMic />
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    Patient meeting
                  </div>
                </div>
              </div>
            </td>
            <td class="text-nowrap">7:53 am 01/06/2000</td>
            <td>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-primary
                      bg-media-type-2
                      on-hover
                      p-0
                      pe-3
                      mb-0
                    "
                  >
                    <figure
                      class="avatar avatar-custom text-white bg-media-1 me-2"
                    >
                      <FeatherPlay />
                    </figure>
                    <div class="me-n1">02:30</div>
                  </div>
                </div>

                <media-item-drop-down :item="null" />
              </div>
            </td>
          </tr>
          <tr
            data-fancybox="gallery"
            rel="general-gallery-list"
            href="videos/video-01.mp4"
          >
            <td>
              <div class="media align-items-center on-hover">
                <figure class="avatar avatar-md me-3 rounded overflow-hidden">
                  <img src="../../../../assets/files/video-1.png" alt="..." />
                  <figcaption>
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h6>
                    <div>12:48 <small>am</small> • Today</div>
                  </figcaption>
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    Video file name 6
                  </div>
                </div>
              </div>
            </td>
            <td class="text-nowrap">7:53 am 01/06/2000</td>
            <td>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div
                    class="
                      d-flex
                      align-items-center
                      rounded-pill
                      me-2
                      alert alert-success
                      bg-media-type-5
                      on-hover
                      p-0
                      pe-3
                      mb-0
                    "
                  >
                    <figure
                      class="avatar avatar-custom text-white bg-media-5 me-2"
                    >
                      <FeatherPlay />
                    </figure>
                    <div class="me-n1">00:11</div>
                  </div>
                </div>

                <media-item-drop-down :item="null" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="media align-items-center on-hover">
                <figure
                  class="
                    avatar avatar-md
                    rounded
                    avatar-custom
                    text-white
                    bg-media-3
                    me-3
                  "
                >
                  <FeatherEdit />
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    Patient note
                  </div>
                </div>
              </div>
            </td>
            <td class="text-nowrap">7:53 am 01/06/2000</td>
            <td>
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center"></div>

                <media-item-drop-down :item="null" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </perfect-scrollbar>
  </div>
</template>
<script>
import FeatherFileText from "@/icons/FeatherFileText";
import FeatherMic from "@/icons/FeatherMic";
import FeatherPlay from "@/icons/FeatherPlay";
import FeatherEdit from "@/icons/FeatherEdit";
import MediaItemDropDown from "@/components/media/gridItem/MediaItemDropDown";
export default {
  name: "MediaGeneralList",
  components: {
    MediaItemDropDown,
    FeatherEdit,
    FeatherPlay,
    FeatherMic,
    FeatherFileText,
  },
};
</script>
