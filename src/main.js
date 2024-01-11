import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import './global.css'

const app = createApp(App);

const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:3080/"
});

app.provide('axios', axiosInstance);

app.use(createPinia());
app.use(router);

app.mount("#app");
