<script>
	import Decision from './Decision.vue'

	import { getDecisions, store, decisions } from "../store.js"

	export default {
		name: 'Inbox',
		data() {
			return {
				store,
				decisions							
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

		<Decision ref="decision" v-for="decision in decisions" :ign=decision.ign :key=decision.ign />
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
