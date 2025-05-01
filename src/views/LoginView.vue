<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = () => {
    authStore.login(username.value, password.value)
    console.log('auth')
    router.push('/dashboard')
    console.log('push')
}
</script>
<template>
    <v-container class='fill-height'>
        <v-row justify='center'>
            <v-col cols='12' md='6'>
                <v-card elevation="elevation-12">
                    <v-toolbar>
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent='handleLogin'>
                            <v-text-field
                                v-model='username'
                                label='Username'
                                required
                            > </v-text-field>
                            <v-text-field
                                v-model='password'
                                label='Password'
                                required
                            >
                            </v-text-field>
                            <v-btn type="submit" color='primary'>Login</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
</style>
