import { createApp } from 'vue';
import App from './App.vue';

// add the vue router
import router from './router';

// this imports bootstrap and makes it referenceable in component templates, etc.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
