export type HttpResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: null
	  } & Response)

export interface TokenResponse {
	token_type: string
	access_token: string
	refresh_token: string
	expires_in: number
}
