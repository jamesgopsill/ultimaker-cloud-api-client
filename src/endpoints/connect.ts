import type { UltimakerClient } from "../index"

export async function connectStatus(this: UltimakerClient) {
	const url = `${this._apiUrl}/connect/v1`
	return this._fetch("GET", url)
}
