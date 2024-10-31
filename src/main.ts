import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { createI18n } from "vue-i18n";
import { znCn, en } from "./lang";
const messages = {
  znCn,
  en,
};

const i18n = createI18n({
  legacy: false, //vue3组合api必须加
  locale: "znCn",
  messages,
});
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
