import { Router } from "express";
import { listNotes } from "../features/listNotes";
import { addNote } from "../features/addNote";
import { deleteNote } from "../features/deleteNote";
import { toggleImportant } from "../features/toggleImportant";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authMiddleware, (req: any, res) => {
  const notes = listNotes(req.user.userId);
  res.json(notes);
});

router.post("/", authMiddleware, (req: any, res) => {
  const note = addNote(req.body.text, req.user.userId);
  res.json(note);
});

router.delete("/:id", authMiddleware, (req: any, res) => {
  const { id } = req.params;

  deleteNote(id, req.user.userId); 

  res.json({ message: "Deleted if existed" });
});

router.patch("/:id/toggle", authMiddleware, (req: any, res) => {
  const { id } = req.params;

  const updatedNote = toggleImportant(id, req.user.userId); 

  if (!updatedNote)
    return res.status(404).json({ message: "Note not found" });

  res.json(updatedNote);
});

export default router;