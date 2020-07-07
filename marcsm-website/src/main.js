import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VueStar from 'vue-star'
import FlatSurfaceShader from 'vue-flat-surface-shader'
// import VueDarkMode from "@growthbunker/vuedarkmode";

// Vue.component('VueStar', VueStar)

Vue.use(BootstrapVue)
Vue.use(FlatSurfaceShader)
    // Vue.use(VueDarkMode);

// import Navigation from './components/Navbar.vue'
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

new Vue({
    render: h => h(App)
}).$mount('#app')