import { defineStore } from 'pinia'
import { Store } from 'vuex'

interface User {
    username: string;
    role: 'admin' | 'manager' | undefined;
  }
  
  interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
  }
  
  interface AuthActions {
    login: (username: string) => void;
    logout: () => void;
  }
  
  interface AuthGetters {
    currentRole: (state: AuthState) => 'admin' | 'manager' | undefined;
  }
  

export const useAuthStore: Store = defineStore('auth',  {
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
            this.isAuthenticated = true
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