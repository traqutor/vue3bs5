import { createRouter, createWebHistory } from "vue-router";
import MainFrameView from "@/views/MainFrameView.vue";
import LoginView from "@/views/LoginView";
import NotFoundView from "@/views/NotFoundView";
import { isSignedIn } from "@/services/jwt.service";

const routes = [
  {
    path: "/",
    redirect: "/conversations",
    component: MainFrameView,
    children: [
      {
        path: "/tasks",
        name: "Tasks",
        redirect: "/tasks/taskList",
        meta: { auth: true },
        component: () => import("@/views/TasksView"),
        children: [
          {
            path: "/tasks/taskList",
            name: "Task List",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskListTab"),
          },
          {
            path: "/tasks/taskBoard",
            name: "Board",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskBoardTab"),
          },
          {
            path: "/tasks/taskMap",
            name: "Map",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskMapTab"),
          },
          {
            path: "/tasks/taskRaise",
            name: "Raise Task",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskRaiseTab"),
          },
          {
            path: "/tasks/taskManage",
            name: "Manage",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskManageTab"),
          },
          {
            path: "/tasks/taskProgress",
            name: "Progress",
            meta: { auth: true },
            component: () => import("@/views/tasks/TaskProgressTab"),
          },
        ],
      },
      {
        path: "/conversations",
        name: "Conversations",
        meta: { auth: true },
        component: () => import("@/views/ConversationsView"),
      },
      {
        path: "/incidents",
        name: "Incidents",
        meta: { auth: true },
        component: () => import("@/views/IncidentsView"),
      },
      {
        path: "/locate",
        name: "Locate",
        meta: { auth: true },
        component: () => import("@/views/LocateView"),
      },
      {
        path: "/alarms",
        name: "Alarms",
        meta: { auth: true },
        component: () => import("@/views/AlarmsView"),
      },
      {
        path: "/media",
        name: "Media",
        meta: { auth: true },
        component: () => import("@/views/MediaView"),
      },
      {
        path: "/patients",
        name: "Patients",
        meta: { auth: true },
        component: () => import("@/views/PatientsView"),
      },
      {
        path: "/sentinel",
        name: "Sentinel",
        meta: { auth: true },
        component: () => import("@/views/SentinelView"),
      },
      {
        path: "/switchboard",
        name: "Switchboard",
        meta: { auth: true },
        component: () => import("@/views/SwitchBoardView"),
      },
      {
        path: "/role_management",
        name: "Role Management",
        meta: { auth: true },
        component: () => import("@/views/RoleManagementView"),
      },
      {
        path: "/settings",
        name: "Settings",
        meta: { auth: true },
        component: () => import("@/views/SettingsView"),
        children: [
          {
            path: "/settings/roles",
            name: "Roles",
            component: () => import("@/views/settings/Roles"),
          },
          {
            path: "/settings/users",
            name: "Users",
            component: () => import("@/views/settings/Users"),
          },
          {
            path: "/settings/taskTypes",
            name: "Task Types",
            component: () => import("@/views/settings/TaskTypes"),
          },
          {
            path: "/settings/locations",
            name: "Locations",
            component: () => import("@/views/settings/Locations"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((route) => route.meta.auth);
  const IsSignedIn = isSignedIn();
  if (authRequired && !IsSignedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
