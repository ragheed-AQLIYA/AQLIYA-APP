import { FastifyInstance } from "fastify";
import { triggerWorkflow } from "../services/n8n";

export async function registerOrchestrateRoutes(app: FastifyInstance) {
  app.post<{
    Body: {
      workflowId: string;
      payload?: Record<string, unknown>;
    };
  }>("/orchestrate", async (request, reply) => {
    const { workflowId, payload = {} } = request.body;

    if (!workflowId) {
      reply.code(400);
      return { error: "workflowId is required" };
    }

    try {
      const result = await triggerWorkflow({ workflowId, payload });
      return {
        status: "ok",
        workflowId,
        result,
      };
    } catch (err: any) {
      request.log.error(err);
      reply.code(500);
      return {
        status: "error",
        workflowId,
        message: err?.message ?? "Failed to orchestrate workflow",
      };
    }
  });
}
