import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { registerHealthRoutes } from "./routes/health";
import { registerOrchestrateRoutes } from "./routes/orchestrate";
import { registerLogRoutes } from "./routes/logs";
import { registerBenchmarkRoutes } from "./routes/benchmarks";
import { registerInsightRoutes } from "./routes/insights";
import { registerAgentRoutes } from "./routes/agents";

const app = fastify({ logger: true });

app.register(fastifyCors, {
  origin: "*",
});

async function main() {
  app.get("/", async () => {
    return {
      name: "AQLIYA-ENGINE",
      version: process.env.ENGINE_VERSION ?? "1.0.0",
      env: process.env.ENGINE_ENV ?? "unknown",
      docs: "/health, /status, /orchestrate, /logs, /benchmarks, /insights, /agents",
    };
  });

  await registerHealthRoutes(app);
  await registerOrchestrateRoutes(app);
  await registerLogRoutes(app);
  await registerBenchmarkRoutes(app);
  await registerInsightRoutes(app);
  await registerAgentRoutes(app);

  const port = Number(process.env.PORT) || 3000;
  const host = "0.0.0.0";

  try {
    await app.listen({ port, host });
    console.log(`[ENGINE] AQLIYA-ENGINE v1.0 listening on ${host}:${port}`);
  } catch (err) {
    app.log.error(err as Error);
    process.exit(1);
  }
}

main();
