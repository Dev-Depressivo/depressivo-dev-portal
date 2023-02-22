import { createApp } from 'vue';

import App from './App.vue';
import Router from './router';
import VueWritter from 'vue-writer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css';

createApp(App)
    .use(Router)
    .use(VueWritter)
    .mount('#app');
