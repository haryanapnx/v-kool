import Vue from "vue";
import Home from "./pages/Home.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Home)
}).$mount("#app");
