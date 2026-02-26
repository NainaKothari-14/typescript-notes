import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../shared/authHelper";

export function authMiddleware(req: any, res: Response, next: NextFunction) {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN

  try {
    const decoded = verifyToken(token);

    //attach user info
    req.user = decoded; // { userId: "..." }

    next();

  } catch (err: any) {
    return res.status(401).json({ message: "Invalid token" });
  }
}