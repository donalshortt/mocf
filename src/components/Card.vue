<script lang="ts">

export default {
	name: 'Card',
	props: ['ign', 'score']
}
</script>

<template>
	<div id="card">
		<p>{{ ign }}</p>
		<p>{{ score }}</p>
	</div>
</template>

<style scoped>

#card {
	margin-top: 20px;
	background-color: black;
}

</style>
