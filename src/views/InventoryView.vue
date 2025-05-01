<script setup lang="ts">
import { ref } from 'vue'

const headers = ref([
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Quantity', key: 'quantity' },
  { title: 'Price', key: 'price' },
  { title: 'Category', key: 'category' },
])

const items = ref([
  { id: 1, name: 'Laptop', quantity: 15, price: 999, category: 'Electronics' },
  { id: 2, name: 'Desk Chair', quantity: 20, price: 199, category: 'Furniture' },
])

</script>

<template>
</template>

<style scoped>
</style>
