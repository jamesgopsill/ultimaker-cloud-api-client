import type { HttpResponse, UltimakerClient } from "../index.js"
import { keysToCamel, keysToSnake } from "./format-keys.js"

export async function augmentedFetch<T>(
	this: UltimakerClient,
	method: "GET" | "POST" | "PUT" | "DELETE",
	url: string,
	urlArgs: { [k: string]: any } = {},
	bodyArgs: { [k: string]: any } = {}
) {
	urlArgs = keysToSnake(urlArgs)
	if (Object.keys(urlArgs).length > 0) {
		url += "?"
		for (const [k, v] of Object.entries(urlArgs)) {
			url += k + "&" + v
		}
		url = encodeURI(url)
	}

	const body = {
		data: keysToSnake(bodyArgs),
	}

	const config: RequestInit = {
		method: method,
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${this._bearerToken}`,
		},
		body: JSON.stringify(body),
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<T>
	r.data = null
	if (r.ok && r.status === 200) {
		let data = await r.json()
		data = keysToCamel(data)
		r.data = data
	} else {
		try {
			let data = await r.json()
			data = keysToCamel(data)
			r.data = data
		} catch {}
	}
	return r
}
