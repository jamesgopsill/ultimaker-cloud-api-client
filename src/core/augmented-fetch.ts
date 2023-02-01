import type { HttpResponse } from "../definitions.js"
import type { Client } from "../index.js"

export async function augmentedFetch<T>(
	this: Client,
	method: "GET" | "POST" | "PUT",
	url: string,
	urlArgs: {},
	bodyArgs: {}
) {
	if (Object.keys(urlArgs).length > 0) {
		url += "?"
		for (const [k, v] of Object.entries(urlArgs)) {
			url += k + "&" + v
		}
		url = encodeURI(url)
	}

	const config: RequestInit = {
		method: method,
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(bodyArgs),
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}
