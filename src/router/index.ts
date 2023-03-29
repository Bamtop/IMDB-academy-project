import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Trending from "@/views/Trending.vue";

const routes = [
    {
        path: '/',
        component: Home
    },{
        path:'/trending',
        component: Trending
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})