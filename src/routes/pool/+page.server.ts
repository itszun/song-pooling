import type { RequestEvent } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';


let songs: Array<Object> = [
	{
		entry: 'Selamatkan Tanah - Zun Fuyuzora',
		pool: 12
	},
	{
		entry: 'Stay As Who You Are - Fear and Loathing in Las Vegas',
		pool: 12
	},
	{
		entry: 'Tell your world - Hatsune Miku',
		pool: 12
	}
];

export const load: PageServerLoad = () => {
    return {
        songs
    }
}

export const actions: Actions = {
    default: async ({request}: RequestEvent) => {
        const formData = await request.formData()

		const entry = formData.get("entry")

		const song = {
			entry,
			pool: 1
		}

		songs.push(song)

		return {
			success: true
		}
    }
}