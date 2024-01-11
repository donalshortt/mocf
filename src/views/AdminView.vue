<script>
	import TopBar from "../components/TopBar.vue"
	import AdminCard from "../components/AdminCard.vue"

	import { setGameState, store } from "../store.js"

	export default {
		name: 'Admin',
		data() {
			return {
				store
			}
		},
		components: {
			AdminCard,
			TopBar,
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
	<div id="admin">
	
	<TopBar></TopBar>
	
	<div id="card_container">
		<AdminCard v-for="player in store.players" :ign=player.igns[0] :score=player.score :tag=player.tag :key=player.tag />
	</div>

	</div>
</template>

<style scoped>

</style>
