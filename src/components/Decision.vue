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
				old_ign: null,
				selectedItem: null,
				isDroppedDown: false,
				players_l: store.players,
			}
		},
		props: ['options', 'ign', 'question', 'key'],
		components: { BigButton },
		methods: {
			decideIsNewIGN(option) { 
				switch (option) {
					case 'New Player':
						this.decisionState = 'ConfirmNewPlayer'
						break;
					case 'New IGN':
						this.decisionState = 'SelectOldIGN'
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
			confirmOldIGN() {
				axios.post('/api/decide', { 
					key: this.key,
					id: store.id,
					decision: 'newIGN'
				})
			},
			confirmNewPlayer() {
				axios.post('/api/decide', {
					key: this.key,
					id: store.id,
					decision: 'newPlayer'
				})
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
		<h2>Select old IGN for</h2>
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
		<h3>Old IGN: <i>{{ old_ign }}</i></h3>
		<h3>New IGN: <i>{{ ign }}</i></h3>
		<BigButton @click="confirmOldIGN()" label="Confirm" />
	</div>

	<div v-if="this.decisionState == 'ConfirmNewPlayer'" class="decision">
		<h2>Confirm</h2>
		<h3>New player</h3>
		<h3>{{ ign }}</h3>
		<BigButton @click="confirmNewPlayer()" label="Confirm" />
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
