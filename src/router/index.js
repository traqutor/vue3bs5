import {createRouter, createWebHistory} from 'vue-router';
import MainFrameView from '@/views/MainFrameView.vue';
import LoginView from '@/views/LoginView';
import NotFoundView from '@/views/NotFoundView';

const routes = [
    {
        path: '/',
        component: MainFrameView,
        children: [
            {
                path: '/tasks',
                name: 'Tasks',
                component: () =>
                    import('@/views/TasksView'),
            },
            {
                path: '/conversations',
                name: 'Conversations',
                component: () =>
                    import('@/views/ConversationsView'),
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/:catchAll(.*)',
        component: NotFoundView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
