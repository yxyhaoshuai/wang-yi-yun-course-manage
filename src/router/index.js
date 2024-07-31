import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: '云课堂后台管理登陆页',
        component: () => import('@/pages/BossPage/BossPage.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;