<script>
	import BigButton from './BigButton.vue'
	import { store } from "../store.js"
	import axios from '../axios-config'

	export default {
		name: 'Decision',
		data() {
			return {
				prevDecisionState: '',
				decisionState: 'IsNewIGN',
				question_l: this.question,
				old_ign: null,
				selectedItem: null,
				isDroppedDown: false,
				players_l: store.players,
			}
		},
		props: ['options', 'ign', 'question'],
		components: { BigButton },
		methods: {
			decideIsNewIGN(option) { 
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
				this.prevDecisionState = 'IsNewIGN'
			},
			toggleDropdown() {
				this.isDroppedDown = !this.isDroppedDown;
			},
			selectOldIGN(old_ign) {
				this.decisionState = 'ConfirmOldIGN'
				this.old_ign = old_ign
				this.prevDecisionState = 'SelectOldIGN'
			},
			confirmOldIGN(){
				axios.post('/api/decide', { 
					date: store.date,
					ign: this.old_ign,
					decision: 'newIGN'
				})
			}
		},
	}

</script>

<template>
	<div v-if="this.decisionState == 'IsNewIGN'" class="decision">
		<h2>{{ question_l }}</h2>
		<h3>{{ ign }}</h3>
		<BigButton @click="decideIsNewIGN(option)" :label="option" v-for="option in options" :key=option />
	</div>

	<div v-if="this.decisionState == 'SelectOldIGN'" class="decision">
		<h2>{{ question_l }}</h2>
		<h3>{{ ign }}</h3>
		<div id="customDropdown" class="buttons" @click="toggleDropdown">
			<BigButton label="Select" />
			<div class="dropdown-content" :class="{'active': isDroppedDown}">
				<a href="#" class="dropdown-item" 
					v-for="player in players_l" 
					:key="player.ign" 
					@click.prevent="selectOldIGN(player.ign)">
					{{ player.ign }}
				</a>
			</div>
		</div>
	</div>

	<div v-if="this.decisionState == 'ConfirmOldIGN'" class="decision">
		<h2>Confirm</h2>
		<h3>Old IGN: {{ old_ign }}</h3>
		<h3>New IGN: {{ ign }}</h3>
		<BigButton @click="confirmOldIGN(question)" label="Confirm" />
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
