<script>
export default {
	name: 'BigButton',
	props: [ 'label' ],
}

</script>

<template>
	<button class="button-82-pushable" role="button">
		<span class="button-82-shadow"></span>
		<span class="button-82-edge"></span>
		<span class="button-82-front text login">
			{{ label }}
		</span>
	</button>
</template>

<style scoped>

.button-82-pushable {
	position: relative;
	border: none;
	background: transparent;
	padding: 0;
	cursor: pointer;
	outline-offset: 4px;
	transition: filter 250ms;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.button-82-shadow {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: hsl(0deg 0% 0% / 0.25);
	will-change: transform;
	transform: translateY(2px);
	transition:
		transform
		600ms
		cubic-bezier(.3, .7, .4, 1);
}

.button-82-edge {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 12px;
	background: linear-gradient(
		to left,
		hsl(242deg 30% 16%) 0%,
		hsl(242deg 30% 32%) 8%,
		hsl(242deg 30% 32%) 92%,
		hsl(242deg 30% 16%) 100%
	);
}

.button-82-front {
	display: block;
	position: relative;
	border-radius: 12px;
	color: var(--off-white);
	font-weight: bold;
	background: hsl(242deg, 30%, 45%);
	will-change: transform;
	transform: translateY(-4px);
	transition:
		transform
		600ms
		cubic-bezier(.3, .7, .4, 1);
}

@media (min-width: 768px) {
	.button-82-front {
		font-size: 1rem;
		padding: 0.5em 1em;
	}
}

.button-82-pushable:hover {
	filter: brightness(110%);
	-webkit-filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
	transform: translateY(-6px);
	transition:
		transform
		250ms
		cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-front {
	transform: translateY(-2px);
	transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
	transform: translateY(4px);
	transition:
		transform
		250ms
		cubic-bezier(.3, .7, .4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
	transform: translateY(1px);
	transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
	outline: none;
}

</style>
