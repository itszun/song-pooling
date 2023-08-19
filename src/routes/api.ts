import type { RequestEvent } from "@sveltejs/kit";
import { API_URL } from "$env/static/private";

interface APIParams{
    method :string,
    event? : RequestEvent,
    resource? : string,
    data?: Record<string, unknown> | null
}

export async function api(params: APIParams) {
    const base = API_URL
    let fullurl = base
    

    if (params.resource) {
        fullurl = `${base}/${params.resource}`
    }

    const response = await fetch(fullurl,{
        method: params.method,
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'cookie': params?.event?.request?.headers?.get('cookie') as string,
        },
        body: params.data && JSON.stringify(params.data)
    })

    return response;
}
