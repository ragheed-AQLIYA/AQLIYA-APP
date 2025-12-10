/**
 * Type definitions for AQLIYA-APP
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  createdAt?: string;
}

export interface EngineStatus {
  status: string;
  connected: boolean;
  version: string;
  lastSync: string;
}

export interface OrchestrationStatus {
  status: string;
  connected: boolean;
  version: string;
  lastSync: string;
  activeWorkflows?: number;
}

export interface Decision {
  id: string;
  title: string;
  description: string;
  status: "pending" | "processing" | "completed" | "failed";
  createdAt: string;
  updatedAt: string;
}

export interface ReportData {
  [key: string]: unknown;
}

export interface Report {
  id: string;
  title: string;
  type: string;
  generatedAt: string;
  data: ReportData;
}

export interface WorkflowConfig {
  [key: string]: unknown;
}

export interface Workflow {
  id: string;
  name: string;
  status: "active" | "paused" | "completed" | "failed";
  createdAt: string;
  config: WorkflowConfig;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
