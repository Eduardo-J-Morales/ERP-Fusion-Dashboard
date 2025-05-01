<script setup lang="ts">
import { ref } from 'vue'

const navigation = ref([
    { title: 'Inventory', to: '/dashboard/inventory' },
    { title: 'Sales', to: '/dashboard/sales' },
    { title: 'Employees', to: '/dashboard/employees' }
])

</script>

<template>
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item title="ERP Dashboard" subtitle="Enterprise Resource Planning"></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in navigation"
          :key="item.title"
          :to="item.to"
          :value="item"
        >{{ item.title }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
        <v-continer>
            <router-view></router-view>
        </v-continer>
    </v-main>
</v-layout>
</template>

<style scoped></style>
