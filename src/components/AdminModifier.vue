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
		<span id ="delete_modifier" on-click="delete_modifier">✖</span>
		<p id="amount">{{ amount }}%</p>
	</div>
</template>

<style 	scoped>

p {
	display: inline;
}

#modifier {
	text-align: left;
	margin-top: 0.25em;
}

#name {
	margin-left: 1em;
}

#amount {
	float: right;
	margin: 0;
	margin-right: 1em;
}

#delete_modifier {
	float: right;
	margin-right: 1em;
	color: white;
	cursor: pointer;
}

</style>

