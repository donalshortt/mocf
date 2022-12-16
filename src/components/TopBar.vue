<script lang=ts>
</script>

<template>
	<div id="topbar">
		<h1 id="title"><span id="royal">Royal</span> Rumble</h1>
	</div>
</template>

<style scoped>
#topbar {
	margin: 0;
	width: 100%;
	height: 5vh;
	background-color: #1a1a1a;
}

#title {
	margin: 0 0 0 1em;
	color: var(--off-white);
}

#royal {
	background-image: linear-gradient(
		to right,
		#462523 0,
       	#cb9b51 22%, 
		#f6e27a 45%,
		#f6f2c0 50%,
		#f6e27a 55%,
		#cb9b51 78%,
		#462523 100%
	);
   	color:transparent;
   	background-clip: text;
   	-webkit-background-clip:text;
}

</style>
