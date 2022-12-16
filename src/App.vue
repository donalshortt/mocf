<script lang="ts">
import Card from "./components/Card.vue"
import TopBar from "./components/TopBar.vue"

export default {
	name: 'App',
	data() {
		return {
			date: "0.0.0",
			name: "name_unset",
			id: "42c0ff06-1d95-4ef7-bad5-d8e28fa2473b",
			players: []
		}
	},
	methods: {
		async fetchGameData() {
			return await this.$axios.get('/api/game_data', { params: { id: this.id } });
		},
		
		extractGameState() {
			this.fetchGameData().then((response) => {
				this.date = response.data.date;
				this.name = response.data.name;
				this.id = response.data.id;
				this.players = response.data.players;
			})
		},
	},
	components: {
		Card,
		TopBar
	},
	mounted() {
		this.extractGameState();

		let updateData = () => {
			this.extractGameState();
			setTimeout(updateData, 15000);
		};

		setTimeout(updateData, 15000);
	}
}

</script>

<template>
	<div id="main">
	
	<TopBar></TopBar>

	<Card v-for="player in this.players" :ign=player.igns[0] :score=player.score :key=player></Card>

	<!--<div class="wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</div>-->
	</div>
</template>

<style scoped>

#main {
}

</style>
