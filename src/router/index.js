import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/homePage/HomePage.vue';
import HomeConfig from "@/componentsPage/homeConfig/HomeConfig.vue";
import UserLogin from "@/pages/userLogin/UserLogin.vue";

const routes = [
    {
        path: '/',
        name: '云课堂后台管理首页',
        component: HomePage,
        children: [
            {
                path: '/web_config/home',
                name: '网站首页配置',
                component: HomeConfig
            }
        ],
    },
    {
        path: '/login',
        name: '云课堂后台管理登陆页',
        component: UserLogin,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;