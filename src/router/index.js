import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/DashboardView.vue'),
        meta: { requireAuth: true },
        children: [
            { path: 'inventory', component: () => import('../views/InventoryView.vue')},
            { path: 'sales', component: () => import('../views/SalesView.vue')},
            { path: 'employees', component: () => import('../views/EmployeesView.vue')},
        ]
    },
    {path: '/', redirect: '/login'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requireAuth && !authStore.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router