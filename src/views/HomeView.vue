<script>
import Card from "../components/Card.vue"
import TopBar from "../components/TopBar.vue"
import BarChart from "../components/BarChart.vue"
import Line from "../components/LineChart.vue"

import { setGameState, store } from "../store.js"

export default {
	name: 'Home',
	data() {
		return {
			store
		}
	},
	components: {
		Card,
		TopBar,
		BarChart,
		Line
	},
	mounted() {
		setGameState();

		let updateData = () => {
			setGameState();
			setTimeout(updateData, 15000);
		};

		setTimeout(updateData, 15000);
	}
}

</script>

<template>
	<div id="main">
	
	<TopBar></TopBar>

	<div id="card_container">
		<Card v-for="player in store.players" :ign=player.igns[0] :score=player.score :tag=player.tag :key=player.tag />
	</div>

	<BarChart ref="barchart" :players=store.players />
	<Line ref="linechart" :players=store.players :key=store.date />

	</div>
</template>

<style scoped>

#card_container {
	text-align: center;
}

</style>
