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
		setBarLabels(player) {
			this.chartData.labels.push(player.igns[0]);
			//console.log(this.chartData.datasets[0]);
			//this.chartData.datasets[0].push(player.score);
		},
		setData() {
			let data = []
			this.$props.players.forEach((player) => data.push(player.score));
			//this.chartData.datasets.push({ "data": data })
			this.chartData.datasets[0] = {"data": data}

			console.log("data!");
			console.log(this.chartData.datasets);
		}
	},
	beforeUpdate() {
		this.$props.players.forEach((player) => this.setBarLabels(player));
		this.setData();
		console.log(this.chartData.datasets[0]);
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






