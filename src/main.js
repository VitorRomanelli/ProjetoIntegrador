import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from "./plugins/vuetify";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  icon: true,
};

Vue.use(Toast, options);

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCYuM72M0K1BXuOJP7tluQwsoLDEqvhaok",
    libraries: "places",
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
