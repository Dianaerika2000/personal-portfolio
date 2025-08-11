import {
  EnvelopeIcon,
  LinkIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const iconsMap = {
  LinkedIn: <LinkIcon className="w-6 h-6 mr-2 dark:text-gray-300" />,
  Email: <EnvelopeIcon className="w-6 h-6 mr-2 dark:text-gray-300" />,
  GitHub: (
    <CommandLineIcon className="w-6 h-6 mr-2 text-gray-800 dark:text-gray-300" />
  ),
};

const buttonClassNames =
  "px-3 py-1 rounded-lg border border-purple-700 text-purple-700 hover:bg-purple-100 dark:hover:bg-purple-700 dark:hover:text-white dark:border-purple-400 dark:text-purple-400 transition-colors duration-200";

const CopyEmailButton = ({ email }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email copiado al portapapeles");
  };

  return (
    <button onClick={handleCopy} className={buttonClassNames} aria-label="Copiar email">
      Copiar
    </button>
  );
};

const LinkButton = ({ url, type }) => {
  const label = type === "LinkedIn" ? "Abrir" : "Ver repositorios";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClassNames}
      aria-label={`${label} ${type}`}
    >
      {label}
    </a>
  );
};

const ContactCard = ({ channels }) => {
  return (
    <div className="space-y-3">
      {channels.map(({ type, label, url }) => {
        const icon = iconsMap[type] || null;
        const key = label || type;

        return (
          <div
            key={key}
            className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg shadow p-3 dark:shadow-[0_0_6px_1px_rgba(139,92,246,0.2)] dark:border dark:border-purple-900/20"
          >
            <div className="flex items-center">
              {icon}
              <span className="text-gray-900 dark:text-gray-100">{label}</span>
            </div>

            <div className="flex items-center ml-6">
              {type === "Email" && <CopyEmailButton email={label} />}

              {(type === "LinkedIn" || type === "GitHub") && (
                <LinkButton url={url} type={type} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
