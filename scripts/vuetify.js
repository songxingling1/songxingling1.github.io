import { createVuetify } from "vuetify";
import colors from 'vuetify/lib/util/colors'
export default createVuetify({
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
})