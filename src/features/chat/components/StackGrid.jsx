import {
  siJavascript,
  siTypescript,
  siPhp,
  siReact,
  siLaravel,
  siNestjs,
  siAngular,
  siFlutter,
  siPostgresql,
  siMysql,
  siFigma,
  siJira,
  siMoodle,
} from "simple-icons/icons";

const iconsMap = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  PHP: siPhp,
  React: siReact,
  Laravel: siLaravel,
  NestJS: siNestjs,
  Angular: siAngular,
  Flutter: siFlutter,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Figma: siFigma,
  Jira: siJira,
  Moodle: siMoodle,
};

const defaultLogo = "/images/stack/default-tech.svg";

const StackGrid = ({ technologies }) => {
  const containerClasses =
    "bg-white dark:bg-gray-900 rounded-lg p-3 flex flex-col items-center shadow-sm " +
    "dark:shadow-[0_0_6px_1px_rgba(139,92,246,0.2)] dark:border dark:border-purple-900/20";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {technologies.map(({ name, image }) => {
        const icon = iconsMap[name];

        if (icon) {
          const svgMarkup = `
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="#${icon.hex}"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              aria-label="${name}"
              title="${name}"
            >
              ${icon.svg}
            </svg>
          `;

          return (
            <div key={name} className={containerClasses}>
              <div
                className="mb-2"
                role="img"
                aria-label={name}
                title={name}
                dangerouslySetInnerHTML={{ __html: svgMarkup }}
              />
              <span className="text-gray-900 dark:text-gray-100 text-sm">{name}</span>
            </div>
          );
        }

        if (image) {
          return (
            <div key={name} className={containerClasses}>
              <img
                src={image}
                alt={name}
                className="mb-2 w-12 h-12 object-contain"
              />
              <span className="text-gray-900 dark:text-gray-100 text-sm">{name}</span>
            </div>
          );
        }

        return (
          <div key={name} className={containerClasses}>
            <img
              src={defaultLogo}
              alt="Logo por defecto"
              className="mb-2 w-12 h-12 object-contain opacity-70"
            />
            <span className="text-gray-900 dark:text-gray-100 text-sm">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StackGrid;
