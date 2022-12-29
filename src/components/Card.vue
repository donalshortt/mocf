<script>

import Modifier from './Modifier.vue'
import Shared from '../shared.js'

export default {
	name: 'Card',
	data() {
		return {
			modifiers: [],
		}
	},
	computed: {
		modifiedScore() {
			let modifiedScore = this.$props.score;
			
			this.modifiers.forEach((item) => {
				let value = Object.values(item).toString();

				if (value[0] == "+") {
					value = value.replace ("+", "1.");
					modifiedScore *= parseFloat(value);
					modifiedScore = Math.round(modifiedScore);
				} else {
					value = value.replace("-", "0.");
					value = 1.0 - parseFloat(value);
					modifiedScore *= value;
					modifiedScore = Math.round(modifiedScore);
				}
			});

			this.difference = modifiedScore;
			return modifiedScore; 
		},
	},
	props: ['ign', 'score', 'tag'],
	methods: {
		async getModifiers() {
			return await this.$axios.get('/api/modifiers', { params: { id: this.$parent.id, tag: this.tag } });
		},

		setModifers() {
			this.getModifiers().then((response) => {
				if (!Shared.deepEqual(response.data, this.modifiers)) {
					this.modifiers = response.data;
				}
			})
		}
	},
	components: {
		Modifier
	},
	mounted() {
		this.setModifers();

		let updateData = () => {
			this.setModifers();
			setTimeout(updateData, 15000);
		};

		setTimeout(updateData, 15000);
	}
}
</script>

<template>
	<div id="card">
		<h2>{{ ign }}</h2>
		<h4>{{ modifiedScore }}</h4>

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
