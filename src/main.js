import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

import './global.css'

const app = createApp(App);

const axiosInstance = axios.create({
	baseURL: `${window.location.protocol}//${window.location.hostname}:8080/`
});

app.provide('axios', axiosInstance);

app.use(createPinia());
app.use(router);

app.mount("#app");
