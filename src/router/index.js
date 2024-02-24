import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '云课堂后台管理登陆页',
        component: () => import('@/pages/userLogin/UserLogin.vue'),
    },
    {
        path: '/manage',
        name: '云课堂后台管理首页',
        component: () => import('../pages/homePage/HomePage.vue'),
        children: [
            {
                path: 'web_config/home',
                name: '网站首页配置',
                component: () => import('@/componentsPage/homeConfig/HomeConfig.vue')
            }
        ],
    },
    {
        path: '/third_manage',
        name: '第三方配置首页',
        component: () => import('@/pages/thirdParty/ThirdParty.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;