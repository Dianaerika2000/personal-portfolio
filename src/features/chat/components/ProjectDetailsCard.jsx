const ProjectDetailsCard = ({ details }) => {
  console.log("details", details);
  if (!details) return null;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 space-y-3">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
        {details.title}
      </h2>

      {details.longDescription && (
        <p className="text-gray-700 dark:text-gray-300">
          {details.longDescription}
        </p>
      )}

      {Array.isArray(details.features) && details.features.length > 0 && (
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
          {details.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      <div className="text-sm text-gray-600 dark:text-gray-400">
        {details.role && <p><strong>Rol:</strong> {details.role}</p>}
        {details.year && <p><strong>Año:</strong> {details.year}</p>}
      </div>

      {Array.isArray(details.technologies) && details.technologies.length > 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p><strong>Tecnologías:</strong> {details.technologies.join(", ")}</p>
        </div>
      )}

      {(details.links?.demo || details.links?.repo) && (
        <div className="flex gap-3">
          {details.links?.demo && (
            <a
              href={details.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-primary text-white rounded"
            >
              Ver demo
            </a>
          )}
          {details.links?.repo && (
            <a
              href={details.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
            >
              Repositorio
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsCard;
