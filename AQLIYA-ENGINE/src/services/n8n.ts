import fetch from "node-fetch";

const N8N_BASE_URL = process.env.N8N_BASE_URL;
const N8N_API_KEY = process.env.N8N_API_KEY;

if (!N8N_BASE_URL) {
  console.warn("[ENGINE] N8N_BASE_URL is not set. n8n integration will be disabled.");
}

export async function pingN8n(): Promise<boolean> {
  if (!N8N_BASE_URL) return false;

  try {
    const res = await fetch(`${N8N_BASE_URL}/health`, {
      headers: N8N_API_KEY ? { "X-N8N-API-KEY": N8N_API_KEY } : {},
    });
    return res.ok;
  } catch {
    return false;
  }
}

export interface OrchestrateOptions {
  workflowId: string;
  payload: Record<string, unknown>;
}

export async function triggerWorkflow(options: OrchestrateOptions) {
  if (!N8N_BASE_URL) {
    throw new Error("N8N_BASE_URL is not configured");
  }

  const url = `${N8N_BASE_URL}/webhook/${options.workflowId}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(N8N_API_KEY ? { "X-N8N-API-KEY": N8N_API_KEY } : {}),
    },
    body: JSON.stringify(options.payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`n8n workflow failed: ${res.status} ${text}`);
  }

  return res.json() as Promise<unknown>;
}
