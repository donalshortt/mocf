<script>

import axios from '../axios-config'

export default {
	name: 'AddModifier',
	props: [],
	methods: {
		async add_modifier() {
			try {
				const response = await axios.post('/api/modifier', {
						id: this.$parent.$parent.store.id,
						ign: this.$parent.ign,
						modifier: {
							[this.name]: this.amount
						}
				});

			} catch (error) {
				console.log(error);
			}
		}
	}
}

</script>

<template>
	<div id="add_modifier">
		<form @button.prevent="add_modifier">
			<input id="modifier" type="text" placeholder="Modifer" v-model="name">
			<input id="amount" type="text" placeholder="+/-XX" v-model="amount">
			<button type="button" @click="add_modifier">Add</button>
		</form>
	</div>
</template>

<style scoped>

#add_modifier {
	margin-top: 1em;
}

#modifier {
	width: 50%;
}

#amount {
	width: 20%;
}

input {
	margin: 0.25em;
	background-color: var(--off-white);
}

input::placeholder {
	color: white;
}

input, button {
	display: inline;
}

</style>

