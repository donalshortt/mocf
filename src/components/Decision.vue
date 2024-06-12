<script>
	import BigButton from './BigButton.vue'

	export default {
		name: 'Decision',
		data() {
			return {
				decisionState: 'IsNewIGN',
			}
		},
		props: ['ign', 'question', 'options'],
		components: { BigButton },
		methods: {
			decide(option) {
				if (option == "SelectOldIGN") {
					this.decisionState = "SelectOldIGN";
				} else if (option == "Confirm") {
					this.decisionState = "Confirm"
				}
			}
		},
	}

</script>

<template>
	<div v-if="this.decisionState == 'IsNewIGN'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
		<BigButton @click="decide" :option="option" v-for="option in options" :key=option />
	</div>

	<div v-if="this.decisionState == 'SelectOldIGN'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
	</div>

	<div v-if="this.decisionState == 'Confirm'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
	</div>
</template>

<style scoped>

#decision {
	margin: auto;
	width: 90%;
	height: 20%;
	border-top: 6px groove rgba(0, 0, 0, .40);
	padding: .25em;
}

button {
	cursor: pointer;
	margin: 1em;
}

</style>
