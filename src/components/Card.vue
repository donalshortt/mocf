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
	background-color: rgba(120, 120, 120, .15);
	backdrop-filter: blur(5px);
	text-align: center;
	width: 20em;
	display: inline-block;
	border: 2px solid gray;
	margin: 2em;
}

</style>
