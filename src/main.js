import Vue from 'vue'

import Index from './views/IndexView.vue'
import router from './router'

import 'bootstrap'
import $axios from './plugins/axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'uno.css'
import 'reset-css'
import './assets/main.css'

Vue.prototype.$axios = $axios

const app = new Vue({
	router,
	render: h => h(Index),
})

app.$mount('#app')
