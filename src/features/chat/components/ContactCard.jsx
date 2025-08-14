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

const CopyButton = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    alert("Copiado al portapapeles");
  };

  return (
    <button
      onClick={handleCopy}
      className={`${buttonClassNames} ml-4`}
      aria-label="Copiar al portapapeles"
    >
      Copiar
    </button>
  );
};

const OpenLinkButton = ({ url, label }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClassNames} ml-4`}
      aria-label={`Abrir ${label}`}
    >
      Abrir
    </a>
  );
};

const ContactCard = ({ channels }) => {
  return (
    <div className="space-y-3">
      {channels.map(({ type, label, subtitle, url, action }) => {
        const icon = iconsMap[type] || null;
        const key = label || type;

        return (
          <div
            key={key}
            className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white dark:bg-gray-900 rounded-lg shadow p-3 dark:shadow-[0_0_6px_1px_rgba(139,92,246,0.2)] dark:border dark:border-purple-900/20 w-full"
          >
            <div className="flex items-center mb-2 sm:mb-0">
              {icon}
              <div>
                <span className="text-gray-900 dark:text-gray-100 font-semibold block">
                  {label}
                </span>
                {subtitle && (
                  <span className="text-gray-600 dark:text-gray-400 text-sm block truncate">
                    {subtitle}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center self-end sm:self-auto mt-2 sm:mt-0">
              {action === "copy" && <CopyButton textToCopy={subtitle || url} />}
              {action === "open" && <OpenLinkButton url={url} label={label} />}
            </div>
          </div>

        );
      })}
    </div>
  );
};

export default ContactCard;
