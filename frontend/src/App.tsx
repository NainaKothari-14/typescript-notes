import { useEffect, useState } from "react";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";
import { AuthForm } from "./components/AuthForm";
import {
  fetchNotes,
  addNote,
  deleteNote,
  toggleImportant,
  Note,
} from "./services/noteService";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [notes, setNotes] = useState<Note[]>([]);

  // fetch notes only if logged in
  useEffect(() => {
    if (!token) return;
  
    fetchNotes()
      .then(setNotes)
      .catch(() => {
        localStorage.removeItem("token");
        setToken(null);
      });
  
  }, [token]);

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setNotes([]);
  };

  const handleAdd = async (text: string) => {
    const newNote = await addNote(text);
    setNotes((prev) => [...prev, newNote]);
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const handleToggleImportant = async (id: string) => {
    const updatedNote = await toggleImportant(id);
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? updatedNote : n))
    );
  };

  // If not logged in → show Auth
  if (!token) {
    return <AuthForm onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          Logout
        </button>
      </div>

      <NoteForm onAdd={handleAdd} />
      <NoteList
        notes={notes}
        onDelete={handleDelete}
        onToggleImportant={handleToggleImportant}
      />
    </div>
  );
}

export default App;