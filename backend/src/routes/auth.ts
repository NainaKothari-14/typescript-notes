import { Router } from "express";
import { register } from "../features/register";
import { login } from "../features/login";

const router = Router();

router.post("/register", (req, res) => {
  try {
    const { email, password } = req.body;
    const user = register(email, password);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const token = login(email, password);
  res.json({ token });
});

export default router;