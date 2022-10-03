import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/IndexView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: import.meta.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
		},
	],
})

export default router
