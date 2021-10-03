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
        path: '/payment',
        name: 'Payment',
        component: () => import('../components/instantPayment.vue')
    },           
    {
        path: '/payment/Food',
        name: 'PaymentFood',
        component: () => import('../components/instantPayment.vue')
    },      
    {
        path: '/payment/Transport',
        name: 'PaymentTransport',
        component: () => import('../components/instantPayment.vue')
    },      
    {
        path: '/payment/Entertaiment',
        name: 'PaymentEntertaiment',
        component: () => import('../components/instantPayment.vue')
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

