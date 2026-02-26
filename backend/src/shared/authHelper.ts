import jwt from "jsonwebtoken";

const SECRET = "supersecret";

export function generateToken(userId: string) {
  return jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as { userId: string };
}