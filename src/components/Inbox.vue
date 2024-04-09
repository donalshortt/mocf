<script>
	import Decision from './Decision.vue'

	import { store } from "../store.js"

	export default {
		name: 'Inbox',
		data() {
			return {
				store
			}
		},
		components: {
			Decision
		},
	}
</script>

<template>
	<div id="inbox">
		<h1>Inbox</h1>

		<Decision ref="decision" v-for="player in store.players" :ign=player.ign :score=player.score :tag=player.tag :key=player.tag />
	</div>
</template>

<style scoped>
	
#inbox {
	background-color: rgba(0, 0, 0, .40);
	backdrop-filter: blur(5px);
	text-align: center;
	color: var(--off-white);
	position: fixed;
	top: 4em;
	right: 2em;
	height: 90vh;
	width: 20vw;
	-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	z-index: -1;
}
</style>
