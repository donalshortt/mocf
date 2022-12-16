<script lang="ts">

export default {
	name: 'Card',
	props: ['ign', 'score']
}
</script>

<template>
	<div id="card">
		<h2>{{ ign }}</h2>
		<h4>{{ score }}</h4>
	</div>
</template>

<style scoped>

#card {
	background-color: rgba(0, 0, 0, .40);
	backdrop-filter: blur(5px);
	border-radius: .5em;
	text-align: center;
	color: var(--off-white);
	width: 20em;
	display: inline-block;
	margin: 2em;
}

</style>
