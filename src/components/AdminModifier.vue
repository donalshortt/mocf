<script>

import axios from '../axios-config'

export default {
	name: 'AdminModifier',
	props: ['name', 'amount'],
	methods: {
		delete_modifier() {
			axios.post('/api/modifier', {
				name: this.name,
				amount: this.amount
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
}

</script>

<template>
	<div id="modifier">
		<p id="name">{{ name }}</p>
		<p id="amount">{{ amount }}%</p>
		<span on-click="delete_modifier">X</span>
	</div>
</template>

<style 	scoped>

p {
	display: inline;
}

#modifier {
	text-align: left;
}

#name {
	margin-left: 1em;
}

#amount {
	float: right;
	margin: 0;
	margin-right: 1em;
}

</style>

