import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',  {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),
    actions: {
        login(username) {
            this.user = {
                username,
                role: username === 'admin' ? 'admin' : 'manager'
            }
        },
        logout() {
            this.user = null
            this.isAuthenticated = false
        }
    },
    getters: {
        currentRole: (state) => state.user?.role 
    }
})