import { authorizeUrl } from "./auth/authorize-url.js"
import { augmentedFetch } from "./core/augmented-fetch.js"
import { requestAccessToken } from "./auth/request-access-token.js"

export * from "./definitions.js"

export interface ClientConfig {
	clientId: string
	clientSecret: string
	redirectUri: string
	scope: string[]
}

export class Client {
	protected accountUrl = "https://account.ultimaker.com/"
	protected clientId: string
	protected clientSecret: string
	protected redirectUri: string
	protected scope: string[]
	protected bearerToken: string = ""
	protected refreshToken: string = ""
	protected expires: Date | null = null

	constructor(config: ClientConfig) {
		this.clientId = config.clientId
		this.clientSecret = config.clientSecret
		this.redirectUri = config.redirectUri
		this.scope = config.scope
	}

	protected fetch = augmentedFetch

	public ping = () => "pong"
	public authorizeUrl = authorizeUrl
	public requestAccessToken = requestAccessToken
}
