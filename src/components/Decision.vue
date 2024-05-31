<script>
	export default {
		name: 'Decision',
		data() {
		},
		props: ['ign', 'question', 'options'],
		components: {
		},
		methods: {
			onSelect() {
				console.log("selected!");
			}
		},
	}

</script>

<template>
	<div id="decision">
		<h2>{{ ign }}</h2>
		<h3>{{ question }}</h3>
		<div id="options">
			<button v-for="option in options" :key=option class="button-82-pushable" role="button">
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
	border: 1px dashed var(--off-white);
}
</style>
