
import express from "express";
import cors from "cors";
import notesRouter from "./routes/note";
import authRouter from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);
app.use("/auth", authRouter);


app.listen(3001, () => console.log("Backend running on http://localhost:3001!!"));