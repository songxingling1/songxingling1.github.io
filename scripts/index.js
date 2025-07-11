import { createApp } from "vue";
import vuetify from './vuetify'
import { createRouter, createWebHashHistory } from "vue-router";
import App from '@/App'
import NotFound from '@/NotFound'
import Home from '@/Home'
const routes = [
    { path: '/', component: Home},
    { path: '/:path(.*)', component: NotFound}
]
createApp(App).use(vuetify).use(createRouter({
    history: createWebHashHistory(),
    routes
})).mount('#app')