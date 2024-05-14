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
	methods: {
		updateData() {
			setGameState();
		},
		pollData() {
			this.updateData();
			setTimeout(this.pollData, 15000);
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.pollData();
		})
	},
	watch: {
		'store.players': {
			handler() {
				this.$nextTick(() => {
					if (this.$refs.card && this.$refs.card.length) {
						this.$refs.card.forEach(cardComponent => {
							cardComponent.setModifiers();
						});
					}
				});
			},
			immediate: true,
		}
	}
}

</script>

<template>
	<div id="main">
	
	<TopBar @gameSelected="this.updateData"></TopBar>

	<div id="card_container">
		<Card ref="card" v-for="player in store.players" :ign=player.ign :score=player.score :tag=player.tag :key=player.tag />
	</div>

	<BarChart ref="barchart" :players=store.players />
	<Line ref="linechart" :players=store.players :key=store.date />

	</div>
</template>

<style scoped>

#card_container {
	text-align: center;
	padding-top: 3em;
}

</style>
