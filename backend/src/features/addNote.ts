// src/features/addNote.ts
import { Note } from "../entities/note";
import { readData, writeData } from "../shared/fsHelper";
import { v4 as uuid } from "uuid";

export const addNote = (text: string, userId: string): Note => {
  const notes = readData<Note>("notes.json");
  const newNote: Note = { id: uuid(), text, important: false, userId };
  notes.push(newNote);
  writeData("notes.json", notes);
  return newNote;
};