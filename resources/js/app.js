require('./bootstrap');

import { createApp, h } from 'vue';
import { createPinia } from 'pinia';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from '@/Shared/Layout';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

createInertiaApp({
    title: title => title,
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout
        return page
    },
    async setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .mixin({
                methods: {
                    route: window.route,
                    plural(count, words) {
                        var cases = [2, 0, 1, 1, 1, 2];
                        return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
                    },
                },
            })
            .use(plugin)
            .use(Toast, {
                maxToasts: 10,
                newestOnTop: true,
            })
            .use(createPinia());

        app.config.globalProperties.$collect = window.collect;
        app.config.globalProperties.$alpine = window.Alpine;
        app.config.globalProperties.$axios = window.axios;
        app.config.globalProperties.$toast = useToast();
        app.config.globalProperties.$lodash = window._;

        await app.mount(el);

        return app;
    },
});

window.toast = useToast();

InertiaProgress.init({
    delay: 250,
    color: '#000',
    includeCSS: true,
    showSpinner: false,
});