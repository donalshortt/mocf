import { reactive } from 'vue'
import axios from './axios-config'

export const store = reactive({
	date: "0.0.0",
	name: "name_unset",
	id: "",
	players: []
})

export const decisions = reactive([])

async function fetchGameData(gameId) {
    return await axios.get('/api/game_data', { params: { id: gameId } });
}

export async function setGameState() {
    try {
        const response = await fetchGameData(store.id);
        store.date = response.data.date;
        store.name = response.data.name;
        store.players = response.data.players;
    } catch (error) {
        console.error('Error fetching game data:', error);
    }
}

export async function getDecisions() {
	const response = await axios.get('/api/decisions', { params: { id: store.id }});
	decisions = response.data;
}

export function setGameID(newID) {
	store.id = newID;
}

