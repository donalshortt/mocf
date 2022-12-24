<script lang="ts">

import Modifier from './Modifier.vue'

export default {
	name: 'Card',
	data() {
		return {
			modifiers: []
		}
	},
	props: ['ign', 'score', 'tag'],
	methods: {
		async getModifiers() {
			return await this.$axios.get('/api/modifiers', { params: { id: this.$parent.id, tag: this.tag } });
		},
		shouldRender(newData, oldData) {
			console.log(`NEW DATA: ${newData}`);
			console.log(`OLD DATA: ${oldData}`);
			if (newData == oldData) {
				console.log("Should not render!");
			} else {
				console.log("Should render!");
			}

			return newData != oldData;
		},

		setModifers() {
			this.getModifiers().then((response) => {
				if (this.shouldRender(response.data, this.modifiers)) {
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
	},
	shouldUpdate(newProps, oldProps) {
		console.log("should update!");
		return newProps.modifiers !== oldProps.modifiers;
	}
}
</script>

<template>
	<div id="card">
		<h2>{{ ign }}</h2>
		<h4>{{ score }}</h4>
		<!--<ul v-cloak>
			<li v-for="value in this.modifiers" :key="value">{{ Object.keys(value).toString() }} {{ Object.values(value).toString() }}%</li>
		</ul>-->
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
	-webkit-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 29px 0px rgba(0,0,0,0.75);
}

</style>
