<script lang="ts">
import Card from "./components/Card.vue"

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
		Card
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
	<div id="jomama">
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

#jomama {
	background-image: url("./assets/18971522.jpg");
	background-size: cover;
	background-image: no-repeat;
	background-position: center;
	height: 100%;
	width: 100%;
	margin: 0;
}

</style>
