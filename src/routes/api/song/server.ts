import type { RequestEvent } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

export const GET = async ({ request, url }: RequestEvent) => {
	const authHeader = request.headers.get('Authorization');

	if (authHeader !== 'itszun') {
		return new Response(JSON.stringify({ message: 'Invalid Credentials' }), {
			status: 401
		});
	}

	const perPage = Number(url.searchParams.get('perPage') ?? '10');
	const page = Number(url.searchParams.get('page') ?? '1');

	const res = await fetch(API_URL + '/song-pooling/api/song');
	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
};
