import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import vBlur from 'v-blur'
import App from './App.vue'
import Router from 'vue-router';

// import VBScrollspyPlugin from 'bootstrap-vue'
// Vue.use(VBScrollspyPlugin)

// import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VueStar from 'vue-star'
import FlatSurfaceShader from 'vue-flat-surface-shader'
// import VueDarkMode from "@growthbunker/vuedarkmode";

// Vue.component('VueStar', VueStar)

try {
    window.$ = window.jQuery = require('jquery');

} catch (e) {}

Vue.use(BootstrapVue)
Vue.use(FlatSurfaceShader)
Vue.use(vBlur)
    // Vue.use(VueDarkMode);

// var tableActions = require('./components/tables/partials/Actions.vue')

// Pages
Vue.component('home', require('./Home.vue').default);
Vue.component('plugins', require('./Plugins.vue').default);

// Components
Vue.component('custom-header', require('./components/CustomHeader.vue').default);
Vue.component('navigation', require('./components/Navbar.vue').default);
Vue.component('custom-footer', require('./components/Footer.vue').default);

// Sections
Vue.component('section-about', require('./components/sections/About.vue').default);
Vue.component('section-projects', require('./components/sections/Projects.vue').default);

// Routes
Vue.use(Router);

import Home from './Home.vue';
import Plugins from './Plugins.vue';

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/plugins',
            name: 'plugins',
            component: Plugins
        }
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () =>
        //         import ('./views/About.vue'),
        //     meta: {
        //         authRequired: true
        //     }
        // },
        // {
        //     path: '/menu',
        //     name: 'menu',
        //     component: () =>
        //         import ('./views/Menu.vue')
        // },
        // {
        //     path: '/sign-in',
        //     name: 'signin',
        //     component: () =>
        //         import ('./views/Signin.vue')
        // },
        // {
        //     path: '/join',
        //     name: 'join',
        //     component: () =>
        //         import ('./views/Join.vue')
        // }
    ]
});

// import navigation from './components/Navbar.vue'
// import Footer from './components/Footer.vue'

// Vue.use(Navbar)
// Vue.use(Footer)

// Vue.component('custom-navbar', require('./components/Navbar.vue'));
// Vue.component('footer', require('./components/Footer.vue'));

// var app = new Vue({
//     el: '#app',
//     render: h => h(App),
//     components: {
//         Navigation,
//         Footer
//     }
// });

Vue.config.devtools = true;

// new Vue({ el: '#app' })

// var app = new Vue({
//     el: '#app',
//     // i18n: i18n
// });

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')