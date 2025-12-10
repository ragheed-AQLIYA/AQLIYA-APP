/**
 * API utility functions for communicating with backend services
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

export class APIClient {
  /**
   * Check AQLIYA-ENGINE status
   */
  static async checkEngineStatus() {
    try {
      const response = await fetch(`${API_BASE_URL}/engine/status`);
      return await response.json();
    } catch (error) {
      console.error("Error checking engine status:", error);
      throw error;
    }
  }

  /**
   * Send data to AQLIYA-ENGINE for analysis
   */
  static async analyzeData(data: any, analysisType: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/engine/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, analysisType }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error analyzing data:", error);
      throw error;
    }
  }

  /**
   * Check AQLIYA-ORCHESTRATION status
   */
  static async checkOrchestrationStatus() {
    try {
      const response = await fetch(`${API_BASE_URL}/orchestration/status`);
      return await response.json();
    } catch (error) {
      console.error("Error checking orchestration status:", error);
      throw error;
    }
  }

  /**
   * Create a workflow in AQLIYA-ORCHESTRATION
   */
  static async createWorkflow(name: string, config: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/orchestration/workflow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, config }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating workflow:", error);
      throw error;
    }
  }

  /**
   * User login
   */
  static async login(email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  /**
   * User registration
   */
  static async register(name: string, email: string, password: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  }
}
