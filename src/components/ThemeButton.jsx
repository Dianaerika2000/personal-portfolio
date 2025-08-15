import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../hooks/useTheme";

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Cambiar tema"
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      type="button"
    >
      {darkMode ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
}
