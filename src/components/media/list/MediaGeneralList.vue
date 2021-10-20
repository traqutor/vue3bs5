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
          <th scope="col" class="pt-1 text-nowrap border-0">File type</th>
          <th scope="col" class="pt-1 text-nowrap border-0">Duration</th>
          <th scope="col" class="pt-1 text-nowrap border-0">Created</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item of thumbnails" :key="item.id">
          <td>
            <div class="d-flex align-items-center on-hover">
              <figure class="avatar avatar-md me-3 rounded overflow-hidden">
                <img
                    :src="`data:image/png;base64,${item.dataBase64}`"
                    alt="..."
                />
              </figure>
              <div class="media-body overflow-hidden">
                <div class="text-truncate">
                  {{ item.name }}
                </div>
              </div>
            </div>
          </td>
          <td class="text-nowrap">{{ item.name.substr(-3) }}</td>
          <td class="text-nowrap"> - </td>
          <td class="text-nowrap">{{ item.created }}</td>
        </tr>
        </tbody>
      </table>
    </perfect-scrollbar>
  </div>
</template>
<script>

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "MediaGeneralList",

  setup() {
    const store = useStore();
    const itemSizeClass = computed(() => store.getters.getMediaItemClass);

    const thumbnails = computed(() => store.getters.getMediaThumbnails);

    return {
      itemSizeClass,
      thumbnails,
    };
  },
};
</script>
