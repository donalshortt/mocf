<script>
	import TopBar from "../components/TopBar.vue"
	import AdminCard from "../components/AdminCard.vue"
	import Inbox from "../components/Inbox.vue"

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
			Inbox,
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
	<div id="admin">
	
	<TopBar @gameSelected="this.updateData"></TopBar>
	
	<div id="card_container">
		<AdminCard ref="card" v-for="player in store.players" :ign=player.ign :score=player.score :tag=player.tag :key=player.tag />
	</div>

	<Inbox />

	</div>
</template>

<style scoped>

#card_container {
	margin-right: 22vw;
	padding-top: 3em;
}

</style>
