<script>
	import Decision from './Decision.vue'
	import axios from '../axios-config'

	import { store } from "../store.js"

	export default {
		name: 'Inbox',
		data() {
			return {
				store,
				decisions: []
			}
		},
		methods: {
			async getDecisions() {
				console.log("getting decisions");
				const decisions = await axios.get('/api/decisions', { params: { id: store.id }});
				this.decisions = decisions.data;
				console.log(decisions.data);
			},
			pollData() {
				this.getDecisions();
				setTimeout(this.pollData, 15000);
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.pollData();
			})
		},
		components: {
			Decision
		},
	}
</script>

<template>
	<div id="inbox">
		<h1>Inbox</h1>

		<Decision ref="decision" v-for="decision in decisions" :ign=decision.ign :question=decision.question :options=decision.options :key=decision.ign />
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
