<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
	name: 'BarChart',
	components: { Bar },
	data() {
		return {
			chartData: {
				labels: [ ],
				datasets: [ { data: [] } ]
			},
			chartOptions: {
				responsive: true
			}
		}
	},
	props: ['players'],
	methods: {
		setBarData() {
			this.chartData.datasets[0].data = []
			this.chartData.labels = []

			let data = []

			this.players.forEach((player) => {
				this.chartData.labels.push(player.igns[0]);
				data.push(player.score);
			})

			this.chartData.datasets[0].data = data
			console.log(this.chartData.datasets[0].data);
		}
	},
	beforeUpdate() {
		this.setBarData();
	}
}
</script>

<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>






