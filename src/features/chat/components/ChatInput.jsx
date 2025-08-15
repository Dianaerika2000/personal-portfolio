import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onSend(trimmedInput);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 flex items-center gap-2 border-t border-gray-200 dark:border-gray-700">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un mensaje..."
        aria-label="Escribir mensaje"
        className="
          flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600
          bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-0.5 focus:ring-purple-400 focus:border-purple-400
        "
      />
      <button
        onClick={handleSend}
        type="button"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Enviar mensaje"
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatInput;
