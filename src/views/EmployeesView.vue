<template>
    <v-card>
      <v-card-title>
        Employees
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search employees"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
  
      <v-data-table
        :headers="headers"
        :items="employees"
        :search="search"
        :items-per-page="5"
      >
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)">
            {{ item.status }}
          </v-chip>
        </template>
      </v-data-table>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const search = ref('')
  
  const headers = ref([
    { title: 'Name', key: 'name' },
    { title: 'Position', key: 'position' },
    { title: 'Department', key: 'department' },
    { title: 'Status', key: 'status' },
  ])
  
  const employees = ref([
    { name: 'John Doe', position: 'Sales Manager', department: 'Sales', status: 'Active' },
    { name: 'Jane Smith', position: 'Developer', department: 'IT', status: 'On Leave' },
    { name: 'Mike Johnson', position: 'HR Specialist', department: 'HR', status: 'Active' },
  ])
  
  const getStatusColor = (status) => {
    return status === 'Active' ? 'green' : 'orange'
  }
  </script>