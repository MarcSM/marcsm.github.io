import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import vBlur from 'v-blur'
import App from './App.vue'
// import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VueStar from 'vue-star'
import FlatSurfaceShader from 'vue-flat-surface-shader'
// import VueDarkMode from "@growthbunker/vuedarkmode";

// Vue.component('VueStar', VueStar)

Vue.use(BootstrapVue)
Vue.use(FlatSurfaceShader)
Vue.use(vBlur)
    // Vue.use(VueDarkMode);

// var tableActions = require('./components/tables/partials/Actions.vue')

Vue.component('custom-header', require('./components/CustomHeader.vue').default);
Vue.component('navigation', require('./components/Navbar.vue').default);
Vue.component('custom-footer', require('./components/Footer.vue').default);

// Sections
Vue.component('section-about', require('./components/sections/About.vue').default);
Vue.component('section-projects', require('./components/sections/Projects.vue').default);

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
    render: h => h(App)
}).$mount('#app')