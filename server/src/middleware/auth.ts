import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

// Define interface for JWT Payload
interface JwtPayload {
    id: number;
    username: string;
}

// Extend Express Request to include "user"
interface AuthRequest extends Request {
  user?: { id: number; username: string };
}

// Middleware to Authenticate Token
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
      return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload & { id: number; username: string };
      req.user = decoded; // ✅ Now TypeScript recognizes `req.user`
      return next(); // ✅ Explicitly return next()
  } catch (err) {
      return res.status(403).json({ message: "Invalid token" });
  }
};


