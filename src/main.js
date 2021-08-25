import { createApp } from "vue";
import "bootstrap";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import VueEasyLightbox from "vue-easy-lightbox";

import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueSmoothScroll);
app.use(VueEasyLightbox);
app.mount("#app");
