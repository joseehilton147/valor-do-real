import Vue from 'vue'

import Index from './views/Index.vue'
import router from './router'

import './assets/main.css'

new Vue({
	router,
	render: h => h(Index),
}).$mount('#app')
