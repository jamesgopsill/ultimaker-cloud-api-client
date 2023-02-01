import { Client } from "../src/index.js"
import { config } from "./test.config.js"

test(`Ping`, async () => {
	const c = new Client(config)
	expect(c.ping()).toBe("pong")
})
