import { createApp } from "vue";
import vuetify from './vuetify'
import { createRouter, createWebHashHistory } from "vue-router";
import App from '@/App'
import NotFound from '@/NotFound'
import Home from '@/Home'
import Notice from '@/Notice'
const routes = [
    { path: '/', components: {default: Home,side:Notice}},
    { path: '/:path(.*)', components: {default: NotFound,side:Notice}}
]
createApp(App).use(vuetify).use(createRouter({
    history: createWebHashHistory(),
    routes
})).mount('#app')