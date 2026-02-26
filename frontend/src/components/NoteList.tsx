import { Note } from "../services/noteService";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void;
  onToggleImportant: (id: string) => void;
}

export const NoteList = ({
  notes,
  onDelete,
  onToggleImportant,
}: NoteListProps) => {
  if (notes.length === 0)
    return (
      <div className="text-center text-gray-500 mt-6">
        Notes add kardo!!
      </div>
    );

  return (
    <ul className="space-y-3">
      {notes.map((note) => (
        <li
          key={note.id}
          className={`
            flex justify-between items-center
            p-4 rounded-xl shadow-sm border
            transition-all duration-200
            hover:shadow-md hover:scale-[1.01]
            ${
              note.important
                ? "bg-yellow-50 border-yellow-300"
                : "bg-white border-gray-200"
            }
          `}
        >
          <span
            className={`flex-1 ${
              note.important ? "font-semibold text-yellow-700" : "text-gray-700"
            }`}
          >
            {note.text}
          </span>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onToggleImportant(note.id)}
              className={`
                px-3 py-1 rounded-lg text-sm font-medium transition
                ${
                  note.important
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }
              `}
            >
              {note.important ? "★ Unmark" : "☆ Important"}
            </button>

            <button
              onClick={() => onDelete(note.id)}
              className="
                px-3 py-1 rounded-lg text-sm font-medium
                bg-red-500 hover:bg-red-600
                text-white transition
              "
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};