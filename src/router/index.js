import {createRouter, createWebHistory} from 'vue-router';
import MainFrame from '@/views/MainFrame.vue';

const routes = [
    {
        path: '/',
        component: MainFrame,
    },
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
