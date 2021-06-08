import {createRouter, createWebHistory} from 'vue-router';
import MainFrameView from '@/views/MainFrameView.vue';
import LoginView from '@/views/LoginView';
import NotFoundView from '@/views/NotFoundView';
import {isSignedIn} from "@/services/jwt.service";

const routes = [
    {
        path: '/',
        component: MainFrameView,
        children: [
            {
                path: '/tasks',
                name: 'Tasks',
                meta: { auth: true },
                component: () =>
                    import('@/views/TasksView'),
            },
            {
                path: '/conversations',
                name: 'Conversations',
                meta: { auth: true },
                component: () =>
                    import('@/views/ConversationsView'),
            },
            {
                path: '/incidents',
                name: 'Incidents',
                meta: { auth: true },
                component: () =>
                    import('@/views/IncidentsView'),
            },
            {
                path: '/locate',
                name: 'Locate',
                meta: { auth: true },
                component: () =>
                    import('@/views/LocateView'),
            },
            {
                path: '/alarms',
                name: 'Alarms',
                meta: { auth: true },
                component: () =>
                    import('@/views/AlarmsView'),
            },
            {
                path: '/media',
                name: 'Media',
                meta: { auth: true },
                component: () =>
                    import('@/views/MediaView'),
            },
            {
                path: '/patients',
                name: 'Patients',
                meta: { auth: true },
                component: () =>
                    import('@/views/PatientsView'),
            },
            {
                path: '/sentinel',
                name: 'Sentinel',
                meta: { auth: true },
                component: () =>
                    import('@/views/SentinelView'),
            },
            {
                path: '/switchboard',
                name: 'Switchboard',
                meta: { auth: true },
                component: () =>
                    import('@/views/SwitchBoardView'),
            },
            {
                path: '/role_management',
                name: 'Role Management',
                meta: { auth: true },
                component: () =>
                    import('@/views/RoleManagementView'),
            },
            {
                path: '/settings',
                name: 'Settings',
                meta: { auth: true },
                component: () =>
                    import('@/views/SettingsView'),
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

router.beforeEach((to, from, next) => {
    const authRequired = to.matched.some(route => route.meta.auth);
    const IsSignedIn = isSignedIn();
    if (authRequired && !IsSignedIn) {
        next("/login");
    } else {
        next();
    }
});

export default router;
