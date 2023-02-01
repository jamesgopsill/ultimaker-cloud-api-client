import type { Client, HttpResponse, TokenResponse } from "../index"
import { arrayUrlEncode } from "./array-url-encode"

export async function refreshToken(this: Client) {
	const url = `${this.authorizeUrl}/token`

	const urlArgs = {
		client_id: this.clientId,
		client_secret: this.clientSecret,
		redirect_uri: this.redirectUri,
		scope: this.scope.join("&"),
		refresh_token: this.refreshToken,
		grant_type: "refresh_token",
	}

	const urlEncodedParams = arrayUrlEncode(urlArgs)

	const config: RequestInit = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: urlEncodedParams,
	}

	const request = new Request(url, config)

	const r = (await fetch(request)) as HttpResponse<TokenResponse>
	r.data = null
	if (r.ok) {
		r.data = await r.json()
		this.bearerToken = `Bearer ${r.data.access_token}`
		this.refreshToken = r.data.refresh_token
		this.expires = new Date(new Date().getTime() + r.data.expires_in)
	}
	return r
}
