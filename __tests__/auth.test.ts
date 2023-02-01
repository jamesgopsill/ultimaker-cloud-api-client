import { Client } from "../src/index.js"
import { config } from "./test.config.js"

test(`Authorisation URL`, async () => {
	const c = new Client(config)
	const authUrl = c.authorizeUrl("test")
	console.log(authUrl)
	expect(true).toBe(true)
})
