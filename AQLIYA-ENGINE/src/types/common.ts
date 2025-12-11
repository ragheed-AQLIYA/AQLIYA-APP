export interface HealthResponse {
  status: "ok" | "error";
  engineVersion: string;
  environment: string;
  uptimeSeconds: number;
  n8nConnected: boolean;
  timestamp: string;
}

export interface EngineLogEntry {
  id: string;
  source: "ENGINE" | "N8N" | "BUILDER" | "APP";
  level: "info" | "warn" | "error";
  message: string;
  createdAt: string;
  meta?: Record<string, unknown>;
}
