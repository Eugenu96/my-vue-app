<template>
    <Pie id="my-chart-id" :data="chartData" />
</template>

<script>

import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

// Pie bar for product without value

export default {
    name: 'PieChart',
    components: { Pie },
    data() {
        return {

        }
    },
    computed: {
        chartData() {
            return {
                labels: ['Carbohydrates', 'Proteins', 'Fats'],
                datasets: [
                    {
                        label: this.selectedProduct.name,
                        data: [parseFloat(this.selectedProduct.carbohydrates),
                        parseFloat(this.selectedProduct.proteins),
                        parseFloat(this.selectedProduct.fats)],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                    }
                ],
                hoverOffset: 4
            }
        }
    },
    props: {
        selectedProduct: {
            type: Object,
            default: {
                id: 0,
                name: "Default name",
                category: "",
                description: "",
                kilocalories: 0,
                carbohydrates: 33,
                proteins: 33,
                fats: 33,
                units: 0
            }
        }
    }
}
</script>