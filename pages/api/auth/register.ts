import type { NextApiRequest, NextApiResponse } from "next";

type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
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
 * API endpoint for user registration
 * TODO: Implement actual registration logic with secure password hashing
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>
) {
  if (req.method !== "POST") {
    res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
    return;
  }

  const { name, email, password } = req.body as RegisterRequest;

  if (!name || !email || !password) {
    res.status(400).json({
      success: false,
      error: "Missing required fields: name, email, password",
    });
    return;
  }

  // Placeholder registration logic
  // TODO: Implement real registration with database and secure password hashing
  res.status(201).json({
    success: true,
    token: "mock-jwt-token-" + Date.now(),
    user: {
      id: "user-" + Date.now(),
      email: email,
      name: name,
    },
  });
}
