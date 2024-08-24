import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'preline/preline'
import "tailwindcss/tailwind.css"
import './assets/css/index.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
// import { required, email } from '@vee-validate/rules';
// defineRule('required', required);
// defineRule('email', email);


createApp(App).use(store).use(router).mount('#app')
createApp(App).component('Field', Field);
createApp(App).component('Form', Form);
createApp(App).component('ErrorMessage', ErrorMessage);
