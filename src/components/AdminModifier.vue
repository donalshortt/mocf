<script>

import axios from '../axios-config'

export default {
	name: 'AdminModifier',
	props: ['name', 'amount'],
	methods: {
		delete_modifier() {
			console.log("Deleting modifier");

			axios.delete('/api/modifier', {
				params: {
					id: this.$parent.$parent.store.id,
					ign: this.$parent.ign,
					key: this.name,
					value: this.amount
				}
			})

			this.$emit('remove');
		}
	}
}

</script>

<template>
	<div id="modifier">
		<p id="name">{{ name }}</p>
		<span id="delete_modifier" @click="delete_modifier">✖</span>
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

