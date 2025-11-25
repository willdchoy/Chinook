import type { Test } from "@chinook/types";
import type { FastifyReply, FastifyRequest } from "fastify";
import Fastify from "fastify";

const fastify = Fastify({
	logger: true,
});

fastify.get(
	"/",
	async function handler(request: FastifyRequest, reply: FastifyReply) {
		const content: Test = { test: false } as const;
		return reply.send(content.test.toString());
	},
);

try {
	await fastify.listen({ port: 3000 });
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
