<script>
	import BigButton from './BigButton.vue'
	import { store } from "../store.js"

	export default {
		name: 'Decision',
		data() {
			return {
				decisionState: 'IsNewIGN',
				question_l: this.question,
				selectedItem: null,
				isDroppedDown: false,
			}
		},
		props: {
			options: {
				type: Array,
				required: true
			},
			ign: {
				type: String
			},
			question: {
				type: String
			}
		},
		components: { BigButton },
		methods: {
			decideIsNewIGN(option) { 
				console.log(`Option: ${option}`)
				switch (option) {
					case 'New Player':
						this.decisionState = 'Confirm'
						this.question_l = 'New player'
						break;
					case 'New IGN':
						this.decisionState = 'SelectOldIGN'
						this.question_l = 'Select old IGN'
						break;
				}

				console.log(`Question: ${this.question_l}`)
				console.log(`Decision State: ${this.decisionState}`)
			},
			toggleDropdown() {
				this.isDroppedDown = !this.isDroppedDown;
			},
			selectOldIGN() {

			},
			confirm(){

			}
		},
		mounted() {
			console.log(store);
		}
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
					@click.prevent="selectOldIGN(player.ign)">
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
