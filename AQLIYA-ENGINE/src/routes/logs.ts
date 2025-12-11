import { FastifyInstance } from "fastify";
import { EngineLogEntry } from "../types/common";

const inMemoryLogs: EngineLogEntry[] = [];

export function appendLog(entry: EngineLogEntry) {
  inMemoryLogs.unshift(entry);
  if (inMemoryLogs.length > 100) inMemoryLogs.pop();
}

export async function registerLogRoutes(app: FastifyInstance) {
  app.get("/logs", async () => {
    return {
      status: "ok",
      logs: inMemoryLogs,
    };
  });
}
