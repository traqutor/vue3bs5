<template>
  <div
      class="flex-fill d-flex flex-column"
  >
    <perfect-scrollbar class="d-flex flex-column h-100 w-100 position-absolute">
      <div class="mb-2 d-flex align-items-center pr-4">

        <div class="overflow-hidden mr-auto">
          <div class="text-truncate f-size-16 font-weight-middle">
            {{ getSelectedTemplate.name }}
          </div>
        </div>

        <div class="d-flex align-items-center ">
          <b-button class="btn-sm" @click="onCancelViewSelectedTemplate()">
            Cancel
          </b-button>
        </div>
      </div>

      <div class="d-flex flex-column flex-fill pt-1">
        <div class="flex-fill position-relative">
          <div class="d-flex flex-column h-100 w-100 position-absolute">
            <div class="ps-scrollbar ps-scrollbar-hidden ps">
              <div class="list-group list-group-flush overflow-hidden select-action-group mt-2 mr-4">

                <div v-for="(item, index) in getSelectedTemplate"
                     :key="index">
                  <div v-if="item.type"
                       class="border-bottom pb-1 mb-3 border-secondary-light">

                    <label v-if="item.type === 'boolean'"
                           class="toggle-input toggle-input-reverse toggle-input-success d-flex justify-content-between">
                      <input type="checkbox" name="age">
                      <div class="media text-primary">
                        <FeatherPatient class="f-icon-20 mr-2" />
                        <div class="media-body">{{ item.name }}</div>
                      </div>
                      <span class="input-icon f-icon-20">
                        <FeatherCircle />
                        <FeatherCheckCircle /> </span>
                    </label>

                    <div v-else class="media">
                    <span
                        class="mr-2 f-icon-20 f-size-16 text-center text-primary">{{ item.name && item.name.slice(0, 1)
                      }}</span>
                      <div class="media-body">
                        <div class="text-secondary f-size-13">{{ item.name }}</div>
                        <div contenteditable="true" class="shadow-none outline-none f-size-13 text-decoration-none">
                          <div class="input-group input-group-sm filter-control-group flex-grow-1">
                            <textarea
                                v-model="item.value"
                                type="text" class="form-control bg-light shadow-none">
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </perfect-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { SET_SELECTED_TEMPLATE_VIEW_MODE, TEMPLATE_VIEW_MODE } from "@/store/modules/template";
import FeatherPatient from "@/views/content/icons/FeatherPatient";
import FeatherCircle from "@/views/content/icons/FeatherCircle";
import FeatherCheckCircle from "@/views/content/icons/FeatherCheckCircle";

export default {
  name: "ViewSelectedTemplate",
  components: { FeatherCheckCircle, FeatherCircle, FeatherPatient },
  data() {
    return {
      tabActive: "quick"
    };
  },
  methods: {
    onCancelViewSelectedTemplate() {
      this.$store.commit(SET_SELECTED_TEMPLATE_VIEW_MODE, TEMPLATE_VIEW_MODE.TEMPLATES);
    }

  },
  computed: {
    ...mapGetters([
      "getSelectedTemplate"
    ])
  }
};
</script>
