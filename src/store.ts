import { InjectionKey } from "vue"
import { createStore, Store } from "vuex"

export const key: InjectionKey<Store<State>> = Symbol()

export interface State {
	date: String,
	name: String,
	id: String,
	players: Array<any>
}

//https://vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage

export const store = createStore<State>({ 
	state () {
		return {
			date: "0.0.0",
			name: "name_unset",
			id: "42c0ff06-1d95-4ef7-bad5-d8e28fa2473b",
			players: []
		}
	},
	mutations: {
		setDate(state, date) {
			state.date = date
		},
		setName(state, name) {
			state.name = name
		},
		setID(state, id) {
			state.id = id
		},
		setPlayers(state, players) {
			state.players = players
		}
	},
	getters: {
		getDate(state) {
			return state.date
		},
		getName(state) {
			return state.name
		},
		getID(state) {
			return state.id
		},
		getPlayers(state) {
			return state.players
		}
	}
})

