import type { RequestEvent } from '@sveltejs/kit';
import { APP_URL } from '$env/static/private';
import type { PageServerLoad, Actions } from './$types';
import { api } from '../api';

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

export const load = ({}) => {
	const fetchPosts = async () => {
		const res = await fetch(APP_URL + '/api/song');
		const data = await res.json();

		return data;
	};

	return {
		songs,
		entries: fetchPosts()
	};
};

export const actions: Actions = {
	submit_song: async ({ request }) => {
		const formData = await request.clone().formData();
	
		const res = await fetch(APP_URL + '/api/song', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'accept': 'application/json',
			},
			body: formData
		});

		console.log("DATA ", formData);
		

		const data = await res.json();

		return data;
	}
};
