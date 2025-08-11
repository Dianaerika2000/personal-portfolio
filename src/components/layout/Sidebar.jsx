import { useState } from "react";
import {
  HomeIcon,
  FolderIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  DocumentArrowDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ThemeButton from "../ThemeButton";

const navItems = [
  { id: "about", label: "Quién soy", icon: HomeIcon },
  { id: "projects", label: "Proyectos", icon: FolderIcon },
  { id: "stack", label: "Stack tecnológico", icon: CodeBracketIcon },
  { id: "contact", label: "Contacto", icon: EnvelopeIcon },
  { id: "cv", label: "CV", icon: DocumentArrowDownIcon },
];

// Componente para cada botón de navegación
const NavButton = ({ item, onClick }) => (
  <button
    onClick={() => onClick(item.id)}
    className="w-full flex items-center gap-2 px-2 py-2 text-gray-700 dark:text-gray-300 rounded-lg
               hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-600 transition-colors"
  >
    <item.icon className="h-6 w-6" />
    <span className="font-medium">{item.label}</span>
  </button>
);

// Botón hamburguesa móvil, fijo arriba a la izquierda
const HamburgerButton = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Toggle menu"
    className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white dark:bg-gray-900 rounded-md shadow-md"
  >
    {isOpen ? (
      <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
    ) : (
      <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
    )}
  </button>
);

const Sidebar = ({ onAction = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    onAction(id);
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      {/* Sidebar desktop */}
      <aside className="hidden md:flex w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between">
        <nav className="space-y-2 flex-1 mt-4">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} onClick={onAction} />
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeButton />
        </div>
      </aside>

      {/* Sidebar móvil */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between z-40
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="space-y-2 flex-1 mt-14">
          {navItems.map((item) => (
            <NavButton key={item.id} item={item} onClick={handleNavClick} />
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeButton />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
