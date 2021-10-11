import { createApp } from "vue";
import Popper from "vue3-popper";
import VCalendar from "v-calendar";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import VueEasyLightbox from "vue-easy-lightbox";
import "bootstrap";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueSmoothScroll);
app.use(VueEasyLightbox);
app.use(VCalendar, {});
app.component("Popper", Popper);
app.mount("#app");
