<script>

import Modifier from './Modifier.vue'
import axios from '../axios-config'

export default {
	name: 'Card',
	data() {
		return {
			modifiers: [],
			difference: ""
		}
	},
	props: ['ign', 'score', 'tag'],
	watch: {
		score(newValue, oldValue) {
			if (newValue > oldValue) {
				this.difference = "\u25B2" + (newValue - oldValue);
			} 
			else if (newValue < oldValue) {
				this.difference = "\u25BC" + (oldValue - newValue);
			} 
			else {
				this.difference = "0";
			}

			console.log(`Diff: ${this.difference}`);
		}
	},
	methods: {
		async getModifiers() {
			return await axios.get('/api/modifiers', { params: { id: this.$parent.store.id, ign: this.ign } });
		},

		setModifiers() {
			console.log("Setting modifiers!");

			this.getModifiers().then((response) => {
				if (response.data == "modifier data not found" ) {  
					// TODO: handle error
				} else if (response.data == "file not found") {
					// TODO: handle error
				} else {
					this.modifiers = response.data;
				}
			})
		}
	},
	components: {
		Modifier
	},
}
</script>

<template>
	<div id="card">
		<h2>{{ ign }}</h2>
		<h2>{{ score }}</h2>
		<h4>{{ difference }}</h4>

		<modifier 
		:name=Object.keys(value).toString() 
		:amount=Object.values(value).toString() 
		v-for="value in this.modifiers"
		:key="value">
		</modifier>
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
	padding-bottom: 1em;
	-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	vertical-align: top;
}

</style>
