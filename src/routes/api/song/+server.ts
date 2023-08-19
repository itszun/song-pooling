import type { RequestEvent } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';
import { api } from '$src/routes/api';

export const GET = async ({ request, url }: RequestEvent) => {
	// const authHeader = request.headers.get('Authorization');

	// if (authHeader !== 'itszun') {
	// 	return new Response(JSON.stringify({ message: 'Invalid Credentials' }), {
	// 		status: 401
	// 	});
	// }

	const perPage = Number(url.searchParams.get('perPage') ?? '10');
	const page = Number(url.searchParams.get('page') ?? '1');

	let fullurl = API_URL + '/song'
	
	const res = await fetch(fullurl);
	
	const data = await res.json();

	return new Response(JSON.stringify(data), { status: 200 });
};

export const POST = async ({request, fetch, params}: RequestEvent) => {
	const payload = await request.clone().json()

	const res = await api({
		resource: "/song",
		method: "POST",
		data: payload
	});
	
	const data = await res.clone().body;

	console.log("DATA ",data);
	

	return new Response(JSON.stringify({message: "Success"}));
}