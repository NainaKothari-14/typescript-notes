export interface Note {
  id: string;
  text: string;
  important: boolean;
}

const BASE_URL = "http://localhost:3001/notes";

function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}

export const fetchNotes = async (): Promise<Note[]> => {
  const res = await fetch(BASE_URL, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
};

export const addNote = async (text: string): Promise<Note> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Failed to add note");
  }

  return res.json();
};

export const deleteNote = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error("Failed to delete");
  }
};

export const toggleImportant = async (id: string): Promise<Note> => {
  const res = await fetch(`${BASE_URL}/${id}/toggle`, {
    method: "PATCH",
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error("Failed to update");
  }

  return res.json();
};