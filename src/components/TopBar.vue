<script>

import axios from '../axios-config'
import { setGameID } from "../store.js"

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
            return game ? game.name : '';
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
	}
}

</script>

<!-- Grab game names via ajax from backend -->

<template>
	<div id="topbar">
		<h1 id="title">MoC</h1>
		<div id="buttonsContainer">
			<div id="customDropdown" class="buttons" @click="toggleDropdown">
				<button class="button-82-pushable" role="button">
					<span class="button-82-shadow"></span>
					<span class="button-82-edge"></span>
					<span class="button-82-front text">
						{{ selectedGameName || 'Select Game' }}
					</span>
				</button>
				<div class="dropdown-content" :class="{'active': isDroppedDown}">
						<a href="#" class="dropdown-item" 
							v-for="game in games" 
							:key="game.id" 
							@click.prevent="selectGame(game)">
							{{ game.name }}
						</a>
					</div>
				</div>
			</div>
			<div class="buttons">
				<button class="button-82-pushable" role="button">
					<span class="button-82-shadow"></span>
					<span class="button-82-edge"></span>
					<span id="login" class="button-82-front text">
						Login
					</span>
				</button>
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
}

.buttons {
	margin-right: 1em;
	cursor: pointer;
	position: relative;
}

.button-82-pushable {
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	outline-offset: 4px;
	transition: filter 250ms;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.button-82-shadow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: hsl(0deg 0% 0% / 0.25);
	will-change: transform;
	transform: translateY(2px);
	transition:
		transform
		600ms
		cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: linear-gradient(
		to left,
		hsl(242deg 30% 16%) 0%,
		hsl(242deg 30% 32%) 8%,
		hsl(242deg 30% 32%) 92%,
		hsl(242deg 30% 16%) 100%
	);
}

.button-82-front {
	display: block;
	position: relative;
	border-radius: 12px;
	color: var(--off-white);
	font-weight: bold;
	background: hsl(242deg, 30%, 45%);
	will-change: transform;
	transform: translateY(-4px);
	transition:
		transform
		600ms
		cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
	.button-82-front {
		font-size: 1rem;
		padding: 0.5em 1em;
	}
}

.button-82-pushable:hover {
	filter: brightness(110%);
	-webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
	transform: translateY(-6px);
	transition:
		transform
		250ms
		cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-front {
	transform: translateY(-2px);
	transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
	transform: translateY(4px);
	transition:
		transform
		250ms
		cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
	transform: translateY(1px);
	transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
	outline: none;
}

#customDropdown {
	z-index: 1000;
}

.dropdown-content {
	margin-top: 1em;
    display: none;
    position: absolute;
	background-color: rgba(0, 0, 0, .40);
	backdrop-filter: blur(5px);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
	left: 50%; /* Align the left edge of the dropdown with the center of the button */
	transform: translateX(-50%);
	width: 12.5em;
	-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
}

.dropdown-content a {
    color: var(--off-white);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.active {
    display: block;
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
