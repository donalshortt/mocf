<script lang="ts">

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

		setModifers() {
			this.getModifiers().then((response) => {
				this.modifiers = response.data;
			})
		}
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
		return newProps.modifiers !== oldProps.modifiers;
	}
}
</script>

<template>
	<div id="card">
		<h2>{{ ign }}</h2>
		<h4>{{ score }}</h4>
		<ul v-cloak>
			<li v-for="(value, key) in this.modifiers" :key="key">{{ Object.keys(value).toString() }} {{ Object.values(value).toString() }}%</li>
		</ul>
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
