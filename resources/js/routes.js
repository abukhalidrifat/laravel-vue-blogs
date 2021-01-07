import HomeComponent from "./components/HomeComponent";

export const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/login',
        component: () => import(/*webpackChunkName: "login" */ "./components/LoginComponent")
    },
    {
        path: '/register',
        component: () => import(/*webpackChunkName: "login" */ "./components/RegisterComponent")
    },
    {
        path: '/category/:cat',
        component: () => import(/*webpackChunkName: "login" */ "./components/CategoryParamsComponent")
    },
    {
        path: '/dashboard/:id',
        component: () => import(/*webpackChunkName: "login" */ "./components/DashboardComponent")
    },
    {
        path: '/blog/:id',
        name: 'Blog',
        component: () => import(/*webpackChunkName: "login" */ "./components/ArticleComponent")
    },

]
