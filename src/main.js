import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "@/App.vue";
import router from "@/plugins/router";
import store from "./store";
import "@/style.css";
import i18n from "@/lang";
const app = createApp(App);

app.use(router).use(store).use(i18n)

app.mount("#app");
