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
				labels: [ 'January', 'February', 'March' ],
				datasets: [ { data: [40, 20, 12] } ]
			},
			chartOptions: {
				responsive: true
			}
		}
	},
	props: ['players'],
	methods: {
		setLabels() {
			for (player of this.players) {
				this.chartData.labels.push(player.igns[0]);
				console.log("waaaow");
			}
		},
		setData() {
			let data = []
			for (player of this.players) {
				data.push(player.score);
			}

			this.chartData.datasets.push({ data })
		}
	},
	mounted() {
		console.log(this.players.data);
		this.setLabels();
		this.setData();
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






