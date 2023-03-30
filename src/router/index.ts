import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Trending from "@/views/Trending.vue";
import Quiz from "@/views/Quiz.vue";

const routes = [
    {
        path: '/',
        component: Home
    },{
        path:'/trending',
        component: Trending
    },{
        path: '/quiz',
        component: Quiz
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})