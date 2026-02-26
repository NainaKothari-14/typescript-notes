import { readData } from "../shared/fsHelper";
import { generateToken } from "../shared/authHelper";
import { User } from "../entities/user";

export function login(email: string, password: string) {
  const users = readData<User>("users.json");

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) throw new Error("Invalid credentials");

  return generateToken(user.id);
}