import { FastifyInstance } from "fastify";

export async function registerBenchmarkRoutes(app: FastifyInstance) {
  app.get("/benchmarks", async () => {
    // placeholder until Benchmark Cloud is integrated
    return {
      status: "ok",
      source: "placeholder",
      total: 50,
      sectors: [
        { id: "sme_finance", name: "SME Finance", benchmarks: 15 },
        { id: "healthcare", name: "Healthcare", benchmarks: 12 },
        { id: "saas", name: "SaaS", benchmarks: 23 },
      ],
    };
  });
}
