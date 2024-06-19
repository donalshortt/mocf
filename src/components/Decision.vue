<script>
	import BigButton from './BigButton.vue'
	import { store } from "../store.js"

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
			decideIsNewIGN(option) { 
				switch (option) {
					case 'New Player':
						decisionState = 'Confirm'
						question = 'New player'
					case 'New IGN':
						decisionState = 'SelectOldIGN'
						question = 'Select old IGN'
				}
			},
			selectOldIGN() {

			}
		},
	}

</script>

<template>
	<div v-if="this.decisionState == 'IsNewIGN'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
		<BigButton @click="decideIsNewIGN(option)" :label="option" v-for="option in options" :key=option />
	</div>

	<div v-if="this.decisionState == 'SelectOldIGN'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
		<div id="customDropdown" class="buttons" @click="toggleDropdown">
			<BigButton @click="selectOldIGN" label="Select" />
			<div class="dropdown-content" :class="{'active': isDroppedDown}">
				<a href="#" class="dropdown-item" 
					v-for="player in store.players" 
					:key="player.ign" 
					@click.prevent="selectGame(game)">
					{{ player.ign }}
				</a>
			</div>
		</div>
	</div>

	<div v-if="this.decisionState == 'Confirm'" class="decision">
		<h2>Confirm</h2>
		<h3>{{ question }}</h3>
		<h3>{{ ign }}</h3>
		<BigButton @click="confirm" label="Confirm" />
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
