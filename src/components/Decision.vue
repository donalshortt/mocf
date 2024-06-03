<script>
	export default {
		name: 'Decision',
		data() {
		},
		props: ['ign', 'question', 'options'],
		components: {
		},
		methods: {
			decide(option) {
				if (option == 'New Player') {
					axios.post('/api/decide', { id: store.id, ign: this.ign, decision: 'newIGN' })
				} else {
					
				}
			}
		},
	}

</script>

<template>
	<div id="decision">
		<h2>{{ question }}</h2>
		<h3>{{ ign }}</h3>
		<div id="options">
			<button @click="onSelect" v-for="option in options" :key=option class="button-82-pushable" role="button">
				<span class="button-82-shadow"></span>
				<span class="button-82-edge"></span>
				<span id="login" class="button-82-front text">
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
