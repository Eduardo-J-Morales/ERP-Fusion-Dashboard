<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')

const headers = ref([
    {title: "ID", key: "id"},
    {title: "Name", key: "name"},
    {title: "Quantity", key: "quantity"},
    {title: "Price", key: "price"},
    {title: "Category", key: "category"}
])

const items = ref([
  { id: 1, name: 'Laptop', quantity: 15, price: 999, category: 'Electronics' },
  { id: 2, name: 'Desk Chair', quantity: 20, price: 199, category: 'Furniture' }
])

</script>

<template>
    <v-card>
        <v-card-title>
            Inventory Managemnet
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            single-line
            hide-details
        >
        </v-data-table>
    </v-card>
</template>

<style scoped>
</style>
