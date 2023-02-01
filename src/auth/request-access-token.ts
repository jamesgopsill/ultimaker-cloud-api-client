import type { Client, HttpResponse, TokenResponse } from "../index.js"
import { arrayUrlEncode } from "./array-url-encode.js"

export async function requestAccessToken(
	this: Client,
	code: string,
	state: string
) {
	const url = `${this.authorizeUrl}/token`
	const urlArgs = {
		client_id: this.clientId,
		client_secret: this.clientSecret,
		redirect_uri: this.redirectUri,
		scope: this.scope.join("&"),
		response_type: "code",
		state: state,
		code: code,
		grant_type: "authorization_code",
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
