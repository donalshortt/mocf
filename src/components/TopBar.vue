<script>

import axios from '../axios-config'
import { setGameID } from "../store.js"
import BigButton from './BigButton.vue'

export default {
	name: 'TopBar',
	data() {
		return {
			games: [],
			selectedItem: null,
			isDroppedDown: false,
		}
	},
	computed: {
        selectedGameName() {
            const game = this.games.find(game => game.id === this.selectedItem);
            return game ? game.name : 'Select Game';
        }
	},
	methods: {
        selectGame(game) {
            this.selectedItem = game.id;
            this.handleSelectionChange();
        },
		toggleDropdown() {
			this.isDroppedDown = !this.isDroppedDown;
		},
		handleSelectionChange() {
			const selectedOption = this.games.find(game => game.id === this.selectedItem);

			if(selectedOption) {
				setGameID(selectedOption.id);
				this.$emit("gameSelected");
			} else {
				console.log("Game selected and available games do not match")
			}
		}
	},
	mounted() {
		axios.get('/api/games').then((response) => {
			this.games = response.data;
		})
	},
	components: { BigButton },
}

</script>

<template>
	<div id="topbar">
		<h1 id="title">MoC</h1>
		<div id="buttonsContainer">
			<div id="customDropdown" class="buttons" @click="toggleDropdown">
				<BigButton :label="selectedGameName" />
				<div class="dropdown-content" :class="{'active': isDroppedDown}">
					<a href="#" class="dropdown-item" 
						v-for="game in games" 
						:key="game.id" 
						@click.prevent="selectGame(game)">
						{{ game.name }}
					</a>
				</div>
			</div>
			<BigButton label="Login" />
		</div>
	</div>
</template>

<style scoped>

#login {
	text-decoration: line-through;
}

#buttonsContainer {
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: 1em;
}

.buttons {
	margin-right: 1em;
	cursor: pointer;
	position: relative;
}

#topbar {
	margin: 0;
	width: 100%;
	height: 3em;
	display: flex;
	align-items: center;
	background-color: #1a1a1a;
	position: fixed;
	z-index: 999;
}

#title {
	margin: 0 0 0 1em;
	color: var(--off-white);
}

</style>
