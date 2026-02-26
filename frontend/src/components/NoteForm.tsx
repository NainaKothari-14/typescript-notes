import { useState, useRef, useEffect } from "react";

interface NoteFormProps {
  onAdd: (text: string) => Promise<void> | void;
}

export const NoteForm = ({ onAdd }: NoteFormProps) => {

  const [text, setText] = useState("");

  // input reference
  const inputRef = useRef<HTMLInputElement>(null);

  // auto focus when component loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) return;

    await onAdd(text); // wait for async add

    setText("");

    // 🔥 ensure focus after re-render
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-3 items-center bg-white shadow-md rounded-xl p-4 border border-gray-100"
    >
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a new note here..."
        className="
          flex-1
          border border-gray-200
          rounded-lg
          px-4 py-2
          outline-none
          transition
          focus:ring-2
          focus:ring-blue-400
          focus:border-blue-400
        "
      />

      <button
        type="submit"
        className="
          bg-blue-500
          text-white
          px-5 py-2
          rounded-lg
          font-medium
          transition
          hover:bg-blue-600
          active:scale-95
          shadow-sm
        "
      >
        Add Note
      </button>
    </form>
  );
};