<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
	name: 'LineChart',
	components: { Line },
	computed: {
		chartData() {
			let labels = []
			let datasets = []

			this.players.forEach((player, index) => {
				if (datasets.some(data.label === player.igns[0])) {
					datasets[index].data.push(player.score);
				} else {
					datasets.push({data: [ player.score ]});
					labels.push(player.igns[0]);
				}
			})

			return { 
				labels,
				datasets
			}
		},
		chartOptions() {
			return {
				responsive: true,
				indexAxis: "y",
				color: "#a6a6a6",
				scales: {
					x: {
						ticks: {
							color: "#a6a6a6"
						}
					},
					y: {
						ticks: {
							color: "#a6a6a6"
						}
					}
				}
			}
		}

	},
	props: ['players'],
}
</script>

<template>
  <Line
	ref="chart"
    id="lineChartIndividual"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<style scoped>
	#lineChartIndividual {
		padding: 1em;
		background-color: rgba(0, 0, 0, .40);
		backdrop-filter: blur(5px);
		border-radius: .5em;
		text-align: center;
		color: var(--off-white);
		margin: 2em;
		padding-bottom: 1em;
		-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
		vertical-align: top;
	}
</style>
