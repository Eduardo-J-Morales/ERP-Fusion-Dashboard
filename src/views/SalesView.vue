<template>
  <v-card>
    <v-card-title>Sales Overview</v-card-title>
    <apexchart
    type="bar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const series = ref([{
  name: 'Sales',
  data: [45000, 67000, 72000, 89000]
}])

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350
  },
  xaxis: {
    categories: ['#1 Week', '#2 Week', '#3 Week', '#4 Week']
  }
})
</script>
