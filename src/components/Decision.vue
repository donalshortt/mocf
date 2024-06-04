<script>
	export default {
		name: 'Decision',
		data() {
			retun {
				decisionState: 'IsNewIGN',
			}
		},
		props: ['ign', 'question', 'options'],
		components: {},
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
		<div class="options">
			<button @click="onSelect" v-for="option in options" :key=option class="button-82-pushable" role="button">
				<span class="button-82-shadow"></span>
				<span class="button-82-edge"></span>
				<span class="button-82-front text login">
					{{ option }}
				</span>
			</button>
		</div>
	</div>

	<div v-if="this.decisionState == 'SelectOldIGN'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
			<button @click="onSelect" v-for="option in options" :key=option class="button-82-pushable" role="button">
				<span class="button-82-shadow"></span>
				<span class="button-82-edge"></span>
				<span class="button-82-front text login">
					{{ option }}
				</span>
			</button>
	</div>

	<div v-if="this.decisionState == 'Confirm'" class="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
		<div class="options">
			<button @click="onSelect" v-for="option in options" :key=option class="button-82-pushable" role="button">
				<span class="button-82-shadow"></span>
				<span class="button-82-edge"></span>
				<span class="login" class="button-82-front text login">
					{{ option }}
				</span>
			</button>
		</div>
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
