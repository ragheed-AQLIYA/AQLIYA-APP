import type { NextApiRequest, NextApiResponse } from "next";

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
  error?: string;
};

/**
 * API endpoint for user authentication
 * TODO: Implement actual authentication logic with secure password hashing
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
    return;
  }

  const { email, password } = req.body as LoginRequest;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Missing required fields: email, password",
    });
    return;
  }

  // Placeholder authentication logic
  // TODO: Implement real authentication with database and secure password verification
  res.status(200).json({
    success: true,
    token: "mock-jwt-token-" + Date.now(),
    user: {
      id: "user-1",
      email: email,
      name: "مستخدم تجريبي",
    },
  });
}
