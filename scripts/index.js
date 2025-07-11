import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createRouter, createWebHashHistory } from "vue-router";
import colors from 'vuetify/lib/util/colors'
import App from '@/App'
import NotFound from '@/NotFound'
import Home from '@/Home'
const routes = [
    { path: '/', component: Home},
    { path: '/:path(.*)', component: NotFound}
]
createApp(App).use(createVuetify({
    theme: {
        defaultTheme: 'system',
        themes: {
            light:{
                dark: false,
                colors: {
                    primary: colors.grey.darken4,
                    secondary: colors.grey.darken2,
                    success: colors.green.darken1,
                    info: colors.grey.darken2,
                    warning: colors.yellow.darken1,
                    error: colors.red.darken1,
                    background: colors.grey.lighten3
                }
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.grey.darken4,
                    secondary: colors.grey.darken1,
                    success: colors.green.darken1,
                    info: colors.grey.darken1,
                    warning: colors.yellow.darken1,
                    error: colors.red.darken1,
                    background: colors.grey.darken3,
                    surface: colors.grey.darken2
                }
            }
        }
    }
})).use(createRouter({
    history: createWebHashHistory(),
    routes
})).mount('#app')