import { FastifyInstance } from "fastify";

export async function registerAgentRoutes(app: FastifyInstance) {
  app.get("/agents", async () => {
    return {
      status: "ok",
      activeAgents: 8,
      agents: [
        { id: "AG-ADMIN", role: "admin", status: "ready" },
        { id: "AG-CONTENT", role: "content", status: "ready" },
        { id: "AG-CODE", role: "code", status: "ready" },
        { id: "AG-TECH", role: "tech", status: "ready" },
        { id: "AG-OPS", role: "ops", status: "ready" },
        { id: "AG-SAAS", role: "saas", status: "ready" },
        { id: "AG-STRATEGY", role: "strategy", status: "ready" },
        { id: "AG-GENESIS", role: "genesis", status: "ready" }
      ]
    };
  });
}
