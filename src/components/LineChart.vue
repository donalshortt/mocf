<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
	name: 'LineChart',
	components: { Line },
	computed: {
		chartData() {
			let labels = ["score", "score"]
			let datasets = []

			// for each player in players
			// if player is already in the dataset, push their new data to them
			// else if player does not exist, add them to the list and then also add their data

			this.players.forEach((player, index) => {
				if (datasets.some(data => data.label === player.igns[0])) {
					console.log(`Already contains: ${player.igns[0]}`)
					datasets[index].data.push(player.score);
				} else {
					console.log(`New data!`);
					datasets.push(
					{
						data: [ player.score ],
						backgroundColor: "white",
						label: String(player.igns[0])
					}
					);

					datasets[index].data.push( Math.floor(Math.random() * 2000) )
				}
			})

			console.log(datasets);

			return { 
				labels,
				datasets
			}
		},
		chartOptions() {
			return {
				responsive: true,
				mode: 'nearest',
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
	v-show="false"
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
