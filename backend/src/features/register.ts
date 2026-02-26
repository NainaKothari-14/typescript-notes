import { v4 as uuid } from "uuid";
import { readData, writeData } from "../shared/fsHelper";
import { User } from "../entities/user";

export function register(email: string, password: string) {

  const users = readData<User>("users.json");

  const existingUser = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );

  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser: User = {
    id: uuid(),
    email,
    password,
  };

  users.push(newUser);

  writeData("users.json", users);

  return newUser;
}