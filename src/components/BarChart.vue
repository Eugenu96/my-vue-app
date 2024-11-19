<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Pie bar for product without value

export default {
    name: 'BarChart',
    components: { Bar, },
    data() {
        return {
            // chartData: {
            //     labels: ['Kikocalory', 'Carbohydrates', 'Proteins', 'Fats'],
            //     datasets: [
            //         {
            //             label: 'Блюдо',
            //             data: [350, 23, 67, 13],
            //             backgroundColor: [
            //                 'rgb(20, 189, 255)',
            //                 'rgb(255, 99, 132)',
            //                 'rgb(54, 162, 235)',
            //                 'rgb(255, 205, 86)'
            //             ],
            //         }
            //     ],
            //     hoverOffset: 4
            // }
        }
    },
    computed: {
        chartData() {
            return {
                labels: this.chart_data.labels,
                datasets: [
                    {
                        label: this.chart_data.labels,
                        data: this.chart_data.data,
                        backgroundColor: this.chart_data.bgcolors,
                    }
                ],
                hoverOffset: 4
            }
        }
    },
    props: {
        chart_data: {
            type: Object,
            default: {
                data: [10],
                labels: ["kcal"],
                bgcolors: ["rgb(20, 189, 255)"],
            }
        },
    },
    methods: {
    },
}
</script>

<template>
    <Bar id="my-chart-id" :data="chartData" />
</template>
