import { FastifyInstance } from "fastify";

export async function registerInsightRoutes(app: FastifyInstance) {
  app.get("/insights", async () => {
    return {
      status: "ok",
      version: "1.0.0",
      insights: [
        {
          id: "ops-1",
          category: "operations",
          message: "High ratio of overdue tasks in Phase 0.",
          severity: "medium",
        },
        {
          id: "bench-1",
          category: "benchmark",
          message: "Your SME benchmarks are above median for revenue but below for retention.",
          severity: "info",
        },
      ],
    };
  });
}
