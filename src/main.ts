import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);
app.mount('#app');
