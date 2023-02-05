export type HttpResponse<T> =
	| ({
			ok: true
			data: {
				data: T
			}
	  } & Response)
	| ({
			ok: false
			data: {
				errors: any[]
			}
	  } & Response)

export interface TokenResponse {
	token_type: string
	access_token: string
	refresh_token: string
	expires_in: number
}

export interface connectStatus {
	ok: boolean
	time: string
	uptime: number
	version: string
}
