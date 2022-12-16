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
	-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
}

</style>
