import type { Client } from "../index"
import { arrayUrlEncode } from "./array-url-encode"

export function authorizeUrl(this: Client, state: string) {
	let url = this.accountUrl
	const urlArgs = {
		client_id: this.clientId,
		redirect_uri: this.redirectUri,
		scope: this.scope.join("&"),
		response_type: "code",
		state: state,
	}
	const urlEncodedParams = arrayUrlEncode(urlArgs)
	url += `?${urlEncodedParams}`
	return url
}
