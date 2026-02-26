// src/features/listNotes.ts
import { Note } from "../entities/note";
import { readData } from "../shared/fsHelper";

export function listNotes(userId: string) {

  const notes = readData<Note>("notes.json");

  return notes.filter(note => note.userId === userId);
}