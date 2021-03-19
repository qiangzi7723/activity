import Vue from 'vue'
import VueRouter, {
	RouteConfig
} from 'vue-router'
import Home from '../views/Home.vue'
import ls from '@/adapter/ls'
import { nextTick } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array < RouteConfig > = [{
		path: '/home',
		name: 'Home',
		component: Home
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


export default router