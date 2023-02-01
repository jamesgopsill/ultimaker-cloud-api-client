import type { ClientConfig } from "../src/index.js"

export const config: ClientConfig = {
	clientId: "hello",
	clientSecret: "secret",
	redirectUri: "world",
	scope: ["a", "b"],
}
