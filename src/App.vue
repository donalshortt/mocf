<script>
import Home from "./views/HomeView.vue"

export default {
	name: 'App',
	components: {
		Home
	},
}

</script>

<template>
	<div id="main">
		<router-view></router-view>
	</div>
</template>
