import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "./plugins/axios";

import './global.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(axios, {
	baseUrl: "http://127.0.0.1:3080/",
})

app.mount("#app");
