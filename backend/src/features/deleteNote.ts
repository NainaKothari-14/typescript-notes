// src/features/deleteNote.ts
import { Note } from "../entities/note";
import { readData, writeData } from "../shared/fsHelper";

export const deleteNote = (id: string, userId: string): void => {
  let notes = readData<Note>("notes.json");
  notes = notes.filter((n) => n.id !== id && n.userId === userId);
  writeData("notes.json", notes);
};