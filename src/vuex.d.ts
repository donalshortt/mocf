import { Store } from 'vuex'

declare module '@vue/runtime-core' {
	// declare your own store states
	interface State {
		date: String,
		name: String,
		id: String,
		players: Array<any>
	}

	// provide typings for `this.$store`
	interface ComponentCustomProperties {
	$store: Store<State>
	}
}
