<script lang="ts">
import Card from "./components/Card.vue"

export default {
	name: 'App',
	data() {
		return {
			date: null,
			id: null,
			players: null
		}
	},
	methods: {
		async fetchGameData() {
			return await this.$axios.get('/api/game_data');
		},

		async fetchGameDate() {
			return await this.$axios.get('/api/game_data/date');
		},

		async fetchGameID() {
			return await this.$axios.get('/api/game_data/id');
		},

		async fetchGamePlayers() {
			return await this.$axios.get('/api/game_data/players');
		},

		extractGameState() {
			this.fetchGameData().then((response) => {
				this.date = response.data.date;
				this.id = response.data.id;
				this.players = response.data.players;
			})
			
			console.log(this.id);
		},

		printGameState() {
			console.log(this.fetchGameData());
			console.log(this.date);
			console.log(this.players);
			console.log(this.id);
		}
	},
	components: {
		Card
	},
	mounted() {
		this.extractGameState()
	}
}

</script>

<template>
	<header>
		<Card v-for="player in this.players" :ign=player.igns[0] :score=player.score :key=player>
		</Card>

		<img
			alt="Vue logo"
			class="logo"
			src="@/assets/logo.svg"
			width="125"
			height="125"
			@click="printGameState()"
   		/>

		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header>

</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
