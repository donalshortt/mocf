import { reactive } from 'vue'
import axios from './axios-config'

export const store = reactive({
	date: "0.0.0",
	name: "name_unset",
	id: "030184ca-1f70-4cfc-9da4-f03118c1a74c",
	players: []
})

async function fetchGameData(gameId: string) {
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

