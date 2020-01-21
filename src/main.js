import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import Vuelidate from "vuelidate";
import uuid from "vue-uuid";

Vue.use(uuid);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
