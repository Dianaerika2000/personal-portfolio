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
  siTailwindcss,
  siHtml5,
  siCss,
  siLivewire,
  siDart,
  siBootstrap,
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
  TailwindCSS: siTailwindcss,
  HTML: siHtml5,
  CSS: siCss,
  Livewire: siLivewire,
  Dart: siDart,
  MySql: siMysql,
  Bootstrap: siBootstrap,
  Moodle: siMoodle,
};

const primaryButtonClasses =
  "flex-1 text-center px-4 py-2 bg-purple-600 text-white rounded-lg " +
  "hover:bg-purple-700 transition-colors text-sm sm:text-base";

const secondaryButtonClasses =
  "flex-1 text-center px-4 py-2 border border-purple-700 text-purple-700 rounded-lg " +
  "hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 " +
  "dark:hover:bg-purple-700 dark:hover:text-white transition-colors text-sm sm:text-base";

const disabledButtonClasses =
  "flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 " +
  "text-gray-400 dark:text-gray-500 rounded-lg cursor-not-allowed text-sm sm:text-base";

const ProjectDetailsCard = ({ details }) => {
  if (!details) return null;

  const badgeClasses =
    "flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg border border-gray-300 dark:border-gray-600 " +
    "transition transform hover:scale-105 " +
    "hover:shadow-[0_0_10px_rgba(126,34,206,0.6)] dark:hover:shadow-[0_0_10px_rgba(167,139,250,0.6)]";

  return (
    <div className="p-6 space-y-4 divide-y divide-gray-200 dark:divide-gray-700">
      {/* Título y descripción */}
      <div className="space-y-2 pb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {details.title}
        </h2>
        {details.longDescription && (
          <p className="text-gray-700 dark:text-gray-300">
            {details.longDescription}
          </p>
        )}
      </div>

      {/* Features */}
      {Array.isArray(details.features) && details.features.length > 0 && (
        <div className="pb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
            Características:
          </h3>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mt-1">
            {details.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Rol y Año */}
      {(details.role || details.year) && (
        <div className="text-sm text-gray-600 dark:text-gray-400 pb-4">
          {details.role && (
            <p>
              <strong>Rol:</strong> {details.role}
            </p>
          )}
          {details.year && (
            <p>
              <strong>Año:</strong> {details.year}
            </p>
          )}
        </div>
      )}

      {/* Tecnologías */}
      <div className="pb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 pb-2">
          Tecnologías utilizadas:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {details.technologies.map((tech) => {
            const icon = iconsMap[tech.name || tech];
            const svgPath = tech.icon;

            return (
              <div key={tech.name || tech} className={badgeClasses}>
                {icon ? (
                  <div
                    className="w-8 h-8"
                    dangerouslySetInnerHTML={{
                      __html: `
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          fill="#${icon.hex}"
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          aria-label="${tech.name || tech}"
                          title="${tech.name || tech}"
                        >
                          ${icon.svg}
                        </svg>
                      `,
                    }}
                  />
                ) : svgPath ? (
                  <img
                    src={svgPath}
                    alt={tech.name || tech}
                    className="w-8 h-8"
                  />
                ) : (
                  <span className="text-red-500 text-xs">Logo no encontrado</span>
                )}
                <span className="text-gray-900 dark:text-gray-100 text-xs">
                  {tech.name || tech}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Botones */}
      {(details.links?.demo || details.links?.repo) && (
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {details.links?.demo && (
            <a
              href={details.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={primaryButtonClasses}
            >
              Ver Demo
            </a>
          )}

          {details.links?.repo && !details.links.repoPrivate && (
            <a
              href={details.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButtonClasses}
            >
              Repositorio
            </a>
          )}

          {details.links?.repo && details.links.repoPrivate && (
            <button disabled title="Repositorio privado" className={disabledButtonClasses}>
              Repositorio (Privado)
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsCard;
