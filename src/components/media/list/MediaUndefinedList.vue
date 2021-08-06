<template>
  <div class="flex-fill position-relative overflow-hidden pt-3">
    <perfect-scrollbar
      class="d-flex flex-column position-absolute h-100 w-100 pe-3"
    >
      <table
        v-for="t in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="t"
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
          <tr v-for="item of items" :key="item.id" @click="index = item.id">
            <td>
              <div class="d-flex align-items-center on-hover">
                <figure class="avatar avatar-md me-3 rounded overflow-hidden">
                  <img :src="item.src" />
                  <figcaption>
                    <h6>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h6>
                    <div>12:48 <small>am</small> • Today</div>
                  </figcaption>
                </figure>
                <div class="media-body overflow-hidden">
                  <div class="text-truncate font-weight-middle">
                    Photo file name {{ item.id }}
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
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>
  </div>
</template>
<script>
import MediaItemDropDown from "@/components/media/item/MediaItemDropDown";
export default {
  name: "MediaUndefinedList",
  data: function () {
    return {
      items: [
        {
          id: 0,
          title: "In nature, nothing is perfect and everything is perfect",
          description: "Photo by Lucas",
          src: "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
        },
        {
          id: 1,
          title: "a beautiful mountain view",
          description: "Photo by Facundo",
          src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
        },
      ],
      index: null,
    };
  },
  components: { MediaItemDropDown },
};
</script>
