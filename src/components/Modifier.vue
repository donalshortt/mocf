<script>

export default {
	name: 'Modifier',
	props: ['name', 'amount']
}

</script>

<template>
	<div id="modifier">
		<p id="name">{{ name }}</p>
		<p id="amount">{{ amount }}%</p>
	</div>
</template>

<style 	scoped>

p {
	display: inline;
}

#name {
	text-align: left;
}

#amount {
	float: right;
	margin: 0;
	margin-right: 1em;
}

</style>

