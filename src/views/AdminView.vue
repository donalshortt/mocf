<script>
	import TopBar from "../components/TopBar.vue"
	import AdminCard from "../components/AdminCard.vue"

	export default {
		name: 'Admin',
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
					this.date = response.data.date;
					this.name = response.data.name;
					this.id = response.data.id;
					this.players = response.data.players;
				})
			},
		},
		components: {
			AdminCard,
			TopBar,
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
	<div id="admin">
	
	<TopBar></TopBar>
	
	<div id="card_container">
		<AdminCard v-for="player in this.players" :ign=player.igns[0] :score=player.score :tag=player.tag :key=player.tag />
	</div>

	</div>
</template>

<style scoped>

</style>
