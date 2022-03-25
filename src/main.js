import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import Login from './pages/Login.vue'
import Main from './pages/Main.vue'
import MemberRegister from './pages/MemberRegister.vue'
import App from './App.vue'
//import router from './router'
import PrimeVue from 'primevue/config';

// import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import 'primeflex/primeflex.css'                           //icons

const app = createApp(App);

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: 
      [
        { path: '/', component: Main },
        { path: '/login', component: Login },
        { path: '/memberregis', component: MemberRegister },
    ]
    , // short for `routes: routes`
  })

app.use(PrimeVue);
app.use(router)
app.mount('#app')
