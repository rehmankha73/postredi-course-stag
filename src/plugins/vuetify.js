import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                breakpoint: {
                    thresholds: {
                        xs: 340,
                        sm: 770,
                        md: 800,
                        lg: 1280,
                    },
                },
            },
        },

    }
});
