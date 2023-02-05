import { authorizeUrl } from "./auth/authorize-url.js"
import { requestAccessToken } from "./auth/request-access-token.js"
import { augmentedFetch } from "./core/augmented-fetch.js"
import type { Scopes } from "./enum.js"

export * from "./definitions.js"

export interface ClientConfig {
	clientId: string
	clientSecret: string
	redirectUri: string
	scope: Scopes[]
}

export class UltimakerClient {
	protected _accountUrl = "https://account.ultimaker.com"
	protected _apiUrl = "https://api.ultimaker.com"
	protected clientId: string
	protected clientSecret: string
	protected redirectUri: string
	protected scope: Scopes[]
	protected bearerToken: string = ""
	protected refreshToken: string = ""
	protected expires: Date | null = null

	constructor(config: ClientConfig) {
		this.clientId = config.clientId
		this.clientSecret = config.clientSecret
		this.redirectUri = config.redirectUri
		this.scope = config.scope
	}

	protected _fetch = augmentedFetch

	public ping = () => "pong"
	public authorizeUrl = authorizeUrl
	public requestAccessToken = requestAccessToken
}
