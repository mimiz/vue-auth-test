import VueKeycloakJs from "@dsb-norge/vue-keycloak-js";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import DevNote from "@/components/DevNote.vue";
import DefaultPageLayout from "@/components/Layout/DefaultPageLayout.vue";
import { component as VueCodeHighlight } from "vue-code-highlight";
import "vue-code-highlight/themes/duotone-sea.css";

Vue.config.productionTip = false;
Vue.use(VueCodeHighlight);
Vue.component("vue-code-highlight", VueCodeHighlight);
Vue.component("dev-note", DevNote);
Vue.component("default-page-layout", DefaultPageLayout);
Vue.use(VueKeycloakJs, {
  init: {
    // Use 'login-required' to always require authentication
    // If using 'login-required', there is no need for the router guards in router.js
    onLoad: "check-sso"
  },
  config: {
    url: "http://localhost:8080/auth",
    clientId: "vue1",
    realm: "demo-vue"
  },
  onReady: keycloak => {
    store.dispatch("authentication/login", {
      keycloak,
      user: Vue.prototype.$keycloak
    });

    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
