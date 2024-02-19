import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/homePage/HomePage.vue';
import HomeConfig from "@/componentsPage/homeConfig/HomeConfig.vue";
import UserLogin from "@/pages/userLogin/UserLogin.vue";
import ThirdParty from "@/pages/thirdParty/ThirdParty.vue";

const routes = [
    {
        path: '/',
        name: '云课堂后台管理登陆页',
        component: UserLogin,
    },
    {
        path: '/manage',
        name: '云课堂后台管理首页',
        component: HomePage,
        children: [
            {
                path: '/manage/web_config/home',
                name: '网站首页配置',
                component: HomeConfig
            }
        ],
    },
    {
        path: '/third_manage',
        name: '第三方配置首页',
        component: ThirdParty,
        children: [
            {
                path: '/third_manage/home',
                name: '网站首页配置',
                component: HomeConfig
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;