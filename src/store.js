import { reactive } from 'vue'
import axios from './axios-config'

export const store = reactive({
	date: "0.0.0",
	name: "name_unset",
	id: "b778d068-dee0-464c-bae3-691812611b49",
	players: []
})

async function fetchGameData(gameId) {
    return await axios.get('/api/game_data', { params: { id: gameId } });
}

export async function setGameState() {
    try {
        const response = await fetchGameData(store.id);
        store.date = response.data.date;
        store.name = response.data.name;
        store.id = response.data.id;
        store.players = response.data.players;
    } catch (error) {
        console.error('Error fetching game data:', error);
    }
}

