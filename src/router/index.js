import Vue from 'vue'
import VueRouter from 'vue-router';
import Router from 'vue-router'
import Home from '../components/Home.vue';

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },            
                             
    {
        path: '/shopping',
        name: 'Shopping',
        component: () => import('../components/Shopping.vue')
    },        
    {
        path: '/404*',
        name: 'Page404',
        component: () => import('../components/NotFound.vue')
    },       
    {
        path: '*',
        redirect: '/404'
    },                       
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

