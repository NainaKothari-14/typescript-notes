// src/features/toggleImportant.ts
import { Note } from "../entities/note";
import { readData, writeData } from "../shared/fsHelper";

export const toggleImportant = (id: string, userId: string): Note | null => {
  const notes = readData<Note>("notes.json");//to read all notes from the file
  const note = notes.find((n) => n.id === id && n.userId === userId);//to find the note with the given id and userId
  if (!note) return null;//if id not found or userId doesn't match
  note.important = !note.important;//true->false, false->true
  writeData("notes.json", notes);//to write the updated notes back to the file
  return note;//to return the updated note
};