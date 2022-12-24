<script lang="ts">

export default {
	name: 'Modifier',
	props: ['name', 'amount']
}

</script>

<template>
	<div id="modifier">
		<table>
			<tr>
				<td>{{ name }}</td>
				<td>{{ amount }}</td>
			</tr>
		</table>
	</div>
</template>

<style 	scoped>
</style>

