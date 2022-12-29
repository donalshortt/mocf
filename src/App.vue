<script>
import Card from "./components/Card.vue"
import TopBar from "./components/TopBar.vue"
import Shared from "./shared.js"

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

		setGameState() {
			this.fetchGameData().then((response) => {
				if (!Shared.deepEqual(this.$data, response.data)) {
					console.log("App rerendering!");
					this.date = response.data.date;
					this.name = response.data.name;
					this.id = response.data.id;
					this.players = response.data.players;
				}
			})
		},
	},
	components: {
		Card,
		TopBar
	},
	mounted() {
		this.setGameState();

		let updateData = () => {
			this.setGameState();
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
		<Card v-for="player in this.players" :ign=player.igns[0] :score=player.score :tag=player.tag :key=player></Card>
	</div>
	<!--<div class="wrapper">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
	</div>-->
	</div>
</template>

<style scoped>

#card_container {
	text-align: center;
}

</style>
