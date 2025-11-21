type ContactInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}

export default function ContactInput({ label, id, placeholder, type = "text", textarea = false, rows }: ContactInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-gray-300 mb-2 font-medium">{label}</label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition resize-none"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="w-full bg-gray-900 border border-gray-700 text-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
        />
      )}
    </div>
  );
}
