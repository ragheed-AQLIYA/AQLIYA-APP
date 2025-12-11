import { FastifyInstance } from "fastify";
import { pingN8n } from "../services/n8n";
import { HealthResponse } from "../types/common";

const startedAt = Date.now();

export async function registerHealthRoutes(app: FastifyInstance) {
  app.get("/health", async (): Promise<HealthResponse> => {
    const n8nConnected = await pingN8n();

    return {
      status: "ok",
      engineVersion: process.env.ENGINE_VERSION ?? "1.0.0",
      environment: process.env.ENGINE_ENV ?? "unknown",
      uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
      n8nConnected,
      timestamp: new Date().toISOString(),
    };
  });

  app.get("/status", async () => {
    return {
      engine: "AQLIYA-ENGINE",
      version: process.env.ENGINE_VERSION ?? "1.0.0",
      env: process.env.ENGINE_ENV ?? "unknown",
    };
  });
}
