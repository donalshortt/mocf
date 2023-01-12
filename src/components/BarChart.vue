<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
	name: 'BarChart',
	components: { Bar },
	computed: {
		chartData() {
			let labels = []
			let datasets = [ { data: [] } ]
			this.players.forEach((player) => {
				labels.push(player.igns[0]);
				datasets[0].data.push(player.score);
			})

			return { 
				labels,
				datasets
			}
		},
		chartOptions() {
			return {
				responsive: true
			}
		}

	},
	props: ['players'],
}
</script>

<template>
  <Bar
	ref="chart"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<style scoped>
	#my-chart-id {
		padding: 1em;
		background-color: rgba(0, 0, 0, .40);
		backdrop-filter: blur(5px);
		border-radius: .5em;
		text-align: center;
		color: var(--off-white);
		width: 20em;
		display: inline-block;
		margin: 2em;
		padding-bottom: 1em;
		-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		vertical-align: top;
	}
</style>
