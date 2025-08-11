const Suggestions = ({ suggestions, onSelect }) => {
  if (!suggestions?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          aria-label={`Seleccionar sugerencia ${suggestion}`}
          className="px-3 py-1 text-sm rounded-full border border-purple-400 text-purple-600 
                     hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
